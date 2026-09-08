# ResearchListSection + CoreResearchAreas Specification (/research)

## Overview
- Files: `research-ad1daf48/ResearchListSection.tsx` (server; shared ArticleRow), `research-ad1daf48/CoreResearchAreas.tsx` ("use client")
- Imports: `Reveal`/`Stagger` `../shared/Reveal|Stagger`; `ArticleRow` `../../shared/ArticleRow` (page dir under site dir; shared is sibling: `../shared/ArticleRow`).

## FILE 1: ResearchListSection.tsx — section 3 (row list, 15 items)
```
<section className="pb-20 md:pb-28">
  <div className="mx-auto w-[min(100%_-_2rem,1040px)]">
    <Stagger className="border-b border-ink/15">
      {posts.map((post, i) => (
        <div key={post.href}>
          <ArticleRow headingLevel="h2" {...post} />
        </div>
      ))}
    </Stagger>
  </div>
</section>
```
Each row div wraps ArticleRow (stagger child). ArticleRow props: href, external (true when href starts with http), ariaLabel "{title} — read blog|paper", title, image, authors [{name, avatar?}], dateText, dateISO, readLabel ("Read blog" for /blog links, "Read paper" for external). Rows have border-t via ArticleRow; container closes with border-b. No per-row Reveal.

Image base: `/sites/afterquery-com-7e0a74f7/shared/research/`
Avatar base: `/sites/afterquery-com-7e0a74f7/shared/authors/`

### Posts (order = DOM order; names/avatars exact; missing avatar = no image in stack)
1. /blog/building-a-frontier-legal-evaluation-in-partnership-with-legora · "Building a Frontier Legal Evaluation in Partnership with Legora" · cover building-a-frontier-legal-evaluation-in-partnership-with-legora-cover6.jpg · Sam J.(sam-jung.jpg) Spencer M.(spencer.jpg) · Aug 30, 2026 / 2026-08-30
2. /blog/afterquery-celebrates-the-release-of-motif-3 · "AfterQuery Celebrates the Release of Motif 3 and Served as Sole Data Partner" · afterquery-celebrates-the-release-of-motif-3-cover7.jpg · Sam J.(sam-jung.jpg) Spencer M.(spencer.jpg) · Aug 23, 2026 / 2026-08-23
3. /blog/how-afterquery-helped-nvidia-hill-climb-gdpval · same title · how-afterquery-helped-nvidia-hill-climb-gdpval.jpg · Spencer M.(spencer.jpg) Carlos G.(carlos.jpg) · Jul 2, 2026 / 2026-07-02
4. /blog/on-policy-distillation-gdpval · "How we achieved a net win-loss margin of +21.4% on GDPval with on-policy distillation" · on-policy-distillation-gdpval.jpg · Michael E.(michael.jpg) Spencer M.(spencer.jpg) · Jun 8, 2026 / 2026-06-08
5. /blog/deployco · "Why DeployCo and ServiceCo Are Betting on the Last Mile" · deployco.jpg · Sam J.(sam.jpg) Agustin G.(agustin.jpg) Drew M.(drew.jpg) Arya F.(NO avatar) · Jun 3, 2026 / 2026-06-03
6. /blog/solving-the-last-mile-problem-in-partnership-with-the-raine-group · same · solving-the-last-mile-problem-in-partnership-with-the-raine-group.jpg · Carlos G.(carlos.jpg) Sam J.(sam.jpg) · Apr 28, 2026 / 2026-04-28
7. /blog/human-expertise-reimagined · "Human expertise, reimagined" · human-expertise-reimagined.jpg · Spencer M.(spencer.jpg) · Apr 9, 2026 / 2026-04-09
8. /blog/how-afterquery-expert-data-drives-model-performance-on-t2-bench · "How AfterQuery Expert Data Drives Model Performance on τ²-bench" · how-afterquery-expert-data-drives-model-performance-on-t2-bench.jpg · Michael E.(michael.jpg) Spencer M.(spencer.jpg) Arya F.(arya.jpg) · Apr 8, 2026 / 2026-04-08
9. /blog/how-we-improved-terminal-bench-2-with-tinker-and-harbor · "How We Improved Terminal-Bench 2.0 Scores by Over 5x Using Tinker and Harbor" · how-we-improved-terminal-bench-2-with-tinker-and-harbor.jpg · Spencer M.(spencer.jpg) Michael E.(michael.jpg) Carlos G.(carlos.jpg) · Mar 31, 2026 / 2026-03-31
10. https://arxiv.org/abs/2601.20886 EXTERNAL · "IDE-Bench: Evaluating Large Language Models as IDE Agents" · ide-bench.jpg · Spencer M. Jeff Y.(jeff.jpg) Tiana C.(tiana.jpg) · Jan 20, 2026 / 2026-01-20
11. https://arxiv.org/abs/2512.12264 EXTERNAL · "Market-Bench: Evaluating LLMs on Introductory Quantitative Trading" · market-bench.webp · Abhay S.(abhay.jpg) Sam J.(sam.jpg) Spencer M.(spencer.jpg) · Dec 13, 2025 / 2025-12-13
12. https://appbench.ai/ EXTERNAL · "App-Bench: Evaluating Coding Agents on Generating Economically Useful Web-Apps" · app-bench.jpg · Andrew Z.(andrew.jpg) Sam J.(sam.jpg) Spencer M. · Oct 25, 2025 / 2025-10-25
13. /blog/the-afterquery-thesis · "The AfterQuery Thesis" · the-afterquery-thesis.jpg · Spencer M. · Oct 20, 2025 / 2025-10-20
14. https://arxiv.org/abs/2508.20410 EXTERNAL · "UI-Bench: A Benchmark for Evaluating User Interface Understanding" · ui-bench.jpg · Sam J.(sam-jung.jpg) Agustin G.(agustin.jpg) Spencer M. · Aug 28, 2025 / 2025-08-28
15. https://arxiv.org/abs/2501.18062 EXTERNAL · "FinanceQA: A Benchmark for Assumption-Based Financial Analysis" · paper-financeqa.jpg · Spencer M. Sam J.(sam.jpg) · Jan 30, 2025 / 2025-01-30
(τ² is the two-character Greek tau squared symbol U+03C4 U+00B2.)

## FILE 2: CoreResearchAreas.tsx — section 4 (client; tabs auto-advance)
Exact original behavior (from source): state index; on each index change set a 6000ms timeout advancing to (i+1)%5 (cleanup on change); tab click sets index directly (timer resets via effect dependency). Left panel content re-renders per index with aq-fade-up animation class each change. Right panel background layers crossfade.

```
<section className="pb-24 md:pb-32">
  <div className="mx-auto w-[min(100%_-_2rem,1040px)]">
    <Reveal>
      <h2 className="font-serif text-ink tracking-[-0.01em] text-balance text-[2.375rem] leading-[1.05] mb-10">Core Research Areas</h2>
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        {/* LEFT */}
        <div className="border-t border-ink/15 pt-8">
          <div id="cra-panel" role="tabpanel" aria-labelledby={`cra-tab-${index}`} className="min-h-[180px]">
            <div className="animate-[aq-fade-up_0.45s_var(--ease-brand)]">
              <p className="font-sans text-sm leading-[1.45] text-ink/40 tabular-nums">{index + 1}</p>
              <h3 className="font-serif text-ink tracking-[-0.01em] text-balance text-[1.625rem] leading-[1.25] mt-3">{title}</h3>
              <p className="font-sans text-base leading-[1.45] text-ink/60 mt-4 max-w-[46ch]">{description}</p>
            </div>
          </div>
          <div role="tablist" aria-label="Core research areas" className="mt-10">
            {areas.map((area, n) => { const active = n === index; return (
              <button key id={`cra-tab-${n}`} type="button" role="tab" aria-selected={active} aria-controls="cra-panel"
                onClick={() => setIndex(n)}
                className="group/tab relative block w-full border-b border-ink/10 py-4 text-left outline-none focus-visible:bg-ink/[0.04]">
                <span className="flex items-center gap-3">
                  <span aria-hidden="true" className={`h-2.5 w-1.5 shrink-0 ${area.marker}`} />
                  <span className={`font-sans text-sm transition-colors duration-150 ${active ? "font-medium text-ink" : "text-ink/55 group-hover/tab:text-ink/80"}`}>{area.title}</span>
                </span>
                {active && (
                  <span aria-hidden="true" style={{ transformOrigin: "left" }}
                    className={`absolute bottom-0 left-0 h-0.5 w-full animate-[aq-grow_6000ms_linear_forwards] ${area.marker}`} />
                )}
              </button>
            ); })}
          </div>
        </div>
        {/* RIGHT */}
        <div className="relative min-h-[340px] bg-ink/[0.04] md:min-h-0 overflow-hidden rounded-[4px] ring-1 ring-inset ring-ink/15">
          {areas.map((area, i) => (
            <div key={area.title} aria-hidden="true"
              style={{ backgroundImage: `url(${area.image})` }}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-out ${i === index ? "opacity-100" : "opacity-0"}`} />
          ))}
        </div>
      </div>
    </Reveal>
  </div>
</section>
```

### Areas data (marker class + image path under /sites/afterquery-com-7e0a74f7/research-ad1daf48/images/)
1. Computer Use · "We’ve created training data and reinforcement learning environments that teach AI agents to navigate real software workflows end-to-end, capturing judgment calls and edge cases that only experienced practitioners recognize." · bg-accent-green · computer-use.avif
2. Multimodal · "We build datasets that pair language with the documents, screens, charts, and interfaces professionals work across — so models reason over real multimodal context, not just clean text." · bg-ink · multimodal.avif
3. AI Safety & Security · "We work with experts to surface adversarial scenarios and failure modes, building the red-team trajectories and guardrail data that matter when models operate in high-stakes settings." · bg-accent-gold · ai-safety.avif
4. Data Quality & Curation · "We treat curation as research — designing rigorous review, grading, and validation methodologies so every example reflects how an expert would actually judge the work." · bg-accent-taupe · data-quality.avif
5. Model Evaluation · "We design benchmarks and rubrics grounded in real professional tasks, measuring not just whether a model reaches the answer but whether it reasons the way an expert would." · bg-accent-green · model-evaluation.avif

Image URLs render inside CSS background-image (bg divs) with .avif files. Reduced-motion media makes animations instant but the 6s JS timer still advances (CSS animation utility still added).
