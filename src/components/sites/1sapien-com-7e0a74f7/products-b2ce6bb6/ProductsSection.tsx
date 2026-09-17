import { Reveal } from "../shared/Reveal";

const rows = [
  {
    title: "Automated Reviews",
    color: "rgba(0, 0, 0, 0.8)",
    description:
      "Review requests go out automatically after every completed job, with a one-tap link straight to your Google profile. We reply to every review and route unhappy customers to a private feedback form first — so your rating climbs without you chasing anyone.",
  },
  {
    title: "Local SEO",
    color: "rgb(173, 101, 101)",
    description:
      "We optimize your Google Business Profile, your site, and your local listings so you climb into the map 3-pack and outrank competitors in your service area. You get more calls and more booked jobs — tracked and reported every month.",
  },
  {
    title: "Websites That Convert",
    color: "rgb(42, 140, 83)",
    description:
      "A fast, mobile-first website built for one job: turning a visitor into a booked appointment. Lead-capture forms, online booking, and instant follow-up mean no enquiry slips away, day or night.",
  },
];

export function ProductsSection() {
  return (
    <section className="pb-24 pt-12 md:pb-36 md:pt-16">
      <div className="mx-auto w-[min(100%_-_2rem,1040px)]">
        <Reveal>
          <h1 className="font-serif text-ink tracking-[-0.01em] text-balance text-[1.875rem] leading-[1.05] md:text-[2.125rem] lg:text-[2.375rem] text-ink/80">
            Services
          </h1>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-8 space-y-5">
            <p className="font-sans text-lg leading-[1.45] text-ink/60">
              Local customers don’t compare you on quality alone. They compare what they
              can see: your reviews, your ranking, and your website. That’s what decides
              who gets the call.
            </p>
            <p className="font-sans text-lg leading-[1.45] text-ink/60">
              We run exactly three services — automated reviews, local SEO, and websites
              built to convert — so every finished job works harder for you.
            </p>
          </div>
        </Reveal>
        <div className="mt-16">
          {rows.map((row) => (
            <Reveal key={row.title}>
              <div className="grid grid-cols-1 gap-y-3 border-t border-ink/10 py-7 md:grid-cols-[1.13fr_1fr] md:items-start md:gap-x-4 md:py-8">
                <div className="flex items-start gap-6">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-4 w-1.5 shrink-0"
                    style={{ backgroundColor: row.color }}
                  />
                  <h3 className="font-serif text-ink tracking-[-0.01em] text-balance text-2xl leading-[1.15] min-w-0 flex-1 text-ink/80">
                    {row.title}
                  </h3>
                </div>
                <p className="font-sans text-sm leading-[1.45] text-ink/60">
                  {row.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
