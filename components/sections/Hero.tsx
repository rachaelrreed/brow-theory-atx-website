import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] min-h-[640px] overflow-hidden bg-bone"
    >
      <Image
        src="/images/hero.jpg"
        alt="Rachael Reed performing powder brow permanent makeup in Austin, Texas"
        fill
        priority
        className="object-cover object-[68%_32%] sm:object-[65%_30%] brightness-[1.1] contrast-[1.03]"
        sizes="100vw"
      />

      <div className="relative z-[2] container-wide flex min-h-[100svh] min-h-[640px] items-end px-5 pb-12 pt-28 sm:px-8 sm:pb-14 md:items-center md:pb-0 md:pt-32">
        <div className="w-full max-w-lg md:max-w-xl">
          {/* Localized scrim — text only, not over Rachael on the right */}
          <div className="rounded-sm bg-gradient-to-br from-black/72 via-black/58 to-black/25 px-6 py-8 shadow-[0_8px_40px_rgba(0,0,0,0.25)] backdrop-blur-[2px] sm:px-8 sm:py-10 md:from-black/68 md:via-black/52 md:to-black/15">
            <div
              className="mb-5 h-px w-12 bg-gold md:mb-6"
              aria-hidden="true"
            />

            <p className="font-accent mb-3 text-[0.65rem] uppercase tracking-[0.18em] text-gold drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)] sm:text-xs">
              {SITE.name} · {SITE.location}
            </p>

            <h1 className="font-display mb-4 text-[clamp(2rem,5.2vw,3.5rem)] font-normal italic leading-[1.08] text-white text-balance [text-shadow:0_2px_20px_rgba(0,0,0,0.45)] md:mb-5">
              Nurse-trained precision.
              <br className="hidden sm:block" /> Permanent results.
            </h1>

            <p className="font-body mb-8 max-w-md text-base leading-relaxed text-stone-100 [text-shadow:0_1px_10px_rgba(0,0,0,0.4)] sm:text-lg md:mb-10">
              Medical micropigmentation by Rachael Reed, RN, BSN — a registered
              nurse with a decade of high-acuity clinical experience.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <a
                href={SITE.bookingPath}
                id="booking"
                className="inline-flex min-h-[3rem] w-full items-center justify-center bg-gold px-8 py-3.5 text-center font-accent text-sm uppercase tracking-[0.1em] text-ink shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-opacity hover:opacity-90 sm:w-auto sm:px-10"
              >
                Book Your Consultation
              </a>
              <Link
                href="/#gallery"
                className="inline-flex min-h-[3rem] items-center justify-center font-accent text-xs uppercase tracking-[0.12em] text-white underline-offset-4 [text-shadow:0_1px_6px_rgba(0,0,0,0.4)] transition-colors hover:text-gold hover:underline sm:justify-start"
              >
                See the Work ↓
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
