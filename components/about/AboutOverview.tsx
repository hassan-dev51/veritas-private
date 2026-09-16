import { ArrowUpRight } from "lucide-react";

const highlights = [
  {
    number: "01",
    title: "Medical Device Focus",
    description:
      "Our testing activities are focused on medical devices, materials, biological evaluation, microbiological requirements, sterilization, and reusability.",
  },
  {
    number: "02",
    title: "Technical Evaluation",
    description:
      "We approach each testing requirement according to the device, material, intended use, applicable standards, and specific customer requirements.",
  },
  {
    number: "03",
    title: "Clear Reporting",
    description:
      "Testing results are presented through structured technical reporting designed to provide useful information for quality and regulatory documentation.",
  },
];

export default function AboutOverview() {
  return (
    <section className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
              About Veritas Lab Testing Pvt Ltd
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              A dedicated testing partner for the medical-device industry.
            </h2>

            <div className="mt-8 h-px w-20 bg-cyan-600" />
          </div>

          <div>
            <p className="text-xl leading-9 text-slate-700">
              Veritas Lab Testing Pvt Ltd is a private limited testing laboratory dedicated
              to supporting medical-device manufacturers, exporters, and
              organizations involved in the development and production of
              medical and surgical devices.
            </p>

            <p className="mt-6 leading-8 text-slate-600">
              Our laboratory provides testing services across material,
              microbiological, biological, sterilization, reusability, and
              related testing areas. We work to provide meaningful technical
              information that can support product development, quality
              evaluation, process assessment, and regulatory documentation.
            </p>

            <p className="mt-6 leading-8 text-slate-600">
              Our approach combines appropriate test methods, controlled
              laboratory practices, documented procedures, and clear technical
              reporting. Every testing requirement is considered in relation to
              the product, intended use, applicable requirements, and the
              information needed by the customer.
            </p>

            <div className="mt-10">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-950"
              >
                Talk to our testing team
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24 grid border-t border-slate-200 sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.number}
              className="border-b border-slate-200 py-8 sm:border-b-0 sm:border-r sm:px-8 sm:first:pl-0 sm:last:border-r-0"
            >
              <span className="text-sm font-semibold text-cyan-700">
                {item.number}
              </span>

              <h3 className="mt-5 text-xl font-semibold text-slate-950">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
