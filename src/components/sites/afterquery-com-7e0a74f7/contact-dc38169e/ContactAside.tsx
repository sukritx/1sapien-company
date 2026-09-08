const LINK_CLASSES =
  "font-sans text-base text-inverse/75 rounded-sm decoration-inverse/60 underline-offset-[3px] outline-none transition-colors duration-150 hover:underline focus-visible:ring-2 focus-visible:ring-inverse/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

export function ContactAside() {
  return (
    <aside className="relative flex min-h-[400px] flex-col gap-6 overflow-hidden rounded-[4px] bg-ink p-6 text-inverse md:gap-8 md:p-8 lg:h-[640px] lg:min-h-0">
      <img
        src="/sites/afterquery-com-7e0a74f7/contact-dc38169e/images/contact-right.webp"
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative z-10">
        <p className="font-sans text-sm text-inverse">Sales inquiries</p>
        <a
          href="mailto:sales@afterquery.com"
          className="mt-1 inline-block font-sans text-base text-inverse/75 rounded-sm decoration-inverse/60 underline-offset-[3px] outline-none transition-colors duration-150 hover:underline focus-visible:ring-2 focus-visible:ring-inverse/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          sales@afterquery.com
        </a>
      </div>
      <div className="relative z-10">
        <p className="font-sans text-sm text-inverse">Support</p>
        <a
          href="mailto:support@afterquery.com"
          className="mt-1 inline-block font-sans text-base text-inverse/75 rounded-sm decoration-inverse/60 underline-offset-[3px] outline-none transition-colors duration-150 hover:underline focus-visible:ring-2 focus-visible:ring-inverse/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          support@afterquery.com
        </a>
        <p className="mt-3 max-w-[52ch] font-sans text-sm italic leading-[1.5] text-inverse/70">
          *If you’re looking for our Experts site (contract jobs), please refer to{" "}
          <a
            href="https://experts.afterquery.com/"
            target="_blank"
            rel="noreferrer"
            className="text-inverse/90 rounded-sm decoration-inverse/60 underline-offset-[3px] outline-none transition-colors duration-150 hover:underline focus-visible:ring-2 focus-visible:ring-inverse/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            experts.afterquery.com
          </a>
          . All messages seeking Expert roles are automatically discarded.
        </p>
      </div>
      <div className="relative z-10">
        <p className="font-sans text-sm text-inverse">Social</p>
        <div className="mt-1 flex flex-wrap gap-x-4 gap-y-2">
          <a
            href="https://www.linkedin.com/company/afterquery"
            target="_blank"
            rel="noreferrer"
            className={LINK_CLASSES}
          >
            LinkedIn
          </a>
          <a href="https://x.com/AfterQuery" target="_blank" rel="noreferrer" className={LINK_CLASSES}>
            X
          </a>
        </div>
      </div>
    </aside>
  );
}
