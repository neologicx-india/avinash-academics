import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Col 1: Wordmark & Biography */}
        <div>
          <Link href="/" className="wordmark footer-mark">
            <span>AJ</span>
            <span className="wordmark-name">Professor Avinash Jodha</span>
          </Link>
          <p className="footer-note leading-relaxed max-w-sm mt-4">
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
              <a
                href="tel:+917597743319"
                className="hover:text-[var(--rust)]"
              >
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
              <a
                href="tel:+919829280717"
                className="hover:text-[var(--rust)]"
              >
                +91 98292 80717
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Professor Avinash Jodha. All rights reserved.</span>
        <span>
          Publication rights remain with the respective rights holders.
        </span>
      </div>
    </footer>
  );
}
