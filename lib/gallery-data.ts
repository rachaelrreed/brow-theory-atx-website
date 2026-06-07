// Rachael edits this file to control which Instagram posts appear on the website.
//
// HOW TO ADD AN IMAGE:
// 1. Open the Instagram post on desktop (instagram.com)
// 2. Right-click the photo → "Copy Image Address" → paste as `src`
// 3. Copy the post URL from the browser address bar → paste as `instagramUrl`
// 4. Write descriptive `alt` text for accessibility and SEO
// 5. Set `featured: true` if this image should appear on the homepage (first 9 featured)
//
// Homepage shows the first 9 entries where featured: true.
// /gallery shows ALL entries.
//
// Launch images below use site photography until Instagram CDN URLs are added.

import { SITE } from "./constants";

export interface GalleryImage {
  src: string;
  instagramUrl: string;
  alt: string;
  featured: boolean;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/hero.jpg",
    instagramUrl: SITE.instagram,
    alt: "Rachael Reed performing powder brow permanent makeup in Austin, Texas studio",
    featured: true,
  },
  {
    src: "/images/rachael.jpg",
    instagramUrl: SITE.instagram,
    alt: "Rachael Reed, RN, BSN — nurse-trained permanent makeup artist in Austin, Texas",
    featured: true,
  },
];

export function getFeaturedGalleryImages(limit = 9): GalleryImage[] {
  return galleryImages.filter((img) => img.featured).slice(0, limit);
}
