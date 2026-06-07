import { SITE } from "@/lib/constants";

export default function InstagramFollow() {
  return (
    <section id="instagram-follow" className="bg-sand section-padding text-center">
      <div className="container-narrow">
        <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] text-ink mb-4">
          Follow the Work
        </h2>

        <p className="font-body text-umber max-w-md mx-auto mb-6 leading-relaxed">
          New results, healing timelines, and behind-the-scenes posted weekly
          on Instagram.
        </p>

        <p className="font-display italic text-[clamp(2.5rem,5vw,5rem)] text-ink my-6">
          {SITE.instagramHandle}
        </p>

        <a
          href={SITE.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-ink text-bone font-body uppercase tracking-[0.08em] px-10 py-3.5 hover:opacity-90 transition-opacity"
        >
          Follow on Instagram
        </a>
      </div>
    </section>
  );
}
