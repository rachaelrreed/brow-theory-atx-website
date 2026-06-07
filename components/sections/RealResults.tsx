"use client";

import Script from "next/script";

export default function RealResults() {
  return (
    <section id="results" className="py-20 bg-zinc-50">
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window !== "undefined" && (window as any).instgrm) {
            (window as any).instgrm.Embeds.process();
          }
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Real Results
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nurse-trained precision. Beautiful, natural-looking permanent brows.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Instagram Post 1 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <blockquote
              className="instagram-media w-full"
              data-instgrm-permalink="https://www.instagram.com/p/DZQmFwlBoUn/"
              data-instgrm-version="14"
            ></blockquote>
          </div>

          {/* Instagram Post 2 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <blockquote
              className="instagram-media w-full"
              data-instgrm-permalink="https://www.instagram.com/p/DYS4lJ_hxuz/"
              data-instgrm-version="14"
            ></blockquote>
          </div>

          {/* Instagram Post 3 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <blockquote
              className="instagram-media w-full"
              data-instgrm-permalink="https://www.instagram.com/p/DNGLd8LOnvz/"
              data-instgrm-version="14"
            ></blockquote>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-10">
          All brow procedures performed by Rachael Reed, RN • Individual results may vary
        </p>
      </div>
    </section>
  );
}
