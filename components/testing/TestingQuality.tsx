// src/components/testing/TestingQuality.tsx

import { FileCheck2, ShieldCheck } from "lucide-react";
import { PortableText } from "@portabletext/react";

import type { MaterialTesting } from "@/lib/sanity/types";

interface Props {
  content: NonNullable<MaterialTesting["qualityContent"]>;
}

export default function TestingQuality({ content }: Props) {
  if (!content?.length) return null;

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-slate-950">
          <div className="grid lg:grid-cols-[0.7fr_1.3fr]">
            <div className="relative overflow-hidden p-8 sm:p-12 lg:p-16">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                  <ShieldCheck className="h-6 w-6" />
                </div>

                <span className="mt-8 block text-sm font-semibold uppercase tracking-[0.18em] text-sky-400">
                  06 / Quality
                </span>

                <h2 className="mt-5 text-3xl font-bold tracking-tight text-white">
                  Technical Quality & Documentation
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-400">
                  Clear documentation helps manufacturers understand and use
                  testing results within their quality and technical
                  documentation processes.
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-16">
              <FileCheck2 className="h-6 w-6 text-sky-400" />

              <div className="prose prose-invert mt-7 max-w-2xl prose-p:leading-8 text-slate-300">
                <PortableText value={content} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
