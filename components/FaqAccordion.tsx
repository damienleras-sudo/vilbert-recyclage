"use client";

import { useState } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  accentColor?: string;
}

export default function FaqAccordion({
  items,
  accentColor = "#1a5c28",
}: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((faq, i) => (
        <div key={i} className="border rounded-lg overflow-hidden bg-gray-50">
          <button
            className="w-full flex items-center justify-between p-4 text-left cursor-pointer font-medium"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span>{faq.q}</span>
            <svg
              className={`w-5 h-5 transition-transform duration-200 flex-shrink-0 ml-2 ${
                open === i ? "rotate-180" : ""
              }`}
              style={{ color: accentColor }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {open === i && (
            <div className="px-4 pb-4 text-gray-700">{faq.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}
