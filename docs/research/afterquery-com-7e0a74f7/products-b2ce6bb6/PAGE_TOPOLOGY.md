# /products — Topology & Behaviors

See `docs/research/afterquery-com-7e0a74f7/contact-dc38169e/PAGE_TOPOLOGY.md` (run-2 combined notes) and `components/ProductsSection.spec.md` for full data.

- Single `<section className="pb-24 pt-12 md:pb-36 md:pt-16">`, container `w-[min(100%_-_2rem,1040px)]`.
- Reveal(y50): h1 "Products" (serif 30px → 34 → 38, text-ink/80).
- Reveal(delay 0.05): intro block (mt-8 space-y-5; 3 paragraphs 18px/1.45 ink/60 medium? plain).
- 12 product rows, each inside Reveal(y50): row grid (border-t ink/10, py-7 md:py-8, 2-col at ≥810: `md:grid-cols-[1.13fr_1fr] md:items-start md:gap-x-4`); title col: 6px×16px colored bar (inline backgroundColor, per-row color list in spec) + serif 24px h3; desc col: 14px ink/60 p. Static content — interaction model: scroll reveals only.
- md breakpoint 810px (custom).
