"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE, NAV_LINKS } from "@/lib/constants";

interface NavbarProps {
  /** Use "hero" on the homepage so the white logo shows over the hero image. */
  variant?: "hero" | "default";
}

export default function Navbar({ variant = "default" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isOverHero = variant === "hero" && !scrolled;
  const showSolidBg = variant === "default" || scrolled;

  useEffect(() => {
    if (variant !== "hero") return;

    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const logoSrc = isOverHero ? SITE.logos.lockupWhite : SITE.logos.lockup;
  const linkClass = isOverHero
    ? "text-white hover:text-gold"
    : "text-ink hover:text-gold";
  const barClass = isOverHero ? "bg-white" : "bg-ink";

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 ease-out ${
          showSolidBg
            ? "bg-bone shadow-[0_1px_12px_rgba(0,0,0,0.08)]"
            : "bg-transparent"
        }`}
      >
        <nav
          className="container-wide flex items-center justify-between px-6 py-4 md:px-8"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="relative block h-12 w-40 md:h-14 md:w-48 shrink-0"
          >
            <Image
              src={logoSrc}
              alt={`${SITE.name} — powder brows and permanent makeup in ${SITE.location}`}
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-accent text-xs uppercase tracking-[0.1em] transition-colors ${linkClass}`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={SITE.bookingUrl}
              className="bg-gold text-ink font-accent text-sm px-6 py-2.5 uppercase tracking-wide hover:opacity-90 transition-opacity"
            >
              Book Now
            </a>
          </div>

          <button
            type="button"
            className="md:hidden flex flex-col justify-center gap-1.5 p-2 min-h-12 min-w-12 cursor-pointer"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block h-0.5 w-6 transition-colors ${barClass}`}
              />
            ))}
          </button>
        </nav>
      </header>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-ink/40 transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Slide-out panel */}
      <aside
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 z-[70] h-full w-[min(100vw,20rem)] bg-bone shadow-[-4px_0_24px_rgba(0,0,0,0.12)] transition-transform duration-300 ease-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <Link
            href="/"
            onClick={closeMenu}
            className="relative block h-10 w-36"
          >
            <Image
              src={SITE.logos.lockup}
              alt={SITE.name}
              fill
              className="object-contain object-left"
            />
          </Link>
          <button
            type="button"
            onClick={closeMenu}
            className="font-accent text-xs uppercase tracking-widest text-ink min-h-12 min-w-12 cursor-pointer"
            aria-label="Close menu"
          >
            Close
          </button>
        </div>

        <nav className="flex flex-col px-6 py-10 gap-6" aria-label="Mobile links">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="font-display italic text-3xl text-ink hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SITE.bookingUrl}
            onClick={closeMenu}
            className="mt-4 inline-block bg-gold text-ink font-accent text-sm px-8 py-3 uppercase tracking-wide text-center hover:opacity-90 transition-opacity"
          >
            Book Now
          </a>
        </nav>
      </aside>
    </>
  );
}
