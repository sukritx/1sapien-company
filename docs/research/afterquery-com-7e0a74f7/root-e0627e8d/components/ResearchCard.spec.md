# ResearchCard Specification

## Overview
- **Target file:** `src/components/sites/afterquery-com-7e0a74f7/root-e0627e8d/ResearchCard.tsx`
- **Interaction model:** static + hover states
- Props: `{ post: ResearchPost }` — type from `../../../../types/sites/afterquery-com-7e0a74f7` (ResearchPost). Whole card is one link (aria-label = title).

## DOM Structure (verbatim)
```html
<a aria-label="{title}" href="{href}"
   class="group block rounded-[4px] transition-transform duration-300 ease-out hover:-translate-y-1 outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg">
  <div aria-hidden="true"
       class="relative aspect-square w-full bg-ink overflow-hidden rounded-[4px] ring-1 ring-inset ring-ink/15">
    <img alt="" loading="lazy" decoding="async"
         src="/sites/afterquery-com-7e0a74f7/root-e0627e8d/images/research/{file}"
         class="absolute inset-0 h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.05]" />
  </div>
  <div class="mt-3 md:mt-5">
    <h3 class="font-serif text-ink tracking-[-0.01em] text-balance text-xl leading-[1.15] text-[13px] leading-[1.3] text-ink transition-opacity duration-150 group-hover:opacity-70 md:text-xl md:leading-[1.15]">
      {title}
    </h3>
    <p class="font-sans text-sm leading-[1.45] text-ink/60 mt-3 hidden max-w-[52ch] md:block">
      {description}
    </p>
    <div class="mt-2.5 flex items-center gap-1.5 font-sans text-[11px] leading-none md:mt-4 md:gap-2 md:text-sm">
      <span aria-hidden="true" class="h-2.5 w-1.5 shrink-0 bg-ink/80"></span>
      <span class="font-medium text-ink/60">{category}   {/* "Blog" */}</span>
      <span aria-hidden="true" class="hidden text-ink/15 md:inline">·</span>
      <time datetime="{ISO}" class="hidden text-ink/40 md:inline">{dateText}</time>
    </div>
  </div>
</a>
```

## States
- Card: translate-y 0 → -4px (hover:-translate-y-1) 300ms ease-out.
- Image: scale 1 → 1.05, 600ms ease-out on group hover.
- Title: opacity 1 → 0.7, 150ms on group hover.
- Focus ring on link: ring-2 ring-ink/40 offset-2.

## Typography/responsive
- h3: 13px/1.3 mobile serif → ≥810 20px (xl)/1.15; desc & date & "·" hidden below 810 (md:block/inline); desc max-w 52ch. Image bg-ink placeholder behind (jpeg cover). Meta text: 11px mobile → sm 14px ≥810; meta spacing mt-2.5 → md:mt-4, gap-1.5 → md:gap-2.
