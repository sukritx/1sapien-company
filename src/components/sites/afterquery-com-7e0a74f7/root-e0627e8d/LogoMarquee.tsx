import { Reveal } from "../shared/Reveal";

const logos = [
  { name: "Chula", url: "/images/chula.png", className: "h-[18px] md:h-[28px]" },
  { name: "Deloitte", url: "/images/deloitte.png", className: "h-[18px] md:h-[28px]" },
  { name: "JPMorgan", url: "/images/jpmorgan.svg", className: "h-[13px] md:h-[21px]" },
  { name: "KBank", url: "/images/kbank.png", className: "h-[18px] md:h-[28px]" },
];

export function LogoMarquee() {
  return (
    <section className="px-4 pb-10 pt-8 md:pb-12">
      <Reveal className="flex flex-col items-center text-center">
        <p className="font-serif text-ink tracking-[-0.01em] text-balance text-2xl leading-[1.15] text-ink/70">Built by team from</p>
        <div className="mt-8 flex w-full max-w-[40rem] flex-wrap items-center justify-center gap-x-4 gap-y-5 sm:gap-x-8 md:gap-x-12">
          {logos.map((logo) => (
            <img
              key={logo.name}
              alt={logo.name}
              src={logo.url}
              className={`block w-auto object-contain grayscale opacity-80 ${logo.className}`}
            />
          ))}
        </div>
        <p className="mt-10 text-sm leading-[1.4] text-ink/60">Powering every frontier AI research lab</p>
      </Reveal>
    </section>
  );
}
