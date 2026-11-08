"use server";

import { revalidatePath } from "next/cache";

import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth/admin";
import { createTestSchema } from "@/lib/validations/test.schema";

export type TestCatalogState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: {
    name?: string[];
    code?: string[];
    description?: string[];
  };
};

const initialState: TestCatalogState = {
  status: "idle",
  message: "",
};

function getFormString(formData: FormData, key: string): string {
  const value = formData.get(key);

  return typeof value === "string" ? value : "";
}

function isUniqueConstraintError(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === "P2002"
  );
}

export async function createTestAction(
  _previousState: TestCatalogState,
  formData: FormData,
): Promise<TestCatalogState> {
  await requireAdmin();

  const parsed = createTestSchema.safeParse({
    name: getFormString(formData, "name"),
    code: getFormString(formData, "code"),
    description: getFormString(formData, "description"),
    isActive: formData.get("isActive") === "true",
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: "Please correct the errors below.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.test.create({
      data: parsed.data,
    });

    revalidatePath("/admin/test-catalog");

    return {
      ...initialState,
      status: "success",
      message: "Test added successfully.",
    };
  } catch (error) {
    if (isUniqueConstraintError(error)) {
      return {
        status: "error",
        message: "A test with this name or code already exists.",
      };
    }

    console.error("Create test error:", error);

    return {
      status: "error",
      message: "Unable to create test. Please try again.",
    };
  }
}
