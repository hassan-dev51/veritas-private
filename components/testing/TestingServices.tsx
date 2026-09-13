import Image from "next/image";
import { PortableText } from "@portabletext/react";

import type { MaterialTestingService } from "@/lib/sanity/types";

interface TestingServicesProps {
  services: MaterialTestingService[];
}

export default function TestingServices({ services }: TestingServicesProps) {
  console.log("TestingServices props:", services); // Log the props to the console for debugging
  return (
    <section className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
            Testing Scope
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Testing Services
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Testing activities are selected according to the device, materials,
            intended use, applicable requirements, and testing objectives.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {services.map((service, index) => {
            const reversed = index % 2 !== 0;

            return (
              <article
                key={`${service.title}-${index}`}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className={reversed ? "lg:order-2" : "lg:order-1"}>
                  {service.image?.asset?.url ? (
                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
                      <Image
                        src={service.image.asset.url}
                        alt={
                          service.image.alt ||
                          service.title ||
                          "Medical device testing"
                        }
                        width={1200}
                        height={900}
                        className="aspect-4/3 w-full object-cover transition duration-500 hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-4/3 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 text-sm text-slate-400">
                      Image Uploaded for {service.title} is not available
                    </div>
                  )}
                </div>

                <div className={reversed ? "lg:order-1" : "lg:order-2"}>
                  <span className="text-sm font-semibold text-sky-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                    {service.title}
                  </h3>

                  {service.shortDescription && (
                    <p className="mt-5 text-lg leading-8 text-slate-600">
                      {service.shortDescription}
                    </p>
                  )}

                  {service.content?.length ? (
                    <div className="prose prose-slate mt-6 max-w-none">
                      <PortableText value={service.content} />
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
