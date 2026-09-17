import type { CSSProperties } from "react";

type LogoMaskProps = {
  url: string;
  width: number | string;
  height: number | string;
  colorClass?: string;
  position?: "left center" | "center";
  ariaLabel?: string;
  role?: string;
};

export function LogoMask({
  url,
  width,
  height,
  colorClass = "bg-ink",
  position = "left center",
  ariaLabel,
  role,
}: LogoMaskProps) {
  const style = {
    width,
    height,
    maskImage: `url(${url})`,
    WebkitMaskImage: `url(${url})`,
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskSize: "contain",
    WebkitMaskSize: "contain",
    maskPosition: position,
    WebkitMaskPosition: position,
  } as CSSProperties;
  const props = {
    className: `block shrink-0 ${colorClass}`,
    style,
  } as const;
  if (role) {
    return (
      <span role={role} aria-label={ariaLabel} {...props} />
    );
  }
  return <span aria-label={ariaLabel} {...props} />;
}

export function Wordmark({ href = "/", className }: { href?: string; className?: string }) {
  return (
    <a
      aria-label="1Sapien — home"
      href={href}
      className={`inline-flex items-center transition-opacity duration-150 hover:opacity-70 ${className ?? ""}`}
    >
      <img
        src="/images/1sapien-black-text.png"
        alt="1Sapien"
        width={97}
        height={22}
        className="block h-[22px] w-auto"
      />
    </a>
  );
}
