import { Building2, Factory, Globe2, Stethoscope } from "lucide-react";

const industries = [
  {
    icon: Factory,
    title: "Medical Device Manufacturers",
    description:
      "Testing support for manufacturers developing, producing, and evaluating medical devices.",
  },
  {
    icon: Stethoscope,
    title: "Surgical & Dental Devices",
    description:
      "Support for organizations involved in surgical instruments, dental devices, and related medical products.",
  },
  {
    icon: Building2,
    title: "Medical Device Companies",
    description:
      "Technical testing services for companies requiring documented laboratory evaluation of their products and materials.",
  },
  {
    icon: Globe2,
    title: "Export-Oriented Manufacturers",
    description:
      "Testing information that can support manufacturers preparing products and technical documentation for international markets.",
  },
];

export default function AboutIndustries() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
            Who We Support
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Supporting organizations across the medical-device sector.
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Our services are designed around the practical testing needs of
            manufacturers, exporters, and organizations working with medical and
            surgical devices.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className="bg-white p-8 transition hover:bg-slate-50 lg:p-9"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Icon className="size-5" />
                </div>

                <h3 className="mt-7 text-lg font-semibold text-slate-950">
                  {industry.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
