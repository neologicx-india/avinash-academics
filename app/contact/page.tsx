import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  ArrowUpRight,
  MessageCircle,
  Building,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact — Professor Avinash Jodha & Surya Prakashan Mandir",
  description:
    "Direct contact details for academic invitations, research supervision, lectures, and book orders through Surya Prakashan Mandir.",
};

export default function ContactPage() {
  return (
    <main>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="eyebrow">Get in touch</div>
                <h1 className="display">
                  Begin a
                  <br />
                  <em>conversation.</em>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="hero-lede max-w-2xl">
                  For lectures, seminars, research conversations or publication
                  enquiries, please get in touch. Book purchases and institutional
                  orders are handled through the publisher.
                </p>
                <div className="hero-actions mt-8">
                  <a
                    className="button"
                    href="mailto:avinashjodha@gmail.com?subject=Academic%20Enquiry%20-%20Prof.%20Avinash%20Jodha"
                  >
                    Academic Enquiry <Mail size={16} />
                  </a>
                  <a
                    className="button secondary"
                    href="https://wa.me/919829280717?text=Hello%20Surya%20Prakashan%20Mandir,%20I%20would%20like%20to%20enquire%20about%20ordering%20The%20Literary%20Compass%20books."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Orders <MessageCircle size={16} />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Visual Frame */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <Reveal delay={0.15}>
                <div className="border border-[var(--line)] bg-[var(--paper-deep)] p-6 w-full max-w-[420px] shadow-sm relative">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--line)]">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--rust)] font-semibold flex items-center gap-1.5">
                      <Mail size={14} /> Correspondence &amp; Office
                    </span>
                    <span className="font-mono text-[11px] text-[var(--muted)]">
                      Bikaner, RJ
                    </span>
                  </div>

                  <div className="flex justify-center items-center py-2">
                    <Image
                      src="/illustration-contact.svg"
                      alt="Contact and correspondence illustration"
                      width={340}
                      height={340}
                      className="w-full max-w-[280px] h-auto"
                      priority
                    />
                  </div>

                  <div className="mt-4 pt-4 border-t border-[var(--line)] space-y-1.5 text-xs font-mono">
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--muted)]">Academic:</span>
                      <strong className="text-[var(--ink)] font-medium">avinashjodha@gmail.com</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--muted)]">Publisher:</span>
                      <span className="text-[var(--rust)] font-medium">+91 98292 80717</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Channels Grid (Academic vs Book Orders) ── */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Box 1: Academic Enquiries */}
            <Reveal delay={0.08}>
              <div className="border-2 border-[var(--ink)] bg-[var(--paper)] p-8 sm:p-10 h-full flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-5 border-b border-[var(--line)]">
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--rust)] font-semibold flex items-center gap-1.5">
                      <GraduationCap size={15} /> Academic Enquiries
                    </span>
                    <span className="font-mono text-xs text-[var(--muted)]">
                      Faculty Office
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl font-medium tracking-tight text-[var(--ink)] mb-1">
                    Professor Avinash Jodha
                  </h2>
                  <p className="text-sm font-medium text-[var(--rust)] mb-4">
                    Professor and Head, Department of English
                  </p>

                  <div className="space-y-3 text-xs sm:text-sm text-[#5e5b54] mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="text-[var(--muted)] shrink-0 mt-0.5" />
                      <span>
                        Government College Gangashahar, Bikaner, Rajasthan, India
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail size={16} className="text-[var(--muted)] shrink-0" />
                      <a
                        href="mailto:avinashjodha@gmail.com"
                        className="text-[var(--ink)] hover:text-[var(--rust)] underline font-medium"
                      >
                        avinashjodha@gmail.com
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone size={16} className="text-[var(--muted)] shrink-0" />
                      <a
                        href="tel:+917597743319"
                        className="text-[var(--ink)] hover:text-[var(--rust)] font-medium font-mono"
                      >
                        +91 75977 43319
                      </a>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#716f68] leading-relaxed pt-4 border-t border-[var(--line)]">
                    For academic invitations, research conversations, interviews
                    and creative collaborations, please email a brief description
                    of your enquiry.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[var(--line)]">
                  <a
                    href="mailto:avinashjodha@gmail.com?subject=Academic%20Enquiry%20-%20Prof.%20Avinash%20Jodha"
                    className="button w-full justify-center"
                  >
                    Send an Academic Enquiry <Mail size={16} />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Box 2: Book Orders and Distribution */}
            <Reveal delay={0.16}>
              <div className="border border-[var(--line)] bg-[var(--paper-deep)] p-8 sm:p-10 h-full flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-5 border-b border-[var(--line)]">
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--rust)] font-semibold flex items-center gap-1.5">
                      <BookOpen size={15} /> Book Orders &amp; Distribution
                    </span>
                    <span className="font-mono text-xs text-[var(--muted)]">
                      Publisher
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl font-medium tracking-tight text-[var(--ink)] mb-1">
                    Dr. Prashant Bissa
                  </h2>
                  <p className="text-sm font-medium text-[var(--ink)] mb-4">
                    Surya Prakashan Mandir
                  </p>

                  <div className="space-y-3 text-xs sm:text-sm text-[#5e5b54] mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="text-[var(--muted)] shrink-0 mt-0.5" />
                      <span>
                        A-1 Jawahar Nagar, Opposite Dudi Petrol Pump, Jaisalmer
                        Road, Bikaner, Rajasthan, India
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone size={16} className="text-[var(--muted)] shrink-0" />
                      <a
                        href="tel:+919829280717"
                        className="text-[var(--ink)] hover:text-[var(--rust)] font-medium font-mono"
                      >
                        +91 98292 80717
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail size={16} className="text-[var(--muted)] shrink-0" />
                      <a
                        href="mailto:bissa.prashant@gmail.com"
                        className="text-[var(--ink)] hover:text-[var(--rust)] underline font-medium"
                      >
                        bissa.prashant@gmail.com
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Globe size={16} className="text-[var(--muted)] shrink-0" />
                      <a
                        href="https://www.suryaprakashanmandir.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--ink)] hover:text-[var(--rust)] underline font-medium"
                      >
                        www.suryaprakashanmandir.com
                      </a>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#716f68] leading-relaxed pt-4 border-t border-[var(--line)]">
                    For book enquiries, include the semester, number of copies
                    and delivery PIN code. Ask the publisher to confirm the total
                    price, delivery charges and availability before payment.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[var(--line)] flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/919829280717?text=Hello%20Surya%20Prakashan%20Mandir,%20I%20would%20like%20to%20enquire%20about%20ordering%20The%20Literary%20Compass%20books."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button secondary w-full justify-center bg-[#25D366]/10 border-[#25D366]/40 hover:bg-[#25D366]/20 text-[#128C7E]"
                  >
                    <MessageCircle size={16} /> Enquire About Books
                  </a>
                  <a
                    href="tel:+919829280717"
                    className="button secondary w-full justify-center"
                  >
                    Call Publisher <Phone size={15} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Contact Form Section ── */}
      <section className="section section-tint border-t border-[var(--line)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <Reveal>
                <ContactForm />
              </Reveal>
            </div>

            {/* Side Information Column */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal delay={0.12}>
                <div className="border border-[var(--line)] bg-[var(--paper)] p-7 space-y-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--rust)] font-semibold block">
                    Response Guidelines
                  </span>
                  <h4 className="font-serif text-xl font-medium text-[var(--ink)]">
                    What to expect when contacting us:
                  </h4>
                  <ul className="text-xs sm:text-sm text-[#5e5b54] space-y-3 leading-relaxed">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--rust)] shrink-0 mt-2" />
                      <span>
                        <strong>Academic Invitations:</strong> Please provide
                        proposed dates, institution name, and format (lecture,
                        keynote, or seminar).
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--rust)] shrink-0 mt-2" />
                      <span>
                        <strong>Books &amp; Institutional Orders:</strong> Specify
                        the semester volume, quantity, and your delivery postal
                        PIN code.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--rust)] shrink-0 mt-2" />
                      <span>
                        <strong>Research &amp; Supervision:</strong> Include a brief
                        statement of your proposed topic and academic background.
                      </span>
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="border border-[var(--line)] bg-[var(--paper-deep)] p-7 space-y-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)] font-semibold block">
                    Quick Link
                  </span>
                  <h4 className="font-serif text-lg font-medium text-[var(--ink)]">
                    Looking for downloads or book launch details?
                  </h4>
                  <p className="text-xs text-[#5e5b54] leading-relaxed">
                    Find the 31 October 2026 launch ceremony program, curriculum
                    brochures, and FAQs on the Events page.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/events"
                      className="font-mono text-xs uppercase tracking-wider text-[var(--rust)] font-semibold inline-flex items-center gap-1 hover:underline"
                    >
                      Visit Events &amp; Resources →
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
