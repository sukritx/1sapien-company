# LogoMarquee Specification

## Overview
- **Target file:** `src/components/sites/afterquery-com-7e0a74f7/root-e0627e8d/LogoMarquee.tsx`
- **Interaction model:** time-driven marquee (32s linear infinite; pauses on hover), static otherwise
- Reveal wrapper shared; logo masks rendered as masked spans (bg color + mask-image), not <img>.

## DOM Structure (verbatim)
```
<section className="px-4 pb-10 pt-8 md:pb-12">
  <div className="flex flex-col items-center text-center">
    <Reveal>            {/* unwrapped div data-reveal — actually Reveal receives className="flex flex-col items-center text-center" */}
      ...
```
The Reveal div itself carries `className="flex flex-col items-center text-center"` and wraps:
```html
<p class="font-serif text-ink tracking-[-0.01em] text-balance text-2xl leading-[1.15] text-ink/70">
  Backed by angels from
</p>
<div class="mt-8 w-full max-w-[40rem] overflow-hidden">
  <ul class="logo-marquee flex w-max items-center text-ink/50">
    {6 logo items ×2 (duplicate set for seamless loop)}
  </ul>
</div>
<p class="mt-10 text-sm leading-[1.4] text-ink/60">
  Powering every frontier AI research lab
</p>
```

### Logo item (×12, duplicated ×2 in DOM order)
```html
<li class="mr-14 shrink-0">
  <span role="img" aria-label="Anthropic" class="block bg-ink/50"
        style="width:155px;height:18px;mask-image:url(/sites/afterquery-com-7e0a74f7/shared/brand/logos/anthropic.svg);-webkit-mask-image:url(...);mask-repeat:no-repeat;-webkit-mask-repeat:no-repeat;mask-size:contain;-webkit-mask-size:contain;mask-position:center;-webkit-mask-position:center"></span>
</li>
```

## Data (order, name, width×height px)
| name | file | w | h |
|---|---|---|---|
| Anthropic | anthropic.svg | 155 | 18 |
| DeepMind | deepmind.svg | 141 | 33 |
| Meta | meta.svg | 107 | 21 |
| OpenAI | openai.svg | 103 | 28 |
| Google | google.svg | 87 | 29 |
| Microsoft | microsoft.svg | 112 | 24 |

Mask url prefix: `/sites/afterquery-com-7e0a74f7/shared/brand/logos/`

## CSS behaviors (already global in globals.css)
- `.logo-marquee { animation: 32s linear infinite aq-marquee }` translating 0 → -50%; width = w-max (12 items in 2 identical halves).
- `.logo-marquee:hover { animation-play-state: paused }`
- Reduced motion: animation disabled (global media rule) — no JS needed.

## Responsive
- px-4 section padding; heading 24px serif ink/70 centered; marquee clipped by overflow-hidden max-w-40rem (640px) centered; caption 14px ink/60 below mt-10. Gap between items via li.mr-14 (56px right margin).
