import type { Metadata } from 'next'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = { title: { default: 'Professor Avinash Jodha | Literature, cinema and belonging', template: '%s | Avinash Jodha' }, description: 'The academic work, publications, creative practice and Literary Compass series of Professor Avinash Jodha.', metadataBase: new URL('https://avinashjodha.com') }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><SiteHeader />{children}<SiteFooter /></body></html> }
