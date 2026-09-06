// src/components/testing/TestingIntroduction.tsx

import { PortableText } from "@portabletext/react";
import { CheckCircle2 } from "lucide-react";

import type { MaterialTesting } from "@/lib/sanity/types";

interface Props {
  data: MaterialTesting;
}

export default function TestingIntroduction({ data }: Props) {
  if (!data.introduction?.length) return null;

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
              01 / Overview
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Understanding Material Testing
            </h2>

            <div className="mt-8 border-l-2 border-sky-500 pl-5">
              <p className="text-sm leading-7 text-slate-500">
                Material verification plays an important role in evaluating
                materials used in medical devices and surgical instruments.
              </p>
            </div>
          </div>

          <div className="max-w-3xl">
            <div className="prose prose-slate max-w-none prose-headings:text-slate-950 prose-p:leading-8 prose-p:text-slate-600">
              <PortableText value={data.introduction} />
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                "Material composition",
                "Grade verification",
                "Technical requirements",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <CheckCircle2 className="h-5 w-5 text-sky-600" />

                  <p className="mt-3 text-sm font-semibold text-slate-800">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
