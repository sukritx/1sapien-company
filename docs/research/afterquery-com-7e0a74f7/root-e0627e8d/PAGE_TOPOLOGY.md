# Page Topology — https://www.afterquery.com/ (1440×900 reference)

Body: `min-h-full flex flex-col bg-bg text-ink font-sans`. Sticky header, then `div.flex.flex-1.flex-col` > `<main flex-1>` sections + `<footer>`.

## Fixed/overlay layers
- **Header** (`header.sticky top-0 z-40 bg-bg`, h=70px) — always sticky, never transforms (no hide-on-scroll). Contains nav (max-w-[1136px], h-[70px], px-4 md:px-8) + collapsible mobile panel below nav.
- z-index only on header (z-40). No other fixed/absolute overlays besides hero-mark (absolute inside hero image).

## Flow sections (top → bottom)
1. **SiteHeader** (sticky, h 70 + collapsible mobile menu)
   - Left: logo `<a>` mask span (afterquery-logo.svg, w-[130px] h-[22px], bg-ink, hover:opacity-70)
   - Center (≥1200px): ul gap-7 → Research & Blog, Leaderboards, For Enterprises, Products (text-sm font-medium text-ink/80 hover:text-ink + animated underline bar)
   - Right (gap-2): Careers pill (visible 810–1199 via max-lg:hidden), Get data pill (dark, visible ≥810), hamburger button (<1200)
   - Below: mobile panel (lg:hidden) border-t, collapsible max-h-0 ↔ max-h-[28rem], list of 5 links + full-width Get data pill
2. **Hero** (`section.pt-14 md:pt-20`)
   - Column max-w 688px: Stagger(3) → H1 serif 24px max-w-[28ch] "We teach machines how experts think." / Typewriter tagline serif text-xl text-ink/55 + blinking caret / 2 pills (Get data → /contact dark; Explore research → /research soft)
   - Below (mt-14 md:mt-20): Reveal(delay .15s) image card (max-w 1136px, rounded-[4px] ring-1 ring-ink/10) landing-hero.webp + centered hero-mark.svg overlay (w-24 md:w-36)
3. **LogoMarquee** (`section.px-4 pb-10 pt-8 md:pb-12`)
   - Centered column: serif 24px text-ink/70 "Backed by angels from" → marquee (max-w-[40rem], overflow hidden; UL.logo-marquee w-max, 6 logos ×2, 32s linear infinite, translate -50%, pause on hover) → text-sm text-ink/60 "Powering every frontier AI research lab"
4. **Problem / Solution editorial** (`section.pb-14 pt-8`, col max-w 688px)
   - Reveal: eyebrow label text-sm text-ink/60 "Problem", serif H2 text-ink/80, 3 paragraphs text-lg font-medium text-ink/60 (space-y-4, first mt-4)
   - Reveal: man-typing.webp image card (mt-14, rounded-[4px] ring)
   - Reveal: label "Our solution", H2 "We turn real-world work into training data.", 2 paragraphs (2nd mt-4)
5. **DataGrid** (`div max-w688 pb-14`) — Stagger(4): grid-cols-2 gap-x-4 gap-y-8 items = SFT / RL+Rubrics / Agent Environments / Computer Use; each = icon img size-11 rounded-[4px] mix-blend-multiply + title (mobile 14px, ≥810 18px) + desc (mobile 12.5px, ≥810 18px)
6. **HR divider** (max-w688, h-px bg-ink/[0.08])
7. **ResearchSection** (`section.pb-8 pt-16`, max-w 1136px)
   - Reveal header row (flex-col gap-6 → sm:flex-row items-end justify-between): H2 sans 24px medium "Research" + p text-lg ink/60 + "More research" pill (right)
   - Stagger(3) grid-cols-3 gap-3 md:gap-4: ResearchCard = `<a>` (rounded-[4px], hover -translate-y-1 300ms) → aspect-square image (rounded ring-ink/15, img group-hover:scale-[1.05] 600ms) → title serif (13px mobile / xl 20px desktop, hover opacity-70) → desc text-sm hidden <810 (max-w-[52ch]) → meta row (bar 10×6 bg-ink/80 + "Blog" + · + date; date hidden mobile)
8. **CareersBanner** (`section.pb-[100px] pt-16`, max-w 1136px) — Reveal: rounded-[4px] ring image card: careers-banner.webp (absolute cover) + `absolute inset-0 bg-ink/40` + content p-6 (md:flex-row items-end justify-between): H5 serif 24px text-inverse "Careers" + p text-sm text-inverse/80; link "See open roles ↗" (underline decoration-inverse/40 → hover full; ↗ translate on hover)
9. **SiteFooter** (`footer.bg-bg`) — max-w 1136 px-4 py-16: row1 flex-col gap-10 → md:flex-row justify-between: logo + grid-cols-4 (mobile) / flex (md+) nav columns: Lab / Company / Social / Terms & Policies (h2 11px→14px; links 11px→14px hover:text-ink) + copyright "AfterQuery © 2026"

## Content gaps / notes
- All headings letter-spacing -0.01em via base CSS (h1-h6 serif auto; font-medium sans headings keep it via class tracking? no — base rule h1..h6 letter-spacing -.01em applies to ALL h tags).
- p text-wrap pretty (base). h1/h2/h3 text-balance base + class.
- Buttons use identical pill class set (3 variants: dark bg-ink/90 hover:bg-ink text-bg; soft bg-ink/[0.06] hover:bg-ink/[0.1] text-ink/80; sizes h-8 px-3 text-sm / h-9 px-4 mobile menu).
- Grid image cards all: rounded-[4px] ring-1 ring-inset ring-ink/10.
