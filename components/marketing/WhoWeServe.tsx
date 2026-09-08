import {
  ArrowUpRight,
  Building2,
  ClipboardCheck,
  Factory,
  Globe2,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const industries = [
  {
    number: "01",
    title: "Surgical Instrument Manufacturers",
    description:
      "Testing support for manufacturers of surgical instruments and related products.",
    icon: Stethoscope,
  },
  {
    number: "02",
    title: "Medical Device Manufacturers",
    description:
      "Laboratory testing support for companies developing and manufacturing medical devices.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "OEM & Contract Manufacturers",
    description:
      "Testing and technical documentation support for manufacturers serving international customers.",
    icon: Factory,
  },
  {
    number: "04",
    title: "Exporters & International Suppliers",
    description:
      "Testing support for companies preparing products and documentation for overseas markets.",
    icon: Globe2,
  },
  {
    number: "05",
    title: "Quality Assurance Teams",
    description:
      "Test results and documentation to support internal quality verification and product requirements.",
    icon: ClipboardCheck,
  },
  {
    number: "06",
    title: "Regulatory & Compliance Teams",
    description:
      "Technical testing information to support regulatory and customer requirements.",
    icon: Building2,
  },
] as const;

export default function WhoWeServe() {
  return (
    <section
      id="who-we-serve"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* Left Content */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="inline-flex items-center rounded-full bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700">
              Who We Serve
            </span>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Built Around the Needs of{" "}
              <span className="text-sky-600">Medical Device Businesses</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Whether you manufacture surgical instruments, develop medical
              devices, export products, or manage quality and compliance,
              Veritas Testing provides testing support tailored to your
              requirements.
            </p>

            <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-sky-400">
                  <Building2 className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Supporting the Medical Device Supply Chain
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    From manufacturing and quality assurance to export and
                    compliance activities, our testing services can support
                    different stages of your product lifecycle.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Vertical List */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute bottom-6 left-5.5 top-6 hidden w-px bg-slate-200 sm:block" />

            <div className="space-y-4">
              {industries.map((industry) => {
                const Icon = industry.icon;

                return (
                  <div
                    key={industry.number}
                    className="group relative flex gap-5 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-sky-200 hover:bg-sky-50/30 hover:shadow-lg hover:shadow-slate-200/50 sm:gap-6 sm:p-6"
                  >
                    {/* Timeline number */}
                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-bold text-slate-400 transition-all duration-300 group-hover:border-sky-600 group-hover:bg-sky-600 group-hover:text-white">
                      {industry.number}
                    </div>

                    {/* Icon */}
                    <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition-all duration-300 group-hover:bg-sky-100 group-hover:text-sky-600 sm:flex">
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                          {industry.title}
                        </h3>

                        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-600" />
                      </div>

                      <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-20 border-t border-slate-200 pt-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-7 text-slate-500">
              Different products and markets may require different testing
              approaches. Share your requirements with our team to determine the
              appropriate testing path.
            </p>

            <a
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-lg bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800"
            >
              Talk to Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
