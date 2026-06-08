import Image from "next/image";
import { SITE } from "@/lib/constants";

export default function BookingCTA() {
  const locationLine = SITE.medSpa
    ? `Now accepting new clients at ${SITE.medSpa}, Austin, TX.`
    : `Now accepting new clients in ${SITE.location}.`;

  return (
    <section id="booking-cta" className="relative bg-ink section-padding text-center overflow-hidden">
      <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block">
        <Image
          src={SITE.logos.monogram}
          alt=""
          width={240}
          height={240}
          aria-hidden="true"
        />
      </div>

      <div className="container-narrow relative z-10">
        <h2 className="font-display italic text-bone text-[clamp(2.5rem,4vw,4rem)] mb-6">
          Ready for brows that last?
        </h2>

        <p className="font-body mx-auto mb-10 max-w-lg text-base text-sand md:text-[0.9375rem]">{locationLine}</p>

        <a
          href={SITE.bookingPath}
          className="inline-block bg-gold text-ink font-accent uppercase tracking-[0.1em] px-12 py-[1.125rem] hover:opacity-90 transition-opacity"
        >
          Book Your Appointment
        </a>

        <p className="font-body mt-6 text-base text-sand/95 md:text-sm">
          Have questions first? Reach out on Instagram →{" "}
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gold transition-colors"
          >
            {SITE.instagramHandle}
          </a>
        </p>
      </div>
    </section>
  );
}
