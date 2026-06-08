import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] min-h-[600px] overflow-hidden bg-ink"
    >
      <Image
        src="/images/hero.jpg"
        alt="Permanent makeup procedure at Brow Theory ATX, Austin Texas"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Darkens photo so the bone panel and CTAs read clearly */}
      <div
        className="absolute inset-0 bg-ink/40 z-[1]"
        aria-hidden="true"
      />

      <div className="relative z-[2] flex min-h-[100svh] min-h-[600px] items-center justify-center px-5 pb-10 pt-28 sm:px-6 sm:pt-32">
        <div className="w-full max-w-3xl bg-bone px-8 py-10 text-center shadow-[0_8px_40px_rgba(43,43,43,0.18)] sm:px-12 sm:py-14">
          <div
            className="mx-auto mb-8 h-px w-12 bg-gold"
            aria-hidden="true"
          />

          <h1 className="font-display text-[clamp(2.25rem,5.5vw,4.5rem)] font-normal italic leading-[1.1] text-ink mb-5 text-balance">
            Nurse-trained precision. Permanent results.
          </h1>

          <p className="font-body text-base sm:text-lg text-umber max-w-[520px] mx-auto mb-9 leading-relaxed">
            Medical micropigmentation by Rachael Reed, RN, BSN — a registered
            nurse with a decade of high-acuity clinical experience. Now in{" "}
            {SITE.location}.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <a
              href={SITE.bookingPath}
              id="booking"
              className="w-full bg-gold px-10 py-4 text-center font-accent uppercase tracking-[0.08em] text-ink shadow-[0_2px_12px_rgba(196,164,106,0.35)] transition-opacity hover:opacity-90 sm:w-auto"
            >
              Book Your Consultation
            </a>
            <Link
              href="/#gallery"
              className="font-accent text-xs uppercase tracking-[0.1em] text-ink underline-offset-4 hover:text-gold hover:underline"
            >
              See the Work ↓
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
