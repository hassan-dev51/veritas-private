import Image from "next/image";
import {
  ClipboardCheck,
  FlaskConical,
  Microscope,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: FlaskConical,
    title: "Focused Testing Environment",
    description:
      "A laboratory environment structured around medical-device testing requirements and controlled test activities.",
  },
  {
    icon: Microscope,
    title: "Technical Testing",
    description:
      "Testing activities are performed using appropriate methods and procedures according to the specific testing requirement.",
  },
  {
    icon: ClipboardCheck,
    title: "Documented Processes",
    description:
      "Testing activities follow documented processes designed to support consistency, traceability, and technical evaluation.",
  },
  {
    icon: ShieldCheck,
    title: "Quality-Focused Work",
    description:
      "We place emphasis on sample identification, controlled handling, accurate observations, and reliable technical reporting.",
  },
];

export default function AboutLaboratory() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Image */}
          <div className="relative">
            <div className="absolute -left-5 -top-5 hidden h-32 w-32 border-l border-t border-cyan-600/40 sm:block" />

            <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-slate-200">
              <Image
                src="/images/about-device.jpg"
                alt="Veritas Testing laboratory"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-4 max-w-70 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:-right-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Our Focus
              </p>

              <p className="mt-3 text-lg font-semibold leading-7 text-slate-950">
                Medical-device testing with a practical technical approach.
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
              Our Laboratory
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Built around the needs of medical-device manufacturers.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Veritas Lab Pvt Ltd operates as a private limited laboratory with a
              focused objective: to provide dependable testing information for
              medical-device manufacturers and exporters.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              From sample receipt and preparation through testing, evaluation,
              and reporting, we aim to maintain a structured workflow that keeps
              the testing requirement, sample identity, test method, and final
              results connected.
            </p>

            <div className="mt-10 grid gap-7 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.title}>
                    <div className="flex size-10 items-center justify-center rounded-xl bg-white ring-1 ring-slate-200">
                      <Icon className="size-5 text-cyan-700" />
                    </div>

                    <h3 className="mt-4 font-semibold text-slate-950">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
