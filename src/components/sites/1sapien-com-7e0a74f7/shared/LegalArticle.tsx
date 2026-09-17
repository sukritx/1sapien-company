import type { LegalDocument } from "@/types/sites/afterquery-com-7e0a74f7";
import { Reveal } from "./Reveal";

type LegalArticleProps = {
  doc: LegalDocument;
};

export function LegalArticle({ doc }: LegalArticleProps) {
  return (
    <article className="pb-24 pt-12 md:pb-36 md:pt-16">
      <div className="mx-auto w-[min(100%_-_2rem,1040px)]">
        <Reveal>
          <header className="max-w-[760px]">
            <h1 className="font-serif text-ink tracking-[-0.01em] text-balance text-[1.875rem] leading-[1.05] md:text-[2.125rem] lg:text-[2.375rem]">
              {doc.title}
            </h1>
            <p className="mt-3 font-sans text-sm leading-[1.45] text-ink/50">
              Last updated <time dateTime={doc.updatedISO}>{doc.updatedText}</time>
            </p>
            <p className="mt-6 font-sans text-lg leading-[1.45] text-ink/60">{doc.intro}</p>
          </header>
        </Reveal>
        <div className="mt-12 max-w-[760px]">
          {doc.sections.map((section) => (
            <Reveal
              key={section.id}
              className="mt-10 border-t border-ink/10 pt-8 first:mt-0 first:border-t-0 first:pt-0"
            >
              <section id={section.id} className="scroll-mt-28">
                <h2 className="font-serif text-ink tracking-[-0.01em] text-balance text-xl leading-[1.15]">
                  {section.heading}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 font-sans text-base leading-[1.6] text-ink/60">
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 font-sans text-base leading-[1.6] text-ink/60">
                        <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/30" />
                        <span className="min-w-0">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </article>
  );
}
