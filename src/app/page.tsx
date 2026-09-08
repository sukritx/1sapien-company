import { SiteHeader } from "@/components/sites/afterquery-com-7e0a74f7/shared/SiteHeader";
import { HeroSection } from "@/components/sites/afterquery-com-7e0a74f7/root-e0627e8d/HeroSection";
import { LogoMarquee } from "@/components/sites/afterquery-com-7e0a74f7/root-e0627e8d/LogoMarquee";
import { NarrativeSection } from "@/components/sites/afterquery-com-7e0a74f7/root-e0627e8d/NarrativeSection";
import { DataGrid, Divider } from "@/components/sites/afterquery-com-7e0a74f7/root-e0627e8d/DataGrid";
import { ResearchSection } from "@/components/sites/afterquery-com-7e0a74f7/root-e0627e8d/ResearchSection";
import { CareersBanner } from "@/components/sites/afterquery-com-7e0a74f7/root-e0627e8d/CareersBanner";
import { SiteFooter } from "@/components/sites/afterquery-com-7e0a74f7/shared/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <div className="flex flex-1 flex-col">
        <main className="flex-1">
          <HeroSection />
          <LogoMarquee />
          <NarrativeSection />
          <DataGrid />
          <Divider />
          <ResearchSection />
          <CareersBanner />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
