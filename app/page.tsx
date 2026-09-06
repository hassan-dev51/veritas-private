import CTA from "@/components/marketing/CTA";
import Footer from "@/components/marketing/Footer";
import { Hero } from "@/components/marketing/Hero";
import Introduction from "@/components/marketing/Introduction";
import Standards from "@/components/marketing/Standards";
import TestingProcess from "@/components/marketing/TestingProcess";
import TestingServices from "@/components/marketing/TestingServices";
import WhoWeServe from "@/components/marketing/WhoWeServe";
import WhyChooseUs from "@/components/marketing/WhyChooseUs";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Introduction />
      <TestingServices />
      <WhyChooseUs />
      <TestingProcess />
      <Standards />
      <WhoWeServe />
      <CTA />
      <Footer />
    </main>
  );
}
