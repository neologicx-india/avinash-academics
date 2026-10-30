import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Download,
  BookOpen,
  GraduationCap,
  Library,
  Store,
  CheckCircle2,
  Phone,
  FileText,
  Building2,
} from "lucide-react";
import { books, seriesInfo } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "The Literary Compass — A Six-Volume Companion by Prof. Avinash Jodha",
  description:
    "A Complete Companion for BA English Literature across six semesters based on the syllabus of Maharaja Ganga Singh University, Bikaner under NEP.",
};

export default function BooksPage() {
  return (
    <main>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <div className="eyebrow">The Literary Compass</div>
            <h1 className="display">
              A Complete Companion
              <br />
              for <em>BA English Literature.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="max-w-3xl space-y-4 mt-7 text-lg md:text-xl text-[#5c5a52] leading-relaxed">
              <p>{seriesInfo.description1}</p>
              <p className="text-base md:text-lg text-[#716f68]">
                {seriesInfo.description2}
              </p>
            </div>
            <div className="hero-actions mt-8">
              <a className="button" href="#volumes">
                Browse by Semester <ArrowUpRight size={16} />
              </a>
              <Link className="button secondary" href="/brochure.pdf">
                Download the Brochure <Download size={16} />
              </Link>
              <Link className="button secondary" href="/contact">
                Ask About Institutional Orders <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Editorial & Publication Details Bar ── */}
      <section className="border-b border-[var(--line)] bg-[var(--paper-deep)] py-10">
        <div className="container">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col gap-1 border-l-2 border-[var(--rust)] pl-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
                  Chief Editor
                </span>
                <strong className="text-base font-semibold text-[var(--ink)]">
                  {seriesInfo.chiefEditor}
                </strong>
                <span className="text-xs text-[var(--muted)]">
                  Head, Dept. of English, Govt. College Gangashahar
                </span>
              </div>

              <div className="flex flex-col gap-1 border-l-2 border-[var(--line)] pl-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
                  Co-editors
                </span>
                <strong className="text-sm font-semibold text-[var(--ink)]">
                  {seriesInfo.coEditors}
                </strong>
                <span className="text-xs text-[var(--muted)]">
                  Faculty of English Literature
                </span>
              </div>

              <div className="flex flex-col gap-1 border-l-2 border-[var(--line)] pl-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
                  Publisher
                </span>
                <strong className="text-sm font-semibold text-[var(--ink)]">
                  {seriesInfo.publisher}
                </strong>
                <span className="text-xs text-[var(--muted)]">
                  Contact: {seriesInfo.publisherContact}
                </span>
              </div>

              <div className="flex flex-col gap-1 border-l-2 border-[var(--line)] pl-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
                  Academic Framework
                </span>
                <strong className="text-sm font-semibold text-[var(--ink)]">
                  MGSU Bikaner
                </strong>
                <span className="text-xs text-[var(--muted)]">
                  Six Semesters under NEP syllabus
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Audience Guidance Cards (For students, teachers, booksellers) ── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="mb-10">
              <div className="eyebrow">Audience &amp; Purpose</div>
              <h2 className="section-title">Designed for every stakeholder</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delay={0.05}>
              <div className="border border-[var(--line)] bg-[var(--paper)] p-8 h-full flex flex-col justify-between hover:border-[var(--rust)] transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-full bg-[var(--paper-deep)] flex items-center justify-center text-[var(--rust)] mb-5">
                    <GraduationCap size={20} />
                  </div>
                  <h3 className="font-serif text-2xl font-medium tracking-tight mb-3">
                    For students
                  </h3>
                  <p className="text-sm leading-relaxed text-[#5e5b54]">
                    Choose the volume for your semester and check it against the
                    syllabus and paper you are studying. Clear passage
                    explanations and solved answers help connect classroom
                    reading with examination excellence.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--line)]">
                  <a
                    href="#volumes"
                    className="font-mono text-xs uppercase tracking-wider text-[var(--rust)] font-semibold inline-flex items-center gap-1 hover:underline"
                  >
                    Select your semester →
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="border border-[var(--line)] bg-[var(--paper)] p-8 h-full flex flex-col justify-between hover:border-[var(--rust)] transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-full bg-[var(--paper-deep)] flex items-center justify-center text-[var(--rust)] mb-5">
                    <Library size={20} />
                  </div>
                  <h3 className="font-serif text-2xl font-medium tracking-tight mb-3">
                    For teachers &amp; libraries
                  </h3>
                  <p className="text-sm leading-relaxed text-[#5e5b54]">
                    Contact the publisher about availability, review-copy
                    enquiries and institutional purchases. Structured
                    curriculum alignment provides ideal support for collegiate
                    instruction and library reference.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--line)]">
                  <Link
                    href="/contact"
                    className="font-mono text-xs uppercase tracking-wider text-[var(--rust)] font-semibold inline-flex items-center gap-1 hover:underline"
                  >
                    Institutional enquiry →
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.19}>
              <div className="border border-[var(--line)] bg-[var(--paper)] p-8 h-full flex flex-col justify-between hover:border-[var(--rust)] transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-full bg-[var(--paper-deep)] flex items-center justify-center text-[var(--rust)] mb-5">
                    <Store size={20} />
                  </div>
                  <h3 className="font-serif text-2xl font-medium tracking-tight mb-3">
                    For booksellers
                  </h3>
                  <p className="text-sm leading-relaxed text-[#5e5b54]">
                    Enquire about supply, editions, pricing and distribution
                    arrangements. Fast turnaround and bulk stocking available
                    directly through Surya Prakashan Mandir, Bikaner.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--line)]">
                  <Link
                    href="/contact"
                    className="font-mono text-xs uppercase tracking-wider text-[var(--rust)] font-semibold inline-flex items-center gap-1 hover:underline"
                  >
                    Trade distribution →
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Volumes Grid ── */}
      <section id="volumes" className="section section-tint scroll-mt-20">
        <div className="container">
          <Reveal>
            <div className="section-head mb-12">
              <div>
                <div className="eyebrow">Six Volumes · Six Semesters</div>
                <h2 className="section-title">The Complete Series</h2>
              </div>
              <p className="section-intro">
                Select any semester to explore detailed coverage, curriculum
                alignment, and sample study features.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, i) => (
              <Reveal key={book.slug} delay={i * 0.08}>
                <div className="border border-[var(--line)] bg-[var(--paper)] p-7 flex flex-col justify-between h-full relative group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  {/* Spine accent bar */}
                  <div
                    className="absolute top-0 left-0 bottom-0 w-1.5 transition-all group-hover:w-2"
                    style={{ backgroundColor: book.color }}
                  />

                  <div>
                    <div className="flex items-center justify-between mb-3 text-xs font-mono tracking-wider text-[var(--muted)]">
                      <span className="text-[var(--rust)] font-semibold">
                        VOL. 0{book.semesterNumber}
                      </span>
                      <span>{book.semester}</span>
                    </div>

                    <h3 className="font-serif text-2xl font-medium tracking-tight leading-snug mb-2 group-hover:text-[var(--rust)] transition-colors">
                      <Link href={`/books/${book.slug}`}>{book.title}</Link>
                    </h3>

                    <p className="text-xs uppercase tracking-wider font-mono text-[var(--muted)] mb-4">
                      {book.subtitle}
                    </p>

                    <p className="text-sm text-[#5e5b54] line-clamp-3 leading-relaxed mb-5">
                      {book.description}
                    </p>

                    <div className="bg-[var(--paper-deep)] p-3 rounded-sm border border-[var(--line)] mb-5">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--muted)] mb-1">
                        Selected Coverage:
                      </div>
                      <div className="text-xs text-[var(--ink)] font-medium leading-relaxed">
                        {book.coverage}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between gap-3">
                      <Link
                        href={`/books/${book.slug}`}
                        className="button text-xs py-2 px-3 flex-1 justify-center"
                      >
                        Explore Volume <ArrowUpRight size={14} />
                      </Link>
                      <Link
                        href="/contact"
                        className="button secondary text-xs py-2 px-3"
                        title="Enquire About This Volume"
                      >
                        Enquire
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Study Support Features ── */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="eyebrow">Methodology</div>
                <h2 className="section-title">What Every Volume Delivers</h2>
                <p className="body-copy mt-4">
                  Each volume brings together literary foundations and critical
                  study with student-friendly support. Our editorial apparatus
                  bridges canonical insight with rigorous examination practice.
                </p>
                <div className="hero-actions mt-8">
                  <Link className="button" href="/contact">
                    Ask About Institutional Orders <ArrowUpRight size={16} />
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.15}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Literary Foundations",
                      desc: "Historical contexts, movements, and aesthetic traditions before close reading begins.",
                    },
                    {
                      title: "Critical Studies",
                      desc: "In-depth textual perspectives that elevate critical thinking beyond basic plots.",
                    },
                    {
                      title: "Detailed Summaries",
                      desc: "Structured act-, chapter-, and stanza-level summaries for clear grasp.",
                    },
                    {
                      title: "Comprehensive Glossaries",
                      desc: "Archaic vocabulary, critical terminology, and allusions clearly demystified.",
                    },
                    {
                      title: "Passage Explanations",
                      desc: "Model reference-to-context explanations showcasing critical vocabulary.",
                    },
                    {
                      title: "Answered Questions & MCQs",
                      desc: "Short answers, long-form analytical answers, and exhaustive revision MCQs.",
                    },
                  ].map((feat) => (
                    <div
                      key={feat.title}
                      className="border border-[var(--line)] bg-[var(--paper-deep)] p-5"
                    >
                      <div className="flex items-center gap-2 mb-2 text-[var(--rust)]">
                        <CheckCircle2 size={16} />
                        <h4 className="font-serif text-lg font-medium text-[var(--ink)]">
                          {feat.title}
                        </h4>
                      </div>
                      <p className="text-xs text-[#5e5b54] leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ordering Information ── */}
      <section className="section section-tint border-t border-[var(--line)]">
        <div className="container">
          <Reveal>
            <div className="border border-[var(--line)] bg-[var(--paper)] p-8 md:p-12 max-w-4xl mx-auto shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[var(--line)]">
                <div>
                  <div className="eyebrow">Distribution &amp; Procurement</div>
                  <h2 className="font-serif text-3xl font-medium tracking-tight text-[var(--ink)] mt-1">
                    Ordering information
                  </h2>
                </div>
                <div className="font-mono text-xs text-[var(--rust)] uppercase tracking-wider bg-[var(--paper-deep)] py-2 px-3 border border-[var(--line)] self-start md:self-auto">
                  Direct from Publisher
                </div>
              </div>

              <div className="py-6 space-y-4">
                <p className="text-base text-[#5e5b54] leading-relaxed">
                  {seriesInfo.orderingInfo}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-[var(--paper-deep)] border border-[var(--line)]">
                    <span className="font-mono text-xs uppercase text-[var(--muted)] block mb-1">
                      Publisher Office
                    </span>
                    <strong className="text-sm text-[var(--ink)] block">
                      Surya Prakashan Mandir
                    </strong>
                    <span className="text-xs text-[#5e5b54]">
                      Bikaner, Rajasthan
                    </span>
                  </div>
                  <div className="p-4 bg-[var(--paper-deep)] border border-[var(--line)]">
                    <span className="font-mono text-xs uppercase text-[var(--muted)] block mb-1">
                      Direct Contact
                    </span>
                    <strong className="text-sm text-[var(--ink)] block">
                      Dr. Prashant Bissa
                    </strong>
                    <span className="text-xs text-[#5e5b54]">
                      Institutional &amp; Trade Inquiries
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[var(--line)] flex flex-wrap gap-4 items-center justify-between">
                <p className="text-xs text-[var(--muted)]">
                  Please specify: Semester volume, quantity needed, and delivery PIN code.
                </p>
                <Link className="button" href="/contact">
                  Enquire with Publisher <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
