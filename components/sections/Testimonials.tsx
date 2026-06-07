import { SITE } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export default function Testimonials() {
  const hasReviews = false;

  return (
    <section id="testimonials" className="bg-bone section-padding">
      <div className="container-wide">
        <SectionHeader
          title="Client Stories"
          subtitle="New Austin clients — be among the first to share your experience."
        />

        {hasReviews ? null : (
          <div className="max-w-xl mx-auto bg-sand p-10 text-center">
            <p className="font-display italic text-xl text-ink mb-4 leading-relaxed">
              Reviews from Austin clients will appear here as they are collected
              after touch-up appointments.
            </p>
            <p className="font-body text-sm text-umber mb-8">
              Follow {SITE.instagramHandle} for real results and healing
              timelines while we build our local community.
            </p>
            <Button href={SITE.bookingUrl} variant="primary">
              Book Your Consultation
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
