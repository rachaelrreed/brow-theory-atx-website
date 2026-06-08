import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";

const mobileHeadlineShadow =
  "[text-shadow:0_1px_2px_rgb(0_0_0_/_0.92),0_2px_18px_rgb(0_0_0_/_0.65)]";
const desktopHeadlineShadow =
  "md:[text-shadow:0_2px_20px_rgba(0,0,0,0.45)]";

const mobileBodyShadow =
  "[text-shadow:0_1px_2px_rgb(0_0_0_/_0.88),0_1px_12px_rgb(0_0_0_/_0.55)]";
const desktopBodyShadow =
  "md:[text-shadow:0_1px_10px_rgba(0,0,0,0.4)]";

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
        className="object-cover object-[76%_22%] brightness-[1.18] contrast-[1.04] sm:object-[72%_26%] sm:brightness-[1.14] md:object-[65%_30%] md:brightness-[1.1] md:contrast-[1.03]"
        sizes="100vw"
      />

      <div className="relative z-[2] container-wide flex min-h-[100svh] min-h-[640px] items-end justify-start px-4 pb-10 pt-28 sm:px-6 sm:pb-12 md:items-center md:px-8 md:pb-0 md:pt-32">
        <div className="w-full max-w-[19rem] sm:max-w-md md:max-w-xl">
          {/* Localized scrim — lighter on mobile; stays bottom-left, clear of Rachael */}
          <div className="rounded-sm bg-gradient-to-br from-black/48 via-black/36 to-black/10 px-5 py-7 shadow-[0_8px_32px_rgba(0,0,0,0.18)] backdrop-blur-[1px] sm:max-w-md sm:from-black/52 sm:via-black/40 sm:px-7 sm:py-8 md:from-black/68 md:via-black/52 md:to-black/15 md:px-8 md:py-10 md:shadow-[0_8px_40px_rgba(0,0,0,0.25)] md:backdrop-blur-[2px]">
            <div
              className="mb-4 h-px w-12 bg-gold md:mb-6"
              aria-hidden="true"
            />

            <p className="font-accent mb-3 text-[0.65rem] uppercase tracking-[0.18em] text-gold drop-shadow-[0_1px_4px_rgba(0,0,0,0.75)] sm:text-xs">
              {SITE.name} · {SITE.location}
            </p>

            <h1
              className={`font-display mb-3 text-[clamp(1.85rem,8vw,3.5rem)] font-normal italic leading-[1.08] text-white text-balance sm:mb-4 ${mobileHeadlineShadow} ${desktopHeadlineShadow} md:mb-5`}
            >
              Nurse-trained precision.
              <br className="hidden sm:block" /> Permanent results.
            </h1>

            <p
              className={`font-body mb-7 max-w-md text-[0.95rem] leading-relaxed text-stone-100 sm:mb-8 sm:text-base md:mb-10 md:text-lg ${mobileBodyShadow} ${desktopBodyShadow}`}
            >
              Medical micropigmentation by Rachael Reed, RN, BSN — a registered
              nurse with a decade of high-acuity clinical experience.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <a
                href={SITE.bookingPath}
                id="booking"
                className="inline-flex min-h-[3rem] w-full items-center justify-center bg-gold px-6 py-3.5 text-center font-accent text-sm uppercase tracking-[0.1em] text-ink shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition-opacity hover:opacity-90 sm:w-auto sm:px-8 md:px-10"
              >
                Book Your Consultation
              </a>
              <Link
                href="/#gallery"
                className="inline-flex min-h-[3rem] w-full items-center justify-center rounded-sm border border-white/45 bg-black/20 px-6 py-3 font-accent text-xs uppercase tracking-[0.12em] text-white backdrop-blur-[1px] transition-colors hover:border-gold hover:text-gold sm:w-auto sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-none sm:hover:underline md:underline-offset-4"
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
