// src/components/testing/TestingProcess.tsx

import {
  ClipboardList,
  FileCheck2,
  FlaskConical,
  SearchCheck,
} from "lucide-react";

import type { MaterialTestingProcess } from "@/lib/sanity/types";

interface Props {
  process: MaterialTestingProcess[];
}

const icons = [ClipboardList, SearchCheck, FlaskConical, FileCheck2];

export default function TestingProcess({ process }: Props) {
  if (!process?.length) return null;

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
            04 / Process
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            From Sample to Technical Report
          </h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-slate-200 lg:block" />

          <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {process.map((item, index) => {
              const Icon = icons[index % icons.length];

              return (
                <div key={`${item.title}-${index}`} className="relative">
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white text-sky-600 shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className="mt-6 block text-xs font-bold uppercase tracking-widest text-slate-400">
                    Step {item.step || index + 1}
                  </span>

                  <h3 className="mt-2 text-lg font-semibold text-slate-950">
                    {item.title}
                  </h3>

                  {item.description && (
                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {item.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
