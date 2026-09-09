import type { Metadata } from "next";
import { SiteHeader } from "@/components/sites/afterquery-com-7e0a74f7/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/afterquery-com-7e0a74f7/shared/SiteFooter";
import { ProductsSection } from "@/components/sites/afterquery-com-7e0a74f7/products-b2ce6bb6/ProductsSection";

export const metadata: Metadata = {
  title: "AI Training Data Products - 1Sapien",
  description:
    "Explore 1Sapien products for rubric- and verifier-based RL, tool-calling environments, supervised fine-tuning, and preference training.",
};

export default function ProductsPage() {
  return (
    <>
      <SiteHeader activeHref="/products" />
      <div className="flex flex-1 flex-col">
        <main className="flex-1">
          <ProductsSection />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
