// src/components/testing/TestingHero.tsx

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FlaskConical,
  ShieldCheck,
} from "lucide-react";

import type { MaterialTesting } from "@/lib/sanity/types";
import Image from "next/image";
import { log } from "console";

interface Props {
  data: MaterialTesting;
}

export default function TestingHero({ data }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-slate-800">
      {/* Background */}

      {data.heroImage?.asset?.url && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={data.heroImage.asset.url}
            alt={data.heroImage.alt || data.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-slate-800/70" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-800 via-slate-800/80 to-slate-800/40" />
        </div>
      )}

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-36">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Content */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-sky-400" />

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                Material Testing
              </span>
            </div>

            <h1 className="mt-7 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
              {data.heroHeading || data.title}
            </h1>

            {data.heroDescription && (
              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                {data.heroDescription}
              </p>
            )}

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href={data.cta?.buttonLink || "/contact"}
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-400"
              >
                {data.cta?.buttonText || "Request Testing"}

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href="#testing-standards"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                View Testing Standards
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-7">
              {[
                "Material Verification",
                "Technical Evaluation",
                "Test Documentation",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-400"
                >
                  <CheckCircle2 className="h-4 w-4 text-sky-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Visual */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto aspect-square max-w-md">
              <div className="absolute inset-8 rounded-full border border-sky-400/10" />
              <div className="absolute inset-16 rounded-full border border-sky-400/10" />
              <div className="absolute inset-24 rounded-full border border-sky-400/10" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-44 w-44 items-center justify-center rounded-[2rem] border border-white/10 bg-white/4 shadow-2xl backdrop-blur-xl">
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600">
                    <FlaskConical className="h-12 w-12" strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              <div className="absolute left-0 top-1/4 rounded-xl border border-white/10 bg-white/4 p-4 backdrop-blur-xl">
                <FlaskConical className="h-5 w-5 text-sky-600" />
                <p className="mt-2 text-xs font-semibold text-white">
                  Material
                </p>
                <p className="mt-1 text-[11px] text-slate-500">Verification</p>
              </div>

              <div className="absolute bottom-1/4 right-0 rounded-xl border border-white/10 bg-white/4 p-4 backdrop-blur-xl">
                <ShieldCheck className="h-5 w-5 text-cyan-400" />
                <p className="mt-2 text-xs font-semibold text-white">Quality</p>
                <p className="mt-1 text-[11px] text-slate-500">Requirements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
