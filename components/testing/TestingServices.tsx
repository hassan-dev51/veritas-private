// src/components/testing/TestingServices.tsx

import { ArrowUpRight } from "lucide-react";
import { PortableText } from "@portabletext/react";

import type { MaterialTestingService } from "@/lib/sanity/types";

interface Props {
  services: MaterialTestingService[];
}

export default function TestingServices({ services }: Props) {
  if (!services?.length) return null;

  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
            02 / Capabilities
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Material Testing Capabilities
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Testing capabilities can be tailored according to the material,
            product, applicable specifications, and intended requirements.
          </p>
        </div>

        <div className="mt-14 divide-y divide-slate-200 border-y border-slate-200">
          {services.map((service, index) => (
            <article
              key={`${service.title}-${index}`}
              className="group grid gap-6 py-8 transition-all duration-300 lg:grid-cols-[100px_1fr_auto] lg:items-start"
            >
              <span className="text-sm font-bold text-slate-300 transition-colors group-hover:text-sky-500">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                {service.title && (
                  <h3 className="text-xl font-semibold text-slate-950 sm:text-2xl">
                    {service.title}
                  </h3>
                )}

                {service.shortDescription && (
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                    {service.shortDescription}
                  </p>
                )}

                {service.content?.length ? (
                  <div className="prose prose-sm prose-slate mt-5 max-w-2xl">
                    <PortableText value={service.content} />
                  </div>
                ) : null}
              </div>

              <ArrowUpRight className="hidden h-5 w-5 text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-600 lg:block" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
