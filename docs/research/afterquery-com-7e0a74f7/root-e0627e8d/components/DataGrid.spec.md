# DataGrid Specification

## Overview
- **Target file:** `src/components/sites/afterquery-com-7e0a74f7/root-e0627e8d/DataGrid.tsx`
- **Interaction model:** scroll-driven stagger reveal; static otherwise
- Renders the grid container div AND the divider `<hr>` sibling div that follows it in <main> (export `DataGrid` and `Divider`; page.tsx renders `<DataGrid />` then `<Divider />` as siblings).

## DOM Structure (verbatim)
```
{/* grid wrapper */}
<div className="mx-auto w-[min(100%_-_2rem,688px)] pb-14">
  <Stagger>                                            {/* div data-stagger */}
    <div className="grid grid-cols-2 gap-x-4 gap-y-8">   {/* grid inside stagger wrapper */}
      {4 × solution item}
    </div>
  </Stagger>
</div>
```
NOTE from target: `<Stagger>` wraps a single child grid div; 4 grid cells are the stagger children? NO — target DOM: `div.mx-auto…pb-14` → `div[data-stagger].grid.grid-cols-2.gap-x-4.gap-y-8` directly (the stagger element IS the grid, children = 4 cells). Replicate: `<Stagger className="grid grid-cols-2 gap-x-4 gap-y-8">` with 4 cells inside.

### Item cell
```html
<div class="flex flex-col items-start gap-3 sm:flex-row sm:gap-6">
  <img class="size-11 shrink-0 rounded-[4px] object-cover mix-blend-multiply" src="…m1.avif" alt="" width="44" height="44" />
  <div>
    <div class="font-sans text-lg leading-[1.45] text-ink/80 text-[14px] font-medium leading-[1.25] text-ink sm:text-lg sm:leading-[1.2]">TITLE</div>
    <p class="font-sans text-lg leading-[1.45] text-ink/60 mt-1.5 text-[12.5px] font-medium leading-[1.45] sm:mt-2 sm:text-lg">DESCRIPTION</p>
  </div>
</div>
```
(Copy class strings verbatim — conflict resolution order is intentional.)

## Data (4 items; verbatim)
1. icon `/sites/afterquery-com-7e0a74f7/root-e0627e8d/images/m1.avif` — **Supervised Fine-Tuning (SFT)** — High-quality prompt–response pairs and chain-of-thought reasoning traces — teaching models how to behave across complex tasks.
2. m2.avif — **Reinforcement Learning + Rubrics** — Expert-designed prompts with grading frameworks for reasoning and code generation — turning subjective judgment into scalable reward signals.
3. m3.avif — **Agent Environments (API / MCP)** — Custom environments across APIs, tools, and services — enabling training and evaluation of agents in real workflows.
4. m4.avif — **Computer Use Trajectories** — Human-demonstrated interactions across browser and desktop environments — teaching models to navigate and operate software end-to-end.

(Em dash — and en dash – used exactly as above.)

## Divider export
```jsx
export function Divider() {
  return (
    <div className="mx-auto w-[min(100%_-_2rem,688px)]">
      <hr className="h-px w-full border-0 bg-ink/[0.08]" />
    </div>
  );
}
```

## Behavior/responsive
- Cell: vertical (icon above) until 640px, then row with 24px gap.
- Grid 2 columns always, gap-x-4 (16) / gap-y-8 (32). pb-14 wrapper. Title mobile renders 14px-class + 18px (order conflict; verbatim classes reproduce target computed values: 18px ≥640 via sm:text-lg with sm:leading-[1.2]; desc 12.5px-class mobile → 18px text-lg wins below sm too per target engine).
