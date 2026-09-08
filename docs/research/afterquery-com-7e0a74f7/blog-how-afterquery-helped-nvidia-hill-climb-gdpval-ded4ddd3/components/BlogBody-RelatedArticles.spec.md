# BlogBody + RelatedArticles Specification

## Files
- `BlogBody.tsx` (server) — prose content column, wrapped in `<div className="min-w-0 [&_li]:[text-wrap:wrap] [&_p]:[text-wrap:wrap]">`; each block is `<Reveal className="{blockClass}">` where blockClass is the exact margin class (below). Import Reveal from `../shared/Reveal`.
- `RelatedArticles.tsx` (server) — uses ArticleRow `../shared/ArticleRow`.

## BlogBody blocks (order; class on Reveal = listed spacing; verbatim content)
Body p class (all body paragraphs): `font-sans text-lg leading-[1.45] text-ink/80 font-serif leading-[1.5]` — copy as-is for each.
Prose link class: `font-medium text-ink underline decoration-ink/30 underline-offset-2 transition-colors duration-150 hover:decoration-ink`; external links add target="_blank" rel="noopener noreferrer".

1. class "" — p: "NVIDIA publicly used AfterQuery’s " <a href="/contact">Off-The-Shelf Office Agent Training Dataset</a> " to improve Nemotron 3 Ultra on " <a href="https://openai.com/index/gdpval/" external>GDPval</a> ". Nemotron 3 Ultra is a fully open 550B-A55B LatentMoE model with open weights, training data, and recipes. Ultra runs at up to ~6× the throughput of comparable open models (5.9× vs GLM-5.1, 4.8× vs Kimi K2.6) on long-horizon agentic tasks at the same accuracy, and supports a context length of up to 1M tokens."
2. class "mt-6" — p: "AfterQuery is the only data partner named in the " <a href="https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3-Ultra-Technical-Report.pdf" external>technical report</a> ":"
3. class "mt-8" — blockquote class `border-l-2 border-ink/20 pl-5 font-serif text-lg italic leading-[1.7] text-ink` — text: "“We then constructed a training distribution from AfterQuery (AQ) tasks that share important latent structure with GDPval, including file-grounded reasoning, professional deliverables, multi-step analysis, and judged final outputs. For each AQ task, we used a strong model to generate multiple full trajectory rollouts. These rollouts were used in two stages. First, before pivot RL, we performed light SFT directly on the student Ultra model. The goal of this step was to transfer the strong model’s workflow priors for GDPval-like tasks to the student. Second, after this MOPD warmup, we proceeded with pivot RL in the MOPD stage, distilling the SFT-trained teacher into the student Ultra model using pivots derived from the strong model’s AQ rollouts.”"
4. class "mt-12 md:mt-14" — h2 id="what-is-gdpval" class `font-serif text-ink tracking-[-0.01em] text-balance text-xl leading-[1.15] scroll-mt-28 font-bold text-ink/80`: "What is GDPval"
5. class "mt-6" — p: "GDPval is OpenAI’s benchmark for real-world professional tasks. It spans 44 occupations across the nine largest sectors of US GDP, with 1,320 tasks (220 of them open-sourced) drawn from the real work of industry professionals who average 14 years of experience. Each task gives the model a prompt, often with reference files, and asks for a finished deliverable: a spreadsheet, slide deck, document, diagram, etc."
6. class "mt-6" — p: "Artificial Analysis maintains a public leaderboard version, " <a href="https://artificialanalysis.ai/evaluations/gdpval-aa" external>GDPval-AA v2</a> ", that scores models on the open tasks and is now the highest-weighted evaluation in their Intelligence Index. Models solve the tasks agentically, working in a sandbox with shell + web access via the Stirrup harness. The resulting deliverables are compared in blind pairwise matchups, each graded by a judge sampled from a rotating panel of three frontier LLMs, and those results are fit to an Elo scale anchored to human expert work at 1,000 Elo."
7. class "mt-6" — p: "AfterQuery’s Office Agent tasks mirror GDPval task structure, with file-grounded inputs, multi-step analysis, and rubrics."
8. class "mt-12 md:mt-14" — h2 id="pivotrl" (same h2 classes): "PivotRL"
9. class "mt-6" — p: "PivotRL (Yi et al., 2026) is a turn-level RL method for agent training. It starts from existing SFT trajectories and treats each assistant turn as a possible training state. For each candidate turn, it samples several next actions from the reference or initial policy and scores them with a verifier. It keeps only the turns where the sampled actions produce mixed outcomes—some pass, some fail—and discards turns that are already uniformly solved or uniformly failed. RL is then run locally at those retained “pivot” turns, using verifier rewards for functionally valid actions rather than exact matches to the demonstration. The intended benefit is lower rollout cost: on SWE-Bench, the paper reports accuracy comparable to end-to-end RL with about 4× fewer rollout turns." (Sentence 1 word "PivotRL" wraps in link <a href="https://arxiv.org/abs/2603.21383" external>PivotRL</a>: full first sentence text: <a>PivotRL</a> "(Yi et al., 2026) is a turn-level RL method for agent training.")
10. class "mt-12 md:mt-14" — h2 id="impact": "Impact"
11. class "mt-6" — p: "The practical use case for PivotRL shows up in NVIDIA’s Nemotron 3 Ultra training recipe. For GDPval-like office tasks, NVIDIA first used a strong model to generate full AfterQuery trajectories, then reused intermediate decision points from those trajectories as pivots during the MOPD stage. In other words: PivotRL supplies the local “where should we train?” states, while MOPD (Multi-teacher On-Policy Distillation) supplies the teacher-student learning signal at those states."
12. class "mt-6" — p: "NVIDIA trained specialized teachers by domain and then distilled them into Ultra through MOPD. For the office/workplace teacher, the AfterQuery tasks were chosen because they resemble GDPval: file-grounded reasoning, multi-step analysis, professional deliverables, and judged final outputs. The report says the AQ rollouts were used in two stages: a light SFT warmup to transfer the strong model’s workflow priors, followed by pivot RL in MOPD using pivots from those same strong-model rollouts."
13. class "mt-8" — div class `overflow-x-auto` wrapping table class `w-full border-collapse text-left font-sans text-sm`:
    thead: Domain/Student/No warmup/Warmup/Teacher — th class `border-b border-ink/20 py-2.5 pr-6 font-medium text-ink/80`
    rows (td class `border-b border-ink/10 py-2.5 pr-6 text-ink/70`): GDPval 28.9 35.3 46.7 49.5 · BrowseComp 31.0 33.0 44.4 51.0 · "HLE (no tools)" 25.6 26.3 26.7 32.1
14. class "mt-6" — p (add italic text-ink/70 to body p classes → class `font-sans text-lg leading-[1.45] text-ink/80 font-serif leading-[1.5] italic text-ink/70`): "NVIDIA’s warmup ablation. Student is the starting checkpoint, Teacher the specialized model being distilled toward."
15. class "mt-6" — p: "On GDPval, warmup raises the MOPD result from 35.3 to 46.7, leaving Ultra only 2.8 points behind the office/workplace teacher. BrowseComp shows the same pattern, rising from 33.0 to 44.4. HLE barely moves, from 26.3 to 26.7. AfterQuery has " <a href="/blog/on-policy-distillation-gdpval">similarly validated</a> " that on-policy distillation works well for improving models on GDPval-style tasks, reaching a +20.9% net win-loss margin over base with a Nemotron 3 Nano student with pure OPD."
16. class "mt-6" — p: "Get in touch " <a href="/contact">here</a> " to access our off-the-shelf GDPval, Office Agent, and agentic post-training datasets, or reach out to us directly at " <a href="mailto:research@afterquery.com">research@afterquery.com</a> "."
17. class "mt-12" — p class `font-sans text-sm leading-[1.45] text-ink/80 leading-[1.6] text-ink/45 border-t border-ink/10 pt-5`: "AfterQuery is an applied research lab curating data solutions to accelerate foundation model development."
18. class "mt-3" — p class `font-sans text-sm leading-[1.45] text-ink/80 leading-[1.6] text-ink/45`: "Sources: NVIDIA Nemotron 3 Ultra technical report (Tables 4–5, Office & Workplace Task Teacher); PivotRL, Yi et al., 2026 (arXiv 2603.21383v1); GDPval-AA v2 leaderboard."

## RelatedArticles
```
<section class="mt-24 md:mt-32">
  <Reveal>
    <h2 class="font-serif text-ink tracking-[-0.01em] text-balance text-[2.375rem] leading-[1.05] text-ink/80">Related articles</h2>
  </Reveal>
  <div class="mt-8 border-b border-ink/15">
    {4 × <ArticleRow headingLevel="h3" ... />}     {/* NO wrapper divs */}
  </div>
</section>
```
Rows (href, title, cover in shared/research, authors, date): 
1. /blog/building-a-frontier-legal-evaluation-in-partnership-with-legora — "Building a Frontier Legal Evaluation in Partnership with Legora" — building-a-frontier-legal-evaluation-in-partnership-with-legora-cover6.jpg — Sam J.(sam-jung.jpg), Spencer M.(spencer.jpg) — Aug 30, 2026/2026-08-30
2. /blog/afterquery-celebrates-the-release-of-motif-3 — "AfterQuery Celebrates the Release of Motif 3 and Served as Sole Data Partner" — afterquery-celebrates-the-release-of-motif-3-cover7.jpg — Sam J., Spencer M. — Aug 23, 2026/2026-08-23
3. /blog/on-policy-distillation-gdpval — "How we achieved a net win-loss margin of +21.4% on GDPval with on-policy distillation" — on-policy-distillation-gdpval.jpg — Michael E.(michael.jpg), Spencer M. — Jun 8, 2026/2026-06-08
4. /blog/deployco — "Why DeployCo and ServiceCo Are Betting on the Last Mile" — deployco.jpg — Sam J.(sam.jpg), Agustin G.(agustin.jpg), Drew M.(drew.jpg), Arya F.(no avatar) — Jun 3, 2026/2026-06-03
All readLabel "Read blog"; internal links (no external).
