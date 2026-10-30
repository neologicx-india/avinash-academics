"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react";

const enquiryTypes = [
  "Academic invitation",
  "Research",
  "Books and institutional orders",
  "Media",
  "Other",
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enquiryType: "Academic invitation",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Client validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    try {
      // Simulate form submission delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Successfully processed
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        enquiryType: "Academic invitation",
        message: "",
      });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        "Your message could not be sent. Please email avinashjodha@gmail.com.",
      );
    }
  };

  return (
    <div className="border border-[var(--line)] bg-[var(--paper)] p-6 sm:p-8 md:p-10">
      <div className="mb-6">
        <span className="font-mono text-xs uppercase tracking-wider text-[var(--rust)] font-semibold block mb-1">
          Direct Message
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[var(--ink)]">
          Send an enquiry
        </h3>
        <p className="text-xs sm:text-sm text-[#5e5b54] mt-1">
          Please fill out the form below. We will respond promptly.
        </p>
      </div>

      {status === "success" && (
        <div className="p-4 sm:p-5 mb-6 bg-[var(--paper-deep)] border-2 border-[var(--sage)] rounded-sm">
          <div className="flex items-start gap-3">
            <CheckCircle2
              size={20}
              className="text-[var(--sage)] shrink-0 mt-0.5"
            />
            <div>
              <strong className="text-sm font-semibold text-[var(--ink)] block">
                Thank you. Your enquiry has been received.
              </strong>
              <p className="text-xs text-[#5e5b54] mt-1">
                We will get back to you shortly at your registered email
                address.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-4 text-xs font-mono uppercase tracking-wider text-[var(--rust)] hover:underline font-semibold"
          >
            Send another message →
          </button>
        </div>
      )}

      {status === "error" && (
        <div className="p-4 sm:p-5 mb-6 bg-[var(--paper-deep)] border-2 border-[var(--rust)] rounded-sm">
          <div className="flex items-start gap-3">
            <AlertCircle
              size={20}
              className="text-[var(--rust)] shrink-0 mt-0.5"
            />
            <div>
              <strong className="text-sm font-semibold text-[var(--rust)] block">
                {errorMessage ||
                  "Your message could not be sent. Please email avinashjodha@gmail.com."}
              </strong>
              <p className="text-xs text-[#5e5b54] mt-1">
                You can also email us directly at{" "}
                <a
                  href="mailto:avinashjodha@gmail.com"
                  className="underline text-[var(--ink)] font-semibold"
                >
                  avinashjodha@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs font-mono uppercase tracking-wider text-[var(--muted)] mb-1.5"
          >
            Name <span className="text-[var(--rust)]">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            required
            placeholder="Your full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-[var(--paper-deep)] border border-[var(--line)] text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--rust)] transition-colors rounded-none"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="contact-email"
            className="block text-xs font-mono uppercase tracking-wider text-[var(--muted)] mb-1.5"
          >
            Email <span className="text-[var(--rust)]">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            required
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-3 bg-[var(--paper-deep)] border border-[var(--line)] text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--rust)] transition-colors rounded-none"
          />
        </div>

        {/* Enquiry Type */}
        <div>
          <label
            htmlFor="contact-enquiry-type"
            className="block text-xs font-mono uppercase tracking-wider text-[var(--muted)] mb-1.5"
          >
            Enquiry type <span className="text-[var(--rust)]">*</span>
          </label>
          <select
            id="contact-enquiry-type"
            required
            value={formData.enquiryType}
            onChange={(e) =>
              setFormData({ ...formData, enquiryType: e.target.value })
            }
            className="w-full px-4 py-3 bg-[var(--paper-deep)] border border-[var(--line)] text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--rust)] transition-colors rounded-none"
          >
            {enquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="contact-message"
            className="block text-xs font-mono uppercase tracking-wider text-[var(--muted)] mb-1.5"
          >
            Message <span className="text-[var(--rust)]">*</span>
          </label>
          <textarea
            id="contact-message"
            required
            rows={5}
            placeholder="Brief description of your academic invitation, research inquiry, or book order..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full px-4 py-3 bg-[var(--paper-deep)] border border-[var(--line)] text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--rust)] transition-colors rounded-none resize-y"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="button w-full justify-center text-sm py-3 px-6 cursor-pointer"
          >
            {status === "submitting" ? (
              "Sending..."
            ) : (
              <>
                Send Enquiry <Send size={15} />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
