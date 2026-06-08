import type { GalleryImage } from "@/lib/gallery-data";
import { GALLERY_INSTAGRAM_URL } from "@/lib/gallery-data";
import { SITE } from "@/lib/constants";

interface GalleryGridProps {
  images: GalleryImage[];
}

function GalleryTile({ image }: { image: GalleryImage }) {
  return (
    <a
      href={GALLERY_INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-square overflow-hidden bg-sand"
      aria-label={`${image.alt} — view more on ${SITE.instagramHandle}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
      />
      <div
        className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/55 via-black/10 to-transparent p-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        aria-hidden="true"
      >
        <span className="font-accent text-[0.6rem] uppercase tracking-[0.14em] text-white">
          {SITE.instagramHandle}
        </span>
      </div>
    </a>
  );
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
      {images.map((image) => (
        <GalleryTile key={image.src} image={image} />
      ))}
    </div>
  );
}
