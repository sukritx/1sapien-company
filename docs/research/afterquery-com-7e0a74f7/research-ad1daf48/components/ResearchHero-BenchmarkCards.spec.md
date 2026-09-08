# ResearchHero + BenchmarkCards Specification

## Overview
- Target files: `research-ad1daf48/ResearchHero.tsx`, `research-ad1daf48/BenchmarkCards.tsx` (server)
- Interaction: hover states; Reveal wrappers
- Import Reveal `../shared/Reveal`.

## FILE 1: ResearchHero.tsx — section 1 of /research
```
<section className="pb-12 pt-20 text-center md:pb-16 md:pt-28">
  <div className="mx-auto w-[min(100%_-_2rem,1040px)]">
    <Reveal>
      <p className="font-sans text-sm leading-[1.45] text-ink/60 mb-5">Research</p>
      <h1 className="font-serif text-ink tracking-[-0.01em] text-balance text-[1.875rem] leading-[1.05] md:text-[2.125rem] lg:text-[2.375rem]">Data quality makes all the difference.</h1>
      <p className="font-sans text-lg leading-[1.45] text-ink/60 mx-auto mt-6 max-w-[58ch]">We’re driven by the conviction that model performance is fundamentally bounded by training data quality. Through expert collaboration, rigorous curation methodologies, and deep domain expertise, we research datasets that power tomorrow’s models.</p>
    </Reveal>
  </div>
</section>
```
(Reveal div has no className; three children stacked inside; text-center.)

## FILE 2: BenchmarkCards.tsx — section 2
```
<section className="pb-14 md:pb-16">
  <div className="mx-auto w-[min(100%_-_2rem,1040px)]">
    <Reveal>
      <div className="mx-auto grid max-w-[696px] grid-cols-2 gap-3 md:gap-6">
        {2 × card}
      </div>
      <p className="mt-5 text-center font-sans text-sm leading-[1.45] text-ink/60">Select benchmarks co-created by AfterQuery</p>
    </Reveal>
  </div>
</section>
```
Caption actual full class order: `mt-5 text-center font-sans text-sm leading-[1.45] text-ink/60` (verify order in original: class="font-sans text-sm leading-[1.45] text-ink/60 mt-5 text-center" — use that verbatim).

### Benchmark card (2, identical classes; data differs)
```html
<a target="_blank" rel="noopener noreferrer" aria-label="{Title} — read paper"
   class="group relative overflow-hidden rounded-[4px] p-6 text-inverse outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg transition-[scale] duration-300 ease-out hover:scale-[0.995]"
   href="…">
  <div aria-hidden="true" class="absolute inset-0 rounded-[inherit]" style="background-color:{COLOR}" />
  <div aria-hidden="true" class="absolute inset-0 overflow-hidden rounded-[inherit] opacity-60">
    <img alt="" loading="lazy" decoding="async" src="/sites/afterquery-com-7e0a74f7/shared/research/research-card-header.webp" class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
  </div>
  <div class="relative z-10 flex flex-col gap-2">
    <h2 class="font-serif text-ink tracking-[-0.01em] text-balance text-2xl leading-[1.15] text-[15px] leading-[1.25] text-inverse md:text-2xl md:leading-[1.15]">{Title}</h2>
    <div class="flex items-end justify-between gap-4">
      <p class="font-sans text-sm leading-[1.45] text-ink/80 min-w-0 flex-1 text-inverse/60 max-md:hidden md:line-clamp-2">{Description}</p>
      <span class="inline-flex items-center gap-1 shrink-0 whitespace-nowrap font-sans text-sm font-medium text-inverse/80">View benchmark<span aria-hidden="true" class="transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span></span>
    </div>
  </div>
</a>
```
(Order classes verbatim; conflicting text-2xl/text-[15px] intentional.)

### Data
1. Title "SpreadsheetBench 2" — href https://spreadsheetbench.github.io/ — color `rgba(2, 99, 64, 0.8)` (inline backgroundColor) — desc "Evaluating LLM agents on challenging, expert-curated, end-to-end spreadsheet tasks — financial modeling, debugging, and visualization in complex multi-sheet workbooks."
2. Title "Legora BAR" — href https://legora.com/bar — color `rgba(45, 73, 149, 0.8)` — desc "Legora’s Benchmark for Agentic Reasoning: end-to-end legal tasks drawn from real cases across 28 practice areas, with a public case co-created with AfterQuery."
Note curly apostrophe in Legora’s. Card aria-labels: "{Title} — read paper" with em dash.
