import { SITE } from "@/lib/constants";

export default function Testimonials() {
  const hasReviews = false;

  return (
    <section id="testimonials" className="bg-bone section-padding">
      <div className="container-narrow text-center">
        <p className="font-accent text-xs uppercase tracking-[0.14em] text-gold mb-8">
          Client Stories
        </p>

        {hasReviews ? null : (
          <>
            <blockquote className="font-display italic text-[clamp(1.5rem,3vw,2.25rem)] text-ink leading-snug max-w-2xl mx-auto mb-8">
              New Austin clients — be among the first to share your experience.
            </blockquote>

            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-accent text-xs uppercase tracking-[0.12em] text-umber hover:text-gold transition-colors"
            >
              Share yours on {SITE.instagramHandle} →
            </a>
          </>
        )}
      </div>
    </section>
  );
}
