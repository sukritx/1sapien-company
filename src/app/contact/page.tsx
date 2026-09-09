import type { Metadata } from "next";
import { SiteHeader } from "@/components/sites/afterquery-com-7e0a74f7/shared/SiteHeader";
import { SiteFooter } from "@/components/sites/afterquery-com-7e0a74f7/shared/SiteFooter";
import { ContactSection } from "@/components/sites/afterquery-com-7e0a74f7/contact-dc38169e/ContactSection";

export const metadata: Metadata = {
  title: "1Sapien",
  description:
    "1Sapien is an applied research lab curating data solutions to accelerate foundation model development.",
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
