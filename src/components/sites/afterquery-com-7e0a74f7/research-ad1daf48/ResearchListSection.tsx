import { ArticleRow } from "../shared/ArticleRow";
import { Stagger } from "../shared/Stagger";

type AuthorData = {
  name: string;
  avatar?: string;
};

type PostData = {
  href: string;
  title: string;
  cover: string;
  authors: AuthorData[];
  dateText: string;
  dateISO: string;
};

const coverBase = "/sites/afterquery-com-7e0a74f7/shared/research";
const avatarBase = "/sites/afterquery-com-7e0a74f7/shared/authors";

const posts: PostData[] = [
  {
    href: "/blog/building-a-frontier-legal-evaluation-in-partnership-with-legora",
    title: "Building a Frontier Legal Evaluation in Partnership with Legora",
    cover: "building-a-frontier-legal-evaluation-in-partnership-with-legora-cover6.jpg",
    authors: [
      { name: "Sam J.", avatar: "sam-jung.jpg" },
      { name: "Spencer M.", avatar: "spencer.jpg" },
    ],
    dateText: "Aug 30, 2026",
    dateISO: "2026-08-30",
  },
  {
    href: "/blog/afterquery-celebrates-the-release-of-motif-3",
    title: "1Sapien Celebrates the Release of Motif 3 and Served as Sole Data Partner",
    cover: "afterquery-celebrates-the-release-of-motif-3-cover7.jpg",
    authors: [
      { name: "Sam J.", avatar: "sam-jung.jpg" },
      { name: "Spencer M.", avatar: "spencer.jpg" },
    ],
    dateText: "Aug 23, 2026",
    dateISO: "2026-08-23",
  },
  {
    href: "/blog/how-afterquery-helped-nvidia-hill-climb-gdpval",
    title: "How 1Sapien Helped NVIDIA Hill-Climb GDPval",
    cover: "how-afterquery-helped-nvidia-hill-climb-gdpval.jpg",
    authors: [
      { name: "Spencer M.", avatar: "spencer.jpg" },
      { name: "Carlos G.", avatar: "carlos.jpg" },
    ],
    dateText: "Jul 2, 2026",
    dateISO: "2026-07-02",
  },
  {
    href: "/blog/on-policy-distillation-gdpval",
    title: "How we achieved a net win-loss margin of +21.4% on GDPval with on-policy distillation",
    cover: "on-policy-distillation-gdpval.jpg",
    authors: [
      { name: "Michael E.", avatar: "michael.jpg" },
      { name: "Spencer M.", avatar: "spencer.jpg" },
    ],
    dateText: "Jun 8, 2026",
    dateISO: "2026-06-08",
  },
  {
    href: "/blog/deployco",
    title: "Why DeployCo and ServiceCo Are Betting on the Last Mile",
    cover: "deployco.jpg",
    authors: [
      { name: "Sam J.", avatar: "sam.jpg" },
      { name: "Agustin G.", avatar: "agustin.jpg" },
      { name: "Drew M.", avatar: "drew.jpg" },
      { name: "Arya F." },
    ],
    dateText: "Jun 3, 2026",
    dateISO: "2026-06-03",
  },
  {
    href: "/blog/solving-the-last-mile-problem-in-partnership-with-the-raine-group",
    title: "Solving the Last Mile Problem in Partnership with The Raine Group",
    cover: "solving-the-last-mile-problem-in-partnership-with-the-raine-group.jpg",
    authors: [
      { name: "Carlos G.", avatar: "carlos.jpg" },
      { name: "Sam J.", avatar: "sam.jpg" },
    ],
    dateText: "Apr 28, 2026",
    dateISO: "2026-04-28",
  },
  {
    href: "/blog/human-expertise-reimagined",
    title: "Human expertise, reimagined",
    cover: "human-expertise-reimagined.jpg",
    authors: [{ name: "Spencer M.", avatar: "spencer.jpg" }],
    dateText: "Apr 9, 2026",
    dateISO: "2026-04-09",
  },
  {
    href: "/blog/how-afterquery-expert-data-drives-model-performance-on-t2-bench",
    title: "How 1Sapien Expert Data Drives Model Performance on τ²-bench",
    cover: "how-afterquery-expert-data-drives-model-performance-on-t2-bench.jpg",
    authors: [
      { name: "Michael E.", avatar: "michael.jpg" },
      { name: "Spencer M.", avatar: "spencer.jpg" },
      { name: "Arya F.", avatar: "arya.jpg" },
    ],
    dateText: "Apr 8, 2026",
    dateISO: "2026-04-08",
  },
  {
    href: "/blog/how-we-improved-terminal-bench-2-with-tinker-and-harbor",
    title: "How We Improved Terminal-Bench 2.0 Scores by Over 5x Using Tinker and Harbor",
    cover: "how-we-improved-terminal-bench-2-with-tinker-and-harbor.jpg",
    authors: [
      { name: "Spencer M.", avatar: "spencer.jpg" },
      { name: "Michael E.", avatar: "michael.jpg" },
      { name: "Carlos G.", avatar: "carlos.jpg" },
    ],
    dateText: "Mar 31, 2026",
    dateISO: "2026-03-31",
  },
  {
    href: "https://arxiv.org/abs/2601.20886",
    title: "IDE-Bench: Evaluating Large Language Models as IDE Agents",
    cover: "ide-bench.jpg",
    authors: [
      { name: "Spencer M.", avatar: "spencer.jpg" },
      { name: "Jeff Y.", avatar: "jeff.jpg" },
      { name: "Tiana C.", avatar: "tiana.jpg" },
    ],
    dateText: "Jan 20, 2026",
    dateISO: "2026-01-20",
  },
  {
    href: "https://arxiv.org/abs/2512.12264",
    title: "Market-Bench: Evaluating LLMs on Introductory Quantitative Trading",
    cover: "market-bench.webp",
    authors: [
      { name: "Abhay S.", avatar: "abhay.jpg" },
      { name: "Sam J.", avatar: "sam.jpg" },
      { name: "Spencer M.", avatar: "spencer.jpg" },
    ],
    dateText: "Dec 13, 2025",
    dateISO: "2025-12-13",
  },
  {
    href: "https://appbench.ai/",
    title: "App-Bench: Evaluating Coding Agents on Generating Economically Useful Web-Apps",
    cover: "app-bench.jpg",
    authors: [
      { name: "Andrew Z.", avatar: "andrew.jpg" },
      { name: "Sam J.", avatar: "sam.jpg" },
      { name: "Spencer M.", avatar: "spencer.jpg" },
    ],
    dateText: "Oct 25, 2025",
    dateISO: "2025-10-25",
  },
  {
    href: "/blog/the-afterquery-thesis",
    title: "The 1Sapien Thesis",
    cover: "the-afterquery-thesis.jpg",
    authors: [{ name: "Spencer M.", avatar: "spencer.jpg" }],
    dateText: "Oct 20, 2025",
    dateISO: "2025-10-20",
  },
  {
    href: "https://arxiv.org/abs/2508.20410",
    title: "UI-Bench: A Benchmark for Evaluating User Interface Understanding",
    cover: "ui-bench.jpg",
    authors: [
      { name: "Sam J.", avatar: "sam-jung.jpg" },
      { name: "Agustin G.", avatar: "agustin.jpg" },
      { name: "Spencer M.", avatar: "spencer.jpg" },
    ],
    dateText: "Aug 28, 2025",
    dateISO: "2025-08-28",
  },
  {
    href: "https://arxiv.org/abs/2501.18062",
    title: "FinanceQA: A Benchmark for Assumption-Based Financial Analysis",
    cover: "paper-financeqa.jpg",
    authors: [
      { name: "Spencer M.", avatar: "spencer.jpg" },
      { name: "Sam J.", avatar: "sam.jpg" },
    ],
    dateText: "Jan 30, 2025",
    dateISO: "2025-01-30",
  },
];

export function ResearchListSection() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="mx-auto w-[min(100%_-_2rem,1040px)]">
        <Stagger className="border-b border-ink/15">
          {posts.map((post) => {
            const external = /^https?:\/\//.test(post.href);
            return (
              <div key={post.href}>
                <ArticleRow
                  headingLevel="h2"
                  href={post.href}
                  external={external}
                  ariaLabel={`${post.title} — read ${external ? "paper" : "blog"}`}
                  title={post.title}
                  image={`${coverBase}/${post.cover}`}
                  authors={post.authors.map((a) => ({
                    name: a.name,
                    avatar: a.avatar ? `${avatarBase}/${a.avatar}` : undefined,
                  }))}
                  dateText={post.dateText}
                  dateISO={post.dateISO}
                  readLabel={external ? "Read paper" : "Read blog"}
                />
              </div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
