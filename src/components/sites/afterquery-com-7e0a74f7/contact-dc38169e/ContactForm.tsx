"use client";

const INTERESTS = [
  { label: "Request a Custom Dataset", value: "request-custom-dataset" },
  { label: "Browse our Off-the-shelf Datasets", value: "browse-off-the-shelf-datasets" },
  { label: "Enterprise AI Consulting", value: "enterprise-ai-consulting" },
  { label: "End-to-end Enterprise AI Implementation", value: "end-to-end-enterprise-ai-implementation" },
];

type FieldCellProps = {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder: string;
  span?: boolean;
};

function FieldCell({ id, name, label, type = "text", required, placeholder, span }: FieldCellProps) {
  return (
    <div className={span ? "sm:col-span-2" : undefined}>
      <label htmlFor={id} className="flex flex-col gap-2">
        <span className="font-sans text-sm text-ink/60">{label}</span>
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className="w-full border-0 border-b border-ink/15 bg-transparent pb-1.5 font-sans text-base text-ink placeholder:text-ink/40 outline-none transition-colors duration-150 focus:border-ink"
        />
      </label>
    </div>
  );
}

export function ContactForm() {
  return (
    <form className="relative flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FieldCell id="firstName" name="firstName" label="First name" required placeholder="First" />
        <FieldCell id="lastName" name="lastName" label="Last name" required placeholder="Last" />
        <FieldCell id="company" name="company" label="Company" placeholder="Your company" />
        <FieldCell id="jobTitle" name="jobTitle" label="Job title" placeholder="Title" />
        <FieldCell id="email" name="email" type="email" label="Work email" required placeholder="Your work email" span />
      </div>
      <fieldset className="flex flex-col gap-2">
        <legend className="mb-2 font-sans text-sm text-ink/60">What are you interested in?</legend>
        {INTERESTS.map((interest) => (
          <label key={interest.value} className="group flex cursor-pointer items-center gap-2">
            <input type="checkbox" name="interests" value={interest.value} className="peer sr-only" />
            <span
              aria-hidden="true"
              className="grid size-5 shrink-0 place-items-center rounded-[4px] border border-ink/30 transition-colors duration-150 peer-checked:border-ink peer-checked:bg-ink peer-focus-visible:ring-2 peer-focus-visible:ring-ink/40 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-bg"
            >
              <svg
                viewBox="0 0 12 12"
                className="size-3 text-bg opacity-0 transition-opacity duration-150 peer-checked:opacity-100"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.5 6.5 5 9l4.5-5" />
              </svg>
            </span>
            <span className="font-sans text-sm text-ink/80 transition-colors duration-150 group-hover:text-ink">{interest.label}</span>
          </label>
        ))}
      </fieldset>
      <label className="flex flex-col gap-2">
        <span className="font-sans text-sm text-ink/60">Tell us more about your project</span>
        <textarea
          required
          name="description"
          rows={4}
          placeholder="Enter a description..."
          className="w-full border-0 border-b border-ink/15 bg-transparent pb-1.5 font-sans text-base text-ink placeholder:text-ink/40 outline-none transition-colors duration-150 focus:border-ink resize-y"
        />
      </label>
      <input type="hidden" name="formStartedAt" />
      <input type="hidden" name="turnstileToken" />
      <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label>Leave this field blank</label>
        <input type="text" id="companyWebsite" name="companyWebsite" tabIndex={-1} autoComplete="off" />
      </div>
      <button
        type="submit"
        className="mt-1 inline-flex h-14 w-full items-center justify-center rounded-full font-sans text-base font-medium transition-[background-color,opacity,scale,filter] duration-150 ease-out bg-ink/[0.08] text-ink hover:bg-ink/[0.12] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      >
        Submit
      </button>
    </form>
  );
}
