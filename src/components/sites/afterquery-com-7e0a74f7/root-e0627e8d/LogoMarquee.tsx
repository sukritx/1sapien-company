import { Reveal } from "../shared/Reveal";

const logos = [
  { name: "Anthropic", url: "/sites/afterquery-com-7e0a74f7/shared/brand/logos/anthropic.svg", width: 155, height: 18 },
  { name: "DeepMind", url: "/sites/afterquery-com-7e0a74f7/shared/brand/logos/deepmind.svg", width: 141, height: 33 },
  { name: "Meta", url: "/sites/afterquery-com-7e0a74f7/shared/brand/logos/meta.svg", width: 107, height: 21 },
  { name: "OpenAI", url: "/sites/afterquery-com-7e0a74f7/shared/brand/logos/openai.svg", width: 103, height: 28 },
  { name: "Google", url: "/sites/afterquery-com-7e0a74f7/shared/brand/logos/google.svg", width: 87, height: 29 },
  { name: "Microsoft", url: "/sites/afterquery-com-7e0a74f7/shared/brand/logos/microsoft.svg", width: 112, height: 24 },
];

export function LogoMarquee() {
  return (
    <section className="px-4 pb-10 pt-8 md:pb-12">
      <Reveal className="flex flex-col items-center text-center">
        <p className="font-serif text-ink tracking-[-0.01em] text-balance text-2xl leading-[1.15] text-ink/70">Backed by angels from</p>
        <div className="mt-8 w-full max-w-[40rem] overflow-hidden">
          <ul className="logo-marquee flex w-max items-center text-ink/50">
            {[...logos, ...logos].map((logo, i) => (
              <li key={i} className="mr-14 shrink-0">
                <span
                  role="img"
                  aria-label={logo.name}
                  className="block bg-ink/50"
                  style={{
                    width: logo.width,
                    height: logo.height,
                    maskImage: `url(${logo.url})`,
                    WebkitMaskImage: `url(${logo.url})`,
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-10 text-sm leading-[1.4] text-ink/60">Powering every frontier AI research lab</p>
      </Reveal>
    </section>
  );
}
