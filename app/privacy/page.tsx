import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE.name} — how we collect and use your information.`,
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar variant="default" />
      <main className="pt-24 pb-16">
        <article className="container-narrow section-padding max-w-3xl prose prose-neutral">
          <h1 className="font-display text-[clamp(2rem,3.5vw,2.75rem)] text-ink mb-8">
            Privacy Policy
          </h1>

          <p className="font-body text-umber mb-6">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
          </p>

          <div className="space-y-8 font-body text-umber leading-relaxed">
            <section>
              <h2 className="font-display text-xl text-ink mb-3">Overview</h2>
              <p>
                {SITE.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates
                browtheoryatx.com. This Privacy Policy explains how we collect, use, and protect
                your information when you visit our website or join our email list.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink mb-3">Information We Collect</h2>
              <p className="mb-3">We may collect the following information:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Email address — when you submit the lead capture form</li>
                <li>Usage data — pages visited, browser type, and device information via analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink mb-3">How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>To send launch updates and booking announcements you opted into</li>
                <li>To improve our website and user experience</li>
                <li>To respond to inquiries submitted through our contact channels</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink mb-3">Third-Party Services</h2>
              <p>
                We use Formspree to process email sign-ups and may use Vercel Analytics to
                understand site traffic. These services have their own privacy policies governing
                data they process on our behalf.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink mb-3">Your Rights</h2>
              <p>
                You may request access to, correction of, or deletion of your personal information
                at any time by contacting us{SITE.email ? ` at ${SITE.email}` : " via Instagram"}.
                You may unsubscribe from marketing emails using the link in any email we send.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink mb-3">Contact</h2>
              <p>
                {SITE.name}
                <br />
                {SITE.location}
                <br />
                <a href={`mailto:${SITE.email}`} className="text-ink underline hover:text-gold">
                  {SITE.email}
                </a>
                <br />
                <a href={`tel:${SITE.phone.replace(/\D/g, "")}`} className="text-ink underline hover:text-gold">
                  {SITE.phone}
                </a>
                <br />
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline hover:text-gold"
                >
                  {SITE.instagramHandle}
                </a>
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
