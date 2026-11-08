export type VerifiedReport = {
  reportNo: string;
  testName: string;
  testCode: string;
  clientName: string;
  regulation: string;
  testStartDate: string;
  testEndDate: string;
  finalReportDate: string;
};

export type VerifyReportResult =
  | {
      status: "verified";
      report: VerifiedReport;
    }
  | {
      status: "not_found";
    }
  | {
      status: "invalid";
      message: string;
    }
  | {
      status: "error";
      message: string;
    };
