import { ArticleRow } from "../shared/ArticleRow";
import { Reveal } from "../shared/Reveal";

const AUTHORS = {
  samJung: "sam-jung.jpg",
  spencer: "spencer.jpg",
  michael: "michael.jpg",
  sam: "sam.jpg",
  agustin: "agustin.jpg",
  drew: "drew.jpg",
} as const;

const AV = (file: string) => `/sites/afterquery-com-7e0a74f7/shared/authors/${file}`;
const IMG = (file: string) => `/sites/afterquery-com-7e0a74f7/shared/research/${file}`;

const ROWS = [
  {
    href: "/blog/building-a-frontier-legal-evaluation-in-partnership-with-legora",
    title: "Building a Frontier Legal Evaluation in Partnership with Legora",
    image: IMG("building-a-frontier-legal-evaluation-in-partnership-with-legora-cover6.jpg"),
    authors: [
      { name: "Sam J.", avatar: AV(AUTHORS.samJung) },
      { name: "Spencer M.", avatar: AV(AUTHORS.spencer) },
    ],
    dateText: "Aug 30, 2026",
    dateISO: "2026-08-30",
  },
  {
    href: "/blog/afterquery-celebrates-the-release-of-motif-3",
    title: "AfterQuery Celebrates the Release of Motif 3 and Served as Sole Data Partner",
    image: IMG("afterquery-celebrates-the-release-of-motif-3-cover7.jpg"),
    authors: [
      { name: "Sam J.", avatar: AV(AUTHORS.samJung) },
      { name: "Spencer M.", avatar: AV(AUTHORS.spencer) },
    ],
    dateText: "Aug 23, 2026",
    dateISO: "2026-08-23",
  },
  {
    href: "/blog/on-policy-distillation-gdpval",
    title: "How we achieved a net win-loss margin of +21.4% on GDPval with on-policy distillation",
    image: IMG("on-policy-distillation-gdpval.jpg"),
    authors: [
      { name: "Michael E.", avatar: AV(AUTHORS.michael) },
      { name: "Spencer M.", avatar: AV(AUTHORS.spencer) },
    ],
    dateText: "Jun 8, 2026",
    dateISO: "2026-06-08",
  },
  {
    href: "/blog/deployco",
    title: "Why DeployCo and ServiceCo Are Betting on the Last Mile",
    image: IMG("deployco.jpg"),
    authors: [
      { name: "Sam J.", avatar: AV(AUTHORS.sam) },
      { name: "Agustin G.", avatar: AV(AUTHORS.agustin) },
      { name: "Drew M.", avatar: AV(AUTHORS.drew) },
      { name: "Arya F." },
    ],
    dateText: "Jun 3, 2026",
    dateISO: "2026-06-03",
  },
];

export function RelatedArticles() {
  return (
    <section className="mt-24 md:mt-32">
      <Reveal>
        <h2 className="font-serif text-ink tracking-[-0.01em] text-balance text-[2.375rem] leading-[1.05] text-ink/80">
          Related articles
        </h2>
      </Reveal>
      <div className="mt-8 border-b border-ink/15">
        {ROWS.map((row) => (
          <ArticleRow
            key={row.href}
            headingLevel="h3"
            readLabel="Read blog"
            ariaLabel={`${row.title} — read blog`}
            {...row}
          />
        ))}
      </div>
    </section>
  );
}
