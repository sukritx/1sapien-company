import { Reveal } from "../shared/Reveal";

const AUTHORS = [
  { name: "Spencer M.", avatar: "/sites/afterquery-com-7e0a74f7/shared/authors/spencer.jpg" },
  { name: "Carlos G.", avatar: "/sites/afterquery-com-7e0a74f7/shared/authors/carlos.jpg" },
];

export function BlogHeader() {
  return (
    <>
      <Reveal>
        <a
          aria-label="Back to all posts"
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
            src="/sites/afterquery-com-7e0a74f7/shared/research/how-afterquery-helped-nvidia-hill-climb-gdpval.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <header className="mx-auto mt-10 max-w-[760px] text-center md:mt-14">
          <div className="flex items-center justify-center gap-2.5 font-sans text-sm font-medium leading-none text-ink/60">
            <span aria-hidden="true" className="h-2.5 w-1.5 shrink-0 bg-ink/80" />
            <span>Blog</span>
            <span aria-hidden="true" className="text-ink/30">·</span>
            <time dateTime="2026-07-02">Jul 2, 2026</time>
          </div>
          <h1 className="font-serif text-ink tracking-[-0.01em] text-balance text-[2.375rem] leading-[1.05] mt-4 text-center leading-[1.05] text-ink/80">
            How AfterQuery Helped NVIDIA Hill-Climb GDPval
          </h1>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {AUTHORS.map((author) => (
              <span key={author.name} className="flex items-center gap-2.5">
                <span className="size-[30px] shrink-0 overflow-hidden rounded-full bg-ink ring-1 ring-inset ring-ink/10">
                  <img alt="" loading="lazy" width={60} height={60} src={author.avatar} className="size-full object-cover" />
                </span>
                <span className="font-sans text-sm leading-[1.45] text-ink/80 font-medium text-ink/60">{author.name}</span>
              </span>
            ))}
          </div>
        </header>
      </Reveal>
    </>
  );
}
