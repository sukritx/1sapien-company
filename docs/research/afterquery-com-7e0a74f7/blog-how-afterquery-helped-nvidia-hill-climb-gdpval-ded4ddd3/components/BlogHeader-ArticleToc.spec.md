# Blog Article Page Specification (4 components)

Route: /blog/how-afterquery-helped-nvidia-hill-climb-gdpval — page ns blog-how-afterquery-helped-nvidia-hill-climb-gdpval-ded4ddd3

## Shared context
- Reveal: `import { Reveal } from "../shared/Reveal";` (client-safe wrapper; props delay/className/y)
- ArticleRow: `import { ArticleRow } from "../shared/ArticleRow";`
- Asset bases: shared/research + shared/authors under /sites/afterquery-com-7e0a74f7/

## A) BlogHeader.tsx (server) + B) ArticleToc.tsx ("use client")

### BlogHeader DOM (Reveal delays exact)
```
<Reveal>                                   {/* 0 delay */}
  <a aria-label="Back to all posts" href="/research"
     class="group mb-8 inline-flex size-9 items-center justify-center rounded-full text-ink/70 transition-colors duration-150 hover:text-ink">
    <span aria-hidden="true" class="transition-transform duration-150 ease-out group-hover:-translate-x-0.5">←</span>
  </a>
</Reveal>
<Reveal delay={0.05}>
  <div class="relative aspect-[2080/838] w-full overflow-hidden rounded-[4px] bg-ink ring-1 ring-inset ring-ink/10">
    <img src="/sites/afterquery-com-7e0a74f7/shared/research/how-afterquery-helped-nvidia-hill-climb-gdpval.jpg"
         alt="" class="absolute inset-0 h-full w-full object-cover object-top" />
  </div>
</Reveal>
<Reveal delay={0.1}>
  <header class="mx-auto mt-10 max-w-[760px] text-center md:mt-14">
    <div class="flex items-center justify-center gap-2.5 font-sans text-sm font-medium leading-none text-ink/60">
      <span aria-hidden="true" class="h-2.5 w-1.5 shrink-0 bg-ink/80" />
      <span>Blog</span>
      <span aria-hidden="true" class="text-ink/30">·</span>
      <time datetime="2026-07-02">Jul 2, 2026</time>
    </div>
    <h1 class="font-serif text-ink tracking-[-0.01em] text-balance text-[2.375rem] leading-[1.05] mt-4 text-center leading-[1.05] text-ink/80">
      How AfterQuery Helped NVIDIA Hill-Climb GDPval
    </h1>
    <div class="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
      {authors: for Spencer M. (shared/authors/spencer.jpg) and Carlos G. (carlos.jpg):}
      <span class="flex items-center gap-2.5">
        <span class="size-[30px] shrink-0 overflow-hidden rounded-full bg-ink ring-1 ring-inset ring-ink/10">
          <img alt="" loading="lazy" width={60} height={60} src="/sites/afterquery-com-7e0a74f7/shared/authors/{file}.jpg" class="size-full object-cover" />
        </span>
        <span class="font-sans text-sm leading-[1.45] text-ink/80 font-medium text-ink/60">{name}</span>
      </span>
    </div>
  </header>
</Reveal>
```

### ArticleToc ("use client") — exact logic from original source
Props `{ items: { id: string; text: string }[] }`. Items: what-is-gdpval/What is GDPval, pivotrl/PivotRL, impact/Impact.
- Active state: starts items[0].id. On mount run update; listen window scroll (passive, rAF-throttled) + resize (re-run, not throttled... original throttles only scroll via shared rAF id).
- Update rule: for each heading element in items order: first whose `getBoundingClientRect().top <= 140` → active; break. If `scrollY + innerHeight >= document.documentElement.scrollHeight - 2` → active = last.
- Indicator effect [active, items]: el = link ref for active; top = el.offsetTop + (parseFloat(lineHeight) - 15) / 2 (lineHeight default 21); set style transform translateY(top px), height 15px; ready=true.
- Render:
```
<nav aria-label="Table of contents" class="mb-10 lg:sticky lg:top-28 lg:mb-0 lg:self-start">
  <p class="mb-[18px] font-sans text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-ink/40">Table of Contents</p>
  <div class="relative">
    <span aria-hidden="true"
      class={cn("absolute left-0 w-1.5 bg-ink transition-[transform,height,opacity] duration-300 ease-[cubic-bezier(0.23,0.98,0.56,1)] motion-reduce:transition-none", ready ? "opacity-100" : "opacity-0")}
      style={{ transform: `translateY(${indicator.top}px)`, height: indicator.height }} />
    <ul class="flex flex-col gap-5">
      {items.map(item => { const active = item.id === activeId; return (
        <li key={item.id}>
          <a ref={storeLink} href={`#${item.id}`}
             onClick={(e) => { const t = document.getElementById(item.id); if (!t) return; e.preventDefault(); setActive(item.id);
               const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
               t.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
               history.replaceState(null, "", `#${item.id}`); }}
             aria-current={active ? "true" : undefined}
             class={cn("block pl-4 font-sans text-[0.8125rem] font-medium leading-[1.4] transition-colors duration-200", active ? "text-ink" : "text-ink/40 hover:text-ink/70")}>
            {item.text}
          </a>
        </li> ); })}
    </ul>
  </div>
</nav>
```
(cn = template-string join; no external lib needed.) Cleanup removes listeners & cancels rAF. Indicator span initially opacity-0 (ready false) at top:0.

### Layout that wraps A + B + body (assembly in route page):
`<div className="mt-14 md:mt-16 lg:grid lg:grid-cols-[1fr_minmax(0,660px)_1fr] lg:gap-x-8">` containing <nav (TOC) /> then <div className="min-w-0 [&_li]:[text-wrap:wrap] [&_p]:[text-wrap:wrap]">…body…</div>. BlogHeader/ArticleToc are separate components; route page (assembled later) places nav+body grid.
