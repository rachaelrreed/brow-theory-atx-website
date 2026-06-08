// Rachael edits this file to control which images appear in The Work gallery.
//
// Add files to /public/images/gallery/ and reference them below.
// Every gallery card links to @browtheoryatx on Instagram (see lib/constants.ts).

import { SITE } from "./constants";

export interface GalleryImage {
  src: string;
  alt: string;
  featured?: boolean;
}

/** All gallery cards link here — @browtheoryatx only */
export const GALLERY_INSTAGRAM_URL = SITE.instagram;

const altVariants = [
  "Before and after powder brows Austin — sparse natural brows transformed with soft powder technique by Rachael Reed, RN",
  "Before and after powder brow permanent makeup — natural arch and soft shading by Rachael Reed, RN, BSN in Austin TX",
  "Powder brow before and after — thin brows to full natural definition, nurse-trained permanent makeup Austin",
  "Before and after ombre powder brows — light sparse brows to defined soft brown arches by Rachael Reed",
  "Permanent makeup before and after Austin — powder brow transformation with natural healed results",
  "Before and after microshading brows — soft pixelated fill and elegant arch by Rachael Reed, RN",
  "Powder brows before and after Austin TX — mature client with sparse brows to soft natural result",
  "Before and after combo brows — hair strokes and soft shading by Rachael Reed, nurse-trained PMU Austin",
  "Before and after powder brow procedure — brow mapping to healed powder brow result Austin Texas",
  "Permanent eyebrow makeup before and after — natural-looking powder brows by Rachael Reed, RN",
  "Before and after powder brows — green eyes, soft taupe brow pigment, Austin permanent makeup",
  "Powder brow before and after — diagonal split comparison, nurse-trained precision Austin TX",
  "Before and after permanent brows — stacked comparison showing healed powder brow results",
  "Before and after side-by-side powder brows — Rachael Reed, RN, BSN Austin permanent makeup",
  "Powder brow transformation before and after — sparse tails filled with soft natural color",
  "Before and after eyebrow micropigmentation Austin — Rachael Reed permanent makeup results",
  "Before and after powder brows Austin — client with fair skin and natural soft brown brow fill",
];

function buildGalleryImages(): GalleryImage[] {
  const count = 17;
  return Array.from({ length: count }, (_, i) => {
    const num = String(i + 1).padStart(2, "0");
    return {
      src: `/images/gallery/ba-${num}.jpg`,
      alt: altVariants[i] ?? altVariants[0],
      featured: true,
    };
  });
}

export const galleryImages: GalleryImage[] = buildGalleryImages();

export function getFeaturedGalleryImages(limit?: number): GalleryImage[] {
  const featured = galleryImages.filter((img) => img.featured !== false);
  return limit ? featured.slice(0, limit) : featured;
}
