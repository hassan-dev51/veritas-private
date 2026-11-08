"use server";

import "server-only";

import { z } from "zod";

import { prisma } from "@/lib/prisma";
import type { VerifyReportResult } from "@/lib/types/report-verification";

const reportNumberSchema = z
  .string()
  .trim()
  .min(1, "Please enter your report number.")
  .max(40, "Report number is too long.")
  .regex(/^[A-Za-z0-9-]+$/, "Report number contains invalid characters.");

export async function verifyTestReport(
  reportNumber: string,
): Promise<VerifyReportResult> {
  const validation = reportNumberSchema.safeParse(reportNumber);

  if (!validation.success) {
    return {
      status: "invalid",
      message:
        validation.error.issues[0]?.message ??
        "Please enter a valid report number.",
    };
  }

  const normalizedReportNo = validation.data.toUpperCase();

  try {
    const report = await prisma.testReport.findUnique({
      where: {
        reportNo: normalizedReportNo,
      },
      select: {
        reportNo: true,
        testNameSnapshot: true,
        testCodeSnapshot: true,
        clientName: true,
        regulation: true,
        testStartDate: true,
        testEndDate: true,
        finalReportDate: true,
      },
    });

    if (!report) {
      return {
        status: "not_found",
      };
    }

    return {
      status: "verified",
      report: {
        reportNo: report.reportNo,
        testName: report.testNameSnapshot,
        testCode: report.testCodeSnapshot,
        clientName: report.clientName,
        regulation: report.regulation,
        testStartDate: report.testStartDate.toISOString().slice(0, 10),
        testEndDate: report.testEndDate.toISOString().slice(0, 10),
        finalReportDate: report.finalReportDate.toISOString().slice(0, 10),
      },
    };
  } catch (error) {
    console.error("Test Report Verification Error:", error);

    return {
      status: "error",
      message:
        "Verification is temporarily unavailable. Please try again later.",
    };
  }
}
