import Image from "next/image";
import Link from "next/link";

const results = [
  {
    src: "/images/gallery/before-after-1.jpg",
    alt: "Before and after microblading brow refinement — Rachael Reed RN, Austin TX",
    caption: "Microblading — Brow Refinement",
    instagramUrl: "https://www.instagram.com/p/DZQmFwlBoUn/",
  },
  {
    src: "/images/gallery/before-after-2.jpg",
    alt: "Before and after microshading — soft natural brow definition by Rachael Reed RN, Austin TX",
    caption: "Microshading — Natural Definition",
    instagramUrl: "https://www.instagram.com/p/DYS4lJ_hxuz/",
  },
  {
    src: "/images/gallery/before-after-3.jpg",
    alt: "Before and after microshading full brow transformation — Rachael Reed RN, Austin TX",
    caption: "Microshading — Full Transformation",
    instagramUrl: "https://www.instagram.com/p/DNGLd8LOnvz/",
  },
];

export default function RealResults() {
  return (
    <section id="results" className="py-20 bg-zinc-50">
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
          {results.map((result, i) => (
            <Link
              key={i}
              href={result.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full aspect-square">
                <Image
                  src={result.src}
                  alt={result.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="px-5 py-4">
                <p className="text-sm font-medium text-gray-700">{result.caption}</p>
                <p className="text-xs text-gray-400 mt-1">View on Instagram ↗</p>
              </div>
            </Link>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-10">
          All procedures performed by Rachael Reed, RN · Individual results may vary
        </p>
      </div>
    </section>
  );
}
