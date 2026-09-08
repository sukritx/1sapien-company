# CareersBanner Specification

## Overview
- **Target file:** `src/components/sites/afterquery-com-7e0a74f7/root-e0627e8d/CareersBanner.tsx`
- **Interaction model:** scroll-driven reveal; hover link states

## DOM Structure (verbatim)
```
<section className="pb-[100px] pt-16">
  <div className="mx-auto w-[min(100%_-_2rem,1136px)]">
    <Reveal>                                   {/* inner plain div data-reveal */}
      <div className="relative overflow-hidden rounded-[4px] ring-1 ring-inset ring-ink/10">
        {/* banner image — absolute cover */}
        <img src="/sites/afterquery-com-7e0a74f7/root-e0627e8d/images/careers-banner.webp" alt=""
             loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div aria-hidden="true" className="absolute inset-0 bg-ink/40" />
        <div className="relative flex flex-col gap-6 p-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[56ch]">
            <h5 className="font-serif text-ink tracking-[-0.01em] text-balance text-2xl leading-[1.15] text-inverse">
              Careers
            </h5>
            <p className="font-sans text-sm leading-[1.45] text-ink/80 mt-3 text-inverse/80">
              We’re hiring for engineering, research, and operations roles to help us accelerate AI training data solutions. Join the team revolutionizing AI Research and Training.
            </p>
          </div>
          <a className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-inverse" href="/careers">
            <span className="underline decoration-inverse/40 underline-offset-4 transition-colors duration-150 group-hover:decoration-inverse">
              See open roles
            </span>
            <span aria-hidden="true" className="transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </a>
        </div>
      </div>
    </Reveal>
  </div>
</section>
```

## Notes
- Image is object-cover filling whatever height content sets (container has no fixed aspect; height = content height incl p-6 padding). Rounded 4px ring ink/10.
- Text inverse = white (#fff). h5 serif 24px white; p sans 14px white/80.
- Link text white, underline white/40 offset 4, hover full white; ↗ glyph (U+2197) shifts +0.5/-0.5 on hover (150ms ease-out).
- Mobile: column layout (flex-col gap-6, p-6); ≥810: row items-end justify-between.
