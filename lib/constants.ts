/**
 * Single source of truth for site-wide content.
 * Update booking URL, contact info, and med spa location here only.
 */

export const SITE = {
  name: "Brow Theory ATX",
  owner: "Rachael Reed, RN, BSN",
  ownerShort: "Rachael Reed",
  specialty: "Powder Brows & Permanent Makeup",
  tagline: "Nurse-trained • Natural results • Austin, Texas",
  location: "Austin, Texas",
  medSpa: "Saving Face Med Spa",
  /** On-brand booking link — redirects to Peek via /book */
  bookingPath: "/book",
  bookingUrl: "https://book.peek.com/browtheoryatx",
  instagram: "https://www.instagram.com/browtheoryatx",
  instagramHandle: "@browtheoryatx",
  email: "hello@browtheoryatx.com",
  phone: "" as string,
  url: "https://browtheoryatx.com",
  formspreeUrl: "https://formspree.io/f/mbdeggyb",
  logos: {
    lockup: "/logo.png",
    lockupWhite: "/logo-white-strip.png",
    monogram: "/monogram.svg",
  },
  ogImage: "/og-image.jpg",
} as const;

/** Primary navigation — labels match homepage section IDs. */
export const NAV_LINKS = [
  { label: "Work", href: "/#gallery" },
  { label: "Why Rachael", href: "/#why-rachael" },
  { label: "FAQ", href: "/#faq" },
] as const;

/** SEO metadata — keywords woven into title and description for search intent. */
export const SEO = {
  title: "Brow Theory ATX | Powder Brows & Permanent Makeup Austin TX",
  description:
    "Expert powder brows and permanent makeup in Austin, TX by Rachael Reed, RN, BSN. Nurse-trained brow micropigmentation with natural, lasting results. Book the best permanent makeup artist in Austin.",
  openGraphTitle: "Brow Theory ATX | Powder Brows Austin TX",
  openGraphDescription:
    "Nurse-trained powder brows and permanent makeup by Rachael Reed in Austin, Texas. Medical micropigmentation with clinical precision.",
  keywords: [
    "powder brows Austin",
    "permanent makeup Austin TX",
    "brow micropigmentation Austin",
    "eyebrow micro-pigmentation Austin",
    "nurse permanent makeup Austin",
    "powder brows vs microblading Austin",
    "best permanent makeup artist Austin",
    "Rachael Reed permanent makeup",
    "Brow Theory ATX",
  ],
} as const;

/** Legal disclaimers — used in footer, aftercare, candidate checklist, and forms. */
export const LEGAL = {
  medicalDisclaimer:
    "The information on this website and in aftercare guides is for general educational purposes only and is not intended as medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider regarding any medical condition or before beginning any treatment.",
  candidateDisclaimer:
    "This candidate checklist is for general educational purposes only and does not constitute medical advice. Final candidacy for powder brow micropigmentation is determined during an in-person consultation with Rachael Reed.",
  resultsDisclaimer:
    "Individual results may vary. Before-and-after images are representative examples and do not guarantee identical outcomes. Healing, skin type, lifestyle, and aftercare compliance all affect final results.",
  licensure:
    "Rachael Reed is a Registered Nurse (RN, BSN) licensed in the State of Texas and a certified permanent makeup artist specializing in powder brow micropigmentation.",
  footerDisclaimer:
    "This website is for informational purposes only and does not constitute medical advice. Services are provided by Rachael Reed in accordance with applicable Texas nursing and permanent makeup regulations.",
  privacyNote:
    "By submitting the email form, you consent to receive marketing communications from Brow Theory ATX. You may unsubscribe at any time.",
} as const;
