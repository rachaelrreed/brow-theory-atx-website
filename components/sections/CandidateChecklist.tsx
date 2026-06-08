import { LEGAL, SITE } from "@/lib/constants";

const goodCandidates = [
  "Sparse, thin, or uneven natural brows",
  "Hair loss affecting brows (alopecia, over-tweezing, medical cause)",
  "Want to simplify your daily makeup routine",
  "Willing to follow prep and aftercare protocols fully",
  "Realistic expectations about healed results vs. fresh results",
  "Skin type: normal, dry, or combination",
  "Not currently pregnant or breastfeeding",
  "No active skin conditions in the treatment area",
  "Not on blood thinners or photosensitizing medications",
  "No chemical peels, retinoids, or Botox in the brow area within 2 weeks prior",
];

const notAFit = [
  "History of keloid scarring",
  "Active eczema or psoriasis in the treatment area",
  "Currently pregnant or breastfeeding",
  "Immunocompromised (physician clearance required — contact Rachael Reed before booking)",
  "Unrealistic expectations about permanence or appearance",
  "Active skin infections or open wounds in the area",
];

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0 text-gold" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function CautionIcon() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0 text-umber" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
  );
}

export default function CandidateChecklist() {
  return (
    <section id="candidate-checklist" className="bg-bone section-padding">
      <div className="container-wide">
        <h2 className="font-display mb-5 text-center text-[clamp(2rem,3.5vw,3rem)] text-ink md:mb-6">
          Are You a Good Candidate?
        </h2>

        <p className="font-body mx-auto mb-10 max-w-2xl text-center text-base leading-[1.75] text-ink/88 md:mb-12 md:text-lg md:leading-relaxed md:text-umber">
          As a registered nurse, Rachael Reed screens every client with clinical
          precision before any procedure. Use this guide to determine whether
          powder brows are right for you.
        </p>

        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <h3 className="font-body mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-ink md:mb-6">
              <CheckIcon />
              Good Candidate
            </h3>
            <ul className="space-y-4 md:space-y-3">
              {goodCandidates.map((item) => (
                <li key={item} className="flex gap-3.5 font-body text-base leading-[1.7] text-ink/88 md:text-sm md:leading-relaxed md:text-umber">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-body mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-ink md:mb-6">
              <CautionIcon />
              May Not Be a Fit
            </h3>
            <ul className="space-y-4 md:space-y-3">
              {notAFit.map((item) => (
                <li key={item} className="flex gap-3.5 font-body text-base leading-[1.7] text-ink/88 md:text-sm md:leading-relaxed md:text-umber">
                  <CautionIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="font-body mx-auto mb-8 max-w-2xl text-center text-sm italic leading-relaxed text-ink/72 md:text-xs md:text-umber">
          {LEGAL.candidateDisclaimer}
        </p>

        <div className="text-center">
          <p className="font-body mb-4 text-base text-ink md:text-[0.9375rem]">
            Think you&apos;re a good candidate?
          </p>
          <a
            href={SITE.bookingPath}
            className="inline-block bg-gold px-10 py-4 font-body text-sm font-medium uppercase tracking-[0.08em] text-ink transition-opacity hover:opacity-90 md:text-[0.8125rem]"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
