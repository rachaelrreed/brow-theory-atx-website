import Image from "next/image";
import { SITE } from "@/lib/constants";

const credentials = [
  {
    title: "RN, BSN",
    description: "Registered Nurse, Bachelor of Science in Nursing",
  },
  {
    title: "ICU + Level 1 Trauma",
    description: "High-acuity clinical background",
  },
  {
    title: "The Brow Babe",
    description: "Successful permanent makeup practice, Oklahoma City",
  },
  {
    title: SITE.name,
    description: SITE.medSpa
      ? `Now serving Austin at ${SITE.medSpa}`
      : `Now serving ${SITE.location}`,
  },
];

export default function WhyRachael() {
  return (
    <section id="why-rachael" className="bg-bone section-padding">
      <div className="container-wide grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-stretch">
        <div className="relative min-h-[400px] lg:min-h-[560px]">
          <Image
            src="/images/rachael.jpg"
            alt="Rachael Reed, RN, BSN, permanent makeup artist at Brow Theory ATX, Austin Texas"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="font-accent text-xs uppercase tracking-[0.12em] text-gold mb-3">
            Why Rachael Reed
          </p>

          <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] text-ink mb-8">
            Clinical precision meets permanent artistry.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {credentials.map((item) => (
              <div key={item.title}>
                <p className="font-body font-semibold text-ink mb-1">
                  {item.title}
                </p>
                <p className="font-body text-base text-ink/85 md:text-sm md:text-umber">{item.description}</p>
              </div>
            ))}
          </div>

          <p className="font-body mb-8 text-base leading-[1.75] text-ink/88 md:leading-relaxed md:text-umber">
            A nursing career spent in intensive care and Level 1 trauma means
            understanding skin anatomy, wound healing, and sterile technique at a
            level most aestheticians never reach. That clinical foundation is
            what Rachael Reed brings to every powder brow and permanent makeup
            procedure in Austin.
          </p>

          <blockquote className="font-display border-l-2 border-gold pl-5 text-xl italic text-ink/85 md:text-2xl md:text-umber">
            Permanent makeup should age with you, not against you.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
