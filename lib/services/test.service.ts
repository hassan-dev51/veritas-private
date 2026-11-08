import "server-only";

import { prisma } from "@/lib/prisma";

export type ActiveTestOption = {
  id: string;
  name: string;
  code: string;
  description: string | null;
};

export async function getActiveTests(): Promise<ActiveTestOption[]> {
  const tests = await prisma.test.findMany({
    where: {
      isActive: true,
    },
    select: {
      id: true,
      name: true,
      code: true,
      description: true,
    },
    orderBy: {
      name: "asc",
    },
  });

  return tests;
}
