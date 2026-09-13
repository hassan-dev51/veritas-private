import Image from "next/image";
import { PortableText } from "@portabletext/react";

import type { PortableTextBlock } from "@/lib/sanity/types";

interface Props {
  content: PortableTextBlock[];
  image?: {
    asset?: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
}

export default function TestingQuality({ content, image }: Props) {
  return (
    <section className="bg-slate-950 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        {/* Content */}
        <div className="text-white">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Quality & Reliability
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            A structured approach to testing and reporting
          </h2>

          <div className="prose prose-invert mt-8 max-w-none">
            <PortableText value={content} />
          </div>
        </div>

        {/* Image */}
        {image?.asset?.url ? (
          <div className="relative min-h-115 overflow-hidden rounded-3xl">
            <Image
              src={image.asset.url}
              alt={image.alt || "Medical device testing laboratory"}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
