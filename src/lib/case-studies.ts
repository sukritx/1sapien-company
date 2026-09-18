export type CaseStudyAuthor = {
  name: string;
  avatar?: string;
};

export type CaseStudyBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; id: string; text: string }
  | { type: "quote"; text: string };

export type CaseStudy = {
  slug: string;
  service: string;
  title: string;
  description: string;
  cover: string;
  dateText: string;
  dateISO: string;
  authors: CaseStudyAuthor[];
  blocks: CaseStudyBlock[];
};

const COVER = "/sites/afterquery-com-7e0a74f7/shared/research/";
const AVATAR = "/sites/afterquery-com-7e0a74f7/shared/authors/";
const VNL_COVER =
  "/sites/afterquery-com-7e0a74f7/root-e0627e8d/images/research/Healthcare_professional_adjustin…_20260917225446-modified.jpeg";

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "virtual-nurse-lab-ai-patient-consults",
    service: "Education AI",
    title: "Virtual Nurse Lab: an AI patient that scores every nursing consult",
    description:
      "How we built Virtual Nurse Lab — a platform where nursing students run patient consultations online while AI scores the conversation and returns instant feedback. Now used by 5+ universities internationally.",
    cover: VNL_COVER,
    dateText: "Sep 17, 2026",
    dateISO: "2026-09-17",
    authors: [
      { name: "Spencer M.", avatar: `${AVATAR}spencer.jpg` },
      { name: "Tiana R.", avatar: `${AVATAR}tiana.jpg` },
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Virtual Nurse Lab is a platform we built so nursing students can practise a patient consultation any time they want — without waiting for a slot in the simulation lab. The student interviews an AI patient online, and when the consult ends the AI scores the whole conversation and hands back specific, itemised feedback. What started as a single pilot cohort is now in use at more than five universities internationally.",
      },
      { type: "heading", id: "the-problem", text: "The problem" },
      {
        type: "paragraph",
        text: "Nursing students only get so many chances to practise a real consultation before they are graded on one. Simulation labs are expensive to run, book out weeks ahead, and come with a hard limit: one instructor can watch one student at a time. Most of a cohort spends the semester watching instead of practising.",
      },
      {
        type: "paragraph",
        text: "And the feedback is slow. A student runs a scenario on Tuesday and gets written comments the following week, long after the memory of what they actually said has faded. The people who need the most reps — the ones still finding their footing — are the ones who get the fewest.",
      },
      { type: "heading", id: "what-we-did", text: "What we did" },
      {
        type: "paragraph",
        text: "We built a scenario engine where the AI plays the patient. Faculty script the case — the symptoms, the history, the things the patient is reluctant to mention, even how anxious or evasive they are — and the student works through it in a live consult. The AI patient answers in character, pushes back, and reacts to how the student asks, so no two attempts play out the same way.",
      },
      {
        type: "paragraph",
        text: "The scoring is the part that matters. When the consult ends, the backend evaluates the full transcript against the rubric the faculty themselves wrote — history taking, empathy and rapport, safety, clinical reasoning, closing the encounter — and returns a score with feedback tied to the exact moment in the conversation. Not a grade out of nowhere: a breakdown of what was missed and what to try instead. Students can re-run the scenario immediately and watch the score move.",
      },
      {
        type: "paragraph",
        text: "For faculty we built the other half: a dashboard showing how a whole cohort is progressing, which competencies are lagging, and which students need a human conversation. Nobody has to sit through fifty consults to find the three that need attention.",
      },
      {
        type: "paragraph",
        text: "The strategy throughout was to make adoption effortless. We didn’t ask faculty to rewrite their curriculum — we took the rubric they already grade on and made the software speak it. Students open one link and start talking; there is nothing to install and nothing to learn. The less time anyone spends fighting the tool, the more practice the student gets, and the better the outcome for everyone.",
      },
      { type: "heading", id: "the-results", text: "The results" },
      {
        type: "paragraph",
        text: "Students now get unlimited practice consults instead of a handful a term, with feedback that lands the moment they finish rather than the week after. Faculty get their evenings back and a clear view of who needs help. The platform is in live use at more than five universities internationally, and the same rubric-driven scoring means a student in one programme is measured the same way as a student in another.",
      },
      {
        type: "quote",
        text: "A student can rehearse a difficult conversation ten times before they ever have it with a real patient. The AI grades every attempt the same way, so the feedback is consistent — and my instructors are no longer marking consults at midnight.",
      },
    ],
  },
  {
    slug: "more-5-star-google-reviews",
    service: "Automated Reviews",
    title: "Turn every finished job into a 5-star Google review — automatically",
    description:
      "How a family-run plumbing company went from 12 to 214 Google reviews, climbed from #14 to #3 on the local map, and grew monthly calls from 19 to 128.",
    cover: `${COVER}how-afterquery-helped-nvidia-hill-climb-gdpval.jpg`,
    dateText: "Jul 2, 2026",
    dateISO: "2026-07-02",
    authors: [
      { name: "Spencer M.", avatar: `${AVATAR}spencer.jpg` },
      { name: "Carlos G.", avatar: `${AVATAR}carlos.jpg` },
    ],
    blocks: [
      {
        type: "paragraph",
        text: "When we met them, this family-run plumbing company had just twelve Google reviews and sat at #14 on the local map. Their customers were happy — they just never left a review, because nobody asked. So we built them a simple automated review system that asks after every job, and waited. The results came in faster than anyone expected.",
      },
      { type: "heading", id: "the-problem", text: "The problem" },
      {
        type: "paragraph",
        text: "Before we started, the business was invisible in local search. They ranked #14 on the map — below the fold, behind three competitors who had been open half as long. New customers in their own neighborhood were finding someone else before they ever saw this company’s name.",
      },
      {
        type: "paragraph",
        text: "Local search doesn’t reward the best business — it rewards the most visible one. The three names at the top of the map capture most of the calls, and everyone else splits what’s left. It doesn’t matter how good the work is if the customer never sees you.",
      },
      { type: "heading", id: "what-we-did", text: "What we did" },
      {
        type: "paragraph",
        text: "We set up automated review requests: every completed job now triggers a friendly text with a one-tap link straight to their Google profile, so leaving a 5-star review takes seconds. No awkward ask, no forgotten request, no relying on a happy customer to remember.",
      },
      {
        type: "paragraph",
        text: "We also took over review management. Every new review gets a reply, and unhappy customers are routed to a private feedback form first — so small problems get fixed before they ever become public 1-star reviews.",
      },
      {
        type: "paragraph",
        text: "The strategy was deliberately boring, and that is the point. One ask, sent at the right moment, every single time, with the whole thing running on its own. No new app for staff to open, no monthly manual push, nothing to remember on a busy day. When the simplest possible process is the one that always happens, the outcome takes care of itself.",
      },
      { type: "heading", id: "the-results", text: "The results" },
      {
        type: "paragraph",
        text: "Within four months, reviews went from 12 to 214 and the rating settled at 4.9 stars. They climbed from #14 to #3 on the local map — past all three competitors who had been outranking them — and monthly calls grew from 19 to 128. The team didn’t hire a marketer or chase a single customer for a review.",
      },
      {
        type: "quote",
        text: "We were doing good work and getting maybe one review a month. Now the ask goes out automatically the same day, and the phone hasn’t stopped. We passed the two biggest names in town on the map in about four months. I wish we’d done this years ago.",
      },
    ],
  },
  {
    slug: "rank-number-one-on-google-maps",
    service: "Local SEO",
    title: "Rank #1 in your service area on Google",
    description:
      "How a two-van HVAC team outranked three larger competitors, reached the map 3-pack in six months, and more than doubled the calls they booked each month.",
    cover: `${COVER}solving-the-last-mile-problem-in-partnership-with-the-raine-group.jpg`,
    dateText: "Apr 28, 2026",
    dateISO: "2026-04-28",
    authors: [
      { name: "Sam J.", avatar: `${AVATAR}sam-jung.jpg` },
      { name: "Spencer M.", avatar: `${AVATAR}spencer.jpg` },
    ],
    blocks: [
      {
        type: "paragraph",
        text: "A two-van HVAC company was doing steady work from word of mouth, but every search in their own town sent customers to three bigger competitors. They had been on page three of Google Maps for years. Six months after we started, they were the first name people saw.",
      },
      { type: "heading", id: "the-problem", text: "The problem" },
      {
        type: "paragraph",
        text: "The company’s Google Business Profile was half-finished: wrong categories, no photos, hours out of date, and a service area that didn’t match where they actually worked. Their website mentioned services once, buried in a paragraph, and never by the words customers type.",
      },
      {
        type: "paragraph",
        text: "Meanwhile, the competitors in the map 3-pack were collecting the calls. Every day they stayed there, the gap widened — more reviews, more clicks, more signals telling Google who deserves the top spot.",
      },
      { type: "heading", id: "what-we-did", text: "What we did" },
      {
        type: "paragraph",
        text: "We rebuilt the foundation first: a fully optimized Google Business Profile with the right categories, services, photos, and service area, plus accurate listings and citations across the web so Google could trust the information it found.",
      },
      {
        type: "paragraph",
        text: "Then we fixed the website. We built clear service pages for each thing they actually do, written the way customers search, with fast loading and strong internal links. We also connected automated review requests, because rankings follow reputation.",
      },
      {
        type: "paragraph",
        text: "Ranking is a long game, so the strategy was to fix the things that compound and then leave them alone. We sequenced the work from the foundation up — profile, listings, then website, then reputation — so each step made the next one easier. Everything we set up keeps running without a weekly checklist, because a process that needs constant attention is a process that quietly stops.",
      },
      { type: "heading", id: "the-results", text: "The results" },
      {
        type: "paragraph",
        text: "They reached the map 3-pack in month three and the #1 spot in month six — ahead of all three competitors. Calls more than doubled, and booked jobs went from 12 to 38 a month. Nothing about their service changed; the only difference is that customers can finally find them.",
      },
      {
        type: "quote",
        text: "We always knew we were as good as the big guys. We just weren’t on the map. Now we’re the first one people call, and we had to add a third van.",
      },
    ],
  },
  {
    slug: "website-that-books-jobs",
    service: "Websites",
    title: "A website that turns visitors into booked jobs",
    description:
      "How a two-chair salon replaced a slow brochure site with online booking and instant follow-up, filling its calendar and cutting no-shows in half.",
    cover: `${COVER}how-we-improved-terminal-bench-2-with-tinker-and-harbor.jpg`,
    dateText: "Mar 31, 2026",
    dateISO: "2026-03-31",
    authors: [
      { name: "Michael E.", avatar: `${AVATAR}michael.jpg` },
      { name: "Spencer M.", avatar: `${AVATAR}spencer.jpg` },
    ],
    blocks: [
      {
        type: "paragraph",
        text: "A two-chair salon had a website that looked fine and did nothing. It loaded slowly, had no way to book, and sent every enquiry to an email inbox nobody checked during appointments. Half of the people who tried to get in touch never heard back.",
      },
      { type: "heading", id: "the-problem", text: "The problem" },
      {
        type: "paragraph",
        text: "The old site was a digital brochure: a few photos, a list of services, and a contact form that vanished into the void. There was no booking, no instant reply, and no way for a customer to do anything at 9pm when they actually had time to think about it.",
      },
      {
        type: "paragraph",
        text: "For a local business, that’s the whole ballgame. A visitor who can’t book in seconds doesn’t wait — they tap back and pick the next salon on the list.",
      },
      { type: "heading", id: "what-we-did", text: "What we did" },
      {
        type: "paragraph",
        text: "We built a fast, mobile-first site designed around one action: booking an appointment. The phone number and book button follow the visitor down the page, services are laid out clearly with prices, and every form drops straight into the calendar.",
      },
      {
        type: "paragraph",
        text: "Then we wired up online booking and instant follow-up. Customers can book any hour of the day, and every enquiry gets an automatic text and email within seconds. Reminders go out before each appointment, so no-shows drop without anyone making a call.",
      },
      {
        type: "paragraph",
        text: "The strategy was to remove every step between a customer deciding and a customer booked. One clear action, repeated everywhere on the page, with the follow-up handled automatically behind it. Nobody at the salon has to log in, chase a reply, or send a reminder — and the fewer moving parts there are, the more reliable the result.",
      },
      { type: "heading", id: "the-results", text: "The results" },
      {
        type: "paragraph",
        text: "The salon went from zero online bookings to 94 a month, with a calendar that fills itself and a page that loads in under a second. No-shows were cut by more than half. The owner didn’t learn a single new tool — the site and the follow-up just run.",
      },
      {
        type: "quote",
        text: "People book while I’m with a client, and the reminders mean they actually show up. My chair is full and I’m not answering the phone between cuts.",
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((study) => study.slug === slug);
}
