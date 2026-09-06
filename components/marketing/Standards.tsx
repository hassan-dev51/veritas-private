import { BookOpenCheck, FileCheck2, Globe2, ShieldCheck } from "lucide-react";

const standards = [
  {
    title: "ASTM Standards",
    description:
      "Testing and material evaluation aligned with applicable ASTM specifications and test methods.",
    icon: BookOpenCheck,
  },
  {
    title: "ISO Standards",
    description:
      "Support for testing requirements associated with relevant ISO standards for medical devices and materials.",
    icon: ShieldCheck,
  },
  {
    title: "Material Specifications",
    description:
      "Material composition and property verification against specified grades, specifications, and technical requirements.",
    icon: FileCheck2,
  },
  {
    title: "International Markets",
    description:
      "Testing documentation designed to support manufacturers and exporters serving international medical-device markets.",
    icon: Globe2,
  },
] as const;

const markets = [
  "United States",
  "European Union",
  "United Kingdom",
  "Middle East",
  "Other International Markets",
] as const;

export default function Standards() {
  return (
    <section
      id="standards"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700">
            Standards & Compliance
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Testing Aligned With{" "}
            <span className="text-sky-600">Technical Requirements</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Our testing services can support manufacturers in verifying
            materials, products, and technical requirements against applicable
            standards and specifications.
          </p>
        </div>

        {/* Standards Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {standards.map((standard) => {
            const Icon = standard.icon;

            return (
              <article
                key={standard.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-slate-200/60"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-colors duration-300 group-hover:bg-sky-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-slate-900">
                  {standard.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {standard.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Compliance Highlight */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-slate-950">
          <div className="relative px-7 py-10 sm:px-10 lg:px-12 lg:py-12">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <FileCheck2 className="h-5 w-5 text-sky-400" />
                  </div>

                  <span className="text-sm font-semibold uppercase tracking-wider text-sky-400">
                    Technical Documentation
                  </span>
                </div>

                <h3 className="mt-5 max-w-2xl text-2xl font-bold text-white sm:text-3xl">
                  Clear documentation for quality and compliance activities.
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                  Test reports provide structured technical information that
                  manufacturers can use for quality control, material
                  verification, customer requirements, and regulatory
                  documentation.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/4 p-6 lg:min-w-70">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Markets We Support
                </p>

                <div className="mt-4 space-y-3">
                  {markets.map((market) => (
                    <div
                      key={market}
                      className="flex items-center gap-3 text-sm text-slate-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                      {market}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mx-auto mt-7 max-w-3xl text-center text-xs leading-5 text-slate-400">
          Testing requirements and applicable standards may vary according to
          the product, material, intended market, and customer or regulatory
          requirements. Specific standards should be confirmed before testing.
        </p>
      </div>
    </section>
  );
}
