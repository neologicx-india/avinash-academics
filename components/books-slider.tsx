"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { books } from "@/lib/content";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

export function BooksSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Top Header Controls with Navigation Arrows */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--rust)] font-semibold">
            All Six Semesters · Sequential Volumes
          </span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
            aria-label="Previous volume"
            className={`p-2.5 rounded-full border border-[var(--line)] bg-[var(--paper)] transition-all cursor-pointer ${
              !isBeginning
                ? "hover:border-[var(--rust)] hover:bg-[var(--paper-deep)] text-[var(--ink)]"
                : "opacity-35 cursor-not-allowed text-[var(--muted)]"
            }`}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
            aria-label="Next volume"
            className={`p-2.5 rounded-full border border-[var(--line)] bg-[var(--paper)] transition-all cursor-pointer ${
              !isEnd
                ? "hover:border-[var(--rust)] hover:bg-[var(--paper-deep)] text-[var(--ink)]"
                : "opacity-35 cursor-not-allowed text-[var(--muted)]"
            }`}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="books-swiper-wrapper overflow-hidden w-full">
        <Swiper
          modules={[Navigation, Pagination, Keyboard, A11y]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          grabCursor={true}
          keyboard={{ enabled: true }}
          pagination={{
            clickable: true,
            el: ".books-swiper-pagination",
          }}
          slidesPerView="auto"
          spaceBetween={20}
          className="pb-2 overflow-hidden"
        >
          {books.map((book) => {
            const dim = bookCoverDimensions[book.semesterNumber] || {
              width: 1028,
              height: 1408,
              aspect: "1028/1408",
            };

            return (
              <SwiperSlide
                key={book.slug}
                className="!w-[230px] sm:!w-[250px] md:!w-[270px] !h-auto shrink-0"
              >
                <div className="h-full border border-[var(--line)] bg-[var(--paper)] p-4 flex flex-col justify-between rounded-sm shadow-xs transition-all duration-300 hover:shadow-lg hover:border-[var(--rust)]/60 relative select-none">
                  <div>
                    {/* Card Meta */}
                    <div className="flex items-center justify-between mb-3 text-xs font-mono tracking-wider text-[var(--muted)]">
                      <span className="text-[var(--rust)] font-semibold">
                        VOL. 0{book.semesterNumber}
                      </span>
                      <span>{book.semester}</span>
                    </div>

                    {/* 3D Book Showcase Stage with exact dimensions */}
                    <Link
                      href={`/books/${book.slug}`}
                      className="group/img block relative w-full aspect-[1028/1408] mb-3.5 p-3 rounded-sm bg-gradient-to-b from-[#faf8f3] via-[#f3eee3] to-[#e8e1d2] border border-[#dcd4c3] overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-[var(--rust)]/40"
                      title={`View ${book.title}`}
                    >
                      {/* Centered 3D Book */}
                      <div className="relative w-full h-full flex items-center justify-center">
                        <div className="relative h-full w-auto aspect-[1028/1408] max-w-full transition-transform duration-300 ease-out group-hover/img:-translate-y-1.5 group-hover/img:scale-[1.02]">
                          {/* Book drop shadow */}
                          <div className="absolute inset-0 bg-black/25 blur-md translate-y-2 scale-[0.96] rounded-[2px] transition-all duration-300 group-hover/img:blur-lg group-hover/img:translate-y-3.5 group-hover/img:bg-black/30" />

                          {/* Book Cover Image */}
                          <Image
                            src={`/sem-${book.semesterNumber}.jpeg`}
                            alt={`${book.title} - ${book.semester}`}
                            width={dim.width}
                            height={dim.height}
                            className="relative z-10 h-full w-auto object-contain rounded-[2px] shadow-[0_4px_10px_rgba(0,0,0,0.12)] ring-1 ring-black/10 pointer-events-none"
                            quality={92}
                          />
                        </div>
                      </div>
                    </Link>

                    {/* Title & Subtitle */}
                    <h4 className="font-serif text-base font-medium tracking-tight leading-snug mb-1 hover:text-[var(--rust)] transition-colors line-clamp-2">
                      <Link href={`/books/${book.slug}`}>{book.title}</Link>
                    </h4>

                    <p className="text-[11px] uppercase tracking-wider font-mono text-[var(--muted)] mb-3 line-clamp-1">
                      {book.subtitle}
                    </p>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-3 border-t border-[var(--line)]">
                    <Link
                      href={`/books/${book.slug}`}
                      className="button text-xs py-2 px-3 w-full justify-center"
                    >
                      Explore Volume <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* Swiper Pagination Bullets Container */}
      <div className="books-swiper-pagination flex items-center justify-center gap-2 mt-6" />
    </div>
  );
}
