import React from "react"
import type { Metadata } from 'next'
import type { Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ScrollToTop } from '@/components/scroll-to-top'
import { JsonLd, businessJsonLd, siteUrl } from '@/lib/seo'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  themeColor: '#03133D',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Roofing Toronto & GTA | Commercial & Residential Roofers | Eclipse Roofing Ltd',
  description: 'Eclipse Roofing Ltd is a Toronto roofing contractor serving the GTA. Shingle and flat roof replacement, repairs, commercial and industrial roofing, cool roofs, eavestroughs, siding and skylights. Free estimates.',
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: 'Eclipse Roofing Ltd',
    title: 'Roofing Toronto & GTA | Eclipse Roofing Ltd',
    description: 'Toronto roofing contractor for residential, commercial and industrial properties across the GTA.',
    images: ['/images/hero-roofing.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/favicon.png',
        type: 'image/png',
      },
    ],
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-background">
      <body className={`${jakarta.variable} font-sans antialiased`}>
        <JsonLd data={businessJsonLd} />
        <ScrollToTop />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
