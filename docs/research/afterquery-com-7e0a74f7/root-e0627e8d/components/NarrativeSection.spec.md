# NarrativeSection Specification (Problem → Solution)

## Overview
- **Target file:** `src/components/sites/afterquery-com-7e0a74f7/root-e0627e8d/NarrativeSection.tsx`
- **Interaction model:** scroll-driven reveals only
- One `<section>` with three stacked 688px columns (image column between text columns).

## DOM Structure (verbatim)
```
<section className="pb-14 pt-8">
  {/* Column 1 — Problem */}
  <div className="mx-auto w-[min(100%_-_2rem,688px)]">
    <Reveal>                                     {/* data-reveal, y 50 */}
      <p className="font-sans text-sm leading-[1.45] text-ink/60 mb-4">Problem</p>
      <h2 className="font-serif text-ink tracking-[-0.01em] text-balance text-2xl leading-[1.15] text-ink/80">
        AI researchers and enterprises are hitting walls with suboptimal data solutions.
      </h2>
      <div className="mt-4 space-y-4">
        <p className="font-sans text-lg leading-[1.45] text-ink/60 font-medium">
          Today’s models can generate answers. But they struggle with real work. Because real work isn’t just outputs. It’s decisions, tradeoffs, and context. That knowledge doesn’t live on the internet — it lives inside experts.
        </p>
        <p className="font-sans text-lg leading-[1.45] text-ink/60 font-medium">
          Expertise has never been captured. Until now.
        </p>
        <p className="font-sans text-lg leading-[1.45] text-ink/60 font-medium">
          The most valuable knowledge isn’t written down. It exists in how professionals think — not just answers, but reasoning, decisions, tradeoffs, and context. We work with domain experts to capture that thinking, then structure it into training data models can learn from.
        </p>
      </div>
    </Reveal>
  </div>

  {/* Column 2 — image */}
  <div className="mx-auto w-[min(100%_-_2rem,688px)] mt-14">
    <Reveal>
      <div className="overflow-hidden rounded-[4px] ring-1 ring-inset ring-ink/10">
        <img src="/sites/afterquery-com-7e0a74f7/root-e0627e8d/images/man-typing.webp" alt=""
             width={2720} height={1161} className="h-auto w-full" />
      </div>
    </Reveal>
  </div>

  {/* Column 3 — Solution */}
  <div className="mx-auto w-[min(100%_-_2rem,688px)] mt-14">
    <Reveal>
      <p className="font-sans text-sm leading-[1.45] text-ink/60 mb-4">Our solution</p>
      <h2 className="font-serif text-ink tracking-[-0.01em] text-balance text-2xl leading-[1.15] text-ink/80">
        We turn real-world work into training data.
      </h2>
      <p className="font-sans text-lg leading-[1.45] text-ink/60 mt-4 font-medium">
        AfterQuery is an applied research lab curating data solutions for frontier foundation model development. Models trained on outputs plateau. Models trained on reasoning improve. We build datasets that reflect how experts actually solve problems — step by step, decision by decision.
      </p>
      <p className="font-sans text-lg leading-[1.45] text-ink/60 mt-4 font-medium">
        Our data includes:
      </p>
    </Reveal>
  </div>
</section>
```

## Notes
- Eyebrow: sans 14px/1.45 ink/60 with mb-4.
- h2 serif 24px ink/80 (all viewports).
- Paragraphs sans 18px (text-lg)/1.45, weight 500, ink/60. Leading labels uppercase? NO — plain sentence case as written.
- Em dashes and curly apostrophes exactly as written above (copy verbatim, including "—" and ’).
- section pt-8 (32), pb-14 (56); columns mt-14 between.
