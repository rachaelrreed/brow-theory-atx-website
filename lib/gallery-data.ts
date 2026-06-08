// Rachael edits this file to control which images appear in The Work gallery.
//
// LOCAL IMAGES: place files in /public/images/gallery/ and set src to "/images/gallery/your-file.jpg"
//
// Homepage shows the first 12 entries where featured: true.
// /gallery shows ALL entries.
//
// All Instagram links on the site point to @browtheoryatx only (see lib/constants.ts).

import { SITE } from "./constants";

export interface GalleryImage {
  src?: string;
  alt: string;
  featured: boolean;
  /** Opens @browtheoryatx profile — never individual post URLs from other accounts */
  linkToProfile?: boolean;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/before-after-1.jpg",
    alt: "Before and after powder brows Austin — sparse natural brows transformed with soft powder technique by Rachael Reed, RN",
    featured: true,
  },
  {
    src: "/images/gallery/before-after-2.jpg",
    alt: "Before and after powder brow permanent makeup Austin — brow mapping to healed powder brow result",
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
  {
    alt: "Follow @browtheoryatx on Instagram for new before and after results weekly",
    featured: true,
    linkToProfile: true,
  },
  {
    alt: "Powder brows and permanent makeup in Austin — see the full portfolio on Instagram",
    featured: true,
    linkToProfile: true,
  },
  {
    alt: "Nurse-trained powder brow work by Rachael Reed, RN — @browtheoryatx",
    featured: true,
    linkToProfile: true,
  },
];

/** Canonical Instagram profile URL — single source for all gallery profile links */
export const GALLERY_INSTAGRAM_URL = SITE.instagram;

export function getFeaturedGalleryImages(limit = 12): GalleryImage[] {
  return galleryImages.filter((img) => img.featured).slice(0, limit);
}
