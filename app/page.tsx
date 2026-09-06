import CTA from "@/components/marketing/CTA";
import { Hero } from "@/components/marketing/Hero";
import Introduction from "@/components/marketing/Introduction";
import Standards from "@/components/marketing/Standards";
import TestingProcess from "@/components/marketing/TestingProcess";
import TestingServices from "@/components/marketing/TestingServices";
import WhoWeServe from "@/components/marketing/WhoWeServe";
import WhyChooseUs from "@/components/marketing/WhyChooseUs";
import { getTestingServices } from "@/lib/sanity/getTestingServices";

export default async function Home() {
  const testingServices = await getTestingServices();

  return (
    <main>
      <Hero />
      <Introduction />
      <TestingServices services={testingServices} />
      <WhyChooseUs />
      <TestingProcess />
      <Standards />
      <WhoWeServe />
      <CTA />
    </main>
  );
}
