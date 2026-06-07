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
    <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function CautionIcon() {
  return (
    <svg className="w-5 h-5 text-umber shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
  );
}

export default function CandidateChecklist() {
  return (
    <section id="candidate-checklist" className="bg-bone section-padding">
      <div className="container-wide">
        <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] text-ink text-center mb-6">
          Are You a Good Candidate?
        </h2>

        <p className="font-body text-umber text-center max-w-2xl mx-auto mb-12 leading-relaxed">
          As a registered nurse, Rachael Reed screens every client with clinical
          precision before any procedure. Use this guide to determine whether
          powder brows are right for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
          <div>
            <h3 className="font-body font-semibold text-ink uppercase tracking-wide text-sm mb-6 flex items-center gap-2">
              <CheckIcon />
              Good Candidate
            </h3>
            <ul className="space-y-3">
              {goodCandidates.map((item) => (
                <li key={item} className="flex gap-3 font-body text-sm text-umber">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-body font-semibold text-ink uppercase tracking-wide text-sm mb-6 flex items-center gap-2">
              <CautionIcon />
              May Not Be a Fit
            </h3>
            <ul className="space-y-3">
              {notAFit.map((item) => (
                <li key={item} className="flex gap-3 font-body text-sm text-umber">
                  <CautionIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="font-body text-xs italic text-umber text-center max-w-2xl mx-auto mb-8">
          {LEGAL.candidateDisclaimer}
        </p>

        <div className="text-center">
          <p className="font-body text-ink mb-4">Think you&apos;re a good candidate?</p>
          <a
            href={SITE.bookingPath}
            className="inline-block bg-gold text-ink font-body font-medium uppercase tracking-[0.08em] px-10 py-4 hover:opacity-90 transition-opacity"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
