import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Download,
  BookOpen,
  GraduationCap,
  CheckCircle2,
  Building,
  Users,
  Info,
} from "lucide-react";
import { books } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);
  if (!book) return { title: "Volume Not Found" };

  return {
    title: `${book.title} — ${book.semester} | The Literary Compass`,
    description: book.description,
  };
}

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const currentIndex = books.findIndex((b) => b.slug === slug);
  const book = books[currentIndex];

  if (!book) notFound();

  const prevBook = currentIndex > 0 ? books[currentIndex - 1] : null;
  const nextBook =
    currentIndex < books.length - 1 ? books[currentIndex + 1] : null;

  return (
    <main>
      {/* ── Breadcrumb & Page Hero ── */}
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <div className="mb-4">
              <Link
                href="/books"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[var(--muted)] hover:text-[var(--rust)] transition-colors"
              >
                <ArrowLeft size={13} /> Back to all volumes
              </Link>
            </div>
            <div className="eyebrow">
              The Literary Compass · {book.semester}
            </div>
            <h1 className="display max-w-4xl text-balance">
              {book.title}
            </h1>
            <p className="hero-lede font-serif italic text-[var(--rust)] !mt-4 text-xl md:text-2xl">
              {book.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="hero-actions mt-8">
              <Link
                className="button"
                href={`/contact?subject=${encodeURIComponent(
                  `Enquiry for The Literary Compass ${book.semester}`
                )}`}
              >
                Enquire About This Volume <ArrowUpRight size={16} />
              </Link>
              <Link className="button secondary" href="/brochure.pdf">
                Download the Series Brochure <Download size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Volume Content Layout ── */}
      <section className="section">
        <div className="container detail-layout">
          {/* Sidebar */}
          <aside className="detail-aside">
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--muted)] block mb-1">
                  Volume Identifier
                </span>
                <strong className="text-sm font-semibold text-[var(--ink)]">
                  Volume 0{book.semesterNumber} · {book.semester}
                </strong>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--muted)] block mb-1">
                  Course
                </span>
                <span className="text-xs text-[var(--ink)] block">
                  {book.course}
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--muted)] block mb-1">
                  University
                </span>
                <span className="text-xs text-[var(--ink)] block">
                  {book.university}
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--muted)] block mb-1">
                  Publisher
                </span>
                <span className="text-xs text-[var(--ink)] block">
                  {book.publisher}
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--muted)] block mb-1">
                  Chief Editor
                </span>
                <span className="text-xs text-[var(--ink)] block font-medium">
                  {book.chiefEditor}
                </span>
              </div>

              <div className="pt-4 border-t border-[var(--line)]">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--rust)] block mb-2 font-semibold">
                  All 6 Semesters
                </span>
                <ul className="space-y-1.5 text-xs">
                  {books.map((b) => (
                    <li key={b.slug}>
                      <Link
                        href={`/books/${b.slug}`}
                        className={`block py-1 px-2 rounded transition-colors ${
                          b.slug === book.slug
                            ? "bg-[var(--paper-deep)] font-semibold text-[var(--rust)]"
                            : "text-[var(--muted)] hover:text-[var(--ink)]"
                        }`}
                      >
                        {b.semester}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="detail-content space-y-12">
            {/* 1. Overview */}
            <Reveal>
              <div>
                <div className="eyebrow mb-2">Volume Overview</div>
                <h2>Reading with context and care</h2>
                <div className="text-base md:text-lg leading-relaxed text-[#5e5b54] space-y-4">
                  <p>{book.description}</p>
                </div>
              </div>
            </Reveal>

            {/* 2. Selected Coverage */}
            <Reveal delay={0.08}>
              <div className="border border-[var(--line)] bg-[var(--paper-deep)] p-8">
                <div className="eyebrow mb-2">Curriculum Focus</div>
                <h3 className="font-serif text-2xl font-medium tracking-tight mb-3">
                  Selected coverage
                </h3>
                <p className="text-base text-[var(--ink)] font-medium leading-relaxed">
                  {book.coverage}
                </p>
                <div className="mt-4 pt-4 border-t border-[var(--line)] text-xs text-[#5e5b54]">
                  Key authors, foundational essays, dramatic masterworks, and
                  classical devotional poetry aligned with the MGSU BA English
                  curriculum.
                </div>
              </div>
            </Reveal>

            {/* 3. Study Support */}
            <Reveal delay={0.12}>
              <div>
                <div className="eyebrow mb-2">Pedagogical Apparatus</div>
                <h2>Study support</h2>
                <p className="text-sm md:text-base text-[#5e5b54] mb-6">
                  Literary foundations, critical study, detailed summaries,
                  glossaries, passage explanations, answered questions and MCQs.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {book.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 p-3.5 border border-[var(--line)] bg-[var(--paper)]"
                    >
                      <CheckCircle2
                        size={17}
                        className="text-[var(--rust)] shrink-0 mt-0.5"
                      />
                      <span className="text-xs text-[var(--ink)] font-medium leading-normal">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* 4. Complete Academic Specification Table */}
            <Reveal delay={0.15}>
              <div className="border border-[var(--line)] bg-[var(--paper)]">
                <div className="p-6 border-b border-[var(--line)] bg-[var(--paper-deep)]">
                  <h3 className="font-serif text-xl font-medium tracking-tight">
                    Volume details &amp; academic credits
                  </h3>
                </div>
                <div className="divide-y divide-[var(--line)] text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-3 p-4">
                    <span className="font-mono text-xs text-[var(--muted)] uppercase tracking-wider">
                      Course
                    </span>
                    <span className="sm:col-span-2 text-[var(--ink)] font-medium mt-1 sm:mt-0">
                      {book.course}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 p-4">
                    <span className="font-mono text-xs text-[var(--muted)] uppercase tracking-wider">
                      University
                    </span>
                    <span className="sm:col-span-2 text-[var(--ink)] font-medium mt-1 sm:mt-0">
                      {book.university}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 p-4">
                    <span className="font-mono text-xs text-[var(--muted)] uppercase tracking-wider">
                      Chief Editor
                    </span>
                    <span className="sm:col-span-2 text-[var(--ink)] font-medium mt-1 sm:mt-0">
                      {book.chiefEditor}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 p-4">
                    <span className="font-mono text-xs text-[var(--muted)] uppercase tracking-wider">
                      Co-editors
                    </span>
                    <span className="sm:col-span-2 text-[var(--ink)] font-medium mt-1 sm:mt-0">
                      {book.coEditors}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 p-4">
                    <span className="font-mono text-xs text-[var(--muted)] uppercase tracking-wider">
                      Publisher
                    </span>
                    <span className="sm:col-span-2 text-[var(--ink)] font-medium mt-1 sm:mt-0">
                      {book.publisher}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 p-4">
                    <span className="font-mono text-xs text-[var(--muted)] uppercase tracking-wider">
                      Availability &amp; Price
                    </span>
                    <span className="sm:col-span-2 text-[var(--rust)] font-medium mt-1 sm:mt-0">
                      {book.availability}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 5. Ordering & Enquiries CTA */}
            <Reveal delay={0.18}>
              <div className="p-8 border-2 border-[var(--ink)] bg-[var(--paper-deep)] flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-[var(--rust)] mb-1">
                    Procurement &amp; Orders
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-[var(--ink)]">
                    Ready to order this volume?
                  </h3>
                  <p className="text-xs text-[#5e5b54] mt-2 max-w-md">
                    Please contact Surya Prakashan Mandir specifying the semester
                    volume, number of copies required, and your delivery PIN
                    code.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    className="button"
                    href={`/contact?subject=${encodeURIComponent(
                      `Ordering enquiry for The Literary Compass ${book.semester}`
                    )}`}
                  >
                    Enquire About This Volume <ArrowUpRight size={16} />
                  </Link>
                  <Link className="button secondary" href="/brochure.pdf">
                    Brochure <Download size={16} />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* 6. Volume Navigation (Prev / Next) */}
            <div className="pt-8 border-t border-[var(--line)] grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevBook ? (
                <Link
                  href={`/books/${prevBook.slug}`}
                  className="p-4 border border-[var(--line)] hover:border-[var(--rust)] bg-[var(--paper)] transition-colors group flex flex-col"
                >
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--muted)] flex items-center gap-1 group-hover:text-[var(--rust)]">
                    <ArrowLeft size={12} /> Previous Semester
                  </span>
                  <strong className="font-serif text-base font-medium mt-1 text-[var(--ink)]">
                    {prevBook.semester}: {prevBook.title}
                  </strong>
                </Link>
              ) : (
                <div />
              )}

              {nextBook ? (
                <Link
                  href={`/books/${nextBook.slug}`}
                  className="p-4 border border-[var(--line)] hover:border-[var(--rust)] bg-[var(--paper)] transition-colors group flex flex-col text-right sm:ml-auto w-full"
                >
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--muted)] flex items-center justify-end gap-1 group-hover:text-[var(--rust)]">
                    Next Semester <ArrowRight size={12} />
                  </span>
                  <strong className="font-serif text-base font-medium mt-1 text-[var(--ink)]">
                    {nextBook.semester}: {nextBook.title}
                  </strong>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
