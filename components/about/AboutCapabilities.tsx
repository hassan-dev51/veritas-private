import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Material Testing",
    description:
      "Evaluation of materials used in medical devices according to applicable product and testing requirements.",
    href: "/testing/material-testing",
  },
  {
    number: "02",
    title: "Cytotoxicity Testing",
    description:
      "Biological evaluation of medical-device materials and products for potential cytotoxic effects.",
    href: "/testing/cytotoxicity-testing",
  },
  {
    number: "03",
    title: "Sterilization Testing",
    description:
      "Testing activities related to sterilization processes and microbiological requirements for medical devices.",
    href: "/testing/sterilization-testing",
  },
  {
    number: "04",
    title: "Reusability Testing",
    description:
      "Evaluation of reusable medical devices following repeated cleaning, disinfection, sterilization, and reprocessing.",
    href: "/testing/reusability-testing",
  },
  {
    number: "05",
    title: "Bioburden Testing",
    description:
      "Determination and evaluation of viable microorganisms associated with medical devices and materials.",
    href: "/testing/bioburden-testing",
  },
  {
    number: "06",
    title: "Biocompatibility Testing",
    description:
      "Biological evaluation and applicable testing based on device materials, intended use, and body contact.",
    href: "/testing/biocompatibility-testing",
  },
  {
    number: "07",
    title: "Microbiological Testing",
    description:
      "Microbiological evaluations including microbial contamination, sterility-related testing, endotoxin, and related requirements.",
    href: "/testing/microbiological-testing",
  },
];

export default function AboutCapabilities() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
              Our Capabilities
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Testing services for the medical-device lifecycle.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Our testing portfolio covers several areas relevant to medical
              device materials, biological safety, microbiological control,
              sterilization, and reusable-device evaluation.
            </p>

            <Link
              href="/testing"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-950"
            >
              View all testing services
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="border-t border-slate-200">
            {capabilities.map((item) => (
              <Link
                key={item.number}
                href={item.href}
                className="group grid gap-5 border-b border-slate-200 py-8 transition-colors hover:bg-slate-50 sm:grid-cols-[70px_1fr_auto] sm:items-start"
              >
                <span className="text-sm font-semibold text-cyan-700">
                  {item.number}
                </span>

                <div>
                  <h3 className="text-xl font-semibold text-slate-950 transition-colors group-hover:text-cyan-700">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>

                <div className="hidden size-10 items-center justify-center rounded-full border border-slate-200 transition group-hover:border-cyan-600 group-hover:bg-cyan-600 group-hover:text-white sm:flex">
                  <ArrowUpRight className="size-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
