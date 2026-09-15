import { ArticleRow } from "../shared/ArticleRow";
import { Stagger } from "../shared/Stagger";
import { CASE_STUDIES } from "@/lib/case-studies";

export function ResearchListSection() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="mx-auto w-[min(100%_-_2rem,1040px)]">
        <Stagger className="border-b border-ink/15">
          {CASE_STUDIES.map((study) => (
            <div key={study.slug}>
              <ArticleRow
                headingLevel="h2"
                href={`/blog/${study.slug}`}
                ariaLabel={`${study.title} — read case study`}
                title={study.title}
                image={study.cover}
                authors={study.authors}
                dateText={study.dateText}
                dateISO={study.dateISO}
                readLabel="Read case study"
              />
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
