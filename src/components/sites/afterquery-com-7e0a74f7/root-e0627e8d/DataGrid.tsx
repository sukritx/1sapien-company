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
    title: "Supervised Fine-Tuning (SFT)",
    description:
      "High-quality prompt–response pairs and chain-of-thought reasoning traces — teaching models how to behave across complex tasks.",
  },
  {
    image: `${IMAGE_ROOT}m2.avif`,
    title: "Reinforcement Learning + Rubrics",
    description:
      "Expert-designed prompts with grading frameworks for reasoning and code generation — turning subjective judgment into scalable reward signals.",
  },
  {
    image: `${IMAGE_ROOT}m3.avif`,
    title: "Agent Environments (API / MCP)",
    description:
      "Custom environments across APIs, tools, and services — enabling training and evaluation of agents in real workflows.",
  },
  {
    image: `${IMAGE_ROOT}m4.avif`,
    title: "Computer Use Trajectories",
    description:
      "Human-demonstrated interactions across browser and desktop environments — teaching models to navigate and operate software end-to-end.",
  },
];

export function DataGrid() {
  return (
    <div className="mx-auto w-[min(100%_-_2rem,688px)] pb-14">
      <Stagger className="grid grid-cols-2 gap-x-4 gap-y-8">
        {items.map(item => (
          <div key={item.image} className="flex flex-col items-start gap-3 sm:flex-row sm:gap-6">
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
