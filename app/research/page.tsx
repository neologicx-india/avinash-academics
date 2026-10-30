import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Download,
  BookOpen,
  Film,
  GraduationCap,
  Sparkles,
  Award,
  Calendar,
  Layers,
  Presentation,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Research and Publications — Professor Avinash Jodha",
  description:
    "Monographs, book chapters, conference presentations, and research guidance in postcolonial studies, diaspora, cinema, and literary theory.",
};

const researchAreas = [
  {
    title: "Postcolonial Studies",
    desc: "Decolonial readings, national narratives, and representations of historical trauma.",
  },
  {
    title: "Diaspora Studies",
    desc: "Migrant memory, exile, transnational identities, and belonging across geographies.",
  },
  {
    title: "Literary Theory & Criticism",
    desc: "Critical methodologies, aesthetic structures, hermeneutics, and modern textual analysis.",
  },
  {
    title: "Indian Writing in English",
    desc: "From classical traditions to contemporary Indian prose, poetry, and drama in English.",
  },
  {
    title: "Cinema & Adaptation Studies",
    desc: "Transmediation from literary texts to cinematic forms, cinematic grammar, and cultural recontextualization.",
  },
];

const bookChapters = [
  {
    year: "2009",
    title:
      "Eclectic Cartography: Spaces of Memory and Belonging in Sorayya Khan’s Noor",
    book: "Crossing Borders",
    editor: "Edited by Jasbir Jain",
    publisher: "Rawat Publications, 2009",
  },
  {
    year: "2007",
    title: "Packaging India: The Fabric of Deepa Mehta’s Cinematic Art",
    book: "Films, Literature and Culture",
    editor: "Edited by Jasbir Jain",
    publisher: "Rawat Publications, 2007",
  },
  {
    year: "2006",
    title:
      "Against Forgetting: The Constructs of History, Memory and Nation in Rushdie and Kamleshwar",
    book: "Writing Partitions / Living Partitions",
    editor: "Edited by Jasbir Jain",
    publisher: "Rawat Publications, 2006",
  },
];

const conferencePresentations = [
  {
    year: "2013",
    type: "Keynote Address",
    title: "Literary and Cinematic Constructs of South Asian Diaspora",
    event:
      "Keynote address on Diaspora and Cultural Exchange, Vidyasagar College for Women, Kolkata",
  },
  {
    year: "2011",
    type: "International Conference",
    title:
      "After the Last Frontiers: Poetics and Politics of Belonging in Palestinian and Kashmiri Poetry",
    event:
      "International Conference on Shifting Paradigms of Comparative Literature, Central University of Rajasthan, Kishangarh",
  },
  {
    year: "2011",
    type: "International Seminar",
    title:
      "Digging Dangerously: Human Rights and the Archaeology of Belonging in Contemporary Fiction and Media",
    event:
      "International Seminar on Globalization, Values and World Peace, Gujarat University, Ahmedabad",
  },
  {
    year: "2010",
    type: "National Seminar",
    title:
      "Of Romance, Nostalgia and Reality: Constructs of Muslim Identity in Mere Mehboob and Bazaar",
    event:
      "National Seminar on Representation of Muslim Culture in Indian Cinema, IRIS, Jaipur",
  },
  {
    year: "2010",
    type: "National Seminar",
    title:
      "After the Last Skies: Postcolonial Homelands in Khaled Hosseini’s The Kite Runner and Mohsin Hamid’s The Reluctant Fundamentalist",
    event:
      "National Seminar on New Directions in Literary Studies, ICG, Jaipur",
  },
];

export default function ResearchPage() {
  return (
    <main>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="eyebrow">Scholarship &amp; Inquiry</div>
                <h1 className="display">
                  Research and
                  <br />
                  <em>publications.</em>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="hero-lede max-w-2xl">
                  My research examines the ways literature and cinema imagine
                  identity, memory, exile and belonging. I work across
                  postcolonial writing, diaspora studies, literary theory and
                  adaptation, with particular interests in South Asian
                  literature and cinema.
                </p>
                <div className="hero-actions mt-8">
                  <Link className="button" href="/about">
                    View Full CV <ArrowUpRight size={16} />
                  </Link>
                  <Link className="button secondary" href="/contact">
                    Research Enquiries <ArrowUpRight size={16} />
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Visual / Academic Spotlight Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <Reveal delay={0.15}>
                <div className="border border-[var(--line)] bg-[var(--paper-deep)] p-6 w-full max-w-[420px] shadow-sm relative">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--line)]">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--rust)] font-semibold">
                      Literary &amp; Cinema Studies
                    </span>
                    <span className="font-mono text-[11px] text-[var(--muted)]">
                      1995 – Present
                    </span>
                  </div>

                  <div className="flex justify-center items-center py-2">
                    <Image
                      src="/illustration-research.svg"
                      alt="Research and scholarship illustration"
                      width={340}
                      height={340}
                      className="w-full max-w-[280px] h-auto"
                      priority
                    />
                  </div>

                  <div className="mt-4 pt-4 border-t border-[var(--line)] space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[var(--muted)]">Monograph:</span>
                      <strong className="text-[var(--ink)] font-medium">
                        Michael Ondaatje’s Fiction
                      </strong>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[var(--muted)]">
                        Current Focus:
                      </span>
                      <span className="text-[var(--rust)] font-medium">
                        InDie Shakespeare
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="border-b border-[var(--line)] bg-[var(--paper-deep)]">
        <div className="container">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[var(--line)]">
              <div className="p-6 md:p-8 flex flex-col gap-1">
                <span className="font-serif text-3xl md:text-4xl text-[var(--rust)] font-medium">
                  04
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                  Ph.D. Scholars Guided
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
                  2011
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                  Monograph Published
                </span>
              </div>
              <div className="p-6 md:p-8 flex flex-col gap-1">
                <span className="font-serif text-3xl md:text-4xl text-[var(--rust)] font-medium">
                  UGC
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                  Funded Minor Project (2006)
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Areas of Research ── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="mb-10">
              <div className="eyebrow">Academic Focus</div>
              <h2 className="section-title">Areas of research</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {researchAreas.map((area, idx) => (
              <Reveal key={area.title} delay={idx * 0.06}>
                <div className="border border-[var(--line)] bg-[var(--paper)] p-7 h-full flex flex-col justify-between hover:border-[var(--rust)] transition-colors">
                  <div>
                    <span className="font-mono text-xs text-[var(--rust)] uppercase tracking-widest block mb-2 font-semibold">
                      0{idx + 1}
                    </span>
                    <h3 className="font-serif text-2xl font-medium tracking-tight mb-3">
                      {area.title}
                    </h3>
                    <p className="text-sm text-[#5e5b54] leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.36}>
              <div className="border border-dashed border-[var(--line)] bg-[var(--paper-deep)] p-7 h-full flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-[var(--rust)] uppercase tracking-widest block mb-2 font-semibold">
                    06 · Interdisciplinary
                  </span>
                  <h3 className="font-serif text-2xl font-medium tracking-tight mb-3">
                    Cultural Translation
                  </h3>
                  <p className="text-sm text-[#5e5b54] leading-relaxed">
                    Bridging textual hermeneutics, South Asian historiography,
                    and cinematic transmediation across regional and global
                    contexts.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Academic Book & Current Project (Zigzag / 2-Column Showcase) ── */}
      <section className="section section-tint border-y border-[var(--line)]">
        <div className="container space-y-16">
          {/* Published Book */}
          <Reveal>
            <div className="border border-[var(--line)] bg-[var(--paper)] p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-wider bg-[var(--paper-deep)] text-[var(--rust)] px-3 py-1 border border-[var(--line)] font-semibold">
                      Academic Monograph
                    </span>
                    <span className="font-mono text-xs text-[var(--muted)]">
                      Published · 2011
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-[var(--ink)]">
                    Michael Ondaatje’s Fiction: Poetics of Exile
                  </h2>

                  <p className="text-base md:text-lg text-[#5e5b54] leading-relaxed">
                    A comprehensive critical monograph examining the themes of
                    diaspora, memory, personal histories, and the poetics of
                    displacement in the narrative works of Sri Lankan-Canadian
                    author Michael Ondaatje.
                  </p>

                  <div className="pt-2 text-sm text-[var(--muted)] font-mono">
                    Published by:{" "}
                    <strong className="text-[var(--ink)]">
                      Rawat Publications, New Delhi and Jaipur, 2011
                    </strong>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-[var(--paper-deep)] p-6 border border-[var(--line)] flex flex-col justify-between h-full">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[var(--paper)] flex items-center justify-center text-[var(--rust)] mb-4">
                      <BookOpen size={20} />
                    </div>
                    <h4 className="font-serif text-lg font-medium text-[var(--ink)] mb-2">
                      Key Thematic Threads
                    </h4>
                    <ul className="text-xs text-[#5e5b54] space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--rust)]" />
                        Poetics of displacement &amp; return
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--rust)]" />
                        Historiographic metafiction
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--rust)]" />
                        Exilic memory &amp; identity
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Current Project */}
          <Reveal delay={0.1}>
            <div className="border border-[var(--line)] bg-[var(--paper)] p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--rust)] opacity-5 rounded-bl-full pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-wider bg-[#a74d35]/10 text-[var(--rust)] px-3 py-1 border border-[#a74d35]/30 font-semibold flex items-center gap-1.5">
                      <Sparkles size={13} /> Current Project in Progress
                    </span>
                    <span className="font-mono text-xs text-[var(--muted)]">
                      Forthcoming Monograph
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-[var(--ink)]">
                    InDie Shakespeare
                  </h2>

                  <p className="text-base md:text-lg text-[#5e5b54] leading-relaxed">
                    <em>InDie Shakespeare</em> is a monograph in progress on
                    Vishal Bhardwaj’s adaptations of Shakespeare. The project
                    examines the transformation of Shakespeare within Indian
                    cinematic and cultural contexts. It is presented here as
                    ongoing research exploring the intersections of dramatic
                    traditions, indigenous idioms, and cinematic realism.
                  </p>

                  <div className="pt-2 text-sm text-[var(--muted)] font-mono">
                    Focus:{" "}
                    <span className="text-[var(--ink)] font-medium">
                      Maqbool (Macbeth), Omkara (Othello), and Haider (Hamlet)
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-[var(--paper-deep)] p-6 border border-[var(--line)] flex flex-col justify-between h-full">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[var(--paper)] flex items-center justify-center text-[var(--rust)] mb-4">
                      <Film size={20} />
                    </div>
                    <h4 className="font-serif text-lg font-medium text-[var(--ink)] mb-2">
                      Research Trajectory
                    </h4>
                    <p className="text-xs text-[#5e5b54] leading-relaxed">
                      Investigating how local underworld politics, caste
                      tensions, and regional conflicts transfigure early modern
                      tragedy into contemporary Indian cinematic idioms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Selected Book Chapters ── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="mb-10">
              <div className="eyebrow">Edited Volumes</div>
              <h2 className="section-title">Selected book chapters</h2>
            </div>
          </Reveal>

          <div className="border border-[var(--line)] divide-y divide-[var(--line)] bg-[var(--paper)]">
            {bookChapters.map((chap, i) => (
              <Reveal key={chap.title} delay={i * 0.08}>
                <div className="p-6 md:p-8 hover:bg-[var(--paper-deep)]/40 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="space-y-2 max-w-3xl">
                      <span className="font-mono text-xs text-[var(--rust)] font-semibold uppercase tracking-wider block">
                        Chapter {i + 1}
                      </span>
                      <h3 className="font-serif text-xl md:text-2xl font-medium tracking-tight text-[var(--ink)]">
                        “{chap.title}”
                      </h3>
                      <p className="text-sm text-[#5e5b54]">
                        In <em className="text-[var(--ink)]">{chap.book}</em>,{" "}
                        {chap.editor}.
                      </p>
                    </div>
                    <div className="md:text-right shrink-0">
                      <span className="inline-block font-mono text-xs bg-[var(--paper-deep)] px-3 py-1 border border-[var(--line)] text-[var(--muted)]">
                        {chap.publisher}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Research Guidance & Mentorship ── */}
      <section className="section section-tint border-y border-[var(--line)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="eyebrow">Academic Leadership</div>
                <h2 className="section-title">Research guidance</h2>
                <p className="body-copy mt-4">
                  Over three decades of active teaching and scholarship, I have
                  fostered advanced inquiry in English literature, literary
                  theory, and cultural studies through doctoral and postgraduate
                  supervision.
                </p>
                <div className="hero-actions mt-8">
                  <Link className="button" href="/contact">
                    Doctoral Enquiries <ArrowUpRight size={16} />
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.12}>
                <div className="space-y-4">
                  <div className="border border-[var(--line)] bg-[var(--paper)] p-6 flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-[var(--paper-deep)] flex items-center justify-center text-[var(--rust)] shrink-0">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl font-medium text-[var(--ink)]">
                        Doctoral Supervision (Ph.D.)
                      </h4>
                      <p className="text-sm text-[#5e5b54] mt-1 leading-relaxed">
                        I have guided <strong>four scholars</strong> to
                        successful Ph.D. completion in areas covering
                        postcolonial critique, diasporic memory, and modern
                        drama.
                      </p>
                    </div>
                  </div>

                  <div className="border border-[var(--line)] bg-[var(--paper)] p-6 flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-[var(--paper-deep)] flex items-center justify-center text-[var(--rust)] shrink-0">
                      <Layers size={24} />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl font-medium text-[var(--ink)]">
                        Postgraduate Dissertations (M.Phil.)
                      </h4>
                      <p className="text-sm text-[#5e5b54] mt-1 leading-relaxed">
                        Supervised <strong>24 M.Phil. dissertations</strong> on
                        diverse themes across Indian Writing in English,
                        narrative theory, and translation studies.
                      </p>
                    </div>
                  </div>

                  <div className="border border-[var(--line)] bg-[var(--paper)] p-6 flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-[var(--paper-deep)] flex items-center justify-center text-[var(--rust)] shrink-0">
                      <Award size={24} />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl font-medium text-[var(--ink)]">
                        UGC Minor Research Project
                      </h4>
                      <p className="text-sm text-[#5e5b54] mt-1 leading-relaxed">
                        Successfully completed a University Grants Commission
                        (UGC) funded Minor Research Project in 2006.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Selected Conference Presentations ── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="mb-10">
              <div className="eyebrow">Conferences &amp; Keynotes</div>
              <h2 className="section-title">
                Selected conference presentations
              </h2>
            </div>
          </Reveal>

          <div className="border border-[var(--line)] bg-[var(--paper)] divide-y divide-[var(--line)]">
            {conferencePresentations.map((conf, index) => (
              <Reveal key={conf.title} delay={index * 0.07}>
                <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-start justify-between gap-6 hover:bg-[var(--paper-deep)]/40 transition-colors">
                  <div className="space-y-2 max-w-3xl">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs uppercase tracking-wider text-[var(--rust)] font-semibold">
                        {conf.type}
                      </span>
                      <span className="text-[var(--muted)] text-xs">·</span>
                      <span className="font-mono text-xs text-[var(--muted)]">
                        {conf.year}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-medium tracking-tight text-[var(--ink)]">
                      “{conf.title}”
                    </h3>

                    <p className="text-sm text-[#5e5b54] leading-relaxed">
                      {conf.event}.
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          {/* 
          <Reveal delay={0.2}>
            <div className="mt-12 text-center">
              <a className="button" href="/events#resources">
                Download Full Academic CV <Download size={16} />
              </a>
            </div>
          </Reveal> */}
        </div>
      </section>
    </main>
  );
}
