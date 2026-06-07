// Rachael edits this file to control which images appear in The Work gallery.
//
// LOCAL IMAGES: place files in /public/images/gallery/ and set src to "/images/gallery/your-file.jpg"
// INSTAGRAM IMAGES: paste CDN URL as src and post URL as instagramUrl
//
// Homepage shows the first 12 entries where featured: true.
// /gallery shows ALL entries.

export interface GalleryImage {
  /** Local path or Instagram CDN URL */
  src?: string;
  alt: string;
  featured: boolean;
  /** Link on click — Instagram post URL */
  instagramUrl?: string;
}

export const galleryImages: GalleryImage[] = [
  // ── Featured homepage grid (12) — full before/after composites first ──
  {
    src: "/images/gallery/before-after-1.jpg",
    alt: "Before and after powder brows Austin — sparse natural brows transformed with soft powder technique by Rachael Reed, RN",
    featured: true,
  },
  {
    src: "/images/gallery/before-after-2.jpg",
    alt: "Before and after powder brow permanent makeup Austin — brow mapping to healed powder brow result by Rachael Reed",
    featured: true,
  },
  {
    src: "/images/gallery/before-after-3.jpg",
    alt: "Before and after powder brows Austin — mature client with sparse brows to soft natural powder brow result",
    featured: true,
  },
  {
    src: "/images/gallery/before-after-1-before.jpg",
    alt: "Before powder brows — natural sparse brows Austin client",
    featured: true,
  },
  {
    src: "/images/gallery/before-after-1-after.jpg",
    alt: "After powder brows — soft filled brow result Austin by Rachael Reed, RN",
    featured: true,
  },
  {
    src: "/images/gallery/before-after-2-before.jpg",
    alt: "Before powder brow procedure — brow mapping and design Austin",
    featured: true,
  },
  {
    src: "/images/gallery/before-after-2-after.jpg",
    alt: "After powder brow procedure — healed natural brow result Austin",
    featured: true,
  },
  {
    src: "/images/gallery/before-after-3-before.jpg",
    alt: "Before powder brows — light sparse natural brows",
    featured: true,
  },
  {
    src: "/images/gallery/before-after-3-after.jpg",
    alt: "After powder brows — defined soft arch and natural powder fill",
    featured: true,
  },
  // Instagram — tap to view full post
  {
    instagramUrl: "https://www.instagram.com/p/DZQmFwlBoUn/",
    alt: "Microblading brow refinement before and after — powder brows Austin by Rachael Reed, RN",
    featured: true,
  },
  {
    instagramUrl: "https://www.instagram.com/p/DYS4lJ_hxuz/",
    alt: "Microshading natural brow definition before and after — permanent makeup Austin",
    featured: true,
  },
  {
    instagramUrl: "https://www.instagram.com/p/DNGLd8LOnvz/",
    alt: "Microshading full brow transformation before and after — Rachael Reed, RN, Austin TX",
    featured: true,
  },

  // ── Additional gallery page entries — add more Instagram posts below ──
  // Copy an entry, paste post URL as instagramUrl, and add CDN src when available.
];

export function getFeaturedGalleryImages(limit = 12): GalleryImage[] {
  return galleryImages.filter((img) => img.featured).slice(0, limit);
}
