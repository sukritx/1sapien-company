import { Reveal } from "../shared/Reveal";
import { Stagger } from "../shared/Stagger";
import { Typewriter } from "../shared/Typewriter";

export function HeroSection() {
  return (
    <section className="pt-14 md:pt-20">
      <div className="mx-auto w-[min(100%_-_2rem,688px)]">
        <Stagger>
          <div>
            <h1 className="font-serif text-ink tracking-[-0.01em] text-balance text-2xl leading-[1.15] max-w-[28ch]">We teach machines how experts think.</h1>
          </div>
          <div>
            <p aria-label="The future of AI won’t be trained on more data, it will be trained on better thinking." className="relative mt-5 max-w-[46ch] font-serif text-xl leading-[1.2] text-ink/55">
              <Typewriter text="The future of AI won’t be trained on more data, it will be trained on better thinking." />
            </p>
          </div>
          <div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium leading-none transition-[scale,background-color,color,filter] duration-150 ease-out outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:scale-[0.96] bg-ink/90 text-bg hover:bg-ink h-8 px-3 text-sm">Get data</a>
              <a href="/research" className="inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium leading-none transition-[scale,background-color,color,filter] duration-150 ease-out outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:scale-[0.96] bg-ink/[0.06] text-ink/80 hover:bg-ink/[0.1] h-8 px-3 text-sm">Explore research</a>
            </div>
          </div>
        </Stagger>
      </div>
      <div className="mx-auto w-[min(100%_-_2rem,1136px)] mt-14 md:mt-20">
        <Reveal delay={0.15}>
          <div className="relative overflow-hidden rounded-[4px] ring-1 ring-inset ring-ink/10">
            <img src="/sites/afterquery-com-7e0a74f7/root-e0627e8d/images/landing-hero.webp" alt="" width={2080} height={838} className="h-auto w-full" />
            <img src="/sites/afterquery-com-7e0a74f7/shared/brand/hero-mark.svg" alt="" aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 w-24 -translate-x-1/2 -translate-y-1/2 md:w-36" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
