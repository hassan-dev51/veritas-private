// src/app/testing/[slug]/error.tsx

"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function TestingDetailError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Testing detail page error");
  }, []);

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-6">
      <div className="max-w-lg text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600">
          <AlertTriangle className="h-7 w-7" />
        </div>

        <h1 className="mt-6 text-3xl font-bold text-slate-950">
          Something went wrong
        </h1>

        <p className="mt-4 text-slate-600">
          We couldn&apos;t load this testing service right now. Please try
          again.
        </p>

        <button
          onClick={() => reset()}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          <RefreshCw className="h-4 w-4" />
          Try Again
        </button>
      </div>
    </main>
  );
}
