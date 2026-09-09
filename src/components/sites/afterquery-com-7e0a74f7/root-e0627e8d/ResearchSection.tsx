import { Reveal } from "../shared/Reveal";
import { Stagger } from "../shared/Stagger";
import type { ResearchPost } from "../../../../types/sites/afterquery-com-7e0a74f7";
import { ResearchCard } from "./ResearchCard";

const RESEARCH_IMAGE_ROOT = "/sites/afterquery-com-7e0a74f7/root-e0627e8d/images/research/";

const posts: ResearchPost[] = [
  {
    title: "How 1Sapien Helped NVIDIA Hill-Climb GDPval",
    description:
      "NVIDIA publicly used 1Sapien’s Off-The-Shelf Office Agent Training Dataset to improve Nemotron 3 Ultra on GDPval — the only data vendor named in their technical report, worth 11.4 GDPval points in their warmup ablation.",
    href: "/blog/how-afterquery-helped-nvidia-hill-climb-gdpval",
    image: `${RESEARCH_IMAGE_ROOT}how-afterquery-helped-nvidia-hill-climb-gdpval.jpg`,
    imageAlt: "",
    category: "Blog",
    categoryBarClass: "bg-ink/80",
    dateText: "Jul 2, 2026",
    dateISO: "2026-07-02",
  },
  {
    title: "Solving the Last Mile Problem in Partnership with The Raine Group",
    description:
      "Encoding domain-specific excellence into forms machines can learn — so agents think and execute like real-world experts.",
    href: "/blog/solving-the-last-mile-problem-in-partnership-with-the-raine-group",
    image: `${RESEARCH_IMAGE_ROOT}solving-the-last-mile-problem-in-partnership-with-the-raine-group.jpg`,
    imageAlt: "",
    category: "Blog",
    categoryBarClass: "bg-ink/80",
    dateText: "Apr 28, 2026",
    dateISO: "2026-04-28",
  },
  {
    title: "How We Improved Terminal-Bench 2.0 Scores by Over 5x Using Tinker and Harbor",
    description:
      "How expert-curated trajectories and tooling lifted Terminal-Bench 2.0 scores more than 5x — and what it says about training agents.",
    href: "/blog/how-we-improved-terminal-bench-2-with-tinker-and-harbor",
    image: `${RESEARCH_IMAGE_ROOT}how-we-improved-terminal-bench-2-with-tinker-and-harbor.jpg`,
    imageAlt: "",
    category: "Blog",
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
              <h2 className="font-sans text-2xl font-medium leading-[1.15] text-ink/80">Research</h2>
              <p className="font-sans text-lg leading-[1.45] text-ink/60 mt-2">Our approach starts with research: where exactly do models break down in real professional contexts? Why do these failure modes exist? We take a proactive stance — every domain has its own failure patterns.</p>
            </div>
            <a href="/research" className="inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium leading-none transition-[scale,background-color,color,filter] duration-150 ease-out outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:scale-[0.96] bg-ink/[0.06] text-ink/80 hover:bg-ink/[0.1] h-8 px-3 text-sm shrink-0">More research</a>
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
