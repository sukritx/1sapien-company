# ContactSection (page shell) Specification

## Overview
- **Target file:** `src/components/sites/afterquery-com-7e0a74f7/contact-dc38169e/ContactSection.tsx` (server)
- **Interaction model:** scroll-driven reveal (2 blocks); static otherwise
- Imports: `Reveal` from `../../shared/Reveal`; `ContactForm`, `ContactAside` local files.

## DOM (verbatim classes)
```
<section className="pb-4 pt-20 md:pt-28">
  <div className="mx-auto w-[min(100%_-_2rem,1040px)]">
    <Reveal className="grid grid-cols-1 gap-y-4 lg:grid-cols-2 lg:items-start">   {/* y=50 default */}
      <h1 className="font-serif text-ink tracking-[-0.01em] text-balance text-[1.875rem] leading-[1.05] md:text-[2.125rem] lg:text-[2.375rem]">Contact us</h1>
      <p className="font-sans text-lg leading-[1.45] text-ink/60">
        Ready to build better AI? Get in touch to discuss your data needs and explore how we can accelerate your AI development.
      </p>
    </Reveal>
    <Reveal delay={0.05} y={32} className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-0">
      <div className="lg:pr-10 lg:pt-10">
        <ContactForm />
      </div>
      <ContactAside />
    </Reveal>
  </div>
</section>
```
Notes: h1 is 30px/1.05 mobile → 34px md → 38px lg (computed at 1440: 38px/39.9px, tracking -0.38px). Header p sits right column on lg (items-start). Reveal inline styles produced: `--reveal-y:50px` (header) and `--reveal-y:32px;transition-delay:0.05s` (body grid). Mobile order: h1, p, form column, aside. Responsive paddings per classes.
