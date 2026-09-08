import { Reveal } from "../shared/Reveal";

const rows = [
  {
    title: "Rubric and Verifier-based RL",
    color: "rgba(0, 0, 0, 0.8)",
    description:
      "Combines expert-crafted rubrics with automated verifiers that grade model outputs the way a seasoned professional would, rewarding nuance and penalizing shortcuts across reasoning, code generation, and instruction-following tasks.",
  },
  {
    title: "Tool-calling RL Environments",
    color: "rgb(167, 109, 59)",
    description:
      "Provides custom RL environments built on top of real APIs, MCP servers, and developer tools, enabling models to learn how to call, chain, and recover from errors across complex service workflows with automated evaluation at every step.",
  },
  {
    title: "SFT",
    color: "rgb(173, 101, 101)",
    description:
      "Delivers high-quality prompt-response pairs and chain-of-thought demonstrations through supervised fine-tuning, giving models a foundation of skills before RL begins, teaching them to reason, follow instructions, and navigate professional tasks from the ground up.",
  },
  {
    title: "Computer-use and Browser-use Environments",
    color: "rgba(217, 149, 24, 0.8)",
    description:
      "Pairs high-fidelity browser and desktop environments with expert-demonstrated trajectories, teaching agents to navigate interfaces, complete multi-step workflows, and operate software the way a domain expert would.",
  },
  {
    title: "RLHF",
    color: "rgb(167, 109, 59)",
    description:
      "Captures the subtleties of what makes one response genuinely better than another through RL from human feedback, training models to internalize the taste, judgment, and standards of domain experts across thousands of comparison pairs.",
  },
  {
    title: "Code Generation",
    color: "rgb(42, 140, 83)",
    description:
      "Spans expert-written code, test cases, and debugging traces that teach models to write production-quality software, handle edge cases, and reason through architectural decisions the way experienced engineers do.",
  },
  {
    title: "Professional Domains",
    color: "rgba(156, 71, 161, 0.8)",
    description:
      "Draws on 300,000+ verified practitioners across medicine, law, finance, engineering, and more, capturing the tacit knowledge and real-world judgment that textbooks leave out and synthetic data can’t replicate.",
  },
  {
    title: "Deep Research",
    color: "rgb(167, 109, 59)",
    description:
      "Covers long-horizon research tasks, teaching models to gather evidence across sources, synthesize findings, and produce thorough analyses that mirror how skilled researchers build understanding over hours of investigation.",
  },
  {
    title: "Loss Analyses",
    color: "rgb(166, 58, 157)",
    description:
      "Identifies where and why models fail in professional contexts through systematic study, pinpointing the precise failure modes and distributional gaps that inform how every dataset and environment is designed.",
  },
  {
    title: "Multimodal",
    color: "rgb(143, 93, 212)",
    description:
      "Teaches models to see, interpret, and reason across image, audio, video, and text together, closing the gap between how humans experience the world and how AI processes it.",
  },
  {
    title: "Off-the-shelf Data",
    color: "rgb(89, 166, 58)",
    description:
      "Offers ready-to-deploy datasets across high-demand capability areas, giving labs and companies immediate access to rigorously validated training data without the lead time of a custom engagement.",
  },
  {
    title: "Custom Evals and Training Datasets",
    color: "rgb(0, 0, 0)",
    description:
      "Tailors evaluation suites and training datasets to your specific capability targets, designing every prompt, rubric, and environment from scratch to address the exact gaps your models need to close.",
  },
];

export function ProductsSection() {
  return (
    <section className="pb-24 pt-12 md:pb-36 md:pt-16">
      <div className="mx-auto w-[min(100%_-_2rem,1040px)]">
        <Reveal>
          <h1 className="font-serif text-ink tracking-[-0.01em] text-balance text-[1.875rem] leading-[1.05] md:text-[2.125rem] lg:text-[2.375rem] text-ink/80">
            Products
          </h1>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-8 space-y-5">
            <p className="font-sans text-lg leading-[1.45] text-ink/60">
              Intelligence isn’t built in a lecture hall. It’s built through practice,
              feedback, and failure. It’s built through experience.
            </p>
            <p className="font-sans text-lg leading-[1.45] text-ink/60">
              Our products encode that full spectrum: expert demonstrations, preference
              signals, adversarial environments, and the reinforcement loops that turn a
              capable model into a reliable one.
            </p>
            <p className="font-sans text-lg leading-[1.45] text-ink/60">
              As the frontier of what models can do expands, what they need to learn from
              expands with it.
            </p>
          </div>
        </Reveal>
        <div className="mt-16">
          {rows.map((row) => (
            <Reveal key={row.title}>
              <div className="grid grid-cols-1 gap-y-3 border-t border-ink/10 py-7 md:grid-cols-[1.13fr_1fr] md:items-start md:gap-x-4 md:py-8">
                <div className="flex items-start gap-6">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-4 w-1.5 shrink-0"
                    style={{ backgroundColor: row.color }}
                  />
                  <h3 className="font-serif text-ink tracking-[-0.01em] text-balance text-2xl leading-[1.15] min-w-0 flex-1 text-ink/80">
                    {row.title}
                  </h3>
                </div>
                <p className="font-sans text-sm leading-[1.45] text-ink/60">
                  {row.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
