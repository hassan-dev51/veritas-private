import type { Metadata } from "next";

import { VerifyReportForm } from "./verify-report-form";

export const metadata: Metadata = {
  title: "Verify Test Report | VeritasLab",
  description:
    "Verify the authenticity of laboratory test reports issued by VeritasLab using your unique report identification number.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function VerifyReportPage() {
  return <VerifyReportForm />;
}
