import type { Metadata } from "next";
import { SiteHeader } from "@/components/sites/afterquery-com-7e0a74f7/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/afterquery-com-7e0a74f7/shared/SiteFooter";
import { ResearchHero } from "@/components/sites/afterquery-com-7e0a74f7/research-ad1daf48/ResearchHero";
import { BenchmarkCards } from "@/components/sites/afterquery-com-7e0a74f7/research-ad1daf48/BenchmarkCards";
import { ResearchListSection } from "@/components/sites/afterquery-com-7e0a74f7/research-ad1daf48/ResearchListSection";
import { CoreResearchAreas } from "@/components/sites/afterquery-com-7e0a74f7/research-ad1daf48/CoreResearchAreas";

export const metadata: Metadata = {
  title: "AI Training Data Research - 1Sapien",
  description:
    "1Sapien is an applied research lab curating data solutions to accelerate foundation model development.",
};

export default function ResearchPage() {
  return (
    <>
      <SiteHeader activeHref="/research" />
      <div className="flex flex-1 flex-col">
        <main className="flex-1">
          <ResearchHero />
          <BenchmarkCards />
          <ResearchListSection />
          <CoreResearchAreas />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
