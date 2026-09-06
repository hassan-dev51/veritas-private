// src/app/testing/[slug]/not-found.tsx

import Link from "next/link";
import { ArrowLeft, FlaskConical } from "lucide-react";

export default function TestingNotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-6">
      <div className="max-w-xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
          <FlaskConical className="h-7 w-7" />
        </div>

        <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-sky-600">
          Testing Service
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
          Testing service not found
        </h1>

        <p className="mt-5 text-base leading-7 text-slate-600">
          The testing service you&apos;re looking for may have been moved,
          removed, or is currently unavailable.
        </p>

        <Link
          href="/testing"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Testing Services
        </Link>
      </div>
    </main>
  );
}
