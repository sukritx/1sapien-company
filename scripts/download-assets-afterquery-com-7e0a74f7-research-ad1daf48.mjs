// Download /research page assets (shared research covers/authors + page avifs) + /contact page asset.
import { mkdir, writeFile, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ORIGIN = "https://www.afterquery.com";
const SITE = "afterquery-com-7e0a74f7";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "sites", SITE);
const SHARED = join(ROOT, "shared");

const assets = [
  ["/images/research/research-card-header.webp", join(SHARED, "research", "research-card-header.webp")],
  ["/images/research/building-a-frontier-legal-evaluation-in-partnership-with-legora-cover6.jpg", join(SHARED, "research", "building-a-frontier-legal-evaluation-in-partnership-with-legora-cover6.jpg")],
  ["/images/research/afterquery-celebrates-the-release-of-motif-3-cover7.jpg", join(SHARED, "research", "afterquery-celebrates-the-release-of-motif-3-cover7.jpg")],
  ["/images/research/how-afterquery-helped-nvidia-hill-climb-gdpval.jpg", join(SHARED, "research", "how-afterquery-helped-nvidia-hill-climb-gdpval.jpg")],
  ["/images/research/on-policy-distillation-gdpval.jpg", join(SHARED, "research", "on-policy-distillation-gdpval.jpg")],
  ["/images/research/deployco.jpg", join(SHARED, "research", "deployco.jpg")],
  ["/images/research/solving-the-last-mile-problem-in-partnership-with-the-raine-group.jpg", join(SHARED, "research", "solving-the-last-mile-problem-in-partnership-with-the-raine-group.jpg")],
  ["/images/research/human-expertise-reimagined.jpg", join(SHARED, "research", "human-expertise-reimagined.jpg")],
  ["/images/research/how-afterquery-expert-data-drives-model-performance-on-t2-bench.jpg", join(SHARED, "research", "how-afterquery-expert-data-drives-model-performance-on-t2-bench.jpg")],
  ["/images/research/how-we-improved-terminal-bench-2-with-tinker-and-harbor.jpg", join(SHARED, "research", "how-we-improved-terminal-bench-2-with-tinker-and-harbor.jpg")],
  ["/images/research/ide-bench.jpg", join(SHARED, "research", "ide-bench.jpg")],
  ["/images/research/market-bench.webp", join(SHARED, "research", "market-bench.webp")],
  ["/images/research/app-bench.jpg", join(SHARED, "research", "app-bench.jpg")],
  ["/images/research/the-afterquery-thesis.jpg", join(SHARED, "research", "the-afterquery-thesis.jpg")],
  ["/images/research/ui-bench.jpg", join(SHARED, "research", "ui-bench.jpg")],
  ["/images/research/paper-financeqa.jpg", join(SHARED, "research", "paper-financeqa.jpg")],
  ["/images/authors/sam-jung.jpg", join(SHARED, "authors", "sam-jung.jpg")],
  ["/images/authors/spencer.jpg", join(SHARED, "authors", "spencer.jpg")],
  ["/images/authors/carlos.jpg", join(SHARED, "authors", "carlos.jpg")],
  ["/images/authors/michael.jpg", join(SHARED, "authors", "michael.jpg")],
  ["/images/authors/sam.jpg", join(SHARED, "authors", "sam.jpg")],
  ["/images/authors/agustin.jpg", join(SHARED, "authors", "agustin.jpg")],
  ["/images/authors/drew.jpg", join(SHARED, "authors", "drew.jpg")],
  ["/images/authors/arya.jpg", join(SHARED, "authors", "arya.jpg")],
  ["/images/authors/jeff.jpg", join(SHARED, "authors", "jeff.jpg")],
  ["/images/authors/tiana.jpg", join(SHARED, "authors", "tiana.jpg")],
  ["/images/authors/abhay.jpg", join(SHARED, "authors", "abhay.jpg")],
  ["/images/authors/andrew.jpg", join(SHARED, "authors", "andrew.jpg")],
  ["/images/research/computer-use.avif", join(ROOT, "research-ad1daf48", "images", "computer-use.avif")],
  ["/images/research/multimodal.avif", join(ROOT, "research-ad1daf48", "images", "multimodal.avif")],
  ["/images/research/ai-safety.avif", join(ROOT, "research-ad1daf48", "images", "ai-safety.avif")],
  ["/images/research/data-quality.avif", join(ROOT, "research-ad1daf48", "images", "data-quality.avif")],
  ["/images/research/model-evaluation.avif", join(ROOT, "research-ad1daf48", "images", "model-evaluation.avif")],
  ["/images/contact-right.webp", join(ROOT, "contact-dc38169e", "images", "contact-right.webp")],
];

const results = [];
async function dl(rel, dest) {
  try {
    await access(dest);
    results.push({ rel, ok: true, bytes: "exists" });
    return;
  } catch {
    /* fall through */
  }
  try {
    const res = await fetch(ORIGIN + rel, { headers: { "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/126 Safari/537.36" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, buf);
    results.push({ rel, ok: true, bytes: buf.length });
  } catch (e) {
    results.push({ rel, ok: false, error: e.message });
  }
}

async function main() {
  let i = 0;
  while (i < assets.length) {
    await Promise.all(assets.slice(i, i + 5).map(([rel, dest]) => dl(rel, dest)));
    i += 5;
  }
  const failed = results.filter((r) => !r.ok);
  for (const r of results) console.log(`${r.ok ? "OK  " : "FAIL"} ${r.rel}${r.ok ? " (" + r.bytes + ")" : " " + r.error}`);
  console.log(`\n${results.length - failed.length}/${results.length}`);
  if (failed.length) process.exitCode = 1;
}

main();
