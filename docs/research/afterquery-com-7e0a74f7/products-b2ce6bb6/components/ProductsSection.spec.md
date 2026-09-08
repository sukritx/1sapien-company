# ProductsPage (ProductsSection) Specification

## Overview
- **Target file:** `src/components/sites/afterquery-com-7e0a74f7/products-b2ce6bb6/ProductsSection.tsx` (server)
- **Interaction model:** static; scroll-driven reveals (header, intro, one per row)
- **Title:** "Products" — import Reveal `../shared/Reveal`.

## DOM (verbatim)
```
<section className="pb-24 pt-12 md:pb-36 md:pt-16">
  <div className="mx-auto w-[min(100%_-_2rem,1040px)]">
    <Reveal>                                                            {/* no class */}
      <h1 className="font-serif text-ink tracking-[-0.01em] text-balance text-[1.875rem] leading-[1.05] md:text-[2.125rem] lg:text-[2.375rem] text-ink/80">Products</h1>
    </Reveal>
    <Reveal delay={0.05}>                                                {/* no class */}
      <div className="mt-8 space-y-5">
        <p className="font-sans text-lg leading-[1.45] text-ink/60">Intelligence isn’t built in a lecture hall. It’s built through practice, feedback, and failure. It’s built through experience.</p>
        <p className="font-sans text-lg leading-[1.45] text-ink/60">Our products encode that full spectrum: expert demonstrations, preference signals, adversarial environments, and the reinforcement loops that turn a capable model into a reliable one.</p>
        <p className="font-sans text-lg leading-[1.45] text-ink/60">As the frontier of what models can do expands, what they need to learn from expands with it.</p>
      </div>
    </Reveal>
    <div className="mt-16">
      {rows.map(row => (
        <Reveal key={row.title}>
          <div className="grid grid-cols-1 gap-y-3 border-t border-ink/10 py-7 md:grid-cols-[1.13fr_1fr] md:items-start md:gap-x-4 md:py-8">
            <div className="flex items-start gap-6">
              <span aria-hidden="true" className="mt-1.5 h-4 w-1.5 shrink-0" style={{ backgroundColor: row.color }} />
              <h3 className="font-serif text-ink tracking-[-0.01em] text-balance text-2xl leading-[1.15] min-w-0 flex-1 text-ink/80">{row.title}</h3>
            </div>
            <p className="font-sans text-sm leading-[1.45] text-ink/60">{row.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>
```
NOTE: Reveal renders its own wrapper div — rows sit as 12 sibling Reveal divs inside `div.mt-16`; each Reveal's only child is the bordered row. Inline style backgroundColor must be EXACT string per row (data below). h1 area: single Reveal directly wrapping h1. No bottom border after last row (rows only have border-t).

## Row data (12; title, description verbatim, color EXACT)
1. Rubric and Verifier-based RL — "Combines expert-crafted rubrics with automated verifiers that grade model outputs the way a seasoned professional would, rewarding nuance and penalizing shortcuts across reasoning, code generation, and instruction-following tasks." — rgba(0, 0, 0, 0.8)
2. Tool-calling RL Environments — "Provides custom RL environments built on top of real APIs, MCP servers, and developer tools, enabling models to learn how to call, chain, and recover from errors across complex service workflows with automated evaluation at every step." — rgb(167, 109, 59)
3. SFT — "Delivers high-quality prompt-response pairs and chain-of-thought demonstrations through supervised fine-tuning, giving models a foundation of skills before RL begins, teaching them to reason, follow instructions, and navigate professional tasks from the ground up." — rgb(173, 101, 101)
4. Computer-use and Browser-use Environments — "Pairs high-fidelity browser and desktop environments with expert-demonstrated trajectories, teaching agents to navigate interfaces, complete multi-step workflows, and operate software the way a domain expert would." — rgba(217, 149, 24, 0.8)
5. RLHF — "Captures the subtleties of what makes one response genuinely better than another through RL from human feedback, training models to internalize the taste, judgment, and standards of domain experts across thousands of comparison pairs." — rgb(167, 109, 59)
6. Code Generation — "Spans expert-written code, test cases, and debugging traces that teach models to write production-quality software, handle edge cases, and reason through architectural decisions the way experienced engineers do." — rgb(42, 140, 83)
7. Professional Domains — "Draws on 300,000+ verified practitioners across medicine, law, finance, engineering, and more, capturing the tacit knowledge and real-world judgment that textbooks leave out and synthetic data can’t replicate." — rgba(156, 71, 161, 0.8)
8. Deep Research — "Covers long-horizon research tasks, teaching models to gather evidence across sources, synthesize findings, and produce thorough analyses that mirror how skilled researchers build understanding over hours of investigation." — rgb(167, 109, 59)
9. Loss Analyses — "Identifies where and why models fail in professional contexts through systematic study, pinpointing the precise failure modes and distributional gaps that inform how every dataset and environment is designed." — rgb(166, 58, 157)
10. Multimodal — "Teaches models to see, interpret, and reason across image, audio, video, and text together, closing the gap between how humans experience the world and how AI processes it." — rgb(143, 93, 212)
11. Off-the-shelf Data — "Offers ready-to-deploy datasets across high-demand capability areas, giving labs and companies immediate access to rigorously validated training data without the lead time of a custom engagement." — rgb(89, 166, 58)
12. Custom Evals and Training Datasets — "Tailors evaluation suites and training datasets to your specific capability targets, designing every prompt, rubric, and environment from scratch to address the exact gaps your models need to close." — rgb(0, 0, 0)

## Typography
- h1 30px/1.05 (mobile) → 34 md → 38 lg (computed 38px/39.9px at 1440); h1 text-ink/80.
- Row title: serif 24px lh 1.15 ink/80 (text-2xl) min-w-0 flex-1.
- Row desc: sans 14px/1.45 ink/60. Bar: 16px tall × 6px wide, mt-1.5.
- Breakpoints md=810, lg=1200 (rows switch to 2 cols at 810; header/intro max width 1040 container).
