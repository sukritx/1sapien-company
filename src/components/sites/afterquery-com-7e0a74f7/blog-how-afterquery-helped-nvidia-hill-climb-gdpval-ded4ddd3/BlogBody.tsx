import { Reveal } from "../shared/Reveal";

const P =
  "font-sans text-lg leading-[1.45] text-ink/80 font-serif leading-[1.5]";
const LINK =
  "font-medium text-ink underline decoration-ink/30 underline-offset-2 transition-colors duration-150 hover:decoration-ink";
const H2 =
  "font-serif text-ink tracking-[-0.01em] text-balance text-xl leading-[1.15] scroll-mt-28 font-bold text-ink/80";
const TD = "border-b border-ink/10 py-2.5 pr-6 text-ink/70";
const TH = "border-b border-ink/20 py-2.5 pr-6 font-medium text-ink/80";

const TABLE_ROWS: { domain: string; values: string[] }[] = [
  { domain: "GDPval", values: ["28.9", "35.3", "46.7", "49.5"] },
  { domain: "BrowseComp", values: ["31.0", "33.0", "44.4", "51.0"] },
  { domain: "HLE (no tools)", values: ["25.6", "26.3", "26.7", "32.1"] },
];

const TABLE_HEADS = ["Domain", "Student", "No warmup", "Warmup", "Teacher"];

export function BlogBody() {
  return (
    <div className="min-w-0 [&_li]:[text-wrap:wrap] [&_p]:[text-wrap:wrap]">
      <Reveal>
        <p className={P}>
          NVIDIA publicly used AfterQuery’s{" "}
          <a href="/contact" className={LINK}>
            Off-The-Shelf Office Agent Training Dataset
          </a>{" "}
          to improve Nemotron 3 Ultra on{" "}
          <a href="https://openai.com/index/gdpval/" target="_blank" rel="noopener noreferrer" className={LINK}>
            GDPval
          </a>
          . Nemotron 3 Ultra is a fully open 550B-A55B LatentMoE model with open weights, training data, and recipes. Ultra
          runs at up to ~6× the throughput of comparable open models (5.9× vs GLM-5.1, 4.8× vs Kimi K2.6) on long-horizon
          agentic tasks at the same accuracy, and supports a context length of up to 1M tokens.
        </p>
      </Reveal>
      <Reveal className="mt-6">
        <p className={P}>
          AfterQuery is the only data partner named in the{" "}
          <a
            href="https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3-Ultra-Technical-Report.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={LINK}
          >
            technical report
          </a>
          :
        </p>
      </Reveal>
      <Reveal className="mt-8">
        <blockquote className="border-l-2 border-ink/20 pl-5 font-serif text-lg italic leading-[1.7] text-ink">
          “We then constructed a training distribution from AfterQuery (AQ) tasks that share important latent structure with
          GDPval, including file-grounded reasoning, professional deliverables, multi-step analysis, and judged final
          outputs. For each AQ task, we used a strong model to generate multiple full trajectory rollouts. These rollouts
          were used in two stages. First, before pivot RL, we performed light SFT directly on the student Ultra model. The
          goal of this step was to transfer the strong model’s workflow priors for GDPval-like tasks to the student. Second,
          after this MOPD warmup, we proceeded with pivot RL in the MOPD stage, distilling the SFT-trained teacher into the
          student Ultra model using pivots derived from the strong model’s AQ rollouts.”
        </blockquote>
      </Reveal>
      <Reveal className="mt-12 md:mt-14">
        <h2 id="what-is-gdpval" className={H2}>
          What is GDPval
        </h2>
      </Reveal>
      <Reveal className="mt-6">
        <p className={P}>
          GDPval is OpenAI’s benchmark for real-world professional tasks. It spans 44 occupations across the nine largest
          sectors of US GDP, with 1,320 tasks (220 of them open-sourced) drawn from the real work of industry professionals
          who average 14 years of experience. Each task gives the model a prompt, often with reference files, and asks for a
          finished deliverable: a spreadsheet, slide deck, document, diagram, etc.
        </p>
      </Reveal>
      <Reveal className="mt-6">
        <p className={P}>
          Artificial Analysis maintains a public leaderboard version,{" "}
          <a href="https://artificialanalysis.ai/evaluations/gdpval-aa" target="_blank" rel="noopener noreferrer" className={LINK}>
            GDPval-AA v2
          </a>
          , that scores models on the open tasks and is now the highest-weighted evaluation in their Intelligence Index.
          Models solve the tasks agentically, working in a sandbox with shell + web access via the Stirrup harness. The
          resulting deliverables are compared in blind pairwise matchups, each graded by a judge sampled from a rotating
          panel of three frontier LLMs, and those results are fit to an Elo scale anchored to human expert work at 1,000 Elo.
        </p>
      </Reveal>
      <Reveal className="mt-6">
        <p className={P}>
          AfterQuery’s Office Agent tasks mirror GDPval task structure, with file-grounded inputs, multi-step analysis, and
          rubrics.
        </p>
      </Reveal>
      <Reveal className="mt-12 md:mt-14">
        <h2 id="pivotrl" className={H2}>
          PivotRL
        </h2>
      </Reveal>
      <Reveal className="mt-6">
        <p className={P}>
          <a href="https://arxiv.org/abs/2603.21383" target="_blank" rel="noopener noreferrer" className={LINK}>
            PivotRL
          </a>{" "}
          (Yi et al., 2026) is a turn-level RL method for agent training. It starts from existing SFT trajectories and treats
          each assistant turn as a possible training state. For each candidate turn, it samples several next actions from the
          reference or initial policy and scores them with a verifier. It keeps only the turns where the sampled actions
          produce mixed outcomes—some pass, some fail—and discards turns that are already uniformly solved or uniformly
          failed. RL is then run locally at those retained “pivot” turns, using verifier rewards for functionally valid
          actions rather than exact matches to the demonstration. The intended benefit is lower rollout cost: on SWE-Bench,
          the paper reports accuracy comparable to end-to-end RL with about 4× fewer rollout turns.
        </p>
      </Reveal>
      <Reveal className="mt-12 md:mt-14">
        <h2 id="impact" className={H2}>
          Impact
        </h2>
      </Reveal>
      <Reveal className="mt-6">
        <p className={P}>
          The practical use case for PivotRL shows up in NVIDIA’s Nemotron 3 Ultra training recipe. For GDPval-like office
          tasks, NVIDIA first used a strong model to generate full AfterQuery trajectories, then reused intermediate decision
          points from those trajectories as pivots during the MOPD stage. In other words: PivotRL supplies the local “where
          should we train?” states, while MOPD (Multi-teacher On-Policy Distillation) supplies the teacher-student learning
          signal at those states.
        </p>
      </Reveal>
      <Reveal className="mt-6">
        <p className={P}>
          NVIDIA trained specialized teachers by domain and then distilled them into Ultra through MOPD. For the
          office/workplace teacher, the AfterQuery tasks were chosen because they resemble GDPval: file-grounded reasoning,
          multi-step analysis, professional deliverables, and judged final outputs. The report says the AQ rollouts were used
          in two stages: a light SFT warmup to transfer the strong model’s workflow priors, followed by pivot RL in MOPD
          using pivots from those same strong-model rollouts.
        </p>
      </Reveal>
      <Reveal className="mt-8">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left font-sans text-sm">
            <thead>
              <tr>
                {TABLE_HEADS.map((head) => (
                  <th key={head} className={TH}>
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map((row) => (
                <tr key={row.domain}>
                  <td className={TD}>{row.domain}</td>
                  {row.values.map((value) => (
                    <td key={value} className={TD}>
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
      <Reveal className="mt-6">
        <p className="font-sans text-lg leading-[1.45] text-ink/80 font-serif leading-[1.5] italic text-ink/70">
          NVIDIA’s warmup ablation. Student is the starting checkpoint, Teacher the specialized model being distilled toward.
        </p>
      </Reveal>
      <Reveal className="mt-6">
        <p className={P}>
          On GDPval, warmup raises the MOPD result from 35.3 to 46.7, leaving Ultra only 2.8 points behind the
          office/workplace teacher. BrowseComp shows the same pattern, rising from 33.0 to 44.4. HLE barely moves, from 26.3
          to 26.7. AfterQuery has{" "}
          <a href="/blog/on-policy-distillation-gdpval" className={LINK}>
            similarly validated
          </a>{" "}
          that on-policy distillation works well for improving models on GDPval-style tasks, reaching a +20.9% net win-loss
          margin over base with a Nemotron 3 Nano student with pure OPD.
        </p>
      </Reveal>
      <Reveal className="mt-6">
        <p className={P}>
          Get in touch{" "}
          <a href="/contact" className={LINK}>
            here
          </a>{" "}
          to access our off-the-shelf GDPval, Office Agent, and agentic post-training datasets, or reach out to us directly
          at <a href="mailto:research@afterquery.com" className={LINK}>
            research@afterquery.com
          </a>
          .
        </p>
      </Reveal>
      <Reveal className="mt-12">
        <p className="font-sans text-sm leading-[1.45] text-ink/80 leading-[1.6] text-ink/45 border-t border-ink/10 pt-5">
          AfterQuery is an applied research lab curating data solutions to accelerate foundation model development.
        </p>
      </Reveal>
      <Reveal className="mt-3">
        <p className="font-sans text-sm leading-[1.45] text-ink/80 leading-[1.6] text-ink/45">
          Sources: NVIDIA Nemotron 3 Ultra technical report (Tables 4–5, Office & Workplace Task Teacher); PivotRL, Yi et
          al., 2026 (arXiv 2603.21383v1); GDPval-AA v2 leaderboard.
        </p>
      </Reveal>
    </div>
  );
}
