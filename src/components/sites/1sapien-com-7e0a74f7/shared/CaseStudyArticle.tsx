import { Fragment } from "react";

import type { CaseStudy } from "@/lib/case-studies";
import { ArticleRow } from "./ArticleRow";
import { CaseStudyToc } from "./CaseStudyToc";
import { Reveal } from "./Reveal";

const P = "font-sans text-lg leading-[1.45] text-ink/80 font-serif leading-[1.5]";
const LINK =
  "font-medium text-ink underline decoration-ink/30 underline-offset-2 transition-colors duration-150 hover:decoration-ink";
const H2 =
  "font-serif text-ink tracking-[-0.01em] text-balance text-xl leading-[1.15] scroll-mt-28 font-bold text-ink/80";
const TD = "border-b border-ink/10 py-2.5 pr-6 text-ink/70";
const TH = "border-b border-ink/20 py-2.5 pr-6 font-medium text-ink/80";

type CaseStudyArticleProps = {
  study: CaseStudy;
  related: CaseStudy[];
};

export function CaseStudyArticle({ study, related }: CaseStudyArticleProps) {
  const tocItems = study.blocks.flatMap((block) =>
    block.type === "heading" ? [{ id: block.id, text: block.text }] : [],
  );

  return (
    <article className="pb-24 pt-12 md:pb-32 md:pt-16">
      <div className="mx-auto w-full max-w-[1040px] px-6 lg:px-0">
        <Reveal>
          <a
            aria-label="Back to all results"
            href="/research"
            className="group mb-8 inline-flex size-9 items-center justify-center rounded-full text-ink/70 transition-colors duration-150 hover:text-ink"
          >
            <span aria-hidden="true" className="transition-transform duration-150 ease-out group-hover:-translate-x-0.5">
              ←
            </span>
          </a>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="relative aspect-[2080/838] w-full overflow-hidden rounded-[4px] bg-ink ring-1 ring-inset ring-ink/10">
            <img
              src={study.cover}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <header className="mx-auto mt-10 max-w-[760px] text-center md:mt-14">
            <div className="flex items-center justify-center gap-2.5 font-sans text-sm font-medium leading-none text-ink/60">
              <span aria-hidden="true" className="h-2.5 w-1.5 shrink-0 bg-ink/80" />
              <span>{study.service}</span>
              <span aria-hidden="true" className="text-ink/30">·</span>
              <time dateTime={study.dateISO}>{study.dateText}</time>
            </div>
            <h1 className="font-serif text-ink tracking-[-0.01em] text-balance text-[2.375rem] leading-[1.05] mt-4 text-center leading-[1.05] text-ink/80">
              {study.title}
            </h1>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {study.authors.map((author) => (
                <span key={author.name} className="flex items-center gap-2.5">
                  <span className="size-[30px] shrink-0 overflow-hidden rounded-full bg-ink ring-1 ring-inset ring-ink/10">
                    {author.avatar ? (
                      <img alt="" loading="lazy" width={60} height={60} src={author.avatar} className="size-full object-cover" />
                    ) : null}
                  </span>
                  <span className="font-sans text-sm leading-[1.45] text-ink/80 font-medium text-ink/60">{author.name}</span>
                </span>
              ))}
            </div>
          </header>
        </Reveal>
        <div className="mt-14 md:mt-16 lg:grid lg:grid-cols-[1fr_minmax(0,660px)_1fr] lg:gap-x-8">
          <CaseStudyToc items={tocItems} />
          <div className="min-w-0 [&_li]:[text-wrap:wrap] [&_p]:[text-wrap:wrap]">
            {study.blocks.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <Reveal key={`${block.type}-${block.id}`} className="mt-12 md:mt-14">
                    <h2 id={block.id} className={H2}>
                      {block.text}
                    </h2>
                  </Reveal>
                );
              }
              if (block.type === "table") {
                return (
                  <Fragment key={`table-${index}`}>
                    <Reveal className="mt-8">
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-left font-sans text-sm">
                          <thead>
                            <tr>
                              {block.heads.map((head) => (
                                <th key={head} className={TH}>
                                  {head}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {block.rows.map((row) => (
                              <tr key={row[0]}>
                                {row.map((value) => (
                                  <td key={value} className={TD}>
                                    {value}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </Reveal>
                    <Reveal className="mt-6">
                      <p className="font-sans text-lg leading-[1.45] text-ink/80 font-serif leading-[1.5] italic text-ink/70">
                        {block.caption}
                      </p>
                    </Reveal>
                  </Fragment>
                );
              }
              if (block.type === "quote") {
                return (
                  <Reveal key={`quote-${index}`} className="mt-8">
                    <blockquote className="border-l-2 border-ink/20 pl-5 font-serif text-lg italic leading-[1.7] text-ink">
                      “{block.text}”
                    </blockquote>
                  </Reveal>
                );
              }
              return (
                <Reveal key={`paragraph-${index}`} className="mt-6">
                  <p className={P}>{block.text}</p>
                </Reveal>
              );
            })}
            <Reveal className="mt-8">
              <p className={P}>
                Want results like these?{" "}
                <a href="/contact" className={LINK}>
                  Book a free demo
                </a>{" "}
                and we’ll show you exactly what we’d do for your business, or email us directly at{" "}
                <a href="mailto:hello@1sapien.com" className={LINK}>
                  hello@1sapien.com
                </a>
                .
              </p>
            </Reveal>
            <Reveal className="mt-12">
              <p className="font-sans text-sm leading-[1.45] text-ink/80 leading-[1.6] text-ink/45 border-t border-ink/10 pt-5">
                1Sapien helps local service businesses across the US and Europe turn finished jobs into 5-star reviews, higher rankings, and booked work.
              </p>
            </Reveal>
          </div>
        </div>
        {related.length > 0 ? (
          <section className="mt-24 md:mt-32">
            <Reveal>
              <h2 className="font-serif text-ink tracking-[-0.01em] text-balance text-[2.375rem] leading-[1.05] text-ink/80">
                More case studies
              </h2>
            </Reveal>
            <div className="mt-8 border-b border-ink/15">
              {related.map((item) => (
                <ArticleRow
                  key={item.slug}
                  headingLevel="h3"
                  href={`/blog/${item.slug}`}
                  readLabel="Read case study"
                  ariaLabel={`${item.title} — read case study`}
                  title={item.title}
                  image={item.cover}
                  authors={item.authors}
                  dateText={item.dateText}
                  dateISO={item.dateISO}
                />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </article>
  );
}
