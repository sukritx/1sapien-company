import { Reveal } from "../shared/Reveal";
import { Stagger } from "../shared/Stagger";
import type { ResearchPost } from "../../../../types/sites/afterquery-com-7e0a74f7";
import { ResearchCard } from "./ResearchCard";

const RESEARCH_IMAGE_ROOT = "/sites/afterquery-com-7e0a74f7/root-e0627e8d/images/research/";

const posts: ResearchPost[] = [
  {
    title: "Turn every finished job into a 5-star Google review — automatically",
    description:
      "The moment a job is done, we text your customer and make leaving a review one tap. More 5-star reviews, higher rankings, more booked jobs — on autopilot.",
    href: "/blog/more-5-star-google-reviews",
    image: `${RESEARCH_IMAGE_ROOT}how-afterquery-helped-nvidia-hill-climb-gdpval.jpg`,
    imageAlt: "",
    category: "Service",
    categoryBarClass: "bg-ink/80",
    dateText: "Jul 2, 2026",
    dateISO: "2026-07-02",
  },
  {
    title: "Rank #1 in your service area on Google",
    description:
      "When someone nearby searches for what you do, you’re the first name they see — top of the map, top of the results. We get you there and keep you there, so the calls come to you.",
    href: "/blog/rank-number-one-on-google-maps",
    image: `${RESEARCH_IMAGE_ROOT}solving-the-last-mile-problem-in-partnership-with-the-raine-group.jpg`,
    imageAlt: "",
    category: "Service",
    categoryBarClass: "bg-ink/80",
    dateText: "Apr 28, 2026",
    dateISO: "2026-04-28",
  },
  {
    title: "A website that turns visitors into booked jobs",
    description:
      "Not a digital brochure — a 24/7 sales system. Fast, beautiful, and built to capture every lead and drop it straight into your calendar before your competitor even answers the phone.",
    href: "/blog/website-that-books-jobs",
    image: `${RESEARCH_IMAGE_ROOT}how-we-improved-terminal-bench-2-with-tinker-and-harbor.jpg`,
    imageAlt: "",
    category: "Service",
    categoryBarClass: "bg-ink/80",
    dateText: "Mar 31, 2026",
    dateISO: "2026-03-31",
  },
];

export function ResearchSection() {
  return (
    <section className="pb-8 pt-16">
      <div className="mx-auto w-[min(100%_-_2rem,1136px)]">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-[40rem]">
              <h2 className="font-sans text-2xl font-medium leading-[1.15] text-ink/80">Our services</h2>
              <p className="font-sans text-lg leading-[1.45] text-ink/60 mt-2">Three simple services, one system. We run them together so each one makes the others stronger — more reviews lift your rankings, higher rankings bring more visitors, and a better website turns those visitors into booked jobs.</p>
            </div>
            <a href="/research" className="inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium leading-none transition-[scale,background-color,color,filter] duration-150 ease-out outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:scale-[0.96] bg-ink/[0.06] text-ink/80 hover:bg-ink/[0.1] h-8 px-3 text-sm shrink-0">Book a Free Demo</a>
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
