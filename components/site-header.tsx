"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navItems } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          href="/"
          className="flex items-center py-1 group shrink-0"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Professor Avinash Jodha"
            width={260}
            height={98}
            className="h-12 sm:h-16 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            priority
          />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="header-cta">
          Enquire <ArrowUpRight size={15} />
        </Link>
        <button
          className="menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
              <ArrowUpRight size={16} />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
