const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We first consider the device, material, intended use, sample characteristics, and requested testing requirements.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "The appropriate testing approach, methods, standards, sample requirements, and technical objectives are identified.",
  },
  {
    number: "03",
    title: "Test",
    description:
      "Samples are prepared and evaluated according to the applicable test method and documented laboratory procedure.",
  },
  {
    number: "04",
    title: "Report",
    description:
      "Results and relevant observations are compiled into structured technical documentation for the customer.",
  },
];

export default function AboutApproach() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32">
      <div className="absolute -right-40 -top-40 size-125 rounded-full border border-white/5" />
      <div className="absolute -right-20 -top-20 size-75 rounded-full border border-white/5" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Our Approach
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            A structured approach from sample to technical report.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Good testing starts before the test itself. We focus on
            understanding the testing objective and maintaining a clear link
            between the sample, method, testing activity, results, and final
            documentation.
          </p>
        </div>

        <div className="mt-20 grid gap-0 border-y border-white/10 md:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border-b border-white/10 py-8 md:border-b-0 md:border-r md:px-8 md:py-10 md:first:pl-0 md:last:border-r-0"
            >
              <span className="text-sm font-semibold text-cyan-300">
                {step.number}
              </span>

              <h3 className="mt-8 text-2xl font-semibold">{step.title}</h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
