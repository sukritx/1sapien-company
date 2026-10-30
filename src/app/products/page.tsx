import type { Metadata } from "next";
import { SiteHeader } from "@/components/sites/1sapien-com-7e0a74f7/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/1sapien-com-7e0a74f7/shared/SiteFooter";
import { ProductsSection } from "@/components/sites/1sapien-com-7e0a74f7/products-b2ce6bb6/ProductsSection";

export const metadata: Metadata = {
  title: "Products - 1Sapien",
  description:
    "Review generation, AI review responses, social proof, Google Business Profile management, competitor benchmarking, and weekly review intelligence — reputation services that turn every location into one that gets found, recommended, and chosen.",
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
