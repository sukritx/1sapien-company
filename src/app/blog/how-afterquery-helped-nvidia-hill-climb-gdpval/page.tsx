import type { Metadata } from "next";
import { SiteHeader } from "@/components/sites/afterquery-com-7e0a74f7/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/afterquery-com-7e0a74f7/shared/SiteFooter";
import { BlogHeader } from "@/components/sites/afterquery-com-7e0a74f7/blog-how-afterquery-helped-nvidia-hill-climb-gdpval-ded4ddd3/BlogHeader";
import { ArticleToc } from "@/components/sites/afterquery-com-7e0a74f7/blog-how-afterquery-helped-nvidia-hill-climb-gdpval-ded4ddd3/ArticleToc";
import { BlogBody } from "@/components/sites/afterquery-com-7e0a74f7/blog-how-afterquery-helped-nvidia-hill-climb-gdpval-ded4ddd3/BlogBody";
import { RelatedArticles } from "@/components/sites/afterquery-com-7e0a74f7/blog-how-afterquery-helped-nvidia-hill-climb-gdpval-ded4ddd3/RelatedArticles";

const TOC_ITEMS = [
  { id: "what-is-gdpval", text: "What is GDPval" },
  { id: "pivotrl", text: "PivotRL" },
  { id: "impact", text: "Impact" },
];

export const metadata: Metadata = {
  title: "How AfterQuery Helped NVIDIA Hill-Climb GDPval - AfterQuery",
  description:
    "NVIDIA publicly used AfterQuery's Off-The-Shelf Office Agent Training Dataset to improve Nemotron 3 Ultra on GDPval — the only data vendor named in their technical report, worth 11.4 GDPval points in their warmup ablation.",
};

export default function BlogPostPage() {
  return (
    <>
      <SiteHeader />
      <div className="flex flex-1 flex-col">
        <main className="flex-1">
          <article className="pb-24 pt-12 md:pb-32 md:pt-16">
            <div className="mx-auto w-full max-w-[1040px] px-6 lg:px-0">
              <BlogHeader />
              <div className="mt-14 md:mt-16 lg:grid lg:grid-cols-[1fr_minmax(0,660px)_1fr] lg:gap-x-8">
                <ArticleToc items={TOC_ITEMS} />
                <BlogBody />
              </div>
              <RelatedArticles />
            </div>
          </article>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
