"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  startDelay?: number;
  charMs?: number;
};

export function Typewriter({ text, startDelay = 150, charMs = 36 }: TypewriterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(text.length);
      return;
    }
    let rafId = 0;
    let startTime = 0;
    let started = false;
    const tick = (time: number) => {
      if (!started) {
        started = true;
        startTime = time + startDelay;
        rafId = requestAnimationFrame(tick);
        return;
      }
      if (time < startTime) {
        rafId = requestAnimationFrame(tick);
        return;
      }
      const next = Math.min(text.length, Math.floor((time - startTime) / charMs) + 1);
      setCount(next);
      if (next < text.length) {
        rafId = requestAnimationFrame(tick);
      }
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [text, startDelay, charMs]);

  return (
    <span aria-hidden="true">
      {text.slice(0, count)}
      <span className="caret-blink inline-block w-0 overflow-visible text-ink/40">|</span>
      <span className="text-transparent">{text.slice(count)}</span>
    </span>
  );
}
