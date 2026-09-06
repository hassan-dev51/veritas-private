import {
  FlaskConical,
  TestTube2,
  Settings2,
  Gauge,
  ShieldCheck,
  Microscope,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Material Testing",
    description:
      "Verification of material composition, grade, properties, and specifications for medical devices and surgical instruments.",
    icon: FlaskConical,
    href: "/testing/material-testing",
    tintClass: "from-slate-950/90 via-blue-950/75 to-cyan-950/60",
  },
  {
    title: "Chemical Testing",
    description:
      "Chemical analysis to verify material composition and ensure compliance with applicable specifications and requirements.",
    icon: TestTube2,
    href: "/testing/chemical-testing",
    tintClass: "from-slate-950/90 via-emerald-950/75 to-teal-950/60",
  },
  {
    title: "Mechanical Testing",
    description:
      "Mechanical property testing to evaluate the performance and suitability of materials used in medical devices.",
    icon: Settings2,
    href: "/testing/mechanical-testing",
    tintClass: "from-slate-950/90 via-orange-950/75 to-amber-950/60",
  },
  {
    title: "Hardness Testing",
    description:
      "Hardness measurement and verification for metallic materials used in surgical instruments and medical devices.",
    icon: Gauge,
    href: "/testing/hardness-testing",
    tintClass: "from-slate-950/90 via-violet-950/75 to-purple-950/60",
  },
  {
    title: "Biocompatibility Testing",
    description:
      "Testing support for evaluating biological safety and compatibility of materials used in medical devices.",
    icon: ShieldCheck,
    href: "/testing/biocompatibility-testing",
    tintClass: "from-slate-950/90 via-rose-950/75 to-pink-950/60",
  },
  {
    title: "Microbiological Testing",
    description:
      "Microbiological evaluation and testing to support the safety and quality requirements of medical devices.",
    icon: Microscope,
    href: "/testing/microbiological-testing",
    tintClass: "from-slate-950/90 via-indigo-950/75 to-sky-950/60",
  },
] as const;

export default function TestingServices() {
  return (
    <section
      id="testing-services"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700">
            Our Testing Services
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Testing Services for{" "}
            <span className="text-sky-600">Medical & Surgical Devices</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Comprehensive laboratory testing services designed to help medical
            device manufacturers verify materials, evaluate product performance,
            and meet applicable quality and regulatory requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative min-h-90 overflow-hidden rounded-2xl bg-slate-950 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Background */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${service.tintClass}`}
                />

                {/* Decorative glow */}
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />

                {/* Content */}
                <div className="relative flex h-full flex-col p-7 sm:p-8">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/10 backdrop-blur-sm">
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Service Content */}
                  <div className="mt-auto">
                    <h3 className="text-2xl font-semibold text-white">
                      {service.title}
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">
                      {service.description}
                    </p>

                    {/* Learn More */}
                    <a
                      href={service.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-sky-300"
                    >
                      Learn More
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </div>
                </div>

                {/* Bottom line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-sky-400 transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Need a specific test or technical requirement?
          </p>

          <a
            href="/contact"
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition-colors hover:text-sky-700"
          >
            Contact our testing team
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
