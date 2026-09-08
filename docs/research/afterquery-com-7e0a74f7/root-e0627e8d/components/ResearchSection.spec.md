# ResearchSection Specification

## Overview
- **Target file:** `src/components/sites/afterquery-com-7e0a74f7/root-e0627e8d/ResearchSection.tsx`
- **Interaction model:** scroll-driven stagger reveal; hover states on cards
- Imports `ResearchCard` (own file) from `./ResearchCard`.

## DOM Structure (verbatim)
```
<section className="pb-8 pt-16">
  <div className="mx-auto w-[min(100%_-_2rem,1136px)]">
    {/* header row */}
    <Reveal>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-[40rem]">
          <h2 className="font-sans text-2xl font-medium leading-[1.15] text-ink/80">Research</h2>
          <p className="font-sans text-lg leading-[1.45] text-ink/60 mt-2">
            Our approach starts with research: where exactly do models break down in real professional contexts? Why do these failure modes exist? We take a proactive stance — every domain has its own failure patterns.
          </p>
        </div>
        <a href="/research" className="inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium leading-none transition-[scale,background-color,color,filter] duration-150 ease-out outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:scale-[0.96] bg-ink/[0.06] text-ink/80 hover:bg-ink/[0.1] h-8 px-3 text-sm shrink-0">
          More research
        </a>
      </div>
    </Reveal>
    {/* grid */}
    <Stagger className="mt-8 grid grid-cols-3 gap-3 md:gap-4">
      <div>… <ResearchCard post={…} /> …</div>    {/* 3 cells; cell = plain div */}
    </Stagger>
  </div>
</section>
```

## Data (verbatim — pass to ResearchCard)
1. title: How AfterQuery Helped NVIDIA Hill-Climb GDPval
   desc: NVIDIA publicly used AfterQuery’s Off-The-Shelf Office Agent Training Dataset to improve Nemotron 3 Ultra on GDPval — the only data vendor named in their technical report, worth 11.4 GDPval points in their warmup ablation.
   href: /blog/how-afterquery-helped-nvidia-hill-climb-gdpval · img: images/research/how-afterquery-helped-nvidia-hill-climb-gdpval.jpg · date: Jul 2, 2026 / 2026-07-02
2. title: Solving the Last Mile Problem in Partnership with The Raine Group
   desc: Encoding domain-specific excellence into forms machines can learn — so agents think and execute like real-world experts.
   href: /blog/solving-the-last-mile-problem-in-partnership-with-the-raine-group · img: …solving-the-last-mile-problem-in-partnership-with-the-raine-group.jpg · date: Apr 28, 2026 / 2026-04-28
3. title: How We Improved Terminal-Bench 2.0 Scores by Over 5x Using Tinker and Harbor
   desc: How expert-curated trajectories and tooling lifted Terminal-Bench 2.0 scores more than 5x — and what it says about training agents.
   href: /blog/how-we-improved-terminal-bench-2-with-tinker-and-harbor · img: …how-we-improved-terminal-bench-2-with-tinker-and-harbor.jpg · date: Mar 31, 2026 / 2026-03-31

Image path prefix: `/sites/afterquery-com-7e0a74f7/root-e0627e8d/images/research/`. Category label for all: "Blog".

## Reveal/CSS
- Header Reveal default (y 50); grid Stagger cells fade 0.8s with 0.2s×i delays.
- Grid always 3 columns (grid-cols-3), gap 12px → md 16px.
- Card height/width: image square (aspect-square), col ≈ 368px ≥810.
