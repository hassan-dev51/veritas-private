import Link from "next/link";
import {
  ArrowUpRight,
  Beaker,
  Microscope,
  ShieldCheck,
  RefreshCw,
  FlaskConical,
} from "lucide-react";

import type { TestingServiceSummary } from "@/lib/sanity/types";

interface TestingServicesProps {
  services: TestingServiceSummary[];
}

const icons = [
  FlaskConical,
  Microscope,
  ShieldCheck,
  RefreshCw,
  Beaker,
  FlaskConical,
];

const backgrounds = [
  "from-slate-950/95 via-blue-950/80 to-cyan-950/70",
  "from-slate-950/95 via-rose-950/80 to-pink-950/70",
  "from-slate-950/95 via-violet-950/80 to-purple-950/70",
  "from-slate-950/95 via-blue-950/80 to-cyan-950/70",
  "from-slate-950/95 via-indigo-950/80 to-sky-950/70",
  "from-slate-950/95 via-emerald-950/80 to-teal-950/70",
];

export default function TestingServices({ services }: TestingServicesProps) {
  if (!services?.length) {
    return null;
  }

  return (
    <section
      id="testing-services"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
            Testing Services
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Testing Solutions for Medical Devices
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Technical testing services designed to support medical device
            manufacturers, surgical instrument producers, and international
            suppliers with reliable testing and documentation.
          </p>
        </div>

        {/* Services */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];
            const background = backgrounds[index % backgrounds.length];

            return (
              <Link
                key={service._id}
                href={`/testing/${service.slug.current}`}
                className="group relative min-h-85 overflow-hidden rounded-3xl"
              >
                {/* Background */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${background}`}
                />

                {/* Decorative glow */}
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />

                {/* Content */}
                <div className="relative flex h-full flex-col justify-between p-8">
                  <div>
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md">
                        <Icon className="h-6 w-6 text-white" />
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-all duration-300 group-hover:bg-white group-hover:text-slate-950">
                        <ArrowUpRight className="h-5 w-5 text-white transition-colors group-hover:text-slate-950" />
                      </div>
                    </div>

                    <h3 className="mt-10 text-2xl font-semibold tracking-tight text-white">
                      {service.title}
                    </h3>

                    <p className="mt-4 line-clamp-4 text-sm leading-7 text-slate-200">
                      {service.heroDescription ||
                        "Explore our testing services and technical evaluation capabilities."}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white">
                    Explore Testing
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
