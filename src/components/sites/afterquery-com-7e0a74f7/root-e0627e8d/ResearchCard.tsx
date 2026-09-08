import type { ResearchPost } from "../../../../types/sites/afterquery-com-7e0a74f7";

type ResearchCardProps = {
  post: ResearchPost;
};

export function ResearchCard({ post }: ResearchCardProps) {
  return (
    <a aria-label={post.title} href={post.href} className="group block rounded-[4px] transition-transform duration-300 ease-out hover:-translate-y-1 outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg">
      <div aria-hidden="true" className="relative aspect-square w-full bg-ink overflow-hidden rounded-[4px] ring-1 ring-inset ring-ink/15">
        <img alt="" loading="lazy" decoding="async" src={post.image} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.05]" />
      </div>
      <div className="mt-3 md:mt-5">
        <h3 className="font-serif text-ink tracking-[-0.01em] text-balance text-xl leading-[1.15] text-[13px] leading-[1.3] text-ink transition-opacity duration-150 group-hover:opacity-70 md:text-xl md:leading-[1.15]">{post.title}</h3>
        <p className="font-sans text-sm leading-[1.45] text-ink/60 mt-3 hidden max-w-[52ch] md:block">{post.description}</p>
        <div className="mt-2.5 flex items-center gap-1.5 font-sans text-[11px] leading-none md:mt-4 md:gap-2 md:text-sm">
          <span aria-hidden="true" className="h-2.5 w-1.5 shrink-0 bg-ink/80" />
          <span className="font-medium text-ink/60">{post.category}</span>
          <span aria-hidden="true" className="hidden text-ink/15 md:inline">·</span>
          <time dateTime={post.dateISO} className="hidden text-ink/40 md:inline">{post.dateText}</time>
        </div>
      </div>
    </a>
  );
}
