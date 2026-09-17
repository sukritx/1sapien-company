import { Reveal } from "../shared/Reveal";

const IMAGE_ROOT = "/sites/afterquery-com-7e0a74f7/root-e0627e8d/images/";

export function NarrativeSection() {
  return (
    <section className="pb-14 pt-8">
      <div className="mx-auto w-[min(100%_-_2rem,688px)]">
        <Reveal>
          <p className="font-sans text-sm leading-[1.45] text-ink/60 mb-4">Problem</p>
          <h2 className="font-serif text-ink tracking-[-0.01em] text-balance text-2xl leading-[1.15] text-ink/80">Local businesses lose jobs to competitors with more reviews and higher Google rankings.</h2>
          <div className="mt-4 space-y-4">
            <p className="font-sans text-lg leading-[1.45] text-ink/60 font-medium">When someone nearby searches for what you do, they pick from the top few results. If you’re not there, you lose the call — even when your work is better. Most local businesses have happy customers but almost no reviews, and a website that never gets found.</p>
            <p className="font-sans text-lg leading-[1.45] text-ink/60 font-medium">Getting found — and getting chosen — has never mattered more.</p>
            <p className="font-sans text-lg leading-[1.45] text-ink/60 font-medium">We fix it on autopilot: automated review requests after every job, local SEO that pushes you into the Google Map 3-pack, and a fast website built to turn visitors into booked jobs.</p>
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
          <h2 className="font-serif text-ink tracking-[-0.01em] text-balance text-2xl leading-[1.15] text-ink/80">We turn finished jobs into 5-star reviews, rankings, and booked work.</h2>
          <p className="font-sans text-lg leading-[1.45] text-ink/60 mt-4 font-medium">1Sapien is a growth partner for local service businesses across the US and Europe. We combine automated review requests, local SEO, and high-converting websites into one simple system — so you climb the rankings, earn more 5-star reviews, and fill your calendar without lifting a finger.</p>
          <p className="font-sans text-lg leading-[1.45] text-ink/60 mt-4 font-medium">Our services include:</p>
        </Reveal>
      </div>
    </section>
  );
}
