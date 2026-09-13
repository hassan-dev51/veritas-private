import Image from "next/image";

import type { MaterialTestingProcess } from "@/lib/sanity/types";

interface TestingProcessProps {
  process: MaterialTestingProcess[];
  image?: {
    asset?: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
}

export default function TestingProcess({
  process,
  image,
}: TestingProcessProps) {
  return (
    <section className="bg-slate-950 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
              Our Approach
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Testing Process
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              A structured process helps ensure that testing requirements,
              samples, methods, and reporting are clearly defined.
            </p>

            <div className="mt-12">
              {process.map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className="relative flex gap-6 pb-10 last:pb-0"
                >
                  {index !== process.length - 1 && (
                    <div className="absolute left-5 top-12 h-[calc(100%-24px)] w-px bg-slate-800" />
                  )}

                  <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-sky-500/30 bg-slate-900 text-sm font-semibold text-sky-400">
                    {item.step ?? index + 1}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    {item.description && (
                      <p className="mt-2 leading-7 text-slate-400">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {image?.asset?.url && (
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={image.asset.url}
                  alt={image.alt || "Medical device testing process"}
                  width={1200}
                  height={1000}
                  className="aspect-4/3 w-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
