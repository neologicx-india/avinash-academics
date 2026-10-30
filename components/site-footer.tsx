import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Col 1: Logo & Biography */}
        <div>
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt="Professor Avinash Jodha"
              width={180}
              height={68}
              className="h-10 md:h-16 w-auto object-contain  brightness-0 invert"
            />
          </Link>
          <p className="footer-note leading-relaxed max-w-sm mt-1">
            Professor Avinash Jodha is an English academic working across
            literature, cinema and adaptation. He is Chief Editor of The
            Literary Compass series.
          </p>
        </div>

        {/* Col 2: Navigation Links */}
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-[#89877f] mb-4">
            Navigation
          </div>
          <div className="footer-links">
            <Link href="/about">About</Link>
            <Link href="/books">Books</Link>
            <Link href="/research">Research and Publications</Link>
            <Link href="/events#resources">Resources</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        {/* Col 3: Academic Office & Publisher Meta */}
        <div className="footer-meta space-y-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#89877f] mb-1">
              Academic Enquiries
            </div>
            <p className="text-xs text-[#aaa79d] leading-relaxed">
              Govt. College Gangashahar, Bikaner
              <br />
              <a
                href="mailto:avinashjodha@gmail.com"
                className="hover:text-[var(--rust)] underline"
              >
                avinashjodha@gmail.com
              </a>
              <br />
              <a href="tel:+917597743319" className="hover:text-[var(--rust)]">
                +91 75977 43319
              </a>
            </p>
          </div>
          <div className="pt-2 border-t border-[#45443f]/60">
            <div className="font-mono text-xs uppercase tracking-widest text-[#89877f] mb-1">
              Book Orders &amp; Distribution
            </div>
            <p className="text-xs text-[#aaa79d] leading-relaxed">
              Surya Prakashan Mandir, Bikaner
              <br />
              <a href="tel:+919829280717" className="hover:text-[var(--rust)]">
                +91 98292 80717
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="container footer-bottom flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <Image
            src="/favicon.png"
            alt="AJ Crest"
            width={24}
            height={24}
            className="w-6 h-6 rounded-full opacity-90 object-contain"
          />
          <span>© 2026 Professor Avinash Jodha. All rights reserved.</span>
        </div>
        <span>
          Publication rights remain with the respective rights holders.
        </span>
      </div>
    </footer>
  );
}
