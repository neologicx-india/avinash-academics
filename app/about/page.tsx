import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Download, GraduationCap, BookOpen, Film, Mic } from "lucide-react";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = { title: "About — Professor Avinash Jodha" };

const specialisations = [
  "Postcolonial Studies",
  "Diaspora Studies",
  "Literary Theory & Criticism",
  "Indian Writing in English",
  "Cinema & Adaptation Studies",
];

const stats = [
  { value: "2005", label: "Ph.D. Completed" },
  { value: "2018", label: "Professor Since" },
  { value: "6 Vol.", label: "Literary Compass" },
  { value: "30+", label: "Years Teaching" },
];

const areas = [
  {
    icon: <BookOpen size={22} />,
    title: "Literary Scholarship",
    desc: "Postcolonial literature, diaspora narratives, and literary theory examined across South Asian and global contexts.",
  },
  {
    icon: <Film size={22} />,
    title: "Cinema & Adaptation",
    desc: "How literature translates to screen — from Ondaatje's prose to Vishal Bhardwaj's Shakespeare trilogy.",
  },
  {
    icon: <GraduationCap size={22} />,
    title: "Teaching & Mentorship",
    desc: "Doctoral supervision, postgraduate guidance, and close-reading pedagogy at Government College Gangashahar.",
  },
  {
    icon: <Mic size={22} />,
    title: "Creative Practice",
    desc: "Documentary filmmaking, translation of Rajasthani poetry and fiction into English, and scriptwriting.",
  },
];

export default function About() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="about-hero">
        <div className="container">
          <Reveal>
            <div className="eyebrow">About</div>
            <h1 className="display about-hero-title">
              Professor<br />
              <em>Avinash Jodha.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="about-hero-lede">
              Professor and Head of the Department of English at Government
              College Gangashahar, Bikaner — bringing literary scholarship into
              conversation with cinema, translation and creative practice.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="about-stats-strip">
        <div className="container">
          <div className="about-stats">
            {stats.map((s) => (
              <div className="about-stat" key={s.label}>
                <span className="about-stat-value">{s.value}</span>
                <span className="about-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Profile & Specialisations ── */}
      <section className="section">
        <div className="container">
          <div className="about-profile-grid">
            <Reveal>
              <div className="about-profile-text">
                <div className="eyebrow" style={{ marginBottom: "18px" }}>Profile</div>
                <p>
                  I am Professor and Head of the Department of English at
                  Government College Gangashahar, Bikaner. My work brings
                  literary scholarship into conversation with cinema, translation
                  and creative practice. I am particularly interested in the
                  ways texts and films represent belonging: how people remember
                  places, negotiate identities and respond to displacement and
                  change.
                </p>
                <p>
                  Across these fields, I examine the relationships between
                  narrative, history, culture and the individual. My academic
                  experience includes doctoral supervision, postgraduate research
                  guidance, a UGC-funded Minor Research Project completed in
                  2006, and presentations at national and international events.
                </p>
                <p>
                  I produced <em>You See</em> in 2008 and directed a documentary
                  on Central University of Rajasthan in 2011. I am Chief Editor
                  of <em>The Literary Compass</em> series and currently
                  developing <em>InDie Shakespeare</em>, a monograph on Vishal
                  Bhardwaj&apos;s Shakespeare trilogy.
                </p>
                <div className="hero-actions" style={{ marginTop: "32px" }}>
                  <Link className="button" href="/resources">
                    Download Academic CV <Download size={16} />
                  </Link>
                  <Link className="button secondary" href="/contact">
                    Academic Enquiries <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="about-profile-side">
                <div className="about-spec-block">
                  <div className="eyebrow" style={{ marginBottom: "16px" }}>Areas of Specialisation</div>
                  <ul className="about-spec-list">
                    {specialisations.map((s) => (
                      <li key={s} className="about-spec-item">{s}</li>
                    ))}
                  </ul>
                </div>

                <div className="about-edu-block">
                  <div className="eyebrow" style={{ marginBottom: "16px" }}>Education</div>
                  <div className="about-edu-item">
                    <span className="about-edu-year">2005</span>
                    <div>
                      <strong>Ph.D. in English</strong>
                      <p>University of Rajasthan, Jaipur</p>
                    </div>
                  </div>
                  <div className="about-edu-item">
                    <span className="about-edu-year">1995</span>
                    <div>
                      <strong>M.A. in English</strong>
                      <p>University of Rajasthan, Jaipur</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Areas of work ── */}
      <section className="section section-tint">
        <div className="container">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: "8px" }}>Work &amp; Research</div>
            <h2 className="section-title" style={{ marginBottom: "48px" }}>
              Areas of work
            </h2>
          </Reveal>
          <div className="about-areas-grid">
            {areas.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <div className="about-area-card">
                  <div className="about-area-icon">{a.icon}</div>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Short biography ── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: "8px" }}>For Event Organisers</div>
            <h2 className="section-title" style={{ marginBottom: "36px" }}>
              Short biography
            </h2>
            <div className="about-bio-card">
              <div className="about-bio-quote">"</div>
              <p>
                Professor Avinash Jodha is Professor and Head of the Department
                of English at Government College Gangashahar, Bikaner. His
                research interests include postcolonial literature, diaspora,
                literary theory, Indian Writing in English, and cinema and
                adaptation studies. He is the author of{" "}
                <em>Michael Ondaatje&apos;s Fiction: Poetics of Exile</em> and
                Chief Editor of <em>The Literary Compass</em> series. His work
                also includes documentary filmmaking, translation and
                scriptwriting. He is currently developing{" "}
                <em>InDie Shakespeare</em>, a monograph on Vishal
                Bhardwaj&apos;s Shakespeare trilogy.
              </p>
              <div className="about-bio-footer">
                <Link className="button secondary" href="/contact">
                  Book for an event <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
