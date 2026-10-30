import type { ReactNode } from "react";
import Link from "next/link";

import type { BlogBlock, BlogPost } from "@/lib/blog";
import { CaseStudyToc } from "./CaseStudyToc";
import { Reveal } from "./Reveal";

const P = "font-sans text-lg leading-[1.6] text-ink/75";
const LINK =
  "font-medium text-ink underline decoration-ink/30 underline-offset-2 transition-colors duration-150 hover:decoration-ink";
const H2 =
  "font-serif text-ink tracking-[-0.01em] text-balance text-2xl leading-[1.15] scroll-mt-28 md:text-[1.75rem]";

const INLINE_PATTERN = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*)/g;

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  INLINE_PATTERN.lastIndex = 0;

  while ((match = INLINE_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (match[2] && match[3]) {
      nodes.push(
        <a key={`${keyPrefix}-link-${match.index}`} href={match[3]} className={LINK}>
          {match[2]}
        </a>,
      );
    } else if (match[4]) {
      nodes.push(
        <strong key={`${keyPrefix}-strong-${match.index}`} className="font-medium text-ink">
          {match[4]}
        </strong>,
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

function BlogBlockView({ block, index }: { block: BlogBlock; index: number }) {
  const key = `${block.type}-${index}`;

  if (block.type === "heading") {
    return (
      <Reveal className="mt-12 md:mt-14">
        <h2 id={block.id} className={H2}>
          {block.text}
        </h2>
      </Reveal>
    );
  }

  if (block.type === "quote") {
    return (
      <Reveal className="mt-8">
        <blockquote className="border-l-2 border-ink/20 pl-5 font-serif text-lg italic leading-[1.7] text-ink">
          “{block.text}”
          {block.attribution ? (
            <cite className="mt-3 block font-sans text-sm not-italic text-ink/50">
              {block.attribution}
            </cite>
          ) : null}
        </blockquote>
      </Reveal>
    );
  }

  if (block.type === "callout") {
    return (
      <Reveal className="mt-8">
        <aside className="rounded-[4px] border border-ink/10 bg-bg-alt px-5 py-5 md:px-6 md:py-6">
          <p className="font-sans text-sm font-medium uppercase tracking-[0.12em] text-ink/45">
            {block.title}
          </p>
          <p className="mt-3 font-sans text-base leading-[1.55] text-ink/75">
            {renderInline(block.text, key)}
          </p>
        </aside>
      </Reveal>
    );
  }

  if (block.type === "list") {
    const ListTag = block.ordered ? "ol" : "ul";
    return (
      <Reveal className="mt-6">
        <ListTag
          className={`flex flex-col gap-3 pl-5 font-sans text-lg leading-[1.6] text-ink/75 ${
            block.ordered ? "list-decimal" : "list-disc"
          } marker:text-ink/35`}
        >
          {block.items.map((item, itemIndex) => (
            <li key={`${key}-item-${itemIndex}`} className="pl-1">
              {renderInline(item, `${key}-${itemIndex}`)}
            </li>
          ))}
        </ListTag>
      </Reveal>
    );
  }

  if (block.type === "image") {
    if (!block.src) return null;
    return (
      <Reveal className="mt-10">
        <figure>
          <img
            src={block.src}
            alt={block.alt}
            loading="lazy"
            className="w-full rounded-[4px] ring-1 ring-inset ring-ink/10"
          />
          {block.caption ? (
            <figcaption className="mt-3 font-sans text-sm leading-[1.5] text-ink/45">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      </Reveal>
    );
  }

  return (
    <Reveal className="mt-6">
      <p className={P}>{renderInline(block.text, key)}</p>
    </Reveal>
  );
}

type BlogArticleProps = {
  post: BlogPost;
  related: BlogPost[];
};

export function BlogArticle({ post, related }: BlogArticleProps) {
  const tocItems = post.blocks.flatMap((block) =>
    block.type === "heading" ? [{ id: block.id, text: block.text }] : [],
  );

  return (
    <article className="pb-24 pt-12 md:pb-32 md:pt-16">
      <div className="mx-auto w-full max-w-[1040px] px-6 lg:px-0">
        <Reveal>
          <Link
            aria-label="Back to all articles"
            href="/blog"
            className="group mb-8 inline-flex size-9 items-center justify-center rounded-full text-ink/70 transition-colors duration-150 hover:text-ink"
          >
            <span
              aria-hidden="true"
              className="transition-transform duration-150 ease-out group-hover:-translate-x-0.5"
            >
              ←
            </span>
          </Link>
        </Reveal>

        {post.cover ? (
          <Reveal delay={0.05}>
            <div className="relative aspect-[2080/838] w-full overflow-hidden rounded-[4px] bg-ink ring-1 ring-inset ring-ink/10">
              <img
                src={post.cover}
                alt={post.coverAlt}
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </div>
          </Reveal>
        ) : null}

        <Reveal delay={0.1}>
          <header
            className={`mx-auto max-w-[760px] text-center ${post.cover ? "mt-10 md:mt-14" : "mt-2"}`}
          >
            <div className="flex flex-wrap items-center justify-center gap-2.5 font-sans text-sm font-medium leading-none text-ink/60">
              <span aria-hidden="true" className="h-2.5 w-1.5 shrink-0 bg-ink/80" />
              <span>{post.category}</span>
              <span aria-hidden="true" className="text-ink/30">
                ·
              </span>
              <time dateTime={post.dateISO}>{post.dateText}</time>
              <span aria-hidden="true" className="text-ink/30">
                ·
              </span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="mt-4 font-serif text-[2rem] leading-[1.08] tracking-[-0.01em] text-balance text-ink/85 md:text-[2.5rem]">
              {post.title}
            </h1>
            <p className="mx-auto mt-6 max-w-[60ch] font-serif text-xl leading-[1.35] text-ink/55">
              {post.excerpt}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <span className="flex items-center gap-2.5">
                <span className="size-[30px] shrink-0 overflow-hidden rounded-full bg-ink ring-1 ring-inset ring-ink/10">
                  {post.author.avatar ? (
                    <img
                      alt=""
                      loading="lazy"
                      width={60}
                      height={60}
                      src={post.author.avatar}
                      className="size-full object-cover"
                    />
                  ) : null}
                </span>
                <span className="font-sans text-sm font-medium leading-[1.45] text-ink/60">
                  {post.author.name}
                </span>
              </span>
            </div>
          </header>
        </Reveal>

        <div className="mt-14 border-t border-ink/10 pt-10 md:mt-16 lg:grid lg:grid-cols-[1fr_minmax(0,660px)_1fr] lg:gap-x-8">
          <CaseStudyToc items={tocItems} />
          <div className="min-w-0 [&_li]:[text-wrap:wrap] [&_p]:[text-wrap:wrap]">
            {post.blocks.map((block, index) => (
              <BlogBlockView key={`${block.type}-${index}`} block={block} index={index} />
            ))}

            <Reveal className="mt-14">
              <div className="rounded-[4px] border border-ink/10 bg-bg-alt p-6 md:p-8">
                <p className="font-sans text-sm font-medium uppercase tracking-[0.12em] text-ink/45">
                  Put this into practice
                </p>
                <h2 className="mt-3 font-serif text-2xl leading-[1.15] text-ink/85">
                  Want this running without the weekly checklist?
                </h2>
                <p className="mt-4 font-sans text-base leading-[1.6] text-ink/70">
                  1Sapien runs review generation, AI responses, profile management, competitor
                  benchmarking, and weekly intelligence for local businesses and universities. We
                  will audit your profile, reviews, and local rankings before you commit to
                  anything.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex h-9 items-center justify-center rounded-full bg-ink/90 px-4 font-sans text-sm font-medium leading-none text-bg transition-colors duration-150 hover:bg-ink"
                  >
                    Book a free strategy call
                  </Link>
                  <Link
                    href="/products"
                    className="inline-flex h-9 items-center justify-center rounded-full bg-ink/[0.06] px-4 font-sans text-sm font-medium leading-none text-ink/80 transition-colors duration-150 hover:bg-ink/[0.1]"
                  >
                    See what we do
                  </Link>
                </div>
              </div>
            </Reveal>

          </div>
        </div>

        {related.length > 0 ? (
          <section className="mt-24 md:mt-32">
            <Reveal>
              <h2 className="font-serif text-[2rem] leading-[1.05] tracking-[-0.01em] text-balance text-ink/85">
                Keep reading
              </h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-[4px] bg-ink/10 ring-1 ring-inset ring-ink/10 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="group flex flex-col bg-bg p-6 transition-colors duration-150 hover:bg-bg-alt"
                >
                  <span className="font-sans text-xs font-medium uppercase tracking-[0.12em] text-ink/40">
                    {item.category}
                  </span>
                  <span className="mt-3 font-serif text-lg leading-[1.2] text-ink transition-opacity duration-150 group-hover:opacity-70">
                    {item.title}
                  </span>
                  <span className="mt-4 font-sans text-sm leading-[1.5] text-ink/55">
                    {item.readingTime}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </article>
  );
}
