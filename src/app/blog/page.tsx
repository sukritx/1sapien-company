import type { Metadata } from "next";

import { SiteHeader } from "@/components/sites/1sapien-com-7e0a74f7/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/1sapien-com-7e0a74f7/shared/SiteFooter";
import { Reveal } from "@/components/sites/1sapien-com-7e0a74f7/shared/Reveal";
import { BLOG_POSTS, type BlogPost } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog - Reputation, Reviews & Local Search | 1Sapien",
  description:
    "Practical guides on reputation management tools, Google reviews, local SEO, and AI search visibility — from the team that runs reputation for local businesses.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog - Reputation, Reviews & Local Search | 1Sapien",
    description:
      "Practical guides on reputation management tools, Google reviews, local SEO, and AI search visibility.",
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
    type: "website",
  },
};

function PostVisual({
  post,
  large = false,
  compact = false,
}: {
  post: BlogPost;
  large?: boolean;
  compact?: boolean;
}) {
  if (post.cover) {
    return (
      <div className="relative h-full min-h-[180px] w-full overflow-hidden bg-ink">
        <img
          src={post.cover}
          alt={post.coverAlt}
          loading="lazy"
          className="absolute inset-0 size-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`relative flex h-full w-full flex-col justify-between overflow-hidden bg-bg-alt ${
        compact ? "min-h-0 p-3" : "min-h-[180px] p-6"
      } ${large ? "md:min-h-[320px] md:p-8" : ""}`}
    >
      <span
        className={`font-sans font-medium uppercase tracking-[0.14em] text-ink/35 ${
          compact ? "text-[8px]" : "text-xs"
        }`}
      >
        {post.category}
      </span>
      <span
        className={`font-serif leading-none text-ink/10 ${
          compact ? "text-[2.5rem]" : large ? "text-[7rem] md:text-[9rem]" : "text-[5rem]"
        }`}
      >
        {post.keyword.split(" ")[0].slice(0, 1).toUpperCase()}
      </span>
      {compact ? null : (
        <span className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-ink/35">
          1Sapien
        </span>
      )}
    </div>
  );
}

export default function BlogIndexPage() {
  const [featured, ...rest] = BLOG_POSTS;

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "1Sapien Blog",
    description:
      "Practical guides on reputation management tools, Google reviews, local SEO, and AI search visibility.",
    url: `${SITE_URL}/blog`,
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    blogPost: BLOG_POSTS.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.dateISO,
      author: { "@type": "Person", name: post.author.name },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader activeHref="/blog" />
      <div className="flex flex-1 flex-col">
        <main className="flex-1">
          <section className="pb-12 pt-20 md:pb-16 md:pt-28">
            <div className="mx-auto w-[min(100%_-_2rem,1040px)]">
              <Reveal>
                <p className="mb-5 font-sans text-sm leading-[1.45] text-ink/60">Blog</p>
                <h1 className="max-w-[24ch] font-serif text-[1.875rem] leading-[1.05] tracking-[-0.01em] text-balance text-ink/85 md:text-[2.125rem] lg:text-[2.6rem]">
                  Reputation, reviews, and the search results that decide who gets picked.
                </h1>
                <p className="mt-6 max-w-[62ch] font-sans text-lg leading-[1.45] text-ink/60">
                  Practical guides for business owners who want more Google reviews, faster replies,
                  and a local ranking that produces calls. No theory, no tool worship — just the
                  systems that hold up on a busy Tuesday.
                </p>
              </Reveal>
            </div>
          </section>

          <section className="pb-16 md:pb-20">
            <div className="mx-auto w-[min(100%_-_2rem,1040px)]">
              <Reveal>
                <a
                  href={`/blog/${featured.slug}`}
                  className="group grid overflow-hidden rounded-[4px] border border-ink/10 bg-bg md:grid-cols-[1.15fr_0.85fr]"
                >
                  <div className="flex flex-col justify-between p-6 md:p-10">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 font-sans text-sm font-medium leading-none text-ink/55">
                        <span aria-hidden="true" className="h-2.5 w-1.5 shrink-0 bg-ink/80" />
                        <span>Featured</span>
                        <span aria-hidden="true" className="text-ink/30">
                          ·
                        </span>
                        <span>{featured.category}</span>
                        <span aria-hidden="true" className="text-ink/30">
                          ·
                        </span>
                        <span>{featured.readingTime}</span>
                      </div>
                      <h2 className="mt-5 max-w-[20ch] font-serif text-3xl leading-[1.08] tracking-[-0.01em] text-balance text-ink/85 md:text-[2.4rem]">
                        {featured.title}
                      </h2>
                      <p className="mt-5 max-w-[54ch] font-sans text-base leading-[1.6] text-ink/60">
                        {featured.excerpt}
                      </p>
                    </div>
                    <span className="mt-8 inline-flex items-center gap-1 font-sans text-sm font-medium text-ink/80 transition-colors duration-150 group-hover:text-ink">
                      Read the guide
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      >
                        ↗
                      </span>
                    </span>
                  </div>
                  <PostVisual post={featured} large />
                </a>
              </Reveal>
            </div>
          </section>

          <section className="pb-20 md:pb-28">
            <div className="mx-auto w-[min(100%_-_2rem,1040px)]">
              <Reveal>
                <div className="flex items-baseline justify-between gap-6 border-b border-ink/15 pb-4">
                  <h2 className="font-serif text-2xl leading-[1.15] text-ink/85">All articles</h2>
                  <span className="font-sans text-sm text-ink/45">{BLOG_POSTS.length} guides</span>
                </div>
              </Reveal>
              <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
                {rest.map((post) => (
                  <Reveal key={post.slug}>
                    <a
                      href={`/blog/${post.slug}`}
                      className="group grid grid-cols-[88px_1fr] items-start gap-5 border-t border-ink/10 pt-6"
                    >
                      <div className="relative h-[110px] w-[88px] overflow-hidden rounded-[4px] bg-ink">
                        <PostVisual post={post} compact />
                      </div>
                      <div className="min-w-0">
                        <span className="font-sans text-xs font-medium uppercase tracking-[0.12em] text-ink/40">
                          {post.category}
                        </span>
                        <h3 className="mt-2 font-serif text-xl leading-[1.2] text-balance text-ink transition-opacity duration-150 group-hover:opacity-70">
                          {post.title}
                        </h3>
                        <p className="mt-3 line-clamp-3 font-sans text-sm leading-[1.55] text-ink/55">
                          {post.excerpt}
                        </p>
                        <span className="mt-3 block font-sans text-xs font-medium text-ink/40">
                          {post.dateText} · {post.readingTime}
                        </span>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section className="pb-24 md:pb-32">
            <div className="mx-auto w-[min(100%_-_2rem,1040px)]">
              <Reveal>
                <div className="rounded-[4px] border border-ink/10 bg-bg-alt p-8 md:p-12">
                  <p className="font-sans text-sm font-medium uppercase tracking-[0.12em] text-ink/45">
                    From reading to results
                  </p>
                  <h2 className="mt-4 max-w-[24ch] font-serif text-3xl leading-[1.1] text-balance text-ink/85 md:text-[2.4rem]">
                    We will run the system so you do not have to.
                  </h2>
                  <p className="mt-5 max-w-[58ch] font-sans text-base leading-[1.6] text-ink/65">
                    1Sapien handles review generation, AI responses, social proof, Google profile
                    management, competitor benchmarking, and weekly intelligence. One team, one
                    report, no dashboards to learn.
                  </p>
                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <a
                      href="/contact"
                      className="inline-flex h-9 items-center justify-center rounded-full bg-ink/90 px-4 font-sans text-sm font-medium leading-none text-bg transition-colors duration-150 hover:bg-ink"
                    >
                      Book a free strategy call
                    </a>
                    <a
                      href="/research"
                      className="inline-flex h-9 items-center justify-center rounded-full bg-ink/[0.06] px-4 font-sans text-sm font-medium leading-none text-ink/80 transition-colors duration-150 hover:bg-ink/[0.1]"
                    >
                      See client results
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
