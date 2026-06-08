import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] min-h-[640px] overflow-hidden bg-ink"
    >
      <Image
        src="/images/hero.jpg"
        alt="Rachael Reed performing powder brow permanent makeup in Austin, Texas"
        fill
        priority
        className="object-cover object-[72%_28%] sm:object-[68%_30%]"
        sizes="100vw"
      />

      {/* Left scrim — text only; face stays visible on the right */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-r from-ink/92 via-ink/72 to-transparent md:from-ink/88 md:via-ink/45 md:to-transparent"
        aria-hidden="true"
      />

      {/* Mobile: extra bottom scrim so CTAs read over client area */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 z-[1] bg-gradient-to-t from-ink/75 to-transparent md:hidden"
        aria-hidden="true"
      />

      <div className="relative z-[2] container-wide flex min-h-[100svh] min-h-[640px] items-end px-6 pb-14 pt-28 sm:px-8 sm:pb-16 md:items-center md:pb-0 md:pt-32">
        <div className="w-full max-w-xl md:max-w-[34rem]">
          <div
            className="mb-6 h-px w-12 bg-gold md:mb-8"
            aria-hidden="true"
          />

          <p className="font-accent mb-4 text-[0.65rem] uppercase tracking-[0.18em] text-gold sm:text-xs">
            {SITE.name} · {SITE.location}
          </p>

          <h1 className="font-display mb-5 text-[clamp(2rem,5vw,3.75rem)] font-normal italic leading-[1.08] text-bone text-balance">
            Nurse-trained precision.
            <br className="hidden sm:block" /> Permanent results.
          </h1>

          <p className="font-body mb-8 max-w-md text-base leading-relaxed text-sand/95 sm:text-lg sm:mb-10">
            Medical micropigmentation by Rachael Reed, RN, BSN — a registered
            nurse with a decade of high-acuity clinical experience.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <a
              href={SITE.bookingPath}
              id="booking"
              className="inline-flex min-h-12 w-full items-center justify-center bg-gold px-8 py-4 text-center font-accent text-sm uppercase tracking-[0.1em] text-ink shadow-[0_4px_20px_rgba(196,164,106,0.45)] transition-opacity hover:opacity-90 sm:w-auto sm:px-10"
            >
              Book Your Consultation
            </a>
            <Link
              href="/#gallery"
              className="inline-flex min-h-12 items-center justify-center font-accent text-xs uppercase tracking-[0.12em] text-bone/90 underline-offset-4 transition-colors hover:text-gold hover:underline sm:justify-start"
            >
              See the Work ↓
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
