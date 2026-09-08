// Download all AfterQuery homepage assets into the namespaced asset roots.
// Run: node scripts/download-assets-afterquery-com-7e0a74f7-root-e0627e8d.mjs
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ORIGIN = "https://www.afterquery.com";
const SITE = "afterquery-com-7e0a74f7";
const PAGE = "root-e0627e8d";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "sites", SITE);
const PAGE_DIR = join(ROOT, PAGE);
const SHARED_DIR = join(ROOT, "shared");

const DPL = "dpl=dpl_GSoyxLDrSsYJquSx7PUdWhREmbY8";

const assets = [
  // page images
  ["/images/landing-hero.webp", join(PAGE_DIR, "images", "landing-hero.webp")],
  ["/images/man-typing.webp", join(PAGE_DIR, "images", "man-typing.webp")],
  ["/images/careers-banner.webp", join(PAGE_DIR, "images", "careers-banner.webp")],
  ["/images/m1.avif", join(PAGE_DIR, "images", "m1.avif")],
  ["/images/m2.avif", join(PAGE_DIR, "images", "m2.avif")],
  ["/images/m3.avif", join(PAGE_DIR, "images", "m3.avif")],
  ["/images/m4.avif", join(PAGE_DIR, "images", "m4.avif")],
  ["/images/research/how-afterquery-helped-nvidia-hill-climb-gdpval.jpg", join(PAGE_DIR, "images", "research", "how-afterquery-helped-nvidia-hill-climb-gdpval.jpg")],
  ["/images/research/solving-the-last-mile-problem-in-partnership-with-the-raine-group.jpg", join(PAGE_DIR, "images", "research", "solving-the-last-mile-problem-in-partnership-with-the-raine-group.jpg")],
  ["/images/research/how-we-improved-terminal-bench-2-with-tinker-and-harbor.jpg", join(PAGE_DIR, "images", "research", "how-we-improved-terminal-bench-2-with-tinker-and-harbor.jpg")],
  // brand
  ["/brand/afterquery-logo.svg", join(SHARED_DIR, "brand", "afterquery-logo.svg")],
  ["/brand/hero-mark.svg", join(SHARED_DIR, "brand", "hero-mark.svg")],
  ["/brand/logos/anthropic.svg", join(SHARED_DIR, "brand", "logos", "anthropic.svg")],
  ["/brand/logos/deepmind.svg", join(SHARED_DIR, "brand", "logos", "deepmind.svg")],
  ["/brand/logos/meta.svg", join(SHARED_DIR, "brand", "logos", "meta.svg")],
  ["/brand/logos/openai.svg", join(SHARED_DIR, "brand", "logos", "openai.svg")],
  ["/brand/logos/google.svg", join(SHARED_DIR, "brand", "logos", "google.svg")],
  ["/brand/logos/microsoft.svg", join(SHARED_DIR, "brand", "logos", "microsoft.svg")],
  // seo
  ["/favicon.ico", join(SHARED_DIR, "seo", "favicon.ico")],
  ["/icon.png", join(SHARED_DIR, "seo", "icon.png")],
  ["/icon.svg", join(SHARED_DIR, "seo", "icon.svg")],
  ["/apple-icon.png", join(SHARED_DIR, "seo", "apple-icon.png")],
  ["/og-default.png", join(SHARED_DIR, "seo", "og-default.png")],
  // fonts (self-host)
  [`/_next/static/media/ABCDiatype_Regular-s.p.101_s0sdv3-ds.woff2?${DPL}`, join(SHARED_DIR, "fonts", "ABCDiatype-Regular.woff2")],
  [`/_next/static/media/ABCDiatype_Medium-s.p.1zfhlow4l3tdq.woff2?${DPL}`, join(SHARED_DIR, "fonts", "ABCDiatype-Medium.woff2")],
  [`/_next/static/media/ABCDiatype_Bold-s.p.2g11yfly1dr71.woff2?${DPL}`, join(SHARED_DIR, "fonts", "ABCDiatype-Bold.woff2")],
  [`/_next/static/media/MartinaPlantijn_Regular-s.p.09bvmw9c6lxyi.woff2?${DPL}`, join(SHARED_DIR, "fonts", "MartinaPlantijn-Regular.woff2")],
  [`/_next/static/media/a9a434ecf764164f-s.p.09kihw1cxxru6.woff2?${DPL}`, join(SHARED_DIR, "fonts", "FragmentMono-400-latin.woff2")],
];

const results = [];
async function dl(rel, dest) {
  try {
    const res = await fetch(ORIGIN + rel, { headers: { "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/126 Safari/537.36" } });
    if (!res.ok) throw new Error(`HTTP ${res.status} ${rel}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, buf);
    return { rel, ok: true, bytes: buf.length, type: res.headers.get("content-type") };
  } catch (e) {
    return { rel, ok: false, error: e.message };
  }
}

async function main() {
  let i = 0;
  while (i < assets.length) {
    const batch = assets.slice(i, i + 4);
    const done = await Promise.all(batch.map(([rel, dest]) => dl(rel, dest)));
    results.push(...done);
    i += 4;
  }
  const failed = results.filter((r) => !r.ok);
  for (const r of results) console.log(`${r.ok ? "OK  " : "FAIL"} ${r.rel}${r.ok ? " (" + r.bytes + " B, " + r.type + ")" : " " + r.error}`);
  console.log(`\n${results.length - failed.length}/${results.length} downloaded`);
  if (failed.length) process.exitCode = 1;
}

main();
