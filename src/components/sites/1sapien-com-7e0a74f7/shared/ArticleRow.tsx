type ArticleAuthor = {
  name: string;
  avatar?: string;
};

type ArticleRowProps = {
  href: string;
  external?: boolean;
  ariaLabel: string;
  title: string;
  headingLevel?: "h2" | "h3";
  image: string;
  authors: ArticleAuthor[];
  dateText: string;
  dateISO: string;
  readLabel: string;
};

const headingClass =
  "font-serif text-ink tracking-[-0.01em] text-balance text-xl leading-[1.15] text-ink transition-opacity duration-150 group-hover:opacity-70";

export function ArticleRow({
  href,
  external,
  ariaLabel,
  title,
  headingLevel = "h2",
  image,
  authors,
  dateText,
  dateISO,
  readLabel,
}: ArticleRowProps) {
  const Heading = headingLevel;
  return (
    <a
      aria-label={ariaLabel}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group grid grid-cols-[auto_1fr] items-start gap-6 border-t border-ink/15 py-6 transition-transform duration-300 ease-out hover:-translate-y-1 outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg md:grid-cols-[auto_1fr_auto]"
    >
      <div aria-hidden="true" className="relative h-[120px] w-[88px] shrink-0 bg-ink overflow-hidden rounded-[4px] ring-1 ring-inset ring-ink/15">
        <img alt="" loading="lazy" decoding="async" src={image} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.06]" />
      </div>
      <div className="min-w-0">
        <Heading className={headingClass}>{title}</Heading>
        <div className="mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-2 font-sans text-sm leading-none text-ink/60">
          <span aria-hidden="true" className="flex -space-x-1">
            {authors.filter((a) => a.avatar).map((a) => (
              <span key={a.name} className="size-5 overflow-hidden rounded-full border border-bg bg-ink">
                <img alt="" loading="lazy" width={48} height={48} decoding="async" src={a.avatar} className="size-full object-cover" />
              </span>
            ))}
          </span>
          {authors.map((a) => (
            <span key={a.name}>{a.name}</span>
          ))}
          <span aria-hidden="true" className="hidden text-ink/15 md:inline">·</span>
          <time dateTime={dateISO} className="w-full font-medium text-ink/40 md:w-auto">{dateText}</time>
        </div>
      </div>
      <span className="inline-flex items-center gap-1 col-start-2 row-start-2 mt-2 w-fit font-sans text-sm text-ink/80 transition-colors duration-150 group-hover:text-ink md:col-start-3 md:row-start-1 md:mt-0 md:self-start md:pt-1">
        {readLabel}
        <span aria-hidden="true" className="transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
      </span>
    </a>
  );
}
