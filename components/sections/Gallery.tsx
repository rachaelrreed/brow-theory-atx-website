import { getFeaturedGalleryImages } from "@/lib/gallery-data";
import GalleryGrid from "@/components/ui/GalleryGrid";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export default function Gallery() {
  const images = getFeaturedGalleryImages();

  return (
    <section id="gallery" className="bg-bone section-padding">
      <div className="container-wide">
        <SectionHeader
          title="The Work"
          subtitle="Every result earned."
          note="Before and after powder brow results by Rachael Reed, RN, BSN"
        />

        <GalleryGrid images={images} />

        <p className="font-body mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-ink/80 md:mt-8 md:text-xs md:text-umber">
          All brow procedures performed by Rachael Reed, RN · Individual results
          may vary
        </p>

        <p className="font-body mt-4 text-center text-base text-ink/80 md:text-sm md:text-umber">
          Follow{" "}
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink hover:text-gold transition-colors"
          >
            {SITE.instagramHandle}
          </a>{" "}
          on Instagram for new results weekly.
        </p>

        <div className="text-center mt-10">
          <Button href="/gallery" variant="outline">
            View Full Gallery →
          </Button>
        </div>
      </div>
    </section>
  );
}
