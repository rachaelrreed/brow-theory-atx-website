import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import LeadCapture from "@/components/sections/LeadCapture";
import WhyRachael from "@/components/sections/WhyRachael";
import Gallery from "@/components/sections/Gallery";
import CandidateChecklist from "@/components/sections/CandidateChecklist";
import WhatToExpect from "@/components/sections/WhatToExpect";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import BookingCTA from "@/components/sections/BookingCTA";
import InstagramFollow from "@/components/sections/InstagramFollow";

export default function Home() {
  return (
    <>
      <Navbar variant="hero" />
      <main id="main-content">
        <Hero />
        <LeadCapture />
        <WhyRachael />
        <Gallery />
        <CandidateChecklist />
        <WhatToExpect />
        <FAQ />
        <Testimonials />
        <BookingCTA />
        <InstagramFollow />
      </main>
      <Footer />
    </>
  );
}
