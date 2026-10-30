'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { navItems } from '@/lib/content'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <div className="container header-inner">
      <Link href="/" className="wordmark" onClick={() => setOpen(false)}><span>AJ</span><span className="wordmark-name">Avinash Jodha</span></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">{navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <Link href="/contact" className="header-cta">Enquire <ArrowUpRight size={15} /></Link>
      <button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="mobile-nav" aria-label="Mobile navigation">{navItems.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={16} /></Link>)}</nav>}
  </header>
}
