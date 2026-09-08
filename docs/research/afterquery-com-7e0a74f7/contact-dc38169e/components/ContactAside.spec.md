# ContactAside Specification

## Overview
- **Target file:** `src/components/sites/afterquery-com-7e0a74f7/contact-dc38169e/ContactAside.tsx`
- **Interaction model:** static + link hovers (underline appears on hover via hover:underline class)

## DOM (verbatim)
```html
<aside class="relative flex min-h-[400px] flex-col gap-6 overflow-hidden rounded-[4px] bg-ink p-6 text-inverse md:gap-8 md:p-8 lg:h-[640px] lg:min-h-0">
  <img src="/sites/afterquery-com-7e0a74f7/contact-dc38169e/images/contact-right.webp" alt="" loading="lazy"
       class="absolute inset-0 h-full w-full object-cover" />
  <div class="relative z-10">
    <p class="font-sans text-sm text-inverse">Sales inquiries</p>
    <a href="mailto:sales@afterquery.com" class="contactLink">sales@afterquery.com</a>
  </div>
  <div class="relative z-10">
    <p class="font-sans text-sm text-inverse">Support inquiries</p>
    <a href="mailto:support@afterquery.com" class="contactLink">support@afterquery.com</a>
    <p class="mt-3 max-w-[52ch] font-sans text-sm italic leading-[1.5] text-inverse/70">
      *If you’re looking for our Experts site (contract jobs), please refer to <a href="https://experts.afterquery.com/" target="_blank" rel="noreferrer" class="text-inverse/90 rounded-sm decoration-inverse/60 underline-offset-[3px] outline-none transition-colors duration-150 hover:underline focus-visible:ring-2 focus-visible:ring-inverse/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink">experts.afterquery.com</a>. All messages seeking Expert roles are automatically discarded.
    </p>
  </div>
  <div class="relative z-10">
    <p class="font-sans text-sm text-inverse">Social</p>
    <div class="mt-1 flex flex-wrap gap-x-4 gap-y-2">
      <a href="https://www.linkedin.com/company/afterquery" target="_blank" rel="noreferrer" class="socialLink">LinkedIn</a>
      <a href="https://x.com/AfterQuery" target="_blank" rel="noreferrer" class="socialLink">X</a>
    </div>
  </div>
</aside>
```
Contact-link class (mailto links): `mt-1 inline-block font-sans text-base text-inverse/75 rounded-sm decoration-inverse/60 underline-offset-[3px] outline-none transition-colors duration-150 hover:underline focus-visible:ring-2 focus-visible:ring-inverse/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink`
Social-link class: same minus `mt-1 inline-block` (block default inline a; keep `font-sans text-base text-inverse/75 ...`).

## Notes
- White text on ink #000 panel; image absolutely covers whole panel (behind z-10 content) — it is a dark photo; keep alt "".
- Panel heights: min 400px mobile (content grows); lg fixed 640px aligned with form column height. gap 6 mobile/8 md between blocks. rounded-[4px].
- Full text with curly apostrophe in "*If you’re looking…" verbatim; em dash not used here.
