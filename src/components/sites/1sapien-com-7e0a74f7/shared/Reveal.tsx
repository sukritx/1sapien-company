"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({ children, className, delay = 0, y = 50 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.setAttribute("data-revealed", "");
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "-10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style = {
    "--reveal-y": `${y}px`,
    transitionDelay: delay ? `${delay}s` : undefined,
  } as CSSProperties;

  return (
    <div ref={ref} data-reveal style={style} className={className}>
      {children}
    </div>
  );
}
