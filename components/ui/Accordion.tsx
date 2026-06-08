"use client";

import { useState } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto max-w-3xl">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className="border-b border-umber/25 last:border-b-0"
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex min-h-[3.25rem] w-full cursor-pointer items-center justify-between gap-4 py-5 text-left md:py-4"
              aria-expanded={isOpen}
            >
              <span className="font-body pr-3 text-base font-medium leading-snug text-ink md:text-[0.9375rem]">
                {item.question}
              </span>
              <Chevron open={isOpen} />
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="font-body pb-6 pr-2 text-base leading-[1.75] text-ink/88 md:pb-5 md:pr-8 md:text-[0.9375rem] md:text-umber md:leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
