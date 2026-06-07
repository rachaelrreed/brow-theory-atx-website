import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Permanent makeup procedure at Brow Theory ATX, Austin Texas"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Softens photo; panel carries primary contrast */}
      <div
        className="absolute inset-0 bg-ink/25 z-[1]"
        aria-hidden="true"
      />

      <div className="relative z-[2] flex items-center justify-center h-full px-5 sm:px-6">
        <div className="w-full max-w-3xl bg-bone border border-sand/80 shadow-[0_8px_40px_rgba(43,43,43,0.12)] px-8 py-10 sm:px-12 sm:py-14 text-center animate-fade-up">
          {/* Brand accent line */}
          <div
            className="w-12 h-px bg-gold mx-auto mb-8"
            aria-hidden="true"
          />

          <h1 className="font-display italic text-ink text-[clamp(2.25rem,5.5vw,4.5rem)] font-normal leading-[1.1] mb-5 text-balance">
            Nurse-trained precision. Permanent results.
          </h1>

          <p className="font-body text-umber text-base sm:text-lg max-w-[520px] mx-auto mb-9 leading-relaxed animate-fade-up-delay-1">
            Medical micropigmentation by Rachael Reed, RN, BSN — a registered
            nurse with a decade of high-acuity clinical experience. Now in{" "}
            {SITE.location}.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-up-delay-2">
            <a
              href={SITE.bookingPath}
              id="booking"
              className="w-full sm:w-auto bg-gold text-ink font-accent uppercase tracking-[0.08em] px-10 py-4 hover:opacity-90 transition-opacity text-center"
            >
              Book Your Consultation
            </a>
            <Link
              href="/#gallery"
              className="font-accent text-xs uppercase tracking-[0.1em] text-ink hover:text-gold transition-colors"
            >
              See the Work ↓
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
