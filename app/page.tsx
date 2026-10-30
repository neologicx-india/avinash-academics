import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { Reveal } from "@/components/reveal";

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="hero-home">
        <div className="container hero-inner">
          <div className="hero-copy">
            <Reveal>
              <div className="eyebrow">Professor · Avinash Jodha · Bikaner</div>
              <h1 className="display">
                Literature, cinema
                <br />
                and the <em>study of belonging.</em>
              </h1>
              <p>
                I am Professor and Head of the Department of English at
                Government College Gangashahar, Bikaner. My teaching and
                research explore postcolonial literature, diaspora, literary
                theory, Indian Writing in English, and the relationship between
                cinema and literary adaptation.
              </p>
              <p>
                Alongside academic writing, I work with documentary film,
                translation and scriptwriting. I am also Chief Editor of The
                Literary Compass, a six-volume companion series for BA English
                Literature based on the syllabus of Maharaja Ganga Singh
                University, Bikaner.
              </p>
              <div className="hero-actions">
                <Link className="button" href="/about">
                  About My Work <ArrowUpRight size={16} />
                </Link>
                <Link className="button secondary" href="/books">
                  Explore The Literary Compass <ArrowUpRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="hero-illustration" aria-hidden="true">
            <Reveal delay={0.2}>
              <Image
                src="/hero-illustration.svg"
                alt="Literature, cinema and belonging illustration"
                width={600}
                height={700}
                priority
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── The Literary Compass ── */}
      <section className="section section-tint">
        <div className="container">
          <div className="zigzag">
            <Reveal>
              <div className="zigzag-text">
                <div className="eyebrow">A complete companion</div>
                <h2 className="section-title">The Literary Compass</h2>
                <p className="body-copy">
                  Literature becomes more accessible when its historical
                  settings, language and central questions are explained with
                  care. The Literary Compass brings together literary
                  foundations, critical studies, detailed summaries, glossaries
                  and answered practice across six semesters. Explore the volume
                  for your semester and contact the publisher for availability
                  and ordering.
                </p>
                <div className="hero-actions">
                  <Link className="button" href="/books">
                    View All Six Volumes <ArrowUpRight size={16} />
                  </Link>
                  <Link className="button secondary" href="/brochure.pdf">
                    Download the Brochure <Download size={16} />
                  </Link>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="zigzag-visual">
                <Image
                  src="/illustration-compass.svg"
                  alt="The Literary Compass illustration"
                  width={480}
                  height={480}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Research & Writing ── */}
      <section className="section">
        <div className="container">
          <div className="zigzag zigzag-reverse">
            <Reveal>
              <div className="zigzag-text">
                <div className="eyebrow">Research and writing</div>
                <h2 className="section-title">Research &amp; Writing</h2>
                <p className="body-copy">
                  My research considers how literature and cinema represent
                  memory, exile, identity and belonging. My publications include{" "}
                  <em>Michael Ondaatje&apos;s Fiction: Poetics of Exile</em>. My
                  current monograph, <em>InDie Shakespeare</em>, examines Vishal
                  Bhardwaj&apos;s adaptations of Shakespeare.
                </p>
                <div className="hero-actions">
                  <Link className="button" href="/research">
                    Research and Publications <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="zigzag-visual">
                <Image
                  src="/illustration-research.svg"
                  alt="Research and writing illustration"
                  width={480}
                  height={480}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Teaching & Creative Practice ── */}
      <section className="section section-tint">
        <div className="container">
          <div className="zigzag">
            <Reveal>
              <div className="zigzag-text">
                <div className="eyebrow">Beyond the classroom</div>
                <h2 className="section-title">
                  Teaching and creative practice
                </h2>
                <p className="body-copy">
                  Teaching, research supervision and creative work inform one
                  another in my practice. Documentary filmmaking, translation
                  and scriptwriting offer further ways to explore the
                  relationship between representation and lived experience.
                </p>
                <div className="hero-actions">
                  <Link className="button" href="/teaching">
                    Teaching <ArrowUpRight size={16} />
                  </Link>
                  <Link className="button secondary" href="/creative-work">
                    Creative Work <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="zigzag-visual">
                <Image
                  src="/illustration-teaching.svg"
                  alt="Teaching and creative practice illustration"
                  width={480}
                  height={480}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Contact / Enquiries ── */}
      <section className="section">
        <div className="container">
          <div className="zigzag zigzag-reverse">
            <Reveal>
              <div className="zigzag-text">
                <div className="eyebrow">Get in touch</div>
                <h2 className="section-title">
                  Academic and book enquiries
                </h2>
                <p className="body-copy">
                  For lectures, seminars, research conversations or publication
                  enquiries, please get in touch. Book purchases and
                  institutional orders are handled through the publisher.
                </p>
                <div className="hero-actions">
                  <Link className="button" href="/contact">
                    Contact <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="zigzag-visual">
                <Image
                  src="/illustration-contact.svg"
                  alt="Contact illustration"
                  width={480}
                  height={480}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
