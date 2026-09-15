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
        <p className="font-sans text-sm text-inverse">Talk to me directly</p>
        <a
          href="mailto:s.xuto@1sapien.com"
          className="mt-1 inline-block font-sans text-base text-inverse/75 rounded-sm decoration-inverse/60 underline-offset-[3px] outline-none transition-colors duration-150 hover:underline focus-visible:ring-2 focus-visible:ring-inverse/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          s.xuto@1sapien.com
        </a>
      </div>
      <p className="relative z-10 max-w-[52ch] font-sans text-sm italic leading-[1.5] text-inverse/70">
        *We work with local service businesses across the world. Prefer to talk first? Email{" "}
        <a
          href="mailto:s.xuto@1sapien.com"
          target="_blank"
          rel="noreferrer"
          className="text-inverse/90 rounded-sm decoration-inverse/60 underline-offset-[3px] outline-none transition-colors duration-150 hover:underline focus-visible:ring-2 focus-visible:ring-inverse/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          s.xuto@1sapien.com
        </a>
      </p>
    </aside>
  );
}
