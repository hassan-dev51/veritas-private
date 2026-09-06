// src/components/testing/TestingMarkets.tsx

import { ArrowUpRight, Globe2 } from "lucide-react";

import type { MaterialTestingMarket } from "@/lib/sanity/types";

interface Props {
  markets: MaterialTestingMarket[];
}

export default function TestingMarkets({ markets }: Props) {
  if (!markets?.length) return null;

  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <Globe2 className="h-8 w-8 text-sky-600" />

            <span className="mt-7 block text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
              05 / Markets
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Supporting International Requirements
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Testing requirements can differ between products, customers, and
              markets. Our technical documentation can support manufacturers
              preparing for international business requirements.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {markets.map((market, index) => (
              <div
                key={`${market.name}-${index}`}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs font-bold tracking-widest text-slate-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <ArrowUpRight className="h-4 w-4 text-slate-300 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-600" />
                </div>

                {market.name && (
                  <h3 className="mt-8 text-lg font-semibold text-slate-950">
                    {market.name}
                  </h3>
                )}

                {market.description && (
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {market.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
