import { Reveal } from "../shared/Reveal";

export function ResearchHero() {
  return (
    <section className="pb-12 pt-20 text-center md:pb-16 md:pt-28">
      <div className="mx-auto w-[min(100%_-_2rem,1040px)]">
        <Reveal>
          <p className="font-sans text-sm leading-[1.45] text-ink/60 mb-5">Research</p>
          <h1 className="font-serif text-ink tracking-[-0.01em] text-balance text-[1.875rem] leading-[1.05] md:text-[2.125rem] lg:text-[2.375rem]">Data quality makes all the difference.</h1>
          <p className="font-sans text-lg leading-[1.45] text-ink/60 mx-auto mt-6 max-w-[58ch]">We’re driven by the conviction that model performance is fundamentally bounded by training data quality. Through expert collaboration, rigorous curation methodologies, and deep domain expertise, we research datasets that power tomorrow’s models.</p>
        </Reveal>
      </div>
    </section>
  );
}
