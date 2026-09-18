import { Reveal } from "../shared/Reveal";
import { Stagger } from "../shared/Stagger";
import type { ResearchPost } from "../../../../types/sites/afterquery-com-7e0a74f7";
import { ResearchCard } from "./ResearchCard";
import { CASE_STUDIES } from "@/lib/case-studies";

const posts: ResearchPost[] = [...CASE_STUDIES]
  .sort((a, b) => b.dateISO.localeCompare(a.dateISO))
  .slice(0, 3)
  .map(study => ({
    title: study.title,
    description: study.description,
    href: `/blog/${study.slug}`,
    image: study.cover,
    imageAlt: "",
    category: study.service,
    categoryBarClass: "bg-ink/80",
    dateText: study.dateText,
    dateISO: study.dateISO,
  }));

export function ResearchSection() {
  return (
    <section className="pb-8 pt-16">
      <div className="mx-auto w-[min(100%_-_2rem,1136px)]">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-[40rem]">
              <h2 className="font-sans text-2xl font-medium leading-[1.15] text-ink/80">Latest blogs</h2>
              <p className="font-sans text-lg leading-[1.45] text-ink/60 mt-2">Straight from the field — practical guides and real results from the local businesses we work with. How they win more reviews, rank higher on Google, and turn their website into booked jobs.</p>
            </div>
            <a href="/research" className="inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium leading-none transition-[scale,background-color,color,filter] duration-150 ease-out outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:scale-[0.96] bg-ink/[0.06] text-ink/80 hover:bg-ink/[0.1] h-8 px-3 text-sm shrink-0">View all blogs</a>
          </div>
        </Reveal>
        <Stagger className="mt-8 grid grid-cols-3 gap-3 md:gap-4">
          {posts.map(post => (
            <div key={post.href}>
              <ResearchCard post={post} />
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
