# HeroSection Specification

## Overview
- **Target file:** `src/components/sites/afterquery-com-7e0a74f7/root-e0627e8d/HeroSection.tsx`
- **Interaction model:** scroll-driven reveal + time-driven typewriter (on load), hover pills
- Hero typewriter tagline uses shared `Typewriter`; reveal wrappers use shared `Reveal`/`Stagger`.

## DOM Structure (verbatim)
```
<section className="pt-14 md:pt-20">            <!-- pt 56px mobile / 80px ≥810 -->
  <div className="mx-auto w-[min(100%_-_2rem,688px)]">
    <Stagger>                                     {/* div data-stagger; 3 children */}
      <div>
        <h1 className="font-serif text-ink tracking-[-0.01em] text-balance text-2xl leading-[1.15] max-w-[28ch]">
          We teach machines how experts think.
        </h1>
      </div>
      <div>
        <p aria-label="The future of AI won’t be trained on more data, it will be trained on better thinking."
           className="relative mt-5 max-w-[46ch] font-serif text-xl leading-[1.2] text-ink/55">
          <Typewriter text="The future of AI won’t be trained on more data, it will be trained on better thinking." />
        </p>
      </div>
      <div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a class={dark pill} href="/contact">Get data</a>
          <a class={soft pill} href="/research">Explore research</a>
        </div>
      </div>
    </Stagger>
  </div>
  <div className="mx-auto w-[min(100%_-_2rem,1136px)] mt-14 md:mt-20">
    <Reveal delay={0.15}>                          {/* sets --reveal-y:50px + transition-delay:.15s */}
      <div className="relative overflow-hidden rounded-[4px] ring-1 ring-inset ring-ink/10">
        <img src="/sites/afterquery-com-7e0a74f7/root-e0627e8d/images/landing-hero.webp" alt=""
             width={2080} height={838} className="h-auto w-full" />
        <img src="/sites/afterquery-com-7e0a74f7/shared/brand/hero-mark.svg" alt="" aria-hidden
             className="pointer-events-none absolute left-1/2 top-1/2 w-24 -translate-x-1/2 -translate-y-1/2 md:w-36" />
      </div>
    </Reveal>
  </div>
</section>
```

## Pills
Pill base: `inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium leading-none transition-[scale,background-color,color,filter] duration-150 ease-out outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:scale-[0.96] h-8 px-3 text-sm`
- Get data: + `bg-ink/90 text-bg hover:bg-ink`
- Explore research: + `bg-ink/[0.06] text-ink/80 hover:bg-ink/[0.1]`

## Typography notes
- h1: 24px (text-2xl), line-height 1.15, serif (Martina Plantijn), text black, tracking -0.01em (base), max-w 28ch. All viewports.
- Typewriter p: serif 20px, lh 1.2, text-ink/55; renders aria-hidden inner span: typed slice + caret `|` + transparent remainder (constant width). Caret blinks 1.15s step-end infinite.
- Stagger children fade up 0.8s, 0.2s × index delays, translateY(28px); wrapper y default.
- Hero image natural ratio 2080×838 (h auto, full col width ≤1136px); center overlay mark w-24 (96) → md:w-36 (144), natural ratio 118×96.
- Rounded 4px + ring-1 inset ink/10 on image container.
