import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LEGAL, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Aftercare Instructions",
  description:
    "Powder brow aftercare instructions from Rachael Reed, RN, BSN — Brow Theory ATX permanent makeup Austin.",
};

export default function AftercarePage() {
  return (
    <>
      <Navbar variant="default" />
      <main className="pt-24 pb-16 print:pt-0">
        <article className="container-narrow section-padding max-w-3xl print:max-w-none">
          <header className="mb-10 print:mb-6">
            <p className="font-body text-xs uppercase tracking-[0.12em] text-gold mb-2">
              {SITE.name}
            </p>
            <h1 className="font-display text-[clamp(2rem,3.5vw,2.75rem)] text-ink mb-4">
              Powder Brow Aftercare
            </h1>
            <p className="font-body text-umber">
              Instructions from Rachael Reed, RN, BSN. Follow these guidelines
              carefully for optimal healing.
            </p>
          </header>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">Days 1–7</h2>
            <ul className="space-y-3 font-body text-umber leading-relaxed list-disc pl-5">
              <li>Keep the brow area clean and dry for the first 24 hours unless instructed otherwise.</li>
              <li>Apply aftercare product as directed — a thin layer, 2–3 times daily.</li>
              <li>Do not pick, peel, scratch, or rub the treated area.</li>
              <li>Avoid sweating, saunas, steam rooms, and swimming.</li>
              <li>No makeup on or around the brows until fully healed.</li>
              <li>Sleep on your back when possible to avoid friction.</li>
              <li>Avoid direct sun exposure and tanning beds.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">Days 8–14</h2>
            <ul className="space-y-3 font-body text-umber leading-relaxed list-disc pl-5">
              <li>Flaking should complete naturally — continue hands-off healing.</li>
              <li>Brows may appear lighter or patchy — this is normal.</li>
              <li>Continue avoiding exfoliants, retinoids, and acids near the brow area.</li>
              <li>Apply SPF 30+ when outdoors once the skin has closed.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-2xl text-ink mb-4">Weeks 3–6</h2>
            <ul className="space-y-3 font-body text-umber leading-relaxed list-disc pl-5">
              <li>True color begins to resurface as healing completes.</li>
              <li>Schedule your perfecting touch-up at 6–8 weeks post-procedure.</li>
              <li>Contact Rachael Reed if you have concerns before your touch-up.</li>
            </ul>
          </section>

          <section className="mb-10 bg-sand p-6 print:border print:border-umber/30">
            <h2 className="font-display text-xl text-ink mb-3">Normal vs. Concerning</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-body text-sm text-umber">
              <div>
                <p className="font-semibold text-ink mb-2">Normal</p>
                <ul className="space-y-1 list-disc pl-4">
                  <li>Dark color immediately after</li>
                  <li>Mild swelling or redness (24–48 hrs)</li>
                  <li>Flaking and light scabbing</li>
                  <li>Color fading during week 2</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-ink mb-2">Contact Rachael</p>
                <ul className="space-y-1 list-disc pl-4">
                  <li>Signs of infection (increasing redness, warmth, pus)</li>
                  <li>Excessive swelling beyond 48 hours</li>
                  <li>Allergic reaction symptoms</li>
                  <li>Any concern that feels outside normal healing</li>
                </ul>
              </div>
            </div>
          </section>

          <p className="font-body text-xs italic text-umber mb-8">{LEGAL.medicalDisclaimer}</p>

          <p className="font-body text-sm text-umber print:hidden">
            Questions? Message{" "}
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline hover:text-gold"
            >
              {SITE.instagramHandle}
            </a>
            {SITE.email && (
              <>
                , email{" "}
                <a href={`mailto:${SITE.email}`} className="text-ink underline hover:text-gold">
                  {SITE.email}
                </a>
              </>
            )}
            {SITE.phone && (
              <>
                , or call{" "}
                <a href={`tel:${SITE.phone.replace(/\D/g, "")}`} className="text-ink underline hover:text-gold">
                  {SITE.phone}
                </a>
              </>
            )}
            .
          </p>

          <Link
            href="/"
            className="font-body text-sm text-gold hover:underline mt-6 inline-block print:hidden"
          >
            ← Back to home
          </Link>
        </article>
      </main>
      <div className="print:hidden">
        <Footer />
      </div>
    </>
  );
}
