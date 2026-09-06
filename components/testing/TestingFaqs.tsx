// src/components/testing/TestingFaqs.tsx

import { Plus } from "lucide-react";
import { PortableText } from "@portabletext/react";

import type { MaterialTestingFaq } from "@/lib/sanity/types";

interface Props {
  faqs: MaterialTestingFaq[];
}

export default function TestingFaqs({ faqs }: Props) {
  if (!faqs?.length) return null;

  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
            07 / FAQ
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-14 divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq, index) => (
            <details key={`${faq.question}-${index}`} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                <span className="text-base font-semibold text-slate-900">
                  {faq.question}
                </span>

                <Plus className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 group-open:rotate-45" />
              </summary>

              {faq.answer?.length ? (
                <div className="prose prose-sm prose-slate mt-5 max-w-3xl">
                  <PortableText value={faq.answer} />
                </div>
              ) : null}
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
