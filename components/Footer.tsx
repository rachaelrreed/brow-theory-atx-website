import Image from "next/image";
import Link from "next/link";
import BrandLogo from "@/components/ui/BrandLogo";
import { LEGAL, NAV_LINKS, SITE } from "@/lib/constants";

const footerNav = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/gallery" },
  { label: "Why Rachael", href: "/#why-rachael" },
  { label: "FAQ", href: "/#faq" },
  { label: "Aftercare", href: "/aftercare" },
  { label: "Privacy", href: "/privacy" },
  { label: "Book", href: SITE.bookingPath },
] as const;

function InstagramIcon({ className }: { className?: string }) {
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

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}

export default function Footer() {
  const locationLine = SITE.medSpa
    ? `${SITE.location} — at ${SITE.medSpa}`
    : SITE.location;

  return (
    <footer className="bg-bone border-t border-sand">
      <div className="container-wide section-padding grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand column */}
        <div>
          <Link href="/" className="mb-4 inline-block">
            <BrandLogo size="footer" />
          </Link>
          <p className="font-accent mb-2 text-xs uppercase tracking-[0.12em] text-umber">
            {SITE.specialty}
          </p>
          <p className="font-body text-sm text-umber mb-2">
            Medical micropigmentation by {SITE.owner}.
          </p>
          <p className="font-body text-sm text-umber">{locationLine}</p>
          <p className="font-body text-xs text-umber mt-4 italic max-w-xs leading-relaxed">
            {LEGAL.licensure}
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="font-accent text-xs uppercase tracking-[0.12em] text-gold mb-4">
            Navigation
          </p>
          <ul className="space-y-2">
            {footerNav.map((link) => (
              <li key={link.label}>
                {"external" in link && link.external ? (
                  <a
                    href={link.href}
                    className="font-body text-sm text-ink hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="font-body text-sm text-ink hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Connect + social */}
        <div>
          <p className="font-accent text-xs uppercase tracking-[0.12em] text-gold mb-4">
            Connect
          </p>
          <ul className="space-y-3">
            <li>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm text-ink hover:text-gold transition-colors"
              >
                <InstagramIcon className="w-4 h-4 shrink-0" />
                {SITE.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 font-body text-sm text-ink hover:text-gold transition-colors"
              >
                <MailIcon className="w-4 h-4 shrink-0" />
                {SITE.email}
              </a>
            </li>
            {SITE.phone ? (
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/\D/g, "")}`}
                  className="inline-flex items-center gap-2 font-body text-sm text-ink hover:text-gold transition-colors"
                >
                  <PhoneIcon className="w-4 h-4 shrink-0" />
                  {SITE.phone}
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>

      {/* Tagline strip */}
      <div className="bg-ink px-6 py-5">
        <div className="container-wide flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p className="font-accent text-xs uppercase tracking-[0.2em] text-bone">
            {SITE.tagline}
          </p>
          <Image
            src={SITE.logos.monogram}
            alt=""
            width={36}
            height={36}
            className="opacity-80 brightness-0 invert hidden sm:block"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-sand px-6 py-6">
        <div className="container-wide flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center md:text-left">
          <p className="font-body text-xs text-umber">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 justify-center md:justify-end">
            <Link
              href="/privacy"
              className="font-body text-xs text-umber hover:text-gold transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/aftercare"
              className="font-body text-xs text-umber hover:text-gold transition-colors"
            >
              Aftercare
            </Link>
            <p className="font-body text-xs text-umber italic max-w-md">
              {LEGAL.footerDisclaimer}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
