import { z } from "zod";

const dateOnlySchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Please enter a valid date")
  .refine((value) => {
    const date = new Date(`${value}T00:00:00.000Z`);

    return (
      !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value
    );
  }, "Please enter a valid calendar date");

export const testReportSchema = z
  .object({
    testId: z.string().trim().min(1, "Please select a test"),

    clientName: z
      .string()
      .trim()
      .min(2, "Client name must contain at least 2 characters")
      .max(200, "Client name cannot exceed 200 characters"),

    address: z.string().trim().min(1, "Address is required"),

    serviceDescription: z
      .string()
      .trim()
      .min(1, "Service description is required"),

    regulation: z
      .string()
      .trim()
      .min(1, "Regulation is required")
      .max(200, "Regulation cannot exceed 200 characters"),

    studyScope: z.string().trim().min(1, "Study scope is required"),

    testStartDate: dateOnlySchema,

    testEndDate: dateOnlySchema,

    finalReportDate: dateOnlySchema,
  })
  .superRefine((data, ctx) => {
    if (
      data.testStartDate <= data.testEndDate &&
      data.finalReportDate < data.testEndDate
    ) {
      return;
    }

    if (data.testStartDate > data.testEndDate) {
      ctx.addIssue({
        code: "custom",
        path: ["testEndDate"],
        message: "End date cannot be before start date",
      });
    }

    if (data.finalReportDate < data.testEndDate) {
      ctx.addIssue({
        code: "custom",
        path: ["finalReportDate"],
        message: "Final report date cannot be before test end date",
      });
    }
  });

export type TestReportFormValues = z.infer<typeof testReportSchema>;
