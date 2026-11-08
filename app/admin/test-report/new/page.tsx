import { getActiveTests } from "@/lib/services/test.service";
import { TestReportForm } from "./test-report-form";

export const metadata = {
  title: "Create Test Report | VeritasLab",
  description: "Create a new laboratory test report.",
};

export default async function NewTestReportPage() {
  const tests = await getActiveTests();

  return (
    <div className="mx-auto w-full max-w-5xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          Create Test Report
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter the client and testing information to create a new report.
        </p>
      </div>

      <TestReportForm tests={tests} />
    </div>
  );
}
