import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Film,
  Languages,
  PenTool,
  Calendar,
  Sparkles,
  Award,
  Video,
  FileText,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Creative Work — Documentary, Translation & Scriptwriting | Prof. Avinash Jodha",
  description:
    "Documentary filmmaking, literary translations from Rajasthani to English, and scripts for social and educational communication.",
};

const documentaries = [
  {
    year: "2008",
    title: "You See",
    role: "Producer",
    type: "Documentary Film",
    description:
      "Produced a documentary focusing on the lived experiences, everyday challenges, and social visibility of people facing disabilities. The film centres dignity, agency, and community engagement.",
    highlight: "Disability rights & lived experience",
  },
  {
    year: "2011",
    title: "Central University of Rajasthan",
    role: "Director",
    type: "Institutional Documentary",
    description:
      "Directed a comprehensive documentary exploring the university’s founding vision, academic mission, and vibrant campus life, produced in collaborative engagement with students of the Department of English.",
    highlight: "Student collaboration & campus poetics",
  },
];

const translations = [
  {
    title: "Olu ri Oliyan",
    type: "Rajasthani Poetry into English",
    description:
      "Sensitive literary translation of traditional and modern Rajasthani poetic forms, conveying the cadence, emotional depth, and desert landscapes of regional lyricism into modern English.",
  },
  {
    title: "The Tale of Pabuji Rathore",
    type: "Heroic Epic & Folk Narrative",
    description:
      "Translation and cultural contextualisation of the revered epic folk ballad of Pabuji Rathore, documenting regional oral performance, folklore, and chivalric devotional traditions.",
  },
];

const scriptwritingProjects = [
  {
    title: "Rural Youth Skill Development",
    client: "Community Development Initiative",
    medium: "Documentary Script",
    description:
      "Authored narrative scripts addressing vocational education, livelihood sustainability, and aspirations of rural youth navigating socio-economic transitions.",
  },
  {
    title: "Sapno Ki Udaan",
    client: "Arvind Studios for Aide et Action, India",
    medium: "Animation Film Script",
    description:
      "Wrote the screenplay and dialogue for an animated advocacy film championing the Right to Education (RTE), designed for grassroots outreach and community empowerment.",
  },
];

export default function CreativeWorkPage() {
  return (
    <main>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="eyebrow">Creative Practice</div>
                <h1 className="display">
                  Documentary,
                  <br />
                  <em>translation &amp; scripts.</em>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="hero-lede max-w-2xl">
                  My creative practice extends my interest in representation into
                  film, translation and scripts for social and educational
                  communication. Across documentary lenses and indigenous idioms,
                  these works explore how human experience finds voice.
                </p>
                <div className="hero-actions mt-8">
                  <Link
                    className="button"
                    href="/contact?subject=Creative%20Work%20Enquiry"
                  >
                    Enquire About Creative Work <ArrowUpRight size={16} />
                  </Link>
                  <Link className="button secondary" href="/teaching">
                    Teaching &amp; Guidance <ArrowUpRight size={16} />
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
                      <Sparkles size={13} /> Cinema &amp; Expression
                    </span>
                    <span className="font-mono text-[11px] text-[var(--muted)]">
                      Film · Text · Media
                    </span>
                  </div>

                  <div className="flex justify-center items-center py-2">
                    <Image
                      src="/illustration-creative.svg"
                      alt="Creative practice, documentary and translation illustration"
                      width={340}
                      height={340}
                      className="w-full max-w-[280px] h-auto"
                      priority
                    />
                  </div>

                  <div className="mt-4 pt-4 border-t border-[var(--line)] space-y-1.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--muted)]">Films:</span>
                      <strong className="text-[var(--ink)] font-medium">You See (2008) · CURAJ (2011)</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--muted)]">Translation:</span>
                      <span className="text-[var(--rust)] font-medium">Olu ri Oliyan · Pabuji Rathore</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Metrics Strip ── */}
      <section className="border-b border-[var(--line)] bg-[var(--paper-deep)]">
        <div className="container">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[var(--line)]">
              <div className="p-6 md:p-8 flex flex-col gap-1">
                <span className="font-serif text-3xl md:text-4xl text-[var(--rust)] font-medium">
                  02
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                  Documentary Films
                </span>
              </div>
              <div className="p-6 md:p-8 flex flex-col gap-1">
                <span className="font-serif text-3xl md:text-4xl text-[var(--rust)] font-medium">
                  Rajasthani
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                  Poetry &amp; Epic Translation
                </span>
              </div>
              <div className="p-6 md:p-8 flex flex-col gap-1">
                <span className="font-serif text-3xl md:text-4xl text-[var(--rust)] font-medium">
                  RTE
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                  Animation Advocacy Script
                </span>
              </div>
              <div className="p-6 md:p-8 flex flex-col gap-1">
                <span className="font-serif text-3xl md:text-4xl text-[var(--rust)] font-medium">
                  Aide et Action
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                  Arvind Studios Partner
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 1. Documentary Filmmaking ── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="mb-10">
              <div className="eyebrow">Visual Narratives</div>
              <h2 className="section-title">Documentary filmmaking</h2>
              <p className="section-intro mt-2">
                Engaging real-world struggles, educational visions, and social
                realities through long-form non-fiction documentary.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {documentaries.map((doc, idx) => (
              <Reveal key={doc.title} delay={idx * 0.1}>
                <div className="border border-[var(--line)] bg-[var(--paper)] p-8 h-full flex flex-col justify-between hover:border-[var(--rust)] transition-colors relative">
                  <div>
                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-[var(--line)] text-xs font-mono">
                      <span className="bg-[var(--paper-deep)] text-[var(--rust)] font-semibold px-2.5 py-1 border border-[var(--line)]">
                        {doc.year} · {doc.role}
                      </span>
                      <span className="text-[var(--muted)]">{doc.type}</span>
                    </div>

                    <h3 className="font-serif text-3xl font-medium tracking-tight text-[var(--ink)] mb-3">
                      {doc.title}
                    </h3>

                    <p className="text-sm md:text-base text-[#5e5b54] leading-relaxed mb-6">
                      {doc.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--line)] flex items-center gap-2 text-xs font-mono text-[var(--muted)]">
                    <Video size={14} className="text-[var(--rust)]" />
                    <span>Focus: {doc.highlight}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. Literary Translation ── */}
      <section className="section section-tint border-y border-[var(--line)]">
        <div className="container">
          <Reveal>
            <div className="mb-10">
              <div className="eyebrow">Cultural Translation</div>
              <h2 className="section-title">Translation &amp; regional archives</h2>
              <p className="section-intro mt-2">
                Bringing the oral traditions, emotional contours, and heroic
                epics of Rajasthan into contemporary English prose and verse.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {translations.map((trans, idx) => (
              <Reveal key={trans.title} delay={idx * 0.1}>
                <div className="border border-[var(--line)] bg-[var(--paper)] p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-[var(--rust)] uppercase tracking-wider font-semibold mb-3">
                      <Languages size={15} />
                      <span>{trans.type}</span>
                    </div>

                    <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-[var(--ink)] mb-4">
                      <em>{trans.title}</em>
                    </h3>

                    <p className="text-sm md:text-base text-[#5e5b54] leading-relaxed">
                      {trans.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[var(--line)] text-xs font-mono text-[var(--muted)]">
                    Manuscript &amp; translation project
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Scriptwriting & Social Communication ── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="mb-10">
              <div className="eyebrow">Advocacy &amp; Media</div>
              <h2 className="section-title">Scriptwriting for social change</h2>
              <p className="section-intro mt-2">
                Writing scripts for animation and documentary media focused on
                educational equity and youth skill development.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scriptwritingProjects.map((script, idx) => (
              <Reveal key={script.title} delay={idx * 0.1}>
                <div className="border border-[var(--line)] bg-[var(--paper)] p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--line)] text-xs font-mono">
                      <span className="text-[var(--rust)] font-semibold flex items-center gap-1.5">
                        <PenTool size={13} /> {script.medium}
                      </span>
                      <span className="text-[var(--muted)]">{script.client}</span>
                    </div>

                    <h3 className="font-serif text-2xl font-medium tracking-tight text-[var(--ink)] mb-3">
                      {script.title}
                    </h3>

                    <p className="text-sm text-[#5e5b54] leading-relaxed">
                      {script.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[var(--line)] text-xs font-mono text-[var(--muted)]">
                    Social &amp; educational communication
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* CTA Box */}
          <Reveal delay={0.2}>
            <div className="mt-16 p-8 md:p-12 border-2 border-[var(--ink)] bg-[var(--paper-deep)] flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--rust)] font-semibold">
                  Creative Collaboration
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-medium text-[var(--ink)]">
                  Have a film, translation, or media project?
                </h3>
                <p className="text-sm text-[#5e5b54] max-w-xl">
                  Available for documentary consultation, script supervision,
                  literary translation, and cross-cultural media dialogue.
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  className="button"
                  href="/contact?subject=Creative%20Work%20Enquiry"
                >
                  Enquire About Creative Work <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
