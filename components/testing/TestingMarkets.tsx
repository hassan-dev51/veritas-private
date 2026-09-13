import Image from "next/image";
import type { MaterialTestingMarket } from "@/lib/sanity/types";

interface Props {
  markets: MaterialTestingMarket[];
  image?: {
    asset?: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
}

export default function TestingMarkets({ markets, image }: Props) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        {/* Image */}
        {image?.asset?.url ? (
          <div className="relative aspect-3/4 w-full overflow-hidden rounded-3xl sm:aspect-4/5 lg:aspect-3/4 lg:h-full lg:min-h-115">
            <Image
              src={image.asset.url}
              alt={
                image.alt || "Medical device testing for international markets"
              }
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        ) : null}

        {/* Content */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            International Markets
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Testing support for international markets
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our testing approach is designed to support medical-device
            manufacturers preparing products for different international markets
            and regulatory requirements.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {markets.map((market, index) => (
              <div
                key={`${market.name}-${index}`}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="font-semibold text-slate-950">{market.name}</h3>

                {market.description ? (
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {market.description}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
