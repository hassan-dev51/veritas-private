import { Check } from "lucide-react";

const reasons = [
  "Focused on medical-device testing",
  "Testing approach based on the specific product and requirement",
  "Structured sample handling and testing workflow",
  "Clear and traceable technical reporting",
  "Support for manufacturers and export-oriented businesses",
  "Testing services across biological, microbiological, material, sterilization, and reusability areas",
];

export default function AboutWhyVeritas() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-slate-100">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-slate-950 p-8 text-white sm:p-12 lg:p-16">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Why Veritas Lab Testing Pvt Ltd
              </p>

              <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
                Testing with purpose, structure, and technical clarity.
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                We understand that laboratory testing is not simply about
                generating a result. Manufacturers need testing information that
                is understandable, traceable, technically appropriate, and
                useful within their quality and regulatory processes.
              </p>

              <div className="mt-10 h-px w-20 bg-cyan-400" />
            </div>

            <div className="p-8 sm:p-12 lg:p-16">
              <div className="space-y-6">
                {reasons.map((reason) => (
                  <div key={reason} className="flex gap-4">
                    <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-cyan-100">
                      <Check className="size-3.5 text-cyan-700" />
                    </div>

                    <p className="text-base leading-7 text-slate-700">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
