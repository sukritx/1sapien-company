import { Reveal } from "../shared/Reveal";

export function ResearchHero() {
  return (
    <section className="pb-12 pt-20 text-center md:pb-16 md:pt-28">
      <div className="mx-auto w-[min(100%_-_2rem,1040px)]">
        <Reveal>
          <p className="font-sans text-sm leading-[1.45] text-ink/60 mb-5">Results</p>
          <h1 className="font-serif text-ink tracking-[-0.01em] text-balance text-[1.875rem] leading-[1.05] md:text-[2.125rem] lg:text-[2.375rem]">Real businesses. More reviews. Higher rankings.</h1>
          <p className="font-sans text-lg leading-[1.45] text-ink/60 mx-auto mt-6 max-w-[58ch]">Every market is different, but the pattern is the same: the businesses with more 5-star reviews and stronger local rankings win the work. Here’s what that looks like for the local businesses we serve across the US and Europe.</p>
        </Reveal>
      </div>
    </section>
  );
}
