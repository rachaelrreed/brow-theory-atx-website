import type { Metadata, Viewport } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import { SITE, SEO } from "@/lib/constants";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "500"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F4F2EE",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: SITE.url,
  },
  title: {
    default: SEO.title,
    template: `%s | ${SITE.name}`,
  },
  description: SEO.description,
  keywords: [...SEO.keywords],
  authors: [{ name: SITE.ownerShort }],
  creator: SITE.ownerShort,
  manifest: "/manifest.json",
  openGraph: {
    title: SEO.openGraphTitle,
    description: SEO.openGraphDescription,
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: "Brow Theory ATX — Powder Brows Austin",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.openGraphTitle,
    description: SEO.openGraphDescription,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.ownerShort,
    jobTitle: "Permanent Cosmetics Specialist",
    description: SEO.description,
    url: SITE.url,
    sameAs: [SITE.instagram],
    knowsAbout: [
      "Powder Brows",
      "Permanent Makeup",
      "Brow Micropigmentation",
      "Medical Micropigmentation",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Bachelor of Science in Nursing (BSN)",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "Registered Nurse (RN)",
      },
    ],
    workLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Austin",
        addressRegion: "TX",
        addressCountry: "US",
      },
    },
  };

  const beautySalonSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: SITE.name,
    description:
      "Powder brow micropigmentation and permanent makeup by Rachael Reed, RN, BSN in Austin, Texas.",
    url: SITE.url,
    ...(SITE.phone ? { telephone: SITE.phone } : {}),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Austin",
      addressRegion: "TX",
      addressCountry: "US",
    },
    priceRange: "$$",
    image: `${SITE.url}${SITE.ogImage}`,
    sameAs: [SITE.instagram],
    founder: {
      "@type": "Person",
      name: SITE.ownerShort,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(beautySalonSchema) }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
