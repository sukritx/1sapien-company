import { Reveal } from "../shared/Reveal";

const cards = [
  {
    title: "SpreadsheetBench 2",
    href: "https://spreadsheetbench.github.io/",
    color: "rgba(2, 99, 64, 0.8)",
    description:
      "Evaluating LLM agents on challenging, expert-curated, end-to-end spreadsheet tasks — financial modeling, debugging, and visualization in complex multi-sheet workbooks.",
  },
  {
    title: "Legora BAR",
    href: "https://legora.com/bar",
    color: "rgba(45, 73, 149, 0.8)",
    description:
      "Legora’s Benchmark for Agentic Reasoning: end-to-end legal tasks drawn from real cases across 28 practice areas, with a public case co-created with AfterQuery.",
  },
];

export function BenchmarkCards() {
  return (
    <section className="pb-14 md:pb-16">
      <div className="mx-auto w-[min(100%_-_2rem,1040px)]">
        <Reveal>
          <div className="mx-auto grid max-w-[696px] grid-cols-2 gap-3 md:gap-6">
            {cards.map(card => (
              <a key={card.title} target="_blank" rel="noopener noreferrer" aria-label={`${card.title} — read paper`}
                 className="group relative overflow-hidden rounded-[4px] p-6 text-inverse outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg transition-[scale] duration-300 ease-out hover:scale-[0.995]"
                 href={card.href}>
                <div aria-hidden="true" className="absolute inset-0 rounded-[inherit]" style={{ backgroundColor: card.color }} />
                <div aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-[inherit] opacity-60">
                  <img alt="" loading="lazy" decoding="async" src="/sites/afterquery-com-7e0a74f7/shared/research/research-card-header.webp" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
                </div>
                <div className="relative z-10 flex flex-col gap-2">
                  <h2 className="font-serif text-ink tracking-[-0.01em] text-balance text-2xl leading-[1.15] text-[15px] leading-[1.25] text-inverse md:text-2xl md:leading-[1.15]">{card.title}</h2>
                  <div className="flex items-end justify-between gap-4">
                    <p className="font-sans text-sm leading-[1.45] text-ink/80 min-w-0 flex-1 text-inverse/60 max-md:hidden md:line-clamp-2">{card.description}</p>
                    <span className="inline-flex items-center gap-1 shrink-0 whitespace-nowrap font-sans text-sm font-medium text-inverse/80">View benchmark<span aria-hidden="true" className="transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span></span>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <p className="font-sans text-sm leading-[1.45] text-ink/60 mt-5 text-center">Select benchmarks co-created by AfterQuery</p>
        </Reveal>
      </div>
    </section>
  );
}
