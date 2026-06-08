"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import BrandLogo from "@/components/ui/BrandLogo";
import { SITE, NAV_LINKS } from "@/lib/constants";

interface NavbarProps {
  /** Use "hero" on the homepage so the white logo shows over the hero image. */
  variant?: "hero" | "default";
}

export default function Navbar({ variant = "default" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(variant === "default");
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

  const logoVariant = isOverHero ? "light" : "default";
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
          className="container-wide flex items-center justify-between gap-4 px-4 py-4 sm:px-6 md:px-8"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="min-w-0 shrink-0 py-1 pr-2"
            aria-label={`${SITE.name} home`}
          >
            <BrandLogo variant={logoVariant} size="header" />
          </Link>

          <div className="hidden shrink-0 items-center gap-8 md:flex">
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
              href={SITE.bookingPath}
              className="bg-gold px-6 py-2.5 font-accent text-sm uppercase tracking-wide text-ink transition-opacity hover:opacity-90"
            >
              Book Now
            </a>
          </div>

          <button
            type="button"
            className="flex min-h-12 min-w-12 shrink-0 cursor-pointer flex-col justify-center gap-1.5 p-2 md:hidden"
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
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
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
        <div className="flex items-center justify-between border-b border-sand px-5 py-5">
          <Link href="/" onClick={closeMenu} className="min-w-0 py-1">
            <BrandLogo variant="default" size="header" />
          </Link>
          <button
            type="button"
            onClick={closeMenu}
            className="min-h-12 min-w-12 cursor-pointer font-accent text-xs uppercase tracking-widest text-ink"
            aria-label="Close menu"
          >
            Close
          </button>
        </div>

        <nav className="flex flex-col gap-6 px-6 py-10" aria-label="Mobile links">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="font-display text-3xl italic text-ink transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SITE.bookingPath}
            onClick={closeMenu}
            className="mt-4 inline-block bg-gold px-8 py-3 text-center font-accent text-sm uppercase tracking-wide text-ink transition-opacity hover:opacity-90"
          >
            Book Now
          </a>
        </nav>
      </aside>
    </>
  );
}
