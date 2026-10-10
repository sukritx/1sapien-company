import type { Metadata } from "next";
import { SiteHeader } from "@/components/sites/1sapien-com-7e0a74f7/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/1sapien-com-7e0a74f7/shared/SiteFooter";
import { ProductsSection } from "@/components/sites/1sapien-com-7e0a74f7/products-b2ce6bb6/ProductsSection";

export const metadata: Metadata = {
  title: "Products - 1Sapien",
  description:
    "Local Search, Reputation, and Social Agent — AI that optimizes every location for local search, AI recommendations, reviews, and social engagement across every location you run.",
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
