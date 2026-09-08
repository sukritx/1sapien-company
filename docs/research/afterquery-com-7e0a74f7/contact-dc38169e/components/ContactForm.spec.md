# ContactForm Specification

## Overview
- **Target file:** `src/components/sites/afterquery-com-7e0a74f7/contact-dc38169e/ContactForm.tsx`
- **Interaction model:** native form (no visible submit feedback on original — verified: clicking Submit changes nothing visible; add `onSubmit={(e) => e.preventDefault()}` to avoid navigation)
- Component is static/server-safe except the submit preventDefault (needs "use client" for the handler OR render without action; original posts nowhere visible — use "use client" + preventDefault).

## DOM (verbatim)
```html
<form class="relative flex flex-col gap-5">
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    5 cells:
    <div>                                    <!-- firstName -->
    <div>                                    <!-- lastName -->
    <div>                                    <!-- company -->
    <div>                                    <!-- jobTitle -->
    <div class="sm:col-span-2">              <!-- email -->
  </div>
  <fieldset class="flex flex-col gap-2">
    <legend class="mb-2 font-sans text-sm text-ink/60">What are you interested in?</legend>
    4 × checkbox label (below)
  </fieldset>
  <label class="flex flex-col gap-2">
    <span class="font-sans text-sm text-ink/60">Tell us more about your project</span>
    <textarea required name="description" rows="4" placeholder="Enter a description..."
      class="w-full border-0 border-b border-ink/15 bg-transparent pb-1.5 font-sans text-base text-ink placeholder:text-ink/40 outline-none transition-colors duration-150 focus:border-ink resize-y"></textarea>
  </label>
  <input type="hidden" name="formStartedAt" />
  <input type="hidden" name="turnstileToken" />
  <div class="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
    <label>Leave this field blank</label>
    <input type="text" id="companyWebsite" name="companyWebsite" tabindex="-1" autocomplete="off" />
  </div>
  <button type="submit"
    class="mt-1 inline-flex h-14 w-full items-center justify-center rounded-full font-sans text-base font-medium transition-[background-color,opacity,scale,filter] duration-150 ease-out bg-ink/[0.08] text-ink hover:bg-ink/[0.12] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg">
    Submit
  </button>
</form>
```

## Text field pattern (inside each cell div)
```html
<label class="flex flex-col gap-2">
  <span class="font-sans text-sm text-ink/60">First name</span>
  <input id="firstName" name="firstName" type="text" required placeholder="First"
    class="w-full border-0 border-b border-ink/15 bg-transparent pb-1.5 font-sans text-base text-ink placeholder:text-ink/40 outline-none transition-colors duration-150 focus:border-ink" />
</label>
```
Fields: First name required placeholder First; Last name required placeholder Last; Company (not required) placeholder "Your company"; Job title (not required) placeholder "Title"; Work email type=email required placeholder "Your work email" (in sm:col-span-2 cell). input ids = same as names (original used react ids; use deterministic own).

## Checkbox option (4×) inside fieldset, gap-2
```html
<label class="group flex cursor-pointer items-center gap-2">
  <input type="checkbox" name="interests" value="..." class="peer sr-only" />
  <span aria-hidden="true"
    class="grid size-5 shrink-0 place-items-center rounded-[4px] border border-ink/30 transition-colors duration-150 peer-checked:border-ink peer-checked:bg-ink peer-focus-visible:ring-2 peer-focus-visible:ring-ink/40 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-bg">
    <svg viewBox="0 0 12 12" class="size-3 text-bg opacity-0 transition-opacity duration-150 peer-checked:opacity-100" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2.5 6.5 5 9l4.5-5" />
    </svg>
  </span>
  <span class="font-sans text-sm text-ink/80 transition-colors duration-150 group-hover:text-ink">{label}</span>
</label>
```
Options (verbatim, values snake_case of label minus spaces): "Request a Custom Dataset" · "Browse our Off-the-shelf Datasets" · "Enterprise AI Consulting" · "End-to-end Enterprise AI Implementation". Checkbox hover: label text ink/80 → ink 150ms.

## Textarea notes
- required; border-b 1px ink/15 → focus:border-ink (150ms color transition); placeholder text-ink/40; resize-y only (vertical).
