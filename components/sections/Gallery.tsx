import { getFeaturedGalleryImages } from "@/lib/gallery-data";
import GalleryGrid from "@/components/ui/GalleryGrid";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export default function Gallery() {
  const images = getFeaturedGalleryImages(9);

  return (
    <section id="gallery" className="bg-bone section-padding">
      <div className="container-wide">
        <SectionHeader
          title="The Work"
          subtitle="Every result earned."
          note="Tap any image to view more on Instagram"
        />

        <GalleryGrid images={images} />

        <div className="text-center mt-10">
          <Button href="/gallery" variant="outline">
            View Full Gallery →
          </Button>
        </div>
      </div>
    </section>
  );
}
