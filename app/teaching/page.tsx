import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  GraduationCap,
  BookOpen,
  Users,
  Compass,
  CheckCircle2,
  Sparkles,
  School,
  Presentation,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Teaching and Research Guidance — Professor Avinash Jodha",
  description:
    "Close reading pedagogy, doctoral and postgraduate research supervision, and suggested lecture themes by Prof. Avinash Jodha.",
};

const lectureThemes = [
  {
    number: "01",
    title: "Literature and Belonging",
    desc: "How texts construct geographic, cultural, and emotional homes, interrogating how individuals remember places and negotiate identity amidst change.",
  },
  {
    number: "02",
    title: "Memory and Exile",
    desc: "Reading displacement, diasporic longing, and the poetics of distance across South Asian and world literatures.",
  },
  {
    number: "03",
    title: "Indian Cinema and Literary Adaptation",
    desc: "The politics and aesthetics of transforming prose narratives and classical tragedy into cinematic idioms for modern South Asian audiences.",
  },
  {
    number: "04",
    title: "Shakespeare in Indian Cinema",
    desc: "Focusing on Vishal Bhardwaj’s adaptations (Maqbool, Omkara, Haider) and the cultural repositioning of early modern drama.",
  },
  {
    number: "05",
    title: "Reading South Asian Diaspora Writing",
    desc: "Transnational mobility, generational tensions, and hyphenated identities in contemporary English fiction and poetry.",
  },
];

export default function TeachingPage() {
  return (
    <main>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="eyebrow">Pedagogy &amp; Supervision</div>
                <h1 className="display">
                  Teaching and
                  <br />
                  <em>research guidance.</em>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="hero-lede max-w-2xl">
                  My teaching connects literary contexts with close reading and
                  critical interpretation. I encourage students to consider how
                  language, form and historical experience shape a text, and how
                  an interpretation can be developed into a clear written argument.
                </p>
                <div className="hero-actions mt-8">
                  <Link
                    className="button"
                    href="/contact?subject=Academic%20%26%20Teaching%20Enquiry"
                  >
                    Academic Enquiries <ArrowUpRight size={16} />
                  </Link>
                  <Link className="button secondary" href="/books">
                    The Literary Compass <ArrowUpRight size={16} />
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Visual Frame */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <Reveal delay={0.15}>
                <div className="border border-[var(--line)] bg-[var(--paper-deep)] p-6 w-full max-w-[420px] shadow-sm relative">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--line)]">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--rust)] font-semibold flex items-center gap-1.5">
                      <GraduationCap size={15} /> Collegiate Instruction
                    </span>
                    <span className="font-mono text-[11px] text-[var(--muted)]">
                      Govt. College Gangashahar
                    </span>
                  </div>

                  <div className="flex justify-center items-center py-2">
                    <Image
                      src="/illustration-teaching.svg"
                      alt="Teaching, blackboard and classroom illustration"
                      width={340}
                      height={340}
                      className="w-full max-w-[280px] h-auto"
                      priority
                    />
                  </div>

                  <div className="mt-4 pt-4 border-t border-[var(--line)] space-y-1.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--muted)]">Department:</span>
                      <strong className="text-[var(--ink)] font-medium">Head, Department of English</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--muted)]">Supervision:</span>
                      <span className="text-[var(--rust)] font-medium">Ph.D. &amp; M.Phil. Scholars</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Guidance Stats Strip ── */}
      <section className="border-b border-[var(--line)] bg-[var(--paper-deep)]">
        <div className="container">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[var(--line)]">
              <div className="p-6 md:p-8 flex flex-col gap-1">
                <span className="font-serif text-3xl md:text-4xl text-[var(--rust)] font-medium">
                  04
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                  Ph.D. Scholars Completed
                </span>
              </div>
              <div className="p-6 md:p-8 flex flex-col gap-1">
                <span className="font-serif text-3xl md:text-4xl text-[var(--rust)] font-medium">
                  24
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                  M.Phil. Dissertations
                </span>
              </div>
              <div className="p-6 md:p-8 flex flex-col gap-1">
                <span className="font-serif text-3xl md:text-4xl text-[var(--rust)] font-medium">
                  30+
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                  Years Classroom Pedagogy
                </span>
              </div>
              <div className="p-6 md:p-8 flex flex-col gap-1">
                <span className="font-serif text-3xl md:text-4xl text-[var(--rust)] font-medium">
                  06
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                  Semesters Companion Series
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Teaching Approach & Curricular Foundation ── */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <Reveal>
                <div className="eyebrow">Pedagogical Philosophy</div>
                <h2 className="section-title">
                  Connecting context with close reading
                </h2>
                <p className="body-copy">
                  The areas represented in my academic work include postcolonial
                  literature, diaspora, literary theory and criticism, Indian
                  Writing in English, and cinema and adaptation studies.
                </p>
                <p className="body-copy">
                  I have supervised research at M.Phil. and Ph.D. levels. For
                  academic conversations, invited lectures or enquiries about my
                  research interests, please contact me directly.
                </p>
                <div className="hero-actions mt-6">
                  <Link
                    className="button"
                    href="/contact?subject=Invited%20Lecture%20Enquiry"
                  >
                    Academic Enquiries <ArrowUpRight size={16} />
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.12}>
                <div className="space-y-4">
                  <div className="border border-[var(--line)] bg-[var(--paper)] p-6">
                    <span className="font-mono text-xs uppercase text-[var(--rust)] tracking-wider font-semibold block mb-1">
                      Classroom Practice 01
                    </span>
                    <h3 className="font-serif text-xl font-medium text-[var(--ink)] mb-2">
                      Language, Form &amp; Historical Experience
                    </h3>
                    <p className="text-sm text-[#5e5b54] leading-relaxed">
                      Guiding undergraduate and postgraduate scholars to examine
                      how structural nuances, poetic metres, and historical
                      traumas inform the imaginative universe of a work.
                    </p>
                  </div>

                  <div className="border border-[var(--line)] bg-[var(--paper)] p-6">
                    <span className="font-mono text-xs uppercase text-[var(--rust)] tracking-wider font-semibold block mb-1">
                      Classroom Practice 02
                    </span>
                    <h3 className="font-serif text-xl font-medium text-[var(--ink)] mb-2">
                      Developing Clear Written Arguments
                    </h3>
                    <p className="text-sm text-[#5e5b54] leading-relaxed">
                      Transforming raw intuitive responses into articulated,
                      methodologically sound literary critique and exam-ready
                      expression.
                    </p>
                  </div>

                  {/* The Literary Compass Link Box */}
                  <div className="border-2 border-[var(--ink)] bg-[var(--paper-deep)] p-6">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase text-[var(--rust)] font-semibold mb-2">
                      <Compass size={15} /> Educational Extension
                    </div>
                    <h3 className="font-serif text-xl font-medium text-[var(--ink)] mb-2">
                      The Literary Compass Series
                    </h3>
                    <p className="text-sm text-[#5e5b54] leading-relaxed mb-4">
                      <em>The Literary Compass</em> extends my educational work
                      through explanations, glossaries and answered practice for
                      undergraduate readers across all six semesters of BA English
                      Literature under NEP.
                    </p>
                    <Link
                      href="/books"
                      className="font-mono text-xs uppercase tracking-wider text-[var(--rust)] font-semibold inline-flex items-center gap-1 hover:underline"
                    >
                      Explore the six volumes →
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Suggested Lecture Themes ── */}
      <section className="section section-tint border-y border-[var(--line)]">
        <div className="container">
          <Reveal>
            <div className="section-head mb-10">
              <div>
                <div className="eyebrow">Academic Dialogues &amp; Keynotes</div>
                <h2 className="section-title">Suggested lecture themes</h2>
              </div>
              <p className="section-intro">
                Invited keynote lectures, university masterclasses, and seminar
                modules tailored for faculty and student bodies.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lectureThemes.map((theme, i) => (
              <Reveal key={theme.title} delay={i * 0.08}>
                <div className="border border-[var(--line)] bg-[var(--paper)] p-7 h-full flex flex-col justify-between hover:border-[var(--rust)] transition-colors">
                  <div>
                    <span className="font-mono text-xs text-[var(--rust)] font-semibold uppercase tracking-widest block mb-2">
                      Theme {theme.number}
                    </span>
                    <h3 className="font-serif text-2xl font-medium tracking-tight text-[var(--ink)] mb-3">
                      {theme.title}
                    </h3>
                    <p className="text-sm text-[#5e5b54] leading-relaxed">
                      {theme.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[var(--line)]">
                    <span className="text-[11px] font-mono text-[var(--muted)] uppercase tracking-wider">
                      University Lecture &amp; Seminar
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}

            {/* 6th Card: Research supervision invitation */}
            <Reveal delay={0.4}>
              <div className="border border-dashed border-[var(--line)] bg-[var(--paper)] p-7 h-full flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-[var(--rust)] font-semibold uppercase tracking-widest block mb-2">
                    Supervision &amp; Dialogue
                  </span>
                  <h3 className="font-serif text-2xl font-medium tracking-tight text-[var(--ink)] mb-3">
                    Postgraduate &amp; Ph.D. Inquiry
                  </h3>
                  <p className="text-sm text-[#5e5b54] leading-relaxed">
                    Available for doctoral advisory discussions, visiting
                    scholarly presentations, and syllabus consultation.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--line)]">
                  <Link
                    href="/contact?subject=Research%20Supervision%20Enquiry"
                    className="font-mono text-xs uppercase tracking-wider text-[var(--rust)] font-semibold inline-flex items-center gap-1 hover:underline"
                  >
                    Initiate conversation →
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Bottom CTA Block */}
          <Reveal delay={0.2}>
            <div className="mt-14 p-8 border border-[var(--line)] bg-[var(--paper)] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <h4 className="font-serif text-xl font-medium text-[var(--ink)]">
                  Invite for a lecture or academic seminar
                </h4>
                <p className="text-xs text-[#5e5b54] mt-1">
                  For guest lectures, conference keynotes, or research consultations, reach out directly.
                </p>
              </div>
              <Link
                className="button"
                href="/contact?subject=Invited%20Lecture%20Enquiry"
              >
                Academic Enquiries <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
