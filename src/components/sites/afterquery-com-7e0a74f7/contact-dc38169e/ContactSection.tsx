import { Reveal } from "../shared/Reveal";
import { ContactForm } from "./ContactForm";
import { ContactAside } from "./ContactAside";

export function ContactSection() {
  return (
    <section className="pb-4 pt-20 md:pt-28">
      <div className="mx-auto w-[min(100%_-_2rem,1040px)]">
        <Reveal className="grid grid-cols-1 gap-y-4 lg:grid-cols-2 lg:items-start">
          <h1 className="font-serif text-ink tracking-[-0.01em] text-balance text-[1.875rem] leading-[1.05] md:text-[2.125rem] lg:text-[2.375rem]">Contact us</h1>
          <p className="font-sans text-lg leading-[1.45] text-ink/60">Ready to build better AI? Get in touch to discuss your data needs and explore how we can accelerate your AI development.</p>
        </Reveal>
        <Reveal delay={0.05} y={32} className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-0">
          <div className="lg:pr-10 lg:pt-10">
            <ContactForm />
          </div>
          <ContactAside />
        </Reveal>
      </div>
    </section>
  );
}
