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
    title: "Automated Reviews",
    description:
      "Review requests go out automatically after every job, with a one-tap link to your Google profile. We reply to every review and intercept negative feedback — unhappy customers go to a private form first.",
  },
  {
    image: `${IMAGE_ROOT}m2.avif`,
    title: "Local SEO",
    description:
      "We optimize your Google Business Profile, your site, and your local listings so you climb the map 3-pack and outrank competitors — plus a monthly competitor and rank tracking report showing exactly where you beat them.",
  },
  {
    image: `${IMAGE_ROOT}m3.avif`,
    title: "Websites That Convert",
    description:
      "A fast, mobile-first website built to turn visitors into booked jobs, with lead-capture forms, online booking, and instant follow-up.",
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
