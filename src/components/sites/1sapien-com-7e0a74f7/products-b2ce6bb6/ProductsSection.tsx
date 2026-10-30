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
    eyebrow: "Review Generation",
    title: "Turn Every Completed Job into a Google Review",
    color: "rgba(0, 0, 0, 0.8)",
    lead: "We text happy customers when the job is done and make leaving a Google review one tap.",
    body: [
      "Personalized SMS and email requests, sent at the right moment, with quiet hours and repeat prevention built in. One gentle reminder follows only if no review appears.",
    ],
    features: [
      {
        title: "Asked at the right moment",
        description: "Requests go out after the job is completed, while the experience is still fresh.",
      },
      {
        title: "SMS first, email backup",
        description: "A direct review link by text, with email for customers who prefer the inbox.",
      },
      {
        title: "Never asked twice",
        description: "Cooldown windows and quiet hours keep every ask welcome.",
      },
    ],
  },
  {
    eyebrow: "AI Review Responses",
    title: "Every Google Review Answered in Your Brand Voice",
    color: "rgb(173, 101, 101)",
    lead: "Positive reviews are answered automatically. Tough ones wait for your OK.",
    body: [
      "New reviews are drafted in your voice within hours. Four and five star reviews with no complaints post on their own; anything lower or risky is routed to you for one-click approval, with every reply logged.",
    ],
    features: [
      {
        title: "Written in your voice",
        description: "Replies sound like your business, not a template.",
      },
      {
        title: "Positive reviews on autopilot",
        description: "Low-risk reviews are answered and published without you lifting a finger.",
      },
      {
        title: "Tough reviews wait for you",
        description: "Low ratings and sensitive topics come to you, tagged by sentiment and cause.",
      },
    ],
  },
  {
    eyebrow: "Social Proof",
    title: "Turn Five-Star Reviews into Branded Social Posts",
    color: "rgb(42, 140, 83)",
    lead: "Your best Google reviews become branded Instagram posts — your reputation markets itself.",
    body: [
      "Each new five-star review becomes a branded quote card with the reviewer’s name, stars, and a snippet, published to Instagram and Facebook and marked as posted so nothing repeats.",
    ],
    features: [
      {
        title: "Branded quote cards",
        description: "Every five-star review becomes a polished 1080×1080 post.",
      },
      {
        title: "Published automatically",
        description: "Approved reviews go straight to Instagram and Facebook.",
      },
      {
        title: "No repeats",
        description: "Posted reviews are tracked and skipped, with a notification when a post goes live.",
      },
    ],
  },
  {
    eyebrow: "Profile Management",
    title: "Keep Your Google Profile Accurate and Protected",
    color: "rgb(101, 124, 173)",
    lead: "We keep your profile accurate and alert you the moment Google changes something.",
    body: [
      "Hours, descriptions, attributes, and posts stay matched to your master record. Drift, flags, and listing issues surface immediately, alongside views, searches, and actions.",
    ],
    features: [
      {
        title: "Always matches your record",
        description: "Core details are checked and corrected against your approved source.",
      },
      {
        title: "Issues surface early",
        description: "Google changes and listing flags reach you the day they happen.",
      },
      {
        title: "Performance you can see",
        description: "Views, searches, and actions tracked over time.",
      },
    ],
  },
  {
    eyebrow: "Competitive Benchmarking",
    title: "See Exactly Where You Stand in Local Search",
    color: "rgb(196, 148, 74)",
    lead: "A weekly scoreboard: where you rank, how you compare, and who is gaining on you.",
    body: [
      "We scan the local pack for your search term and city, then report every competitor’s rating, review count, and position — with an alert when a rival overtakes you.",
    ],
    features: [
      {
        title: "The full local pack",
        description: "Every rival competing for your search, ranked.",
      },
      {
        title: "Gaps stated plainly",
        description: "Star and review-count gaps against each competitor.",
      },
      {
        title: "Overtake alerts",
        description: "Know the moment a competitor passes you on reviews.",
      },
    ],
  },
  {
    eyebrow: "Review Intelligence",
    title: "A Weekly Read on What Customers Really Think",
    color: "rgb(120, 108, 160)",
    lead: "Every Monday, a 60-second read on what customers loved and what cost you stars.",
    body: [
      "New reviews, average rating, and response rate at a glance, plus the root causes behind lost stars and one clear thing to fix this week.",
    ],
    features: [
      {
        title: "The numbers that matter",
        description: "New reviews, average rating, and response rate, week over week.",
      },
      {
        title: "Stars lost, explained",
        description: "Root-cause tags show what cost you — wait time, staff, pricing.",
      },
      {
        title: "One next step",
        description: "Each digest ends with a single priority to fix.",
      },
    ],
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
          <p className="mt-8 font-sans text-lg leading-[1.45] text-ink/60">
            Six connected services that turn every location into one that gets found,
            recommended, and chosen — review generation, AI responses, social proof,
            profile management, competitor benchmarking, and weekly intelligence.
          </p>
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
