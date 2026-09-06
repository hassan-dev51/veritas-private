import { ArrowRight, ClipboardCheck, Mail, MessageSquare } from "lucide-react";

const contactOptions = [
  {
    icon: ClipboardCheck,
    title: "Request Testing",
    description: "Tell us about your product, material, or required testing.",
    href: "/contact",
  },
  {
    icon: MessageSquare,
    title: "Discuss Your Requirement",
    description: "Speak with our team about your specific testing needs.",
    href: "/contact",
  },
  {
    icon: Mail,
    title: "Send an Inquiry",
    description:
      "Contact us for testing information, documentation, or quotations.",
    href: "/contact",
  },
] as const;

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-sky-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main CTA */}
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-7 py-14 shadow-2xl sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          {/* Gradient glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-400">
              Testing Support for Medical Devices
            </span>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Need Reliable Testing for Your{" "}
              <span className="text-sky-400">Medical Device?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Share your product, material, or testing requirement with our
              team. We can help you understand the appropriate testing approach
              and documentation requirements.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-sky-50"
              >
                Request Testing
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="/testing"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/5"
              >
                Explore Testing Services
              </a>
            </div>
          </div>
        </div>

        {/* Contact options */}
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {contactOptions.map((option) => {
            const Icon = option.icon;

            return (
              <a
                key={option.title}
                href={option.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg hover:shadow-slate-200/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-colors duration-300 group-hover:bg-sky-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {option.title}
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-slate-500">
                      {option.description}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
