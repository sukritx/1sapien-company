# BEHAVIORS.md — AfterQuery homepage

Method note: headless environment reports `prefers-reduced-motion: reduce`, so animations were verified from source CSS + minified component code (extracted from the site's own JS chunks/CSS file), which is authoritative.

## Global CSS behaviors (from target stylesheet 07fnq9mvuoncc.css)
- Base: `html { -webkit-font-smoothing: antialiased; text-rendering: optimizelegibility }`, `body { background: var(--color-bg); color: var(--color-ink); font-family: var(--font-sans) }`
- `h1..h6 { font-family: var(--font-serif); letter-spacing: -.01em; text-wrap: balance }`, `p { text-wrap: pretty }`
- `::selection { background: var(--color-ink); color: var(--color-bg) }`
- `:root { --ease-brand: cubic-bezier(.23,.98,.56,1) }`
- Reduced motion media: `*,::before,::after { transition-duration:.01ms!important; animation-duration:.01ms!important; animation-iteration-count:1!important }`, `[data-reveal],[data-stagger]>*{opacity:1!important;transform:none!important}`, `.caret-blink{animation:none}`, `.logo-marquee{animation:none}`

## Scroll-reveal system (custom Reveal/Stagger components — from JS chunk)
- `<Reveal delay=0 y=50>` renders `<div data-reveal style="--reveal-y:50px; transition-delay:<delay>s?">`
  - CSS: `[data-reveal]{opacity:0; transform:translateY(var(--reveal-y,50px)); transition:opacity 2s var(--ease-brand), transform 2s var(--ease-brand)}`
  - On IO intersection (rootMargin "-10% 0px", disconnect after first hit): sets attribute `data-revealed` → CSS `[data-reveal][data-revealed]{opacity:1;transform:none}`
- `<Stagger>` renders `<div data-stagger>`; children get `--stagger-i: <index>`
  - CSS: `[data-stagger]>*{opacity:0; transform:translateY(28px); transition:opacity .8s var(--ease-brand), transform .8s var(--ease-brand)}`
  - `[data-stagger][data-revealed]>*{opacity:1; transition-delay:calc(var(--stagger-i,0)*.2s); transform:none}`
- Usage map (this page): hero text block = Stagger(3); hero image = Reveal delay .15s; marquee section = Reveal; Problem col = Reveal; man-typing img = Reveal; Solution col = Reveal; DataGrid = Stagger(4); Research header = Reveal; Research grid = Stagger(3); Careers banner = Reveal. All y=50.
- SSR/no-JS fallback: content visible (noscript style opacity 1); hidden state only applied client-side pre-hydration? — verified visible post-hydration; implement: server-render visible, hydrate hides+IO reveals (matches original: JS sets initial hidden at mount, then reveals when in the 90% viewport band; transitions near-instant under reduce).

## Typewriter (from JS chunk)
- Text: "The future of AI won’t be trained on more data, it will be trained on better thinking."
- Rendering: `<p aria-label="<full text>">` > `<span aria-hidden>` > typed slice + `<span class="caret-blink inline-block w-0 overflow-visible text-ink/40">|</span>` + `<span class="text-transparent">` (remaining text invisible — layout width constant)
- rAF loop: start delay 150ms default; then +1 char every **36ms** (`charMs`); reduced motion → full text immediately
- Caret CSS: `@keyframes aq-caret { 0%,45%{opacity:1} 50%,to{opacity:0} }`, `.caret-blink{animation:1.15s step-end infinite aq-caret}`
- Hero p: `relative mt-5 max-w-[46ch] font-serif text-xl leading-[1.2] text-ink/55`

## Marquee
- `.logo-marquee{animation:32s linear infinite aq-marquee}` + `:hover{animation-play-state:paused}`; keyframes translate(0)→translate(-50%); container `overflow-hidden` (div mt-8 w-full max-w-[40rem]); UL w-max flex items-center text-ink/50
- 12 items = 6 unique ×2 (Anthropic 155×18, DeepMind 141×33, Meta 107×21, OpenAI 103×28, Google 87×29, Microsoft 112×24) — mask spans `role="img" aria-label`, bg-ink/50, mask-size contain, li.mr-14.shrink-0

## Hover states (all from classes)
- Header logo / footer logo: opacity 1 → 0.7, 150ms
- Nav links: text-ink/80 → text-ink (colors 150ms); underline span `-bottom-0.5 h-px w-full bg-ink/90 origin-left scale-x-0 → group-hover:scale-x-100`, transform 300ms cubic-bezier(.23,.98,.56,1)
- Pills (all): dark bg-ink/90 → hover:bg-ink; soft bg-ink/[0.06] → hover:bg-ink/[0.1]; scale active:scale-[0.96]; transition-[scale,background-color,color,filter] 150ms ease-out; focus-visible ring-2 ring-ink/40 offset-2 offset-bg
- Research card: `hover:-translate-y-1` (transform 300ms ease-out) on `<a>`; img inside `group-hover:scale-[1.05]` duration-[600ms] ease-out; h3 `group-hover:opacity-70` 150ms
- Careers link: underline decoration-inverse/40 → group-hover:decoration-inverse 150ms; ↗ span group-hover:translate-x-0.5 group-hover:-translate-y-0.5 150ms ease-out
- Footer links: text-ink/60 → hover:text-ink 150ms

## Mobile menu (button, <1200px visible)
- Closed: panel `overflow-hidden border-t border-ink/10 bg-bg transition-[max-height,opacity] duration-300 ease-out lg:hidden max-h-0 opacity-0`; button aria-label "Open menu" aria-expanded false; bars: top/bottom translate none, middle opacity 1
- Open: panel `max-h-[28rem] opacity-100`; button aria-label "Close menu" aria-expanded true; bar1 `translate-y-[7px] rotate-45`; bar2 `opacity-0`; bar3 `-translate-y-[7px] -rotate-45` (bars transition-transform duration-200 ease-out; middle transition-opacity duration-200)
- Items: `block rounded-lg px-2 py-3 text-base font-medium text-ink/80 hover:bg-ink/[0.04] hover:text-ink`; last li has `px-2 pt-3` + full-width Get data pill h-9 px-4 text-sm
- Panel ul: `flex flex-col gap-1 px-4 py-4`

## Responsive
- Breakpoints custom: **md = 810px, lg = 1200px** (sm default 640px)
- Nav links & hamburger flip at 1200px. Careers pill visible 810–1199 (max-lg:hidden); Get data pill ≥810 (max-md:hidden) → on <810px only logo + hamburger.
- Data item: column w/ icon above text until sm(640), then row gap-6; title/desc small (14/12.5px) until sm → text-lg
- Research grid: stays 3 cols (105px tiles at 390px); card title 13px mobile, desc hidden below 810, meta date hidden below 810, image square
- Footer: logo row → col at <810: grid-cols-4 columns; © spans grid col 4 below md
- Hero image & marquee width scale fluid; careers content col on mobile, row ≥810
- Header pill row check at 390: [logo, hamburger]; mobile panel covers menu links

## Measured geometry (1440×900)
- h1 24px/27.6 lh (max-w 28ch ≈ 585px); tagline xl 20px/24 lh (max-w 46ch); section h values: hero 777, logos 232, problem+image+solution col 1068 + data 430 + hr 1, research 799, careers 292, footer 239
- Pill padding: px-3 (12px) h-8 (32px) leading-none text-sm; focus ring inset behavior via focus-visible ring offset
- Reveal data-reveal inline styles: `--reveal-y:50px` (all), hero img adds `transition-delay:0.15s`
