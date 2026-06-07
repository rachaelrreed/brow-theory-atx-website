import type { Metadata } from "next";
import { galleryImages } from "@/lib/gallery-data";
import { SITE } from "@/lib/constants";
import GalleryGrid from "@/components/ui/GalleryGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Before & After Gallery | Brow Theory ATX — Powder Brows Austin TX",
  description:
    "View before and after powder brow results by Rachael Reed, RN, BSN — permanent makeup artist in Austin, Texas.",
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
          <p className="font-body text-umber text-center mb-12">
            Follow {SITE.instagramHandle} for new results weekly
          </p>

          <GalleryGrid images={galleryImages} />

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
          href={SITE.bookingUrl}
          className="fixed bottom-6 right-6 z-40 bg-gold text-ink font-body font-medium uppercase tracking-[0.08em] px-8 py-4 shadow-lg hover:opacity-90 transition-opacity"
        >
          Book Now
        </a>
      </main>
      <Footer />
    </>
  );
}
