"use client";

import { useEffect, useRef, useState } from "react";

export type TocItem = {
  id: string;
  text: string;
};

type ArticleTocProps = {
  items: TocItem[];
};

export function ArticleToc({ items }: ArticleTocProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const [indicator, setIndicator] = useState({ top: 0, height: 15, ready: false });
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    if (items.length === 0) return;
    let rafId = 0;
    const update = () => {
      rafId = 0;
      const headings = items.map((item) => document.getElementById(item.id)).filter((el): el is HTMLElement => el !== null);
      if (headings.length === 0) return;
      let active = headings[0].id;
      for (const heading of headings) {
        if (heading.getBoundingClientRect().top <= 140) {
          active = heading.id;
        } else {
          break;
        }
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        active = headings[headings.length - 1].id;
      }
      setActiveId(active);
    };
    const onScroll = () => {
      if (!rafId) rafId = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [items]);

  useEffect(() => {
    const link = linkRefs.current[activeId];
    if (!link) return;
    const lineHeight = parseFloat(getComputedStyle(link).lineHeight) || 21;
    setIndicator({ top: link.offsetTop + (lineHeight - 15) / 2, height: 15, ready: true });
  }, [activeId, items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="mb-10 lg:sticky lg:top-28 lg:mb-0 lg:self-start">
      <p className="mb-[18px] font-sans text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-ink/40">
        Table of Contents
      </p>
      <div className="relative">
        <span
          aria-hidden="true"
          className={`absolute left-0 w-1.5 bg-ink transition-[transform,height,opacity] duration-300 ease-[cubic-bezier(0.23,0.98,0.56,1)] motion-reduce:transition-none ${
            indicator.ready ? "opacity-100" : "opacity-0"
          }`}
          style={{ transform: `translateY(${indicator.top}px)`, height: indicator.height }}
        />
        <ul className="flex flex-col gap-5">
          {items.map((item) => {
            const active = item.id === activeId;
            return (
              <li key={item.id}>
                <a
                  ref={(el) => {
                    linkRefs.current[item.id] = el;
                  }}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    const target = document.getElementById(item.id);
                    if (!target) return;
                    e.preventDefault();
                    setActiveId(item.id);
                    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
                    history.replaceState(null, "", `#${item.id}`);
                  }}
                  aria-current={active ? "true" : undefined}
                  className={`block pl-4 font-sans text-[0.8125rem] font-medium leading-[1.4] transition-colors duration-200 ${
                    active ? "text-ink" : "text-ink/40 hover:text-ink/70"
                  }`}
                >
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
