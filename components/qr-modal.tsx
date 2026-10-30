"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { X, QrCode, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface QrModalProps {
  isOpen: boolean;
  onClose: () => void;
  volumeTitle?: string;
  semester?: string;
}

export function QrModal({
  isOpen,
  onClose,
  volumeTitle,
  semester,
}: QrModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on Escape key and lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  const modalMarkup = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="qr-modal-overlay"
        >
          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="qr-modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="qr-modal-title"
          >
            {/* Header */}
            <div className="p-5 border-b border-[var(--line)] bg-[var(--paper-deep)] flex items-start justify-between gap-4 shrink-0">
              <div>
                <h3
                  id="qr-modal-title"
                  className="font-serif text-2xl font-medium tracking-tight text-[var(--ink)]"
                >
                  Surya Prakashan Mandir
                </h3>
                {semester && (
                  <p className="text-xs text-[#5e5b54] mt-1 font-mono">
                    <strong className="text-[var(--rust)]">{semester}</strong>
                    {volumeTitle ? ` · ${volumeTitle}` : ""}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="p-1.5 text-[var(--ink)] hover:bg-[var(--line)] rounded-full transition-colors border border-[var(--line)] bg-[var(--paper)] shrink-0"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-5 sm:p-6 space-y-4 overflow-y-auto">
              {/* QR Image */}
              <div className="flex flex-col items-center">
                <div className="relative w-full max-w-[260px] aspect-[1236/1600] bg-white p-2.5 border-2 border-[var(--ink)] shadow-md">
                  <Image
                    src="/qr-code.jpeg"
                    alt="Surya Prakashan Mandir Payment QR Code"
                    width={400}
                    height={518}
                    priority
                    quality={95}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalMarkup, document.body);
}

/**
 * Trigger button that opens the QR modal for a specific book volume
 */
export function BuyNowButton({
  volumeTitle,
  semester,
  className = "button secondary text-xs py-2 px-3",
  label = "Buy Now",
}: {
  volumeTitle?: string;
  semester?: string;
  className?: string;
  label?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`whitespace-nowrap shrink-0 inline-flex items-center justify-center gap-2 ${className}`}
        title="Scan QR to order/buy this volume"
      >
        <QrCode size={14} className="shrink-0" />
        <span>{label}</span>
      </button>

      <QrModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        volumeTitle={volumeTitle}
        semester={semester}
      />
    </>
  );
}
