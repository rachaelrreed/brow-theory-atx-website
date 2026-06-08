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

        <p className="font-body text-xs text-umber text-center mt-8 max-w-2xl mx-auto leading-relaxed">
          All brow procedures performed by Rachael Reed, RN · Individual results
          may vary
        </p>

        <p className="font-body text-sm text-umber text-center mt-4">
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
