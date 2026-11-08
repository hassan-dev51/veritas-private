import { NextResponse } from "next/server";

import { getActiveTests } from "@/lib/services/test.service";

export const runtime = "nodejs";

export async function GET() {
  try {
    const tests = await getActiveTests();

    return NextResponse.json(
      {
        success: true,
        data: tests,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Failed to fetch test catalog:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to retrieve the test catalog.",
      },
      {
        status: 500,
      },
    );
  }
}
