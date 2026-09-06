// src/components/testing/TestingCTA.tsx

import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

import type { MaterialTestingCTA } from "@/lib/sanity/types";

interface Props {
  cta: MaterialTestingCTA;
}

export default function TestingCTA({ cta }: Props) {
  if (!cta) return null;

  return (
    <section className="bg-white px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-8 py-14 sm:px-12 sm:py-16 lg:px-20 lg:py-20">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                <MessageSquare className="h-5 w-5" />
              </div>

              <h2 className="mt-7 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {cta.heading || "Have a Material Testing Requirement?"}
              </h2>

              {cta.description && (
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
                  {cta.description}
                </p>
              )}
            </div>

            <Link
              href={cta.buttonLink || "/contact"}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              {cta.buttonText || "Request Testing"}

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
