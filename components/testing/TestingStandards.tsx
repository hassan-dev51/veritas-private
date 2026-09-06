// src/components/testing/TestingStandards.tsx

import { ArrowUpRight, BookOpenCheck, CheckCircle2 } from "lucide-react";

interface Props {
  standards: string[];
}

export default function TestingStandards({ standards }: Props) {
  if (!standards?.length) return null;

  return (
    <section
      id="testing-standards"
      className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-32"
    >
      <div className="absolute inset-0 bg-linear-to-br from-sky-500/10 via-transparent to-cyan-500/5" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
              <BookOpenCheck className="h-6 w-6" />
            </div>

            <span className="mt-7 block text-sm font-semibold uppercase tracking-[0.18em] text-sky-400">
              03 / Standards
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Standards & Technical Requirements
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
              Testing requirements may vary depending on the material, product,
              intended use, applicable specification, and target market.
            </p>
          </div>

          <div>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {standards.map((standard, index) => (
                <div
                  key={`${standard}-${index}`}
                  className="group flex items-center gap-5 py-6"
                >
                  <span className="text-sm font-bold text-slate-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <CheckCircle2 className="h-5 w-5 shrink-0 text-sky-400" />

                  <span className="flex-1 text-base font-medium text-slate-200">
                    {standard}
                  </span>

                  <ArrowUpRight className="h-4 w-4 text-slate-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-400" />
                </div>
              ))}
            </div>

            <p className="mt-7 text-xs leading-6 text-slate-500">
              Specific standards and testing requirements should be confirmed
              before testing based on the product and applicable technical
              requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
