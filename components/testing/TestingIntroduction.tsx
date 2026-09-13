import Image from "next/image";
import { PortableText } from "@portabletext/react";

import type { MaterialTesting } from "@/lib/sanity/types";

interface TestingIntroductionProps {
  data: MaterialTesting;
}

export default function TestingIntroduction({
  data,
}: TestingIntroductionProps) {
  if (!data.introduction?.length) {
    return null;
  }

  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
              Overview
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {data.title}
            </h2>

            <div className="prose prose-slate mt-7 max-w-none leading-7">
              <PortableText value={data.introduction} />
            </div>
          </div>

          {data.introductionImage?.asset?.url && (
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xl">
                <Image
                  src={data.introductionImage.asset.url}
                  alt={
                    data.introductionImage.alt ||
                    `${data.title} laboratory testing`
                  }
                  width={1200}
                  height={900}
                  className="aspect-4/3 w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-5 -left-5 -z-10 h-32 w-32 rounded-2xl bg-sky-100" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
