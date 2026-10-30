"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface FaqItem {
  q: string;
  a: string;
  category?: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  allowMultiple?: boolean;
}

export function FaqAccordion({ items, allowMultiple = false }: FaqAccordionProps) {
  // Store open indices
  const [openIndices, setOpenIndices] = useState<number[]>([0]); // first one open by default

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="space-y-3.5">
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        return (
          <div
            key={item.q}
            className={`border transition-all duration-300 rounded-sm overflow-hidden ${
              isOpen
                ? "border-[var(--rust)] bg-[var(--paper-deep)] shadow-sm"
                : "border-[var(--line)] bg-[var(--paper)] hover:border-[var(--muted)]"
            }`}
          >
            {/* Question Button */}
            <button
              type="button"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none group"
            >
              <div className="flex items-center gap-3.5">
                <span
                  className={`font-mono text-xs font-semibold px-2 py-0.5 rounded transition-colors ${
                    isOpen
                      ? "bg-[var(--rust)] text-[var(--paper)]"
                      : "bg-[var(--paper-deep)] text-[var(--muted)] group-hover:text-[var(--rust)]"
                  }`}
                >
                  0{index + 1}
                </span>
                <span className="font-serif text-lg sm:text-xl font-medium text-[var(--ink)] leading-snug">
                  {item.q}
                </span>
              </div>

              <div
                className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                  isOpen
                    ? "rotate-180 border-[var(--rust)] text-[var(--rust)] bg-[var(--paper)]"
                    : "border-[var(--line)] text-[var(--muted)] bg-[var(--paper-deep)] group-hover:border-[var(--muted)]"
                }`}
              >
                <ChevronDown size={15} />
              </div>
            </button>

            {/* Smooth Animated Answer Body */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[var(--line)]/60 text-sm sm:text-base text-[#5e5b54] leading-relaxed">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
