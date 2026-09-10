import { Reveal } from "../shared/Reveal";

const logos = [
  { name: "Chula", url: "/images/chula.png", height: 28 },
  { name: "Deloitte", url: "/images/deloitte.png", height: 40 },
  { name: "JPMorgan", url: "/images/jpmorgan.svg", height: 21 },
  { name: "KBank", url: "/images/kbank.png", height: 40 },
];

export function LogoMarquee() {
  return (
    <section className="px-4 pb-10 pt-8 md:pb-12">
      <Reveal className="flex flex-col items-center text-center">
        <p className="font-serif text-ink tracking-[-0.01em] text-balance text-2xl leading-[1.15] text-ink/70">Built by team from</p>
        <div className="mt-8 flex w-full max-w-[40rem] flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((logo) => (
            <img
              key={logo.name}
              alt={logo.name}
              src={logo.url}
              style={{ height: logo.height }}
              className="block w-auto object-contain grayscale opacity-80"
            />
          ))}
        </div>
        <p className="mt-10 text-sm leading-[1.4] text-ink/60">Powering your company with talent</p>
      </Reveal>
    </section>
  );
}
