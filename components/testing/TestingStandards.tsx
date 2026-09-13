import Image from "next/image";

interface Props {
  standards: string[];
  image?: {
    asset?: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
}

export default function TestingStandards({ standards, image }: Props) {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        {/* Content */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Standards & Specifications
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Standards that guide our testing approach
          </h2>

          <div className="mt-8 space-y-3">
            {standards.map((standard, index) => (
              <div
                key={`${standard}-${index}`}
                className="flex items-start gap-4 border-b border-slate-200 py-4"
              >
                <span className="text-sm font-semibold text-slate-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-base leading-7 text-slate-700">{standard}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        {image?.asset?.url ? (
          <div className="relative aspect-3/4 w-full overflow-hidden rounded-3xl sm:aspect-4/5 lg:aspect-3/4">
            <Image
              src={image.asset.url}
              alt={image.alt || "Testing standards laboratory"}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              className="object-cover"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
