# Output Plan — AfterQuery Homepage

## Targets
| URL | Route | Scope |
|---|---|---|
| https://www.afterquery.com/ | `/` (replaces untouched template scaffold `src/app/page.tsx`) | Single-URL clone, pixel-perfect, pure emulation |

## Keys
- site-key: `afterquery-com-7e0a74f7` (origin slug + sha256[origin] 7e0a74f7)
- page-key: `root-e0627e8d` (sha256 of normalized pathname `/`)

## Artifact roots
- Research: `docs/research/afterquery-com-7e0a74f7/root-e0627e8d/`
- Screenshots: `docs/design-references/afterquery-com-7e0a74f7/root-e0627e8d/`
- Components: `src/components/sites/afterquery-com-7e0a74f7/root-e0627e8d/`
- Shared components: `src/components/sites/afterquery-com-7e0a74f7/shared/`
- Page assets: `public/sites/afterquery-com-7e0a74f7/root-e0627e8d/`
- Site assets: `public/sites/afterquery-com-7e0a74f7/shared/`
- Downloader: `scripts/download-assets-afterquery-com-7e0a74f7-root-e0627e8d.mjs`

## Shared foundation files changed (single-site clone, approved by pre-flight defaults)
- `src/app/globals.css` — replaced with AfterQuery tokens/base/keyframes (existing scaffold route is the one being replaced; no other routes exist)
- `src/app/layout.tsx` — self-hosted fonts via CSS @font-face (no next/font), metadata copied from target, body classes from target
- `src/app/page.tsx` — assembly at `/`

## Existing routes preserved
- `/` template scaffold page — intentionally replaced (first fresh-template clone). `_not-found` untouched.

## Asset inventory (target origin)
Images: landing-hero.webp (2080x838), man-typing.webp (2720x1161), m1-m4.avif (512x512), 3 research jpgs, careers-banner.webp; brand SVG masks: afterquery-logo.svg, hero-mark.svg, 6 partner logos; favicon.ico/icon.png/icon.svg/apple-icon.png/og-default.png; fonts: ABC Diatype 400/500/700, Martina Plantijn 400, Fragment Mono 400 (latin).

## Layouts/notes
- Breakpoints are custom: `md` = 810px, `lg` = 1200px (source CSS @media). Tailwind `sm` default 40rem.
- Colors: bg #f8f8f3, ink #000, inverse #fff, bg-alt #f6f5ee; full token set from target CSS.
- No smooth-scroll library. No video. No inline SVG icons (logo/partner marks are CSS `mask-image` spans; hero mark is an `<img>`).
