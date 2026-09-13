import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { MaterialTestingCTA } from "@/lib/sanity/types";

interface TestingCTAProps {
  cta: MaterialTestingCTA;
}

export default function TestingCTA({ cta }: TestingCTAProps) {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950">
      {cta.image?.asset?.url && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={cta.image.asset.url}
            alt={cta.image.alt || cta.heading || "Veritas Testing"}
            fill
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-slate-700/80" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-600/80 to-slate-600/60" />
        </div>
      )}

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-3xl">
          {cta.heading && (
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {cta.heading}
            </h2>
          )}

          {cta.description && (
            <p className="mt-5 text-lg leading-8 text-slate-300">
              {cta.description}
            </p>
          )}

          {cta.buttonText && (
            <div className="mt-8">
              <Link
                href={cta.buttonLink || "/contact"}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                {cta.buttonText}
                <ArrowRight className="size-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
