import { Stagger } from "../shared/Stagger";

const IMAGE_ROOT = "/sites/afterquery-com-7e0a74f7/root-e0627e8d/images/";

type DataItem = {
  image: string;
  title: string;
  description: string;
};

const items: DataItem[] = [
  {
    image: `${IMAGE_ROOT}m1.avif`,
    title: "Review Generation",
    description:
      "Personalized SMS and email requests after every job — timed around quiet hours, with no repeat asks.",
  },
  {
    image: `${IMAGE_ROOT}m2.avif`,
    title: "AI Review Responses",
    description:
      "Every review answered in your brand voice. Positive ones post automatically; tough ones wait for your OK.",
  },
  {
    image: `${IMAGE_ROOT}m3.avif`,
    title: "Social Proof",
    description:
      "Five-star reviews become branded Instagram and Facebook posts, published without the busywork.",
  },
  {
    image: `${IMAGE_ROOT}m4.avif`,
    title: "Profile Management",
    description:
      "Hours, descriptions, and posts stay accurate — with alerts the moment Google changes something.",
  },
  {
    image: `${IMAGE_ROOT}landing-hero.webp`,
    title: "Competitor Benchmarking",
    description:
      "A weekly local-pack scoreboard: your rank, ratings, and who is gaining on you.",
  },
  {
    image: `${IMAGE_ROOT}man-typing.webp`,
    title: "Review Intelligence",
    description:
      "A Monday digest of what customers loved, what cost you stars, and what to fix this week.",
  },
];

export function DataGrid() {
  return (
    <div className="mx-auto w-[min(100%_-_2rem,688px)] pb-14">
      <Stagger className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
        {items.map(item => (
          <div key={item.image} className="flex flex-col items-start gap-3">
            <img src={item.image} alt="" width={44} height={44} className="size-11 shrink-0 rounded-[4px] object-cover mix-blend-multiply" />
            <div>
              <div className="font-sans text-lg leading-[1.45] text-ink/80 text-[14px] font-medium leading-[1.25] text-ink sm:text-lg sm:leading-[1.2]">{item.title}</div>
              <p className="font-sans text-lg leading-[1.45] text-ink/60 mt-1.5 text-[12.5px] font-medium leading-[1.45] sm:mt-2 sm:text-lg">{item.description}</p>
            </div>
          </div>
        ))}
      </Stagger>
    </div>
  );
}

export function Divider() {
  return (
    <div className="mx-auto w-[min(100%_-_2rem,688px)]">
      <hr className="h-px w-full border-0 bg-ink/[0.08]" />
    </div>
  );
}
