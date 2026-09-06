// src/app/testing/[slug]/page.tsx

import { notFound } from "next/navigation";

import { getMaterialTesting } from "@/lib/sanity/getMaterialTesting";
import TestingHero from "@/components/testing/TestingHero";
import TestingIntroduction from "@/components/testing/TestingIntroduction";
import TestingServices from "@/components/testing/TestingServices";
import TestingStandards from "@/components/testing/TestingStandards";
import TestingProcess from "@/components/testing/TestingProcess";
import TestingMarkets from "@/components/testing/TestingMarkets";
import TestingQuality from "@/components/testing/TestingQuality";
import TestingFaqs from "@/components/testing/TestingFaqs";
import TestingCTA from "@/components/testing/TestingCTA";


interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TestingDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const testing = await getMaterialTesting(slug);

  if (!testing) {
    notFound();
  } 
  
  return (
    <main>
      <TestingHero data={testing} />

      {testing.introduction?.length ? (
        <TestingIntroduction data={testing} />
      ) : null}

      {testing.services?.length ? (
        <TestingServices services={testing.services} />
      ) : null}

      {testing.standards?.length ? (
        <TestingStandards standards={testing.standards} />
      ) : null}

      {testing.process?.length ? (
        <TestingProcess process={testing.process} />
      ) : null}

      {testing.markets?.length ? (
        <TestingMarkets markets={testing.markets} />
      ) : null}

      {testing.qualityContent?.length ? (
        <TestingQuality content={testing.qualityContent} />
      ) : null}

      {testing.faqs?.length ? <TestingFaqs faqs={testing.faqs} /> : null}

      {testing.cta ? <TestingCTA cta={testing.cta} /> : null}
    </main>
  );
}
