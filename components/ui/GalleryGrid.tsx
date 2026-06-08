import type { GalleryImage } from "@/lib/gallery-data";
import { GALLERY_INSTAGRAM_URL } from "@/lib/gallery-data";
import { SITE } from "@/lib/constants";

function InstagramIcon({ className = "w-8 h-8 text-white" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

interface GalleryGridProps {
  images: GalleryImage[];
}

function ProfileLinkTile({ image }: { image: GalleryImage }) {
  return (
    <a
      href={GALLERY_INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex aspect-square cursor-pointer flex-col items-center justify-center gap-3 overflow-hidden border border-umber/20 bg-sand px-4 text-center transition-colors hover:bg-bone"
      aria-label={`Follow ${SITE.instagramHandle} on Instagram`}
    >
      <InstagramIcon className="h-8 w-8 text-umber transition-colors group-hover:text-gold" />
      <span className="font-accent text-[0.65rem] uppercase tracking-[0.14em] text-ink">
        {SITE.instagramHandle}
      </span>
      <span className="font-body text-xs leading-snug text-umber line-clamp-3">
        {image.alt}
      </span>
    </a>
  );
}

function GalleryTile({ image }: { image: GalleryImage }) {
  if (image.linkToProfile && !image.src) {
    return <ProfileLinkTile image={image} />;
  }

  if (!image.src) return null;

  const imageEl = (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={image.src}
      alt={image.alt}
      loading="lazy"
      decoding="async"
      className="w-full h-full object-cover block"
    />
  );

  const hoverOverlay = (
    <div
      className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
      aria-hidden="true"
    >
      <span className="font-accent text-xs uppercase tracking-[0.12em] text-white">
        Before &amp; After
      </span>
    </div>
  );

  return (
    <figure className="group relative block aspect-square overflow-hidden">
      {imageEl}
      {hoverOverlay}
    </figure>
  );
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      {images.map((image, index) => (
        <GalleryTile key={image.src ?? `profile-${index}`} image={image} />
      ))}
    </div>
  );
}
