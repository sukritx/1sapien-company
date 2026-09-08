# Output Plan — AfterQuery secondary pages (run 2)

## Targets (all origin https://www.afterquery.com, site-key afterquery-com-7e0a74f7)
| URL | page-key | Destination route | Existing route? |
|---|---|---|---|
| /research | research-ad1daf48 | `src/app/research/page.tsx` | no |
| /products | products-b2ce6bb6 | `src/app/products/page.tsx` | no |
| /contact | contact-dc38169e | `src/app/contact/page.tsx` | no |
| /blog/how-afterquery-helped-nvidia-hill-climb-gdpval | blog-how-afterquery-helped-nvidia-hill-climb-gdpval-ded4ddd3 | `src/app/blog/how-afterquery-helped-nvidia-hill-climb-gdpval/page.tsx` | no |

## Shared foundation changes (all same-origin — one app, one foundation, already built for homepage)
1. **Refactor:** move `SiteHeader` + `SiteFooter` from page namespace `root-e0627e8d/` to shared `src/components/sites/afterquery-com-7e0a74f7/shared/`; add optional `activeHref` prop to SiteHeader (adds `aria-current="page"`, `text-ink` (full), underline `scale-x-100` on the desktop nav link whose href matches; no mobile-panel active state). Update homepage `src/app/page.tsx` imports.
   - Verified: headers differ across pages ONLY by this active state; footers byte-identical across all pages.
2. No globals.css/layout changes needed; fonts/SEO/marquee/reveal CSS already global. Route metadata exported per page (title/description) only.

## Artifact roots (page-scoped)
- research: docs/research|design-references/.../research-ad1daf48, components src/.../research-ad1daf48, assets public/sites/afterquery-com-7e0a74f7/research-ad1daf48
- products: .../products-b2ce6bb6 (same pattern)
- contact: .../contact-dc38169e
- blog post: .../blog-how-afterquery-helped-nvidia-hill-climb-gdpval-ded4ddd3 (route dir blog/how-afterquery-helped-nvidia-hill-climb-gdpval)
- Downloader scripts: scripts/download-assets-<site-key>-<page-key>.mjs each.

## Notes
- Research page posts link to blog articles not in scope (links kept as hrefs to paths that may 404 locally — acceptable demo; only the one blog article is cloned).
- Active states in header for /research and /products only (contact + blog pages show no active nav item, matching original).
- Site chrome (SiteHeader/SiteFooter) identical markup to homepage build.
