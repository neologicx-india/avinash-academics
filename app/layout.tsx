import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const siteUrl = "https://avinashjodha.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Professor Avinash Jodha | Literature, cinema and belonging",
    template: "%s | Avinash Jodha",
  },
  description:
    "The academic work, publications, creative practice and The Literary Compass series of Professor Avinash Jodha.",
  openGraph: {
    title: "Professor Avinash Jodha | Literature, cinema and belonging",
    description:
      "The academic work, publications, creative practice and The Literary Compass series of Professor Avinash Jodha.",
    url: siteUrl,
    siteName: "Professor Avinash Jodha",
    images: [
      {
        url: "/favicon.png",
        width: 1180,
        height: 1170,
        alt: "Professor Avinash Jodha",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Professor Avinash Jodha | Literature, cinema and belonging",
    description:
      "The academic work, publications, creative practice and The Literary Compass series of Professor Avinash Jodha.",
    images: ["/favicon.png"],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta property="og:image" content={`${siteUrl}/favicon.png`} />
        <meta property="og:image:width" content="1180" />
        <meta property="og:image:height" content="1170" />
        <meta property="og:image:alt" content="Professor Avinash Jodha" />
        <meta name="twitter:image" content={`${siteUrl}/favicon.png`} />
        <meta name="twitter:card" content="summary" />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
