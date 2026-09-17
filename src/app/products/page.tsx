import type { Metadata } from "next";
import { SiteHeader } from "@/components/sites/1sapien-com-7e0a74f7/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/1sapien-com-7e0a74f7/shared/SiteFooter";
import { ProductsSection } from "@/components/sites/1sapien-com-7e0a74f7/products-b2ce6bb6/ProductsSection";

export const metadata: Metadata = {
  title: "Local Growth Services - 1Sapien",
  description:
    "Automated Google review requests, local SEO and map 3-pack rankings, and websites that turn visitors into booked jobs — for local businesses across the US and Europe.",
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
