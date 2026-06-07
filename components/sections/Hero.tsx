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

      <div className="absolute inset-0 bg-black/45 z-[1]" aria-hidden="true" />

      <div className="relative z-[2] flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="font-display italic text-white text-[clamp(3rem,6vw,6rem)] font-normal mb-6 max-w-4xl text-balance animate-fade-up">
          Nurse-trained precision. Permanent results.
        </h1>

        <p className="font-body text-lg text-white/85 max-w-[560px] mb-10 animate-fade-up-delay-1">
          Medical micropigmentation by Rachael Reed, RN, BSN — a registered
          nurse with a decade of high-acuity clinical experience. Now in{" "}
          {SITE.location}.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6 animate-fade-up-delay-2">
          <a
            href={SITE.bookingUrl}
            id="booking"
            className="bg-gold text-ink font-body font-medium uppercase tracking-[0.08em] px-10 py-4 hover:opacity-90 transition-opacity"
          >
            Book Your Consultation
          </a>
          <Link
            href="/#gallery"
            className="font-body text-white hover:text-gold transition-colors"
          >
            See the Work ↓
          </Link>
        </div>
      </div>
    </section>
  );
}
