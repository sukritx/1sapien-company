"use client";

import { Children, cloneElement, isValidElement, useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";

type StaggerProps = {
  children: ReactNode;
  className?: string;
};

export function Stagger({ children, className }: StaggerProps) {
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

  return (
    <div ref={ref} data-stagger className={className}>
      {Children.map(children, (child, index) => {
        if (!isValidElement<{ style?: CSSProperties }>(child)) return child;
        const style = {
          ...(child.props.style ?? {}),
          "--stagger-i": index,
        } as CSSProperties;
        return cloneElement(child, { style });
      })}
    </div>
  );
}

type StaggerItemProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function StaggerItem({ children, className, style }: StaggerItemProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
