import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  Award,
  Users,
  Mail,
  Phone,
  Download,
  FileText,
  HelpCircle,
  ArrowUpRight,
  ChevronDown,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { FaqAccordion } from "@/components/faq-accordion";

export const metadata: Metadata = {
  title: "Events, Resources & FAQ — Professor Avinash Jodha",
  description:
    "The Literary Compass book launch, downloadable academic CV and brochure, and frequently asked questions on book orders and invited lectures.",
};

const guestsOfEminence = [
  "Professor G. P. Singh",
  "Professor Rajendra Purohit",
  "Professor Babita Jain",
  "Professor Sonu Shiva",
  "Dr. Seema Sharma",
];

const faqs = [
  {
    q: "Which university is The Literary Compass series based on?",
    a: "The six volumes presented here are based on the syllabus of Maharaja Ganga Singh University, Bikaner, for BA English Literature under NEP.",
    category: "Academics",
  },
  {
    q: "How do I choose a volume?",
    a: "Choose your semester and compare the volume’s coverage with the syllabus prescribed for your course and academic session.",
    category: "Students",
  },
  {
    q: "How can I order a book?",
    a: "Contact Surya Prakashan Mandir on +91 98292 80717. Mention the semester, quantity and delivery PIN code so that price, availability and delivery can be confirmed.",
    category: "Ordering",
  },
  {
    q: "Can a college or library place a bulk order?",
    a: "Please contact the publisher to discuss institutional quantities, review copies, and library supply arrangements.",
    category: "Institutions",
  },
  {
    q: "Are complete books available as free PDF downloads?",
    a: "The resources currently offered here are the series brochure and academic CV. Contact the publisher directly regarding printed book formats, stock, and availability.",
    category: "Resources",
  },
  {
    q: "How can I invite Professor Jodha for a lecture?",
    a: "Email avinashjodha@gmail.com with the institution name, proposed date, topic, expected audience, and contact details.",
    category: "Keynotes",
  },
];

export default function EventsPage() {
  return (
    <main>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <div className="eyebrow">Academic Calendar &amp; Resources</div>
            <h1 className="display">
              Events, resources &amp;
              <br />
              <em>frequently asked questions.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="hero-lede max-w-3xl">
              Official book launch information, downloadable publications and
              brochures, and comprehensive answers for students, teachers,
              libraries, and event organisers.
            </p>
            <div className="hero-actions mt-8">
              <a className="button" href="#launch-event">
                Book Launch Details <Calendar size={16} />
              </a>
              <a className="button secondary" href="#resources">
                View Resources <ArrowUpRight size={16} />
              </a>
              <a className="button secondary" href="#faq">
                View FAQs <HelpCircle size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Section 1: The Book Launch Event ── */}
      <section id="launch-event" className="section scroll-mt-20">
        <div className="container">
          <Reveal>
            <div className="mb-10">
              <div className="eyebrow">Upcoming Book Launch</div>
              <h2 className="section-title">The Literary Compass Launch</h2>
              <p className="section-intro mt-2">
                A formal celebration bringing together the editorial team,
                publisher, and distinguished university guests to introduce the
                six-volume companion series.
              </p>
            </div>
          </Reveal>

          {/* Featured Invitation Box */}
          <Reveal delay={0.1}>
            <div className="border-2 border-[var(--ink)] bg-[var(--paper)] shadow-lg overflow-hidden">
              {/* Event Header Banner */}
              <div className="bg-[var(--paper-deep)] border-b border-[var(--line)] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--rust)] animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--rust)] font-semibold">
                    Official University Launch Ceremony
                  </span>
                </div>
                <div className="font-mono text-xs text-[var(--muted)]">
                  Maharaja Ganga Singh University, Bikaner
                </div>
              </div>

              {/* Event Body */}
              <div className="p-6 sm:p-10 space-y-8">
                {/* Time & Venue Banner */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 bg-[var(--paper-deep)] border border-[var(--line)]">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-[var(--paper)] flex items-center justify-center text-[var(--rust)] shrink-0 border border-[var(--line)]">
                      <Clock size={18} />
                    </div>
                    <div>
                      <span className="font-mono text-xs uppercase text-[var(--muted)] block">
                        Date &amp; Time
                      </span>
                      <strong className="text-base text-[var(--ink)] block mt-0.5">
                        31 October 2026 at 11:00 AM
                      </strong>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 border-t md:border-t-0 md:border-l border-[var(--line)] pt-4 md:pt-0 md:pl-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--paper)] flex items-center justify-center text-[var(--rust)] shrink-0 border border-[var(--line)]">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="font-mono text-xs uppercase text-[var(--muted)] block">
                        Venue
                      </span>
                      <strong className="text-base text-[var(--ink)] block mt-0.5">
                        VC Secretariat, MGSU
                      </strong>
                      <span className="text-xs text-[#5e5b54]">
                        Maharaja Ganga Singh University, Bikaner
                      </span>
                    </div>
                  </div>
                </div>

                {/* Dignitaries Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
                  {/* Chief Guest */}
                  <div className="lg:col-span-6 p-6 border border-[var(--line)] bg-[var(--paper-deep)]">
                    <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-wider text-[var(--rust)] font-semibold">
                      <Award size={15} /> Chief Guest
                    </div>
                    <h3 className="font-serif text-2xl font-medium text-[var(--ink)] mb-1">
                      Professor Narsi Ram Bishnoi
                    </h3>
                    <p className="text-xs text-[#5e5b54] font-medium leading-relaxed">
                      Vice Chancellor, Maharaja Ganga Singh University, Bikaner
                    </p>
                  </div>

                  {/* Guests of Eminence */}
                  <div className="lg:col-span-6 p-6 border border-[var(--line)] bg-[var(--paper)]">
                    <div className="flex items-center gap-2 mb-3 font-mono text-xs uppercase tracking-wider text-[var(--muted)] font-semibold">
                      <Users size={15} /> Guests of Eminence
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--ink)] font-medium">
                      {guestsOfEminence.map((guest) => (
                        <div key={guest} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--rust)]" />
                          <span>{guest}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Event Summary Narrative */}
                <div className="border-t border-[var(--line)] pt-6 text-sm text-[#5e5b54] leading-relaxed">
                  The launch brings together the editorial team, publisher, and
                  invited guests to introduce <em>The Literary Compass</em>, a
                  six-volume companion series for BA English Literature based on
                  the syllabus of Maharaja Ganga Singh University, Bikaner under
                  NEP.
                </div>

                {/* Contact & Enquiries Bar */}
                <div className="p-5 bg-[var(--paper-deep)] border border-[var(--line)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)] block mb-1">
                      For Event Enquiries &amp; Press:
                    </span>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
                      <a
                        href="mailto:avinashjodha@gmail.com"
                        className="text-[var(--rust)] hover:underline flex items-center gap-1 font-semibold"
                      >
                        <Mail size={13} /> avinashjodha@gmail.com
                      </a>
                      <span className="text-[var(--line)]">|</span>
                      <a
                        href="tel:+917597743319"
                        className="text-[var(--ink)] hover:text-[var(--rust)] flex items-center gap-1"
                      >
                        <Phone size={13} /> +91 75977 43319
                      </a>
                    </div>
                  </div>

                  <Link
                    href="/contact?subject=Book%20Launch%20Event%20Enquiry"
                    className="button text-xs py-2 px-4"
                  >
                    RSVP / Contact <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Section 2: Downloads & Resources ── */}
      <section
        id="resources"
        className="section section-tint border-y border-[var(--line)] scroll-mt-20"
      >
        <div className="container">
          <Reveal>
            <div className="mb-10">
              {/* <div className="eyebrow">Academic Downloads</div> */}
              <h2 className="section-title">Resources</h2>
              <p className="section-intro mt-2">
                Download verified academic documentation, curriculum brochures,
                and publications profiles.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Resource 1: Academic CV */}
            <Reveal delay={0.08}>
              <div className="border border-[var(--line)] bg-[var(--paper)] p-8 h-full flex flex-col justify-between hover:border-[var(--rust)] transition-colors">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[var(--paper-deep)] flex items-center justify-center text-[var(--rust)] mb-5 border border-[var(--line)]">
                    <FileText size={22} />
                  </div>
                  {/* <span className="font-mono text-xs uppercase tracking-widest text-[var(--rust)] font-semibold block mb-1">
                    Document 01 · PDF
                  </span> */}
                  <h3 className="font-serif text-2xl font-medium tracking-tight text-[var(--ink)] mb-3">
                    Academic CV
                  </h3>
                  <p className="text-sm text-[#5e5b54] leading-relaxed mb-6">
                    Comprehensive curriculum vitae detailing education,
                    publications, doctoral research guidance, institutional
                    roles, and selected academic and creative work.
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--line)]">
                  <Link href="/about" className="button w-full justify-center">
                    Academic CV <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Resource 2: The Literary Compass Brochure */}
            <Reveal delay={0.16}>
              <div className="border border-[var(--line)] bg-[var(--paper)] p-8 h-full flex flex-col justify-between hover:border-[var(--rust)] transition-colors">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[var(--paper-deep)] flex items-center justify-center text-[var(--rust)] mb-5 border border-[var(--line)]">
                    <FileText size={22} />
                  </div>
                  {/* <span className="font-mono text-xs uppercase tracking-widest text-[var(--rust)] font-semibold block mb-1">
                    Document 02 · PDF
                  </span> */}
                  <h3 className="font-serif text-2xl font-medium tracking-tight text-[var(--ink)] mb-3">
                    The Literary Compass Brochure
                  </h3>
                  <p className="text-sm text-[#5e5b54] leading-relaxed mb-6">
                    An introduction to all six volumes, detailed
                    semester-by-semester coverage, pedagogical features, model
                    answered practice, and publisher contact details.
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--line)]">
                  <Link href="/books" className="button w-full justify-center">
                    View Books <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Section 3: Frequently Asked Questions ── */}
      <section id="faq" className="section scroll-mt-20">
        <div className="container">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="eyebrow">Queries &amp; Guidance</div>
              <h2 className="section-title">Frequently asked questions</h2>
              <p className="section-intro mt-2">
                Common questions from undergraduate students, collegiate
                faculty, librarians, and prospective seminar hosts.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Smooth Animated FAQ Accordion */}
            <div className="lg:col-span-7">
              <Reveal>
                <FaqAccordion items={faqs} />
              </Reveal>
            </div>

            {/* Right Column: FAQ Themed SVG Illustration Card */}
            <div className="lg:col-span-5 sticky top-28">
              <Reveal delay={0.15}>
                <div className="border border-[var(--line)] bg-[var(--paper-deep)] p-6 sm:p-8 relative shadow-sm">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--line)]">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--rust)] font-semibold flex items-center gap-1.5">
                      <HelpCircle size={14} /> Quick Assistance
                    </span>
                    <span className="font-mono text-[11px] text-[var(--muted)]">
                      Guidance Desk
                    </span>
                  </div>

                  <div className="flex justify-center items-center py-2">
                    <Image
                      src="/illustration-faq.svg"
                      alt="Frequently asked questions, enquiry and guidance illustration"
                      width={340}
                      height={340}
                      className="w-full max-w-[280px] h-auto"
                      priority
                    />
                  </div>

                  <div className="mt-4 pt-4 border-t border-[var(--line)] space-y-3">
                    <div className="text-xs text-[#5e5b54] leading-relaxed">
                      Have a query not covered in the questions? We are
                      available for institutional orders, syllabus consultation,
                      and event invitations.
                    </div>
                    <div className="pt-2 flex flex-col gap-2">
                      <Link
                        className="button w-full justify-center text-xs py-2 px-3"
                        href="/contact"
                      >
                        Contact Directly <ArrowUpRight size={14} />
                      </Link>
                    </div>
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
