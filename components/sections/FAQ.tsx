import Accordion from "@/components/ui/Accordion";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import { faqs } from "@/lib/faq-data";

export default function FAQ() {
  return (
    <section id="faq" className="bg-sand section-padding">
      <div className="container-wide">
        <SectionHeader title="Frequently Asked Questions" />
        <Accordion items={faqs} />
        <p className="font-body text-sm text-umber text-center mt-10 max-w-lg mx-auto">
          More detail on healing and aftercare is on our{" "}
          <Link href="/aftercare" className="text-ink underline hover:text-gold">
            aftercare page
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
