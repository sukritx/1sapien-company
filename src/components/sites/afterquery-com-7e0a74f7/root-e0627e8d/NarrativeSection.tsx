import { Reveal } from "../shared/Reveal";

const IMAGE_ROOT = "/sites/afterquery-com-7e0a74f7/root-e0627e8d/images/";

export function NarrativeSection() {
  return (
    <section className="pb-14 pt-8">
      <div className="mx-auto w-[min(100%_-_2rem,688px)]">
        <Reveal>
          <p className="font-sans text-sm leading-[1.45] text-ink/60 mb-4">Problem</p>
          <h2 className="font-serif text-ink tracking-[-0.01em] text-balance text-2xl leading-[1.15] text-ink/80">AI researchers and enterprises are hitting walls with suboptimal data solutions.</h2>
          <div className="mt-4 space-y-4">
            <p className="font-sans text-lg leading-[1.45] text-ink/60 font-medium">Today’s models can generate answers. But they struggle with real work. Because real work isn’t just outputs. It’s decisions, tradeoffs, and context. That knowledge doesn’t live on the internet — it lives inside experts.</p>
            <p className="font-sans text-lg leading-[1.45] text-ink/60 font-medium">Expertise has never been captured. Until now.</p>
            <p className="font-sans text-lg leading-[1.45] text-ink/60 font-medium">The most valuable knowledge isn’t written down. It exists in how professionals think — not just answers, but reasoning, decisions, tradeoffs, and context. We work with domain experts to capture that thinking, then structure it into training data models can learn from.</p>
          </div>
        </Reveal>
      </div>
      <div className="mx-auto w-[min(100%_-_2rem,688px)] mt-14">
        <Reveal>
          <div className="overflow-hidden rounded-[4px] ring-1 ring-inset ring-ink/10">
            <img src={`${IMAGE_ROOT}man-typing.webp`} alt="" width={2720} height={1161} className="h-auto w-full" />
          </div>
        </Reveal>
      </div>
      <div className="mx-auto w-[min(100%_-_2rem,688px)] mt-14">
        <Reveal>
          <p className="font-sans text-sm leading-[1.45] text-ink/60 mb-4">Our solution</p>
          <h2 className="font-serif text-ink tracking-[-0.01em] text-balance text-2xl leading-[1.15] text-ink/80">We turn real-world work into training data.</h2>
          <p className="font-sans text-lg leading-[1.45] text-ink/60 mt-4 font-medium">1Sapien is an applied research lab curating data solutions for frontier foundation model development. Models trained on outputs plateau. Models trained on reasoning improve. We build datasets that reflect how experts actually solve problems — step by step, decision by decision.</p>
          <p className="font-sans text-lg leading-[1.45] text-ink/60 mt-4 font-medium">Our data includes:</p>
        </Reveal>
      </div>
    </section>
  );
}
