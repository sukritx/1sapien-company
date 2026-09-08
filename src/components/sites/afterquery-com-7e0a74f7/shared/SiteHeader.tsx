"use client";

import { useState } from "react";

import { Wordmark } from "./Logo";
import type { NavLink } from "../../../../types/sites/afterquery-com-7e0a74f7";

const NAV_LINKS: NavLink[] = [
  { label: "Research & Blog", href: "/research" },
  { label: "Leaderboards", href: "/leaderboard" },
  { label: "For Enterprises", href: "/solutions" },
  { label: "Products", href: "/products" },
];

const MOBILE_LINKS: NavLink[] = [
  ...NAV_LINKS,
  { label: "Careers", href: "/careers" },
];

type SiteHeaderProps = {
  activeHref?: string;
};

export function SiteHeader({ activeHref }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-bg transition-transform duration-300 ease-[cubic-bezier(0.23,0.98,0.56,1)] translate-y-0">
      <nav className="mx-auto flex h-[70px] max-w-[1136px] items-center justify-between gap-6 px-4 md:px-8">
        <Wordmark href="/" />
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map(({ label, href }) => {
            const active = href === activeHref;
            return (
              <li key={href}>
                <a
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative inline-block text-sm font-medium transition-colors duration-150 hover:text-ink ${active ? "text-ink" : "text-ink/80"}`}
                >
                  {label}
                  <span aria-hidden="true" className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-ink/90 transition-transform duration-300 ease-[cubic-bezier(0.23,0.98,0.56,1)] ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                </a>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-2">
          <a href="/careers" className="inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium leading-none transition-[scale,background-color,color,filter] duration-150 ease-out outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:scale-[0.96] bg-ink/[0.06] text-ink/80 hover:bg-ink/[0.1] h-8 px-3 text-sm max-lg:hidden">Careers</a>
          <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium leading-none transition-[scale,background-color,color,filter] duration-150 ease-out outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:scale-[0.96] bg-ink/90 text-bg hover:bg-ink h-8 px-3 text-sm max-md:hidden">Get data</a>
          <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="grid size-10 place-items-center text-ink lg:hidden">
            <span className="relative block h-4 w-5">
              <span className={`absolute left-0 top-0 h-0.5 w-5 bg-ink transition-transform duration-200 ease-out ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[7px] h-0.5 w-5 bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
              <span className={`absolute bottom-0 left-0 h-0.5 w-5 bg-ink transition-transform duration-200 ease-out ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </nav>
      <div className={`overflow-hidden border-t border-ink/10 bg-bg transition-[max-height,opacity] duration-300 ease-out lg:hidden ${open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="flex flex-col gap-1 px-4 py-4">
          {MOBILE_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="block rounded-lg px-2 py-3 text-base font-medium text-ink/80 transition-colors duration-150 hover:bg-ink/[0.04] hover:text-ink">{label}</a>
            </li>
          ))}
          <li className="px-2 pt-3">
            <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium leading-none transition-[scale,background-color,color,filter] duration-150 ease-out outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:scale-[0.96] bg-ink/90 text-bg hover:bg-ink h-9 px-4 text-sm w-full">Get data</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
