"use client";

import { useState } from "react";

const phases = [
  {
    title: "Before Your Appointment",
    items: [
      "Avoid blood thinners (aspirin, ibuprofen, fish oil) for 1 week prior",
      "No alcohol 24 hours before",
      "No retinoids or exfoliants on the brow area for 2 weeks prior",
      "No Botox in the forehead for the required timeframe prior",
      "Arrive with clean skin — no makeup on brows",
      "Avoid sun exposure and tanning for 2 weeks prior",
    ],
  },
  {
    title: "The Day Of",
    items: [
      "Appointment duration: approximately 2–3 hours",
      "Topical numbing applied — discomfort is mild",
      "Expect pressure sensation, not sharp pain",
      "Brows appear significantly darker immediately after — this is normal and expected",
      "Slight swelling or redness resolves within 24–48 hours",
    ],
  },
  {
    title: "The Healing Timeline",
    items: [
      "Days 1–3: Dark, slightly raised",
      "Days 4–7: Surface flaking begins — DO NOT PICK OR PEEL",
      "Week 2: Color appears very light or faded — this is normal",
      "Weeks 3–4: True color resurfaces — healed result visible",
      "Weeks 6–8: Perfecting touch-up appointment",
    ],
  },
];

export default function WhatToExpect() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="what-to-expect" className="bg-sand section-padding">
      <div className="container-wide">
        <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] text-ink text-center mb-12">
          What to Expect
        </h2>

        {/* Desktop timeline */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <div key={phase.title} className="relative">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold text-ink font-body text-sm font-medium shrink-0">
                  {index + 1}
                </span>
                {index < phases.length - 1 && (
                  <span className="h-px flex-grow bg-umber/30" aria-hidden="true" />
                )}
              </div>
              <h3 className="font-body font-semibold text-ink mb-4">{phase.title}</h3>
              <ul className="space-y-2">
                {phase.items.map((item) => (
                  <li key={item} className="font-body text-sm text-umber leading-relaxed pl-4 border-l border-gold/40">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile accordion */}
        <div className="md:hidden space-y-2">
          {phases.map((phase, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={phase.title} className="border border-umber/20 bg-bone">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between p-4 min-h-12 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-body font-medium text-ink">{phase.title}</span>
                  <span className={`text-gold transition-transform ${isOpen ? "rotate-180" : ""}`}>▼</span>
                </button>
                {isOpen && (
                  <ul className="px-4 pb-4 space-y-2">
                    {phase.items.map((item) => (
                      <li key={item} className="font-body text-sm text-umber leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
