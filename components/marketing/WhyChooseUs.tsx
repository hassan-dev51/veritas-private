import {
  BadgeCheck,
  FileCheck2,
  FlaskConical,
  Globe2,
  Microscope,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    icon: FlaskConical,
    title: "Specialized Testing",
    description:
      "Testing services focused on medical devices, surgical instruments, and the materials used in their manufacture.",
  },
  {
    icon: ShieldCheck,
    title: "Quality-Focused Approach",
    description:
      "A structured approach to testing that supports product verification, quality control, and technical requirements.",
  },
  {
    icon: BadgeCheck,
    title: "Reliable Test Results",
    description:
      "Careful testing and evaluation designed to provide consistent and technically useful results.",
  },
  {
    icon: FileCheck2,
    title: "Clear Documentation",
    description:
      "Well-structured test reports that provide traceable technical information for quality and compliance activities.",
  },
  {
    icon: Globe2,
    title: "International Requirements",
    description:
      "Testing support for manufacturers and exporters supplying medical and surgical products to international markets.",
  },
  {
    icon: Microscope,
    title: "Technical Expertise",
    description:
      "Laboratory testing supported by technical knowledge of materials, medical devices, and surgical instruments.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-sky-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-cyan-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <span className="inline-flex items-center rounded-full bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700">
              Why Veritas Lab Testing
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Testing You Can <span className="text-sky-600">Rely On</span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-600 lg:ml-auto sm:text-lg">
            Veritas Testing is focused on providing practical, reliable, and
            well-documented testing services for medical device manufacturers
            and surgical instrument exporters. Our approach is built around
            technical accuracy, clear reporting, and understanding the needs of
            the medical device industry.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-slate-200/60"
              >
                {/* Number */}
                <div className="absolute right-6 top-5 text-5xl font-bold tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-sky-50">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-all duration-300 group-hover:bg-sky-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <div className="relative mt-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {reason.description}
                  </p>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-sky-500 transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-12 overflow-hidden rounded-2xl bg-slate-950">
          <div className="relative px-7 py-8 sm:px-10 sm:py-9">
            <div className="absolute inset-0 bg-linear-to-r from-sky-500/10 via-transparent to-cyan-400/10" />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <BadgeCheck className="h-5 w-5 text-sky-400" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Supporting Medical Device Manufacturers
                  </h3>

                  <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-400">
                    From material verification to specialized laboratory
                    testing, we help manufacturers obtain the technical
                    information they need to support product quality and market
                    requirements.
                  </p>
                </div>
              </div>

              <a
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Talk to Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
