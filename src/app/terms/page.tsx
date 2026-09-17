import type { Metadata } from "next";
import { SiteHeader } from "@/components/sites/1sapien-com-7e0a74f7/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/1sapien-com-7e0a74f7/shared/SiteFooter";
import { LegalArticle } from "@/components/sites/1sapien-com-7e0a74f7/shared/LegalArticle";
import { TERMS_OF_SERVICE } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service - 1Sapien",
  description:
    "The terms that govern use of the 1Sapien website and the review, local SEO, and website services we provide to local service businesses.",
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <div className="flex flex-1 flex-col">
        <main className="flex-1">
          <LegalArticle doc={TERMS_OF_SERVICE} />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
