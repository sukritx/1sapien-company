import { Wordmark } from "./Logo";
import type { FooterColumn } from "../../../../types/sites/afterquery-com-7e0a74f7";

const COLUMNS: FooterColumn[] = [
  {
    heading: "Lab",
    links: [
      { label: "Research & Blog", href: "/research" },
      { label: "Leaderboards", href: "/leaderboard" },
      { label: "Knowledge", href: "/knowledge" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Products", href: "/products" },
      { label: "For Enterprises", href: "/solutions" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    heading: "Social",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/afterquery" },
      { label: "X", href: "https://x.com/afterquery" },
    ],
    external: true,
  },
  {
    heading: "Terms & Policies",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-bg">
      <div className="mx-auto max-w-[1136px] px-4 py-16 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <Wordmark href="/" />
          <div className="grid grid-cols-4 gap-x-3 gap-y-8 md:flex md:flex-wrap md:gap-x-10">
            {COLUMNS.map(({ heading, links, external }) => (
              <nav key={heading} aria-label={heading} className="min-w-0 md:min-w-[7rem]">
                <h2 className="font-sans text-[11px] font-medium leading-[1.3] text-ink/90 md:text-sm">{heading}</h2>
                <ul className="mt-3 flex flex-col gap-2 md:mt-4 md:gap-2.5">
                  {links.map(({ label, href }) => (
                    <li key={href}>
                      <a
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="block text-[11px] font-medium leading-[1.35] text-ink/60 transition-colors duration-150 hover:text-ink md:text-sm"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
            <p className="col-span-4 whitespace-nowrap text-xs font-medium text-ink/60 md:col-auto">AfterQuery © 2026</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
