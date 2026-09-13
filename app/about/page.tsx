import AboutHero from "@/components/about/AboutHero";
import AboutOverview from "@/components/about/AboutOverview";
import AboutLaboratory from "@/components/about/AboutLaboratory";
import AboutCapabilities from "@/components/about/AboutCapabilities";
import AboutApproach from "@/components/about/AboutApproach";
import AboutIndustries from "@/components/about/AboutIndustries";
import AboutWhyVeritas from "@/components/about/AboutWhyVeritas";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata = {
  title: "About Veritas Testing | Medical Device Testing Laboratory",
  description:
    "Learn about Veritas Testing, a private limited testing laboratory supporting medical device manufacturers with material, microbiological, biological, sterilization, reusability, and related testing services.",
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white">
      <AboutHero />
      <AboutOverview />
      <AboutLaboratory />
      <AboutCapabilities />
      <AboutApproach />
      <AboutIndustries />
      <AboutWhyVeritas />
      <AboutCTA />
    </main>
  );
}
