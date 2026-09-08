# SiteFooter Specification

## Overview
- **Target file:** `src/components/sites/afterquery-com-7e0a74f7/root-e0627e8d/SiteFooter.tsx`
- **Interaction model:** static + link hovers
- **DOM verbatim structure:**

```
<footer className="bg-bg">
  <div className="mx-auto max-w-[1136px] px-4 py-16 md:px-8">
    <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
      <Wordmark href="/" />
      <div className="grid grid-cols-4 gap-x-3 gap-y-8 md:flex md:flex-wrap md:gap-x-10">
        {4 nav columns}
        <p className="col-span-4 whitespace-nowrap text-xs font-medium text-ink/60 md:col-auto">AfterQuery © 2026</p>
      </div>
    </div>
  </div>
</footer>
```

### Column
```html
<nav aria-label="Lab" class="min-w-0 md:min-w-[7rem]">
  <h2 class="font-sans text-[11px] font-medium leading-[1.3] text-ink/90 md:text-sm">Lab</h2>
  <ul class="mt-3 flex flex-col gap-2 md:mt-4 md:gap-2.5">
    <li><a class="block text-[11px] font-medium leading-[1.35] text-ink/60 transition-colors duration-150 hover:text-ink md:text-sm" href="..." [target="_blank" rel="noreferrer"]>Label</a></li>
  </ul>
</nav>
```
External links (Social col) get `target="_blank" rel="noreferrer"`.

## Columns & data
- **Lab** (/research "Research & Blog", /leaderboard "Leaderboards", /knowledge "Knowledge")
- **Company** (/products "Products", /solutions "For Enterprises", /careers "Careers")
- **Social** (https://www.linkedin.com/company/afterquery "LinkedIn", https://x.com/afterquery "X") — external, aria-label not needed
- **Terms & Policies** (/terms "Terms of Service", /privacy "Privacy Policy")
- Copyright: `AfterQuery © 2026` — plain <p> last grid child as shown.
- Order of nav columns in DOM: Lab, Company, Social, Terms & Policies (aria-label attribute text matches heading).

## Responsive
- ≥810: logo left; columns inline flex gap-x-10; copyright sits after columns inline (col-auto).
- <810: everything stacked flex-col gap-10; columns grid 4-across; copyright spans all 4 grid cols (col-span-4).
- Footer paddings: py-16; inner max 1136 + px-4 md:px-8.
- Heading col text: 11px mobile → text-sm (14px) ≥810. Links same.
