import type { Metadata } from "next";
import Image from "next/image";
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
  Phone,
} from "lucide-react";
import { books } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { BuyNowButton } from "@/components/qr-modal";

const bookCoverDimensions: Record<
  number,
  { width: number; height: number; aspect: string }
> = {
  1: { width: 1028, height: 1408, aspect: "1028/1408" },
  2: { width: 1086, height: 1448, aspect: "1086/1448" },
  3: { width: 1086, height: 1448, aspect: "1086/1448" },
  4: { width: 1024, height: 1536, aspect: "1024/1536" },
  5: { width: 1024, height: 1536, aspect: "1024/1536" },
  6: { width: 1024, height: 1536, aspect: "1024/1536" },
};

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
      {/* ── Redesigned Academic Book Detail Header ── */}
      <section className="border-b border-[var(--line)] bg-gradient-to-b from-[var(--paper-deep)]/60 via-[var(--paper)] to-[var(--paper)] pt-8 pb-10">
        <div className="container">
          {/* Breadcrumbs & Volume Pill */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[var(--line)]/60">
            <Link
              href="/books"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--muted)] hover:text-[var(--rust)] transition-colors group"
            >
              <ArrowLeft
                size={13}
                className="transition-transform group-hover:-translate-x-1"
              />
              <span>The Literary Compass</span>
              <span className="text-[var(--line)]">/</span>
              <span>All Volumes</span>
            </Link>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider bg-[var(--paper-deep)] border border-[var(--line)] text-[var(--rust)] font-semibold uppercase">
                Volume 0{book.semesterNumber} · {book.semester}
              </span>
              <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono tracking-wider bg-white/80 border border-[var(--line)] text-[var(--muted)] uppercase">
                MGSU NEP Syllabus
              </span>
            </div>
          </div>

          <Reveal>
            {/* Stately, proportionate serif title */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[var(--ink)] leading-[1.14] max-w-4xl text-balance">
              {book.title}
            </h1>

            {/* Subtitle / Theme */}
            <p className="font-serif italic text-lg sm:text-xl text-[var(--rust)] mt-3 max-w-3xl leading-relaxed">
              {book.subtitle}
            </p>

            {/* Academic Meta Ribbon */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 mt-6 pt-5 border-t border-[var(--line)] text-xs font-mono text-[var(--muted)]">
              <div>
                <span className="text-[var(--rust)] uppercase tracking-wider font-semibold">
                  Chief Editor:
                </span>{" "}
                <span className="text-[var(--ink)] font-medium">
                  {book.chiefEditor}
                </span>
              </div>
              <span className="hidden md:inline text-[var(--line)]">|</span>
              <div>
                <span className="text-[var(--rust)] uppercase tracking-wider font-semibold">
                  Course:
                </span>{" "}
                <span className="text-[var(--ink)] font-medium">
                  {book.course}
                </span>
              </div>
              <span className="hidden md:inline text-[var(--line)]">|</span>
              <div>
                <span className="text-[var(--rust)] uppercase tracking-wider font-semibold">
                  Publisher:
                </span>{" "}
                <span className="text-[var(--ink)] font-medium">
                  Surya Prakashan Mandir
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Volume Content Layout ── */}
      <section className="section !pt-12">
        <div className="container detail-layout">
          {/* Sidebar */}
          <aside className="detail-aside">
            <div className="space-y-6">
              {/* 3D Realistic Book Cover Showcase */}
              <div className="relative aspect-[1028/1408] w-full max-w-[260px] mx-auto p-3.5 rounded-sm bg-gradient-to-b from-[#faf8f3] via-[#f3eee3] to-[#e8e1d2] border border-[#dcd4c3] shadow-md flex items-center justify-center">
                <div className="relative h-full w-auto aspect-[1028/1408] max-w-full drop-shadow-[0_12px_24px_rgba(20,15,10,0.2)]">
                  {/* Book Cover Image with exact dimensions */}
                  <Image
                    src={`/sem-${book.semesterNumber}.jpeg`}
                    alt={`${book.title} - ${book.semester}`}
                    width={
                      (
                        bookCoverDimensions[book.semesterNumber] || {
                          width: 1028,
                        }
                      ).width
                    }
                    height={
                      (
                        bookCoverDimensions[book.semesterNumber] || {
                          height: 1408,
                        }
                      ).height
                    }
                    className="h-full w-auto object-contain rounded-[2px] ring-1 ring-black/10"
                    priority
                    quality={95}
                  />
                  {/* Spine Crease Highlight */}
                  <div className="absolute inset-y-0 left-0 w-[4px] bg-gradient-to-r from-black/25 via-white/10 to-transparent pointer-events-none rounded-l-[2px]" />
                </div>
              </div>

              {/* Quick Buy in Sidebar */}
              <div className="pt-1">
                <BuyNowButton
                  volumeTitle={book.title}
                  semester={book.semester}
                  label="Order Volume (QR)"
                  className="button w-full justify-center text-xs py-2.5"
                />
              </div>

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
              <div className="border border-[var(--line)] bg-[var(--paper-deep)] p-6 sm:p-8 relative overflow-hidden shadow-sm">
                {/* Left accent spine */}
                <div
                  className="absolute top-0 left-0 bottom-0 w-1.5"
                  style={{ backgroundColor: book.color }}
                />

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pl-2">
                  <div className="max-w-xl">
                    <div className="font-mono text-xs uppercase tracking-widest text-[var(--rust)] mb-1 font-semibold">
                      Procurement &amp; Orders · Surya Prakashan Mandir
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--ink)] leading-snug">
                      Ready to order this volume?
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5e5b54] mt-2 leading-relaxed">
                      Please contact Surya Prakashan Mandir specifying the
                      semester volume, number of copies required, and your
                      delivery PIN code to confirm price, stock, and delivery
                      charges.
                    </p>

                    {/* Quick Publisher Contact Strip */}
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-4 pt-3 border-t border-[var(--line)] text-xs text-[var(--muted)] font-mono">
                      <span>Publisher: Dr. Prashant Bissa</span>
                      <span className="hidden sm:inline">·</span>
                      <a
                        href="tel:+919829280717"
                        className="hover:text-[var(--rust)] transition-colors inline-flex items-center gap-1 text-[var(--ink)] font-semibold"
                      >
                        <Phone size={12} /> +91 98292 80717
                      </a>
                    </div>
                  </div>

                  {/* Clean Action Buttons */}
                  <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                    <BuyNowButton
                      volumeTitle={book.title}
                      semester={book.semester}
                      label="Buy Now (Scan QR)"
                      className="button text-xs py-3 px-5 shadow-sm"
                    />
                    <a
                      href={`https://wa.me/919829280717?text=${encodeURIComponent(
                        `Hello Dr. Bissa, I would like to order/enquire about The Literary Compass ${book.semester}: ${book.title}.`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button secondary text-xs py-3 px-4"
                    >
                      Enquire via WhatsApp <ArrowUpRight size={14} />
                    </a>
                  </div>
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
