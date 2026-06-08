import type { Metadata } from "next";
import { galleryImages } from "@/lib/gallery-data";
import { SITE } from "@/lib/constants";
import GalleryGrid from "@/components/ui/GalleryGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Before & After Gallery | Brow Theory ATX — Powder Brows Austin TX",
  description:
    "Browse 100+ before and after powder brow results by Rachael Reed, RN, BSN. Nurse-trained permanent makeup in Austin, TX. See real client results.",
  alternates: {
    canonical: `${SITE.url}/gallery`,
  },
  openGraph: {
    url: `${SITE.url}/gallery`,
    title: "Before & After Gallery | Brow Theory ATX",
    description:
      "Browse before and after powder brow results by Rachael Reed, RN, BSN in Austin, Texas.",
  },
};

export default function GalleryPage() {
  return (
    <>
      <Navbar variant="default" />
      <main className="pt-24 pb-32">
        <div className="container-wide section-padding">
          <h1 className="font-display text-[clamp(2rem,3.5vw,3rem)] text-ink text-center mb-3">
            The Work
          </h1>
          <p className="font-body mx-auto mb-12 max-w-xl text-center text-base leading-relaxed text-ink/85 md:text-umber">
            Before and after powder brow permanent makeup by Rachael Reed, RN,
            BSN — Austin, Texas
          </p>

          <GalleryGrid images={galleryImages} />

          <p className="font-body mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-ink/80 md:text-xs md:text-umber">
            All brow procedures performed by Rachael Reed, RN · Individual results
            may vary
          </p>

          <div className="text-center mt-12">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-ink text-bone font-body uppercase tracking-[0.08em] px-10 py-3.5 hover:opacity-90 transition-opacity"
            >
              Follow on Instagram
            </a>
          </div>
        </div>

        <a
          href={SITE.bookingPath}
          className="fixed bottom-0 left-0 right-0 z-40 bg-gold text-ink font-accent font-medium uppercase tracking-[0.1em] px-8 py-4 text-center shadow-[0_-4px_24px_rgba(0,0,0,0.12)] hover:opacity-95 transition-opacity md:bottom-6 md:left-auto md:right-6 md:w-auto md:rounded-none"
        >
          Book Now
        </a>
      </main>
      <Footer />
    </>
  );
}
