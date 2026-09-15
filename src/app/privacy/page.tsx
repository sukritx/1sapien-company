import type { Metadata } from "next";
import { SiteHeader } from "@/components/sites/afterquery-com-7e0a74f7/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/afterquery-com-7e0a74f7/shared/SiteFooter";
import { LegalArticle } from "@/components/sites/afterquery-com-7e0a74f7/shared/LegalArticle";
import { PRIVACY_POLICY } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy - 1Sapien",
  description:
    "How 1Sapien collects, uses, and protects personal information across our website, review automation, local SEO, and website services.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <div className="flex flex-1 flex-col">
        <main className="flex-1">
          <LegalArticle doc={PRIVACY_POLICY} />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
