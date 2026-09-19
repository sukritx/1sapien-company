import type { Metadata } from "next";
import { SiteHeader } from "@/components/sites/1sapien-com-7e0a74f7/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/1sapien-com-7e0a74f7/shared/SiteFooter";
import { ContactSection } from "@/components/sites/1sapien-com-7e0a74f7/contact-dc38169e/ContactSection";

export const metadata: Metadata = {
  title: "Book a Free Strategy Call - 1Sapien",
  description:
    "Book a free strategy call and see how 1Sapien turns finished jobs into 5-star Google reviews, higher local rankings, and booked work.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <div className="flex flex-1 flex-col">
        <main className="flex-1">
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
