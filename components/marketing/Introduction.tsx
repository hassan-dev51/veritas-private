import {
  CheckCircle2,
  FlaskConical,
  ShieldCheck,
  FileCheck2,
} from "lucide-react";

export default function Introduction() {
  const features = [
    {
      icon: FlaskConical,
      title: "Professional Testing",
      description:
        "Testing services designed for medical devices, surgical instruments, and their materials.",
    },
    {
      icon: ShieldCheck,
      title: "Reliable Results",
      description:
        "Accurate testing and technical evaluation to support product quality and verification.",
    },
    {
      icon: FileCheck2,
      title: "Technical Documentation",
      description:
        "Clear and structured test reports to support quality systems and customer requirements.",
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div>
            <span className="mb-4 inline-flex items-center rounded-full bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700">
              Medical Device Testing
            </span>

            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Reliable Testing for{" "}
              <span className="text-sky-600">Medical & Surgical Devices</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Veritas Lab Testing provides professional testing and laboratory
              services for medical devices, surgical instruments, and their
              materials. We help manufacturers and exporters verify product
              quality, material properties, and technical requirements through
              reliable testing and documentation.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">
              From material verification and chemical analysis to mechanical and
              other laboratory testing, our services support manufacturers in
              meeting applicable standards and customer requirements.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-5">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {feature.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#testing-services"
                className="inline-flex items-center rounded-lg bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Explore Our Testing Services
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-8 shadow-2xl sm:p-10">
              {/* Decorative gradient */}
              <div className="absolute inset-0 bg-linear-to-br from-sky-500/20 via-transparent to-cyan-400/10" />

              <div className="relative">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-sky-400">
                      VERITAS LAB TESTING
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      Testing & Verification
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                    <FlaskConical className="h-6 w-6 text-sky-400" />
                  </div>
                </div>

                {/* Testing categories */}
                <div className="space-y-3">
                  {[
                    "Material Testing",
                    "Reusability Testing",
                    "Sterilization Testing",
                    "Cytotoxicity Testing",
                    "Biocompatibility Testing",
                    "Bioburden Testing",
                    "Microbiological Testing",
                  ].map((test, index) => (
                    <div
                      key={test}
                      className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/4 px-4 py-4"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-sm font-semibold text-sky-400">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <span className="text-sm font-medium text-slate-200">
                        {test}
                      </span>

                      <CheckCircle2 className="ml-auto h-4 w-4 text-emerald-400" />
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-sm leading-6 text-slate-400">
                    Supporting medical device manufacturers and surgical
                    instrument producers with professional testing and technical
                    documentation.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-full bg-sky-100 blur-2xl" />
            <div className="absolute -right-6 -top-6 -z-10 h-32 w-32 rounded-full bg-cyan-100 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
