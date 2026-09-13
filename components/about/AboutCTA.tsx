import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="bg-cyan-50 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
          Start a Conversation
        </p>

        <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Have a testing requirement?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Tell us about your medical device, material, intended use, or testing
          requirement. Our team can review your requirements and help identify
          the appropriate testing approach.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-7 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Contact Veritas Lab Pvt Ltd
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
