import {
  ClipboardList,
  FlaskConical,
  FileCheck2,
  Microscope,
  SearchCheck,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Submit Request",
    description:
      "Share your testing requirements, product details, applicable specifications, and required test methods with our team.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Sample Review",
    description:
      "Our team reviews the sample and testing requirements to determine the appropriate testing approach.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "Testing",
    description:
      "The submitted samples are tested according to the agreed testing requirements and applicable procedures.",
    icon: FlaskConical,
  },
  {
    number: "04",
    title: "Analysis",
    description:
      "Test results are evaluated and technically reviewed to ensure the required information is accurately documented.",
    icon: Microscope,
  },
  {
    number: "05",
    title: "Test Report",
    description:
      "A structured test report is prepared containing the relevant test results and technical information.",
    icon: FileCheck2,
  },
] as const;

export default function TestingProcess() {
  return (
    <section
      id="testing-process"
      className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-sky-600">
            Our Testing Process
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            A Clear & Structured{" "}
            <span className="text-sky-600">Testing Process</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            From initial testing requirements to the final report, our process
            is designed to keep testing organized, transparent, and focused on
            reliable technical results.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative mt-16">
          {/* Connecting Line - Desktop */}
          <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-white/10 lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="group relative text-center">
                  {/* Step Icon */}
                  <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 text-sky-600 shadow-lg shadow-black/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-sky-400/40 group-hover:bg-sky-500 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Step Number */}
                  <div className="mt-5 text-xs font-semibold tracking-[0.2em] text-sky-600">
                    STEP {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {step.description}
                  </p>

                  {/* Mobile Arrow */}
                  {index < steps.length - 1 && (
                    <div className="mt-7 flex justify-center text-slate-600 lg:hidden">
                      <ArrowRight className="h-5 w-5 rotate-90 sm:rotate-0" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/3 px-6 py-7 sm:px-8 lg:flex-row">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Have a testing requirement?
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Tell us about your product and the testing you need.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
          >
            Request Testing
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
