"use server";

import "server-only";

import { randomBytes } from "node:crypto";
import { revalidatePath } from "next/cache";

import { prisma } from "@/lib/prisma";
 
import {
  testReportSchema,
  type TestReportFormValues,
} from "@/lib/validations/test-report.schema";
import { getAdminUser } from "@/lib/auth/admin";

export type CreateTestReportResult =
  | {
      success: true;
      reportId: string;
      reportNo: string;
    }
  | {
      success: false;
      error: string;
    };

function generateReportNo(testCode: string, finalReportDate: string): string {
  const [year, month, day] = finalReportDate.split("-");

  const dateSegment = `${year}-${month}${day}`;
  const randomSuffix = randomBytes(3).toString("hex").toUpperCase();

  return `${testCode}-${dateSegment}-${randomSuffix}`;
}

function isUniqueConstraintError(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === "P2002"
  );
}

export async function createTestReport(
  values: TestReportFormValues,
): Promise<CreateTestReportResult> {
  const admin = await getAdminUser();

  if (!admin) {
    return {
      success: false,
      error: "You are not authorized to create test reports.",
    };
  }

  // Keep your existing validation and database implementation below.

  // Never trust client-side validation alone.
  const validation = testReportSchema.safeParse(values);

  if (!validation.success) {
    return {
      success: false,
      error: "Invalid form data. Please check your entries.",
    };
  }

  const data = validation.data;

  try {
    // Fetch the selected test from the database.
    const test = await prisma.test.findFirst({
      where: {
        id: data.testId,
        isActive: true,
      },
      select: {
        id: true,
        name: true,
        code: true,
      },
    });

    if (!test) {
      return {
        success: false,
        error: "Selected test was not found or is inactive.",
      };
    }

    // Convert date-only strings into UTC dates.
    const testStartDate = new Date(`${data.testStartDate}T00:00:00.000Z`);

    const testEndDate = new Date(`${data.testEndDate}T00:00:00.000Z`);

    const finalReportDate = new Date(`${data.finalReportDate}T00:00:00.000Z`);

    // Retry only in case of a unique constraint collision.
    const MAX_ATTEMPTS = 5;

    for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
      const reportNo = generateReportNo(test.code, data.finalReportDate);

      try {
        const report = await prisma.testReport.create({
          data: {
            reportNo,

            testId: test.id,

            // Historical snapshots from Neon.
            testNameSnapshot: test.name,
            testCodeSnapshot: test.code,

            clientName: data.clientName,
            address: data.address,

            serviceDescription: data.serviceDescription,
            regulation: data.regulation,
            studyScope: data.studyScope,

            testStartDate,
            testEndDate,
            finalReportDate,
          },
          select: {
            id: true,
            reportNo: true,
          },
        });

        revalidatePath("/admin/test-report");
        revalidatePath("/admin");

        return {
          success: true,
          reportId: report.id,
          reportNo: report.reportNo,
        };
      } catch (error) {
        if (isUniqueConstraintError(error)) {
          continue;
        }

        throw error;
      }
    }

    return {
      success: false,
      error: "Could not generate a unique report number. Please retry.",
    };
  } catch (error) {
    console.error("Create Test Report Error:", error);

    return {
      success: false,
      error: "Failed to create the test report. Please try again.",
    };
  }
}
