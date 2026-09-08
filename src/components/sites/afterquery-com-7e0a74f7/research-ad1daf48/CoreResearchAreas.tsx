"use client";

import { useEffect, useState } from "react";

import { Reveal } from "../shared/Reveal";

type ResearchArea = {
  title: string;
  description: string;
  marker: string;
  image: string;
};

const areas: ResearchArea[] = [
  {
    title: "Computer Use",
    description:
      "We’ve created training data and reinforcement learning environments that teach AI agents to navigate real software workflows end-to-end, capturing judgment calls and edge cases that only experienced practitioners recognize.",
    marker: "bg-accent-green",
    image: "/sites/afterquery-com-7e0a74f7/research-ad1daf48/images/computer-use.avif",
  },
  {
    title: "Multimodal",
    description:
      "We build datasets that pair language with the documents, screens, charts, and interfaces professionals work across — so models reason over real multimodal context, not just clean text.",
    marker: "bg-ink",
    image: "/sites/afterquery-com-7e0a74f7/research-ad1daf48/images/multimodal.avif",
  },
  {
    title: "AI Safety & Security",
    description:
      "We work with experts to surface adversarial scenarios and failure modes, building the red-team trajectories and guardrail data that matter when models operate in high-stakes settings.",
    marker: "bg-accent-gold",
    image: "/sites/afterquery-com-7e0a74f7/research-ad1daf48/images/ai-safety.avif",
  },
  {
    title: "Data Quality & Curation",
    description:
      "We treat curation as research — designing rigorous review, grading, and validation methodologies so every example reflects how an expert would actually judge the work.",
    marker: "bg-accent-taupe",
    image: "/sites/afterquery-com-7e0a74f7/research-ad1daf48/images/data-quality.avif",
  },
  {
    title: "Model Evaluation",
    description:
      "We design benchmarks and rubrics grounded in real professional tasks, measuring not just whether a model reaches the answer but whether it reasons the way an expert would.",
    marker: "bg-accent-green",
    image: "/sites/afterquery-com-7e0a74f7/research-ad1daf48/images/model-evaluation.avif",
  },
];

export function CoreResearchAreas() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIndex((i) => (i + 1) % areas.length), 6000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="pb-24 md:pb-32">
      <div className="mx-auto w-[min(100%_-_2rem,1040px)]">
        <Reveal>
          <h2 className="font-serif text-ink tracking-[-0.01em] text-balance text-[2.375rem] leading-[1.05] mb-10">
            Core Research Areas
          </h2>
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div className="border-t border-ink/15 pt-8">
              <div
                id="cra-panel"
                role="tabpanel"
                aria-labelledby={`cra-tab-${index}`}
                className="min-h-[180px]"
              >
                <div key={index} className="animate-[aq-fade-up_0.45s_var(--ease-brand)]">
                  <p className="font-sans text-sm leading-[1.45] text-ink/40 tabular-nums">
                    {index + 1}
                  </p>
                  <h3 className="font-serif text-ink tracking-[-0.01em] text-balance text-[1.625rem] leading-[1.25] mt-3">
                    {areas[index].title}
                  </h3>
                  <p className="font-sans text-base leading-[1.45] text-ink/60 mt-4 max-w-[46ch]">
                    {areas[index].description}
                  </p>
                </div>
              </div>
              <div role="tablist" aria-label="Core research areas" className="mt-10">
                {areas.map((area, n) => {
                  const active = n === index;
                  return (
                    <button
                      key={area.title}
                      id={`cra-tab-${n}`}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      aria-controls="cra-panel"
                      onClick={() => setIndex(n)}
                      className="group/tab relative block w-full border-b border-ink/10 py-4 text-left outline-none focus-visible:bg-ink/[0.04]"
                    >
                      <span className="flex items-center gap-3">
                        <span aria-hidden="true" className={`h-2.5 w-1.5 shrink-0 ${area.marker}`} />
                        <span
                          className={`font-sans text-sm transition-colors duration-150 ${
                            active ? "font-medium text-ink" : "text-ink/55 group-hover/tab:text-ink/80"
                          }`}
                        >
                          {area.title}
                        </span>
                      </span>
                      {active && (
                        <span
                          aria-hidden="true"
                          style={{ transformOrigin: "left" }}
                          className={`absolute bottom-0 left-0 h-0.5 w-full animate-[aq-grow_6000ms_linear_forwards] ${area.marker}`}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="relative min-h-[340px] bg-ink/[0.04] md:min-h-0 overflow-hidden rounded-[4px] ring-1 ring-inset ring-ink/15">
              {areas.map((area, i) => (
                <div
                  key={area.title}
                  aria-hidden="true"
                  style={{ backgroundImage: `url(${area.image})` }}
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-out ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
