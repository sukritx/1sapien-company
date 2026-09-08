# SiteHeader Specification

## Overview
- **Target file:** `src/components/sites/afterquery-com-7e0a74f7/root-e0627e8d/SiteHeader.tsx` ("use client")
- **Interaction model:** click-driven (mobile menu), static hover states
- **Screenshot:** `docs/design-references/afterquery-com-7e0a74f7/root-e0627e8d/` (MCP captures; see DOM below)

## DOM Structure (verbatim from target)
Sticky header wraps the site nav bar plus a collapsible mobile panel. Logo uses shared `Wordmark` from `../../shared/Logo`.

```
<header className="sticky top-0 z-40 bg-bg transition-transform duration-300 ease-[cubic-bezier(0.23,0.98,0.56,1)] translate-y-0">
  <nav className="mx-auto flex h-[70px] max-w-[1136px] items-center justify-between gap-6 px-4 md:px-8">
    <Wordmark href="/" />
    <ul className="hidden items-center gap-7 lg:flex">            {/* hidden < 1200px */}
      {navLink items}
    </ul>
    <div className="flex items-center gap-2">
      <a Careers pill />            {/* max-lg:hidden → visible 810-1199 */}
      <a Get data pill />           {/* max-md:hidden → visible ≥810 */}
      <button mobile menu button /> {/* lg:hidden → visible <1200 */}
    </div>
  </nav>
  <div mobilePanel />               {/* lg:hidden */}
</header>
```

### Desktop nav link (4 items)
Nav links: Research & Blog → /research · Leaderboards → /leaderboard · For Enterprises → /solutions · Products → /products
```html
<li>
  <a class="group relative inline-block text-sm font-medium transition-colors duration-150 text-ink/80 hover:text-ink" href="...">
    LABEL
    <span aria-hidden="true" class="absolute -bottom-0.5 left-0 h-px w-full origin-left bg-ink/90 transition-transform duration-300 ease-[cubic-bezier(0.23,0.98,0.56,1)] scale-x-0 group-hover:scale-x-100" />
  </a>
</li>
```

### Pills (shared class set; identical across site)
Pill base: `inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium leading-none transition-[scale,background-color,color,filter] duration-150 ease-out outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:scale-[0.96]`
- Soft variant: `bg-ink/[0.06] text-ink/80 hover:bg-ink/[0.1] h-8 px-3 text-sm` (+ shrink-0 when in flex rows)
- Dark variant: `bg-ink/90 text-bg hover:bg-ink h-8 px-3 text-sm` (h-9 px-4 for the mobile menu full-width one, plus w-full)
Header buttons:
- Careers: soft + `max-lg:hidden`, href /careers
- Get data: dark + `max-md:hidden`, href /contact

### Mobile menu button (stateful)
```html
<button type="button" aria-label="Open menu" aria-expanded="false"
  class="grid size-10 place-items-center text-ink lg:hidden">
  <span class="relative block h-4 w-5">
    <span class="absolute left-0 top-0 h-0.5 w-5 bg-ink transition-transform duration-200 ease-out" />   <!-- bar 1 -->
    <span class="absolute left-0 top-[7px] h-0.5 w-5 bg-ink transition-opacity duration-200" />            <!-- bar 2 -->
    <span class="absolute bottom-0 left-0 h-0.5 w-5 bg-ink transition-transform duration-200 ease-out" /> <!-- bar 3 -->
  </span>
</button>
```
Open state: `aria-label="Close menu"`, `aria-expanded="true"`; bar classes gain: bar1 `translate-y-[7px] rotate-45`, bar2 `opacity-0`, bar3 `-translate-y-[7px] -rotate-45`.

### Mobile panel (stateful)
Closed: `overflow-hidden border-t border-ink/10 bg-bg transition-[max-height,opacity] duration-300 ease-out lg:hidden max-h-0 opacity-0`
Open: same but `max-h-[28rem] opacity-100`
Content (ul `flex flex-col gap-1 px-4 py-4`):
- 5 links (Research & Blog /research, Leaderboards /leaderboard, For Enterprises /solutions, Products /products, Careers /careers):
  `<a class="block rounded-lg px-2 py-3 text-base font-medium text-ink/80 transition-colors duration-150 hover:bg-ink/[0.04] hover:text-ink">`
- last `<li class="px-2 pt-3">` containing dark pill full width: `h-9 px-4 text-sm w-full` href /contact label "Get data"

## States & Behaviors
- Menu toggle: aria-expanded flips; panel transitions max-height/opacity 300ms ease-out. Bars animate: 2 top/bottom transform duration-200 ease-out, middle opacity duration-200.
- Hover: nav link color text-ink/80→text-ink 150ms; underline grows scale-x-0→100 300ms ease-brand from left; logo & pill hover/focus/active per classes above.
- Header itself is always sticky, no scroll hide (translate-y-0 constant).
- lg = 1200px, md = 810px breakpoints.

## Responsive
- <810: logo + hamburger only.
- 810–1199: logo + Careers pill + Get data pill + hamburger.
- ≥1200: logo + 4 links + Careers pill… (Get data pill still visible) + no hamburger/panel (panel & button lg:hidden).

## Imports
- `Wordmark` from `../../shared/Logo`
- types from `../../../../types/sites/afterquery-com-7e0a74f7` (NavLink)
- React `useState` (client component)

Content of desktop nav + mobile nav identical labels; Get data link → /contact.
