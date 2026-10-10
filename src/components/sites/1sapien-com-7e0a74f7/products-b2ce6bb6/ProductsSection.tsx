import { Reveal } from "../shared/Reveal";

type Feature = {
  title: string;
  description: string;
};

type Product = {
  eyebrow: string;
  title: string;
  color: string;
  lead: string;
  body: string[];
  features: Feature[];
  extra?: {
    title: string;
    lead: string;
    items: Feature[];
  };
};

const products: Product[] = [
  {
    eyebrow: "Local Search Agent",
    title: "Local SEO for Multi-Location Brands",
    color: "rgba(0, 0, 0, 0.8)",
    lead: "Optimizes every location continuously — so you don’t just show up in local search, you get chosen when customers ask AI where to go.",
    body: [
      "Your customers don’t just Google you anymore. They ask an AI assistant which location to go to, and the answer is assembled from your local listings, your reviews, and your local pages. If those signals are thin or inconsistent, you don’t get recommended.",
    ],
    features: [
      {
        title: "Optimizes for how AI reads your locations",
        description:
          "Local Search Agent structures categories, attributes, descriptions, and Q&A the way answer engines actually parse them — so your locations become the source AI cites.",
      },
      {
        title: "Tracks visibility across apps",
        description:
          "See where your brand surfaces across local search, maps, and AI-driven discovery, benchmarked location by location.",
      },
      {
        title: "Feeds on signals competitors ignore",
        description:
          "Review themes and social engagement from Reputation Agent and Social Agent flow into search optimizations — cross-channel context no listings tool can replicate.",
      },
    ],
  },
  {
    eyebrow: "Reputation Agent",
    title: "AI Reputation and Review Management for Every Location",
    color: "rgb(173, 101, 101)",
    lead: "Respond faster, rank higher, win more customers.",
    body: [
      "It monitors reviews on Google, Yelp, Facebook, and more, replies in your brand voice under your approval rules, and routes only what needs a person to your team. It also surveys customers after the visit, so problems get resolved before they become one-star reviews.",
      "Review management software monitors customer reviews across platforms, helps teams respond, and reports on reputation by location. Most online review software stops at the dashboard — your team still reads, drafts, and approves every reply. Genius Reputation Agent brings AI review management that does the work: it writes and publishes replies in your brand voice, follows your escalation rules, and hands your team only the reviews that need a person.",
    ],
    features: [
      {
        title: "Trained on your brand, not just prompted",
        description:
          "Reputation Agent replies to every review at every location within hours, not weeks — turning the reviews customers read before choosing into a reason to choose you.",
      },
      {
        title: "Escalates reviews that matter",
        description:
          "Every response follows your voice and your rules. Only the reviews that need human judgment reach your team; the rest are handled.",
      },
      {
        title: "Save costs with autonomous execution",
        description:
          "Reputation Agent handles the work of hundreds across every location and network — without added headcount or another login.",
      },
    ],
  },
  {
    eyebrow: "Social Agent",
    title: "Your Social Media Strategist",
    color: "rgb(42, 140, 83)",
    lead: "Smarter social media for multi-location brands — a brand-trained teammate for strategy, content creation, and community engagement, driving faster, more consistent results across every location.",
    body: [
      "Genius Social Agent plans, creates, and engages for every location — lowering costs while driving stronger local engagement and revenue.",
    ],
    features: [
      {
        title: "Boost revenue with local relevance",
        description:
          "Social Agent publishes tailored posts and replies to engagements, so your brand connects with local audiences and drives sales.",
      },
      {
        title: "Protect brand with consistency",
        description:
          "Every post and engagement response follows your brand guidelines, keeping your voice aligned across all locations.",
      },
      {
        title: "Save costs with automation",
        description:
          "Social Agent scales across all your locations, working 24/7 to execute social media tasks for you.",
      },
    ],
    extra: {
      title: "Social Agent is your expert social media manager",
      lead: "Working around the clock and completing your social media tasks.",
      items: [
        {
          title: "Creates & publishes posts",
          description:
            "Social Agent uses local insights to publish on-brand, compelling posts across locations and networks.",
        },
        {
          title: "Generates videos & images",
          description:
            "Social Agent generates tailored videos and images to connect more deeply with local audiences.",
        },
        {
          title: "Replies to engagements",
          description:
            "Social Agent responds to social engagements in your brand voice, escalating only exceptions for review.",
        },
      ],
    },
  },
];

export function ProductsSection() {
  return (
    <section className="pb-24 pt-12 md:pb-36 md:pt-16">
      <div className="mx-auto w-[min(100%_-_2rem,1040px)]">
        <Reveal>
          <h1 className="font-serif text-ink tracking-[-0.01em] text-balance text-[1.875rem] leading-[1.05] md:text-[2.125rem] lg:text-[2.375rem] text-ink/80">
            Products
          </h1>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-8 space-y-5">
            <p className="font-sans text-lg leading-[1.45] text-ink/60">
              Your customers don’t just compare you on quality anymore — they ask AI,
              read reviews, and scroll their feed. We run three agents that turn every
              location into one that gets found, recommended, and chosen.
            </p>
            <p className="font-sans text-lg leading-[1.45] text-ink/60">
              Local Search, Reputation, and Social Agent each work a different channel,
              and feed each other — so the signals that decide who wins local search
              compound instead of compete.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 space-y-16 md:space-y-20">
          {products.map((product, index) => (
            <Reveal key={product.title}>
              <article className="border-t border-ink/10 pt-8 md:pt-10">
                <div className="flex items-start gap-6">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-4 w-1.5 shrink-0"
                    style={{ backgroundColor: product.color }}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-sans text-sm leading-[1.45] text-ink/60">
                      {String(index + 1).padStart(2, "0")} · {product.eyebrow}
                    </p>
                    <h2 className="mt-3 font-serif text-ink tracking-[-0.01em] text-balance text-2xl leading-[1.15] md:text-[1.75rem] text-ink/80">
                      {product.title}
                    </h2>
                  </div>
                </div>

                <div className="mt-6 space-y-5 md:pl-[1.875rem]">
                  <p className="font-sans text-lg leading-[1.45] text-ink/60 font-medium">
                    {product.lead}
                  </p>
                  {product.body.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 24)}
                      className="font-sans text-base leading-[1.45] text-ink/60"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-[4px] bg-ink/10 ring-1 ring-inset ring-ink/10 md:grid-cols-3">
                  {product.features.map((feature) => (
                    <div key={feature.title} className="bg-bg p-6">
                      <h3 className="font-serif text-ink tracking-[-0.01em] text-balance text-lg leading-[1.2] text-ink/80">
                        {feature.title}
                      </h3>
                      <p className="mt-3 font-sans text-sm leading-[1.45] text-ink/60">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>

                {product.extra ? (
                  <div className="mt-10 md:pl-[1.875rem]">
                    <h3 className="font-serif text-ink tracking-[-0.01em] text-balance text-xl leading-[1.2] text-ink/80">
                      {product.extra.title}
                    </h3>
                    <p className="mt-3 font-sans text-base leading-[1.45] text-ink/60">
                      {product.extra.lead}
                    </p>
                    <ul className="mt-6 flex flex-col gap-3">
                      {product.extra.items.map((item) => (
                        <li
                          key={item.title}
                          className="flex gap-3 border-t border-ink/10 pt-3"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ backgroundColor: product.color }}
                          />
                          <span className="min-w-0">
                            <span className="font-sans text-sm font-medium text-ink/80">
                              {item.title}
                            </span>
                            <span className="font-sans text-sm leading-[1.45] text-ink/60">
                              {" "}
                              — {item.description}
                            </span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
