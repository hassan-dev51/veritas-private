"use client";

import { useState, useTransition, type FormEvent } from "react";

import {
  AlertCircle,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  FileCheck2,
  FileSearch,
  FlaskConical,
  Loader2,
  Search,
  ShieldCheck,
  ShieldX,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { verifyTestReport } from "./actions";

import type { VerifyReportResult } from "@/lib/types/report-verification";

function formatDate(value: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00.000Z`));
}

function getInputMessage(result: VerifyReportResult): string {
  switch (result.status) {
    case "invalid":
    case "error":
      return result.message;
    default:
      return "";
  }
}

export function VerifyReportForm() {
  const [reportNumber, setReportNumber] = useState("");
  const [result, setResult] = useState<VerifyReportResult | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!reportNumber.trim() || isPending) return;

    setResult(null);

    startTransition(async () => {
      try {
        const response = await verifyTestReport(reportNumber);
        setResult(response);
      } catch {
        setResult({
          status: "error",
          message: "Unable to verify the report. Please try again.",
        });
      }
    });
  }

  function handleNewSearch() {
    setReportNumber("");
    setResult(null);
  }

  const isVerified = result?.status === "verified";
  const isNotFound = result?.status === "not_found";
  const hasError = result?.status === "invalid" || result?.status === "error";

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-slate-50">
      {/* Hero and Search */}
      <section className="relative isolate overflow-hidden bg-[#101B2C] px-4 py-16 text-white sm:px-6 sm:py-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, #38bdf8 0, transparent 30%), radial-gradient(circle at 85% 80%, #2563eb 0, transparent 30%)",
          }}
        />

        <div className="mx-auto max-w-3xl">
          {/* Heading */}
          <div className="mb-10 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-medium text-emerald-300">
              <ShieldCheck className="size-4" />
              Official Report Verification Portal
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Verify Your Test Report
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Verify the authenticity of a laboratory test report using its
              unique identification number. Access verified report information
              instantly.
            </p>
          </div>

          {/* Search Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-white p-3 shadow-2xl shadow-black/20 sm:p-5"
          >
            <label
              htmlFor="reportNumber"
              className="mb-3 block text-sm font-semibold text-slate-800"
            >
              Report Identification Number
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative min-w-0 flex-1">
                <FileSearch className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />

                <Input
                  id="reportNumber"
                  name="reportNumber"
                  value={reportNumber}
                  onChange={(event) => {
                    setReportNumber(event.target.value);
                    setResult(null);
                  }}
                  placeholder="e.g. RT-2026-1107-F381AA"
                  autoComplete="off"
                  spellCheck={false}
                  maxLength={40}
                  required
                  disabled={isPending}
                  className="h-12 border-slate-200 bg-slate-50 pl-12 text-sm font-medium uppercase text-slate-900 placeholder:normal-case placeholder:text-slate-400 focus-visible:ring-blue-500"
                />
              </div>

              <Button
                type="submit"
                disabled={!reportNumber.trim() || isPending}
                className="h-12 gap-2 bg-blue-600 px-7 font-semibold hover:bg-blue-700"
              >
                {isPending ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  <>
                    <Search className="size-4" />
                    Verify Report
                  </>
                )}
              </Button>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              Enter the complete report number as printed on your laboratory
              report.
            </p>
          </form>

          {/* Search status */}
          {hasError && (
            <div
              role="alert"
              className="mt-5 flex items-start gap-3 rounded-xl border border-red-400/30 bg-red-500/10 p-4 text-sm text-red-200"
            >
              <AlertCircle className="mt-0.5 size-5 shrink-0" />
              <span>{getInputMessage(result)}</span>
            </div>
          )}
        </div>
      </section>

      {/* Verification Results */}
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        {isVerified && (
          <div
            role="status"
            aria-live="polite"
            className="overflow-hidden rounded-2xl border border-emerald-200 bg-white shadow-sm"
          >
            <div className="flex flex-col gap-4 border-b border-emerald-100 bg-emerald-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                  <CheckCircle2 className="size-7 text-emerald-600" />
                </div>

                <div>
                  <p className="text-lg font-bold text-emerald-800">
                    Report Successfully Verified
                  </p>
                  <p className="mt-1 text-sm text-emerald-700">
                    This report number matches a record in our database.
                  </p>
                </div>
              </div>

              <span className="w-fit rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700">
                Authentic Record
              </span>
            </div>

            <div className="space-y-6 p-5 sm:p-7">
              <div className="flex flex-col gap-2 border-b pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Report Number
                  </p>
                  <p className="mt-2 break-all font-mono text-lg font-bold text-slate-900">
                    {result.report.reportNo}
                  </p>
                </div>

                <FileCheck2 className="hidden size-9 text-emerald-500 sm:block" />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <DetailItem
                  icon={<FlaskConical />}
                  label="Test Name"
                  value={result.report.testName}
                />

                <DetailItem
                  icon={<FileCheck2 />}
                  label="Test Code"
                  value={result.report.testCode}
                />

                <DetailItem
                  icon={<ShieldCheck />}
                  label="Client Name"
                  value={result.report.clientName}
                />

                <StandardList value={result.report.regulation} />
              </div>

              <div className="border-t pt-6">
                <div className="mb-4 flex items-center gap-2">
                  <CalendarDays className="size-5 text-blue-600" />
                  <h3 className="font-semibold text-slate-900">
                    Report Timeline
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <DateItem
                    label="Test Start Date"
                    date={result.report.testStartDate}
                  />

                  <DateItem
                    label="Test End Date"
                    date={result.report.testEndDate}
                  />

                  <DateItem
                    label="Final Report Date"
                    date={result.report.finalReportDate}
                  />
                </div>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-emerald-600" />
                  <p className="text-xs leading-6 text-slate-600">
                    Verification confirms that a record with this report number
                    exists in the VeritasLab database. It does not independently
                    establish the validity of the underlying test results or the
                    report&lsquo;s current regulatory status.
                  </p>
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                onClick={handleNewSearch}
                className="w-full gap-2"
              >
                Verify Another Report
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        )}

        {isNotFound && (
          <div
            role="status"
            aria-live="polite"
            className="rounded-2xl border border-amber-200 bg-white p-7 text-center shadow-sm sm:p-10"
          >
            <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-full bg-amber-50">
              <ShieldX className="size-9 text-amber-600" />
            </div>

            <h2 className="text-xl font-bold text-slate-900">
              Report Not Found
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">
              We could not find a report matching the identification number you
              entered. Please check the number printed on your report and try
              again.
            </p>

            <Button
              onClick={handleNewSearch}
              variant="outline"
              className="mt-6 gap-2"
            >
              <Search className="size-4" />
              Try Another Report
            </Button>
          </div>
        )}

        {!result && (
          <div className="mx-auto max-w-2xl py-6 text-center">
            <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-2xl bg-blue-50">
              <FileSearch className="size-7 text-blue-600" />
            </div>

            <h2 className="text-lg font-semibold text-slate-900">
              How Report Verification Works
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Enter your report identification number above. Our system will
              check it against the official report records and display the
              matching information.
            </p>
          </div>
        )}
        {hasError && result && (
          <div
            role="alert"
            className="mt-5 flex items-start gap-3 rounded-xl border border-red-400/30 bg-red-500/10 p-4 text-sm text-red-200"
          >
            <AlertCircle className="mt-0.5 size-5 shrink-0" />
            <span>{getInputMessage(result)}</span>
          </div>
        )}
      </section>
    </main>
  );
}

type DetailItemProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

function DetailItem({ icon, label, value }: DetailItemProps) {
  return (
    <div className="flex min-w-0 gap-3">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 [&_svg]:size-5">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
          {label}
        </p>
        <p className="mt-1 wrap-break-word text-sm font-semibold text-slate-900">
          {value}
        </p>
      </div>
    </div>
  );
}

type StandardListProps = {
  value: string;
};

function StandardList({ value }: StandardListProps) {
  const standards = value
    .split(",")
    .map((standard) => standard.trim())
    .filter(Boolean);

  return (
    <div className="flex min-w-0 gap-3 sm:col-span-2">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
        <FileCheck2 className="size-5" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-500">
          Regulation / Standards
        </p>

        <div className="flex flex-wrap gap-2">
          {standards.map((standard, index) => (
            <span
              key={`${standard}-${index}`}
              className="inline-flex items-center rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-semibold leading-5 text-blue-800"
            >
              {standard}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

type DateItemProps = {
  label: string;
  date: string;
};

function DateItem({ label, date }: DateItemProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-medium text-slate-500">{label}</p>
      <p className="mt-2 text-sm font-semibold text-slate-900">
        {formatDate(date)}
      </p>
    </div>
  );
}
