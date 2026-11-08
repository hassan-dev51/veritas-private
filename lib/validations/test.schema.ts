import { z } from "zod";

export const createTestSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Test name is required")
    .max(150, "Test name cannot exceed 150 characters"),

  code: z
    .string()
    .trim()
    .min(1, "Test code is required")
    .max(12, "Test code cannot exceed 12 characters"),

  description: z
    .string()
    .trim()
    .transform((value) => value || null),

  isActive: z.boolean(),
});

export type CreateTestInput = z.output<typeof createTestSchema>;
