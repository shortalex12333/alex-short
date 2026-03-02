import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://alex-short.com'),
  title: {
    default: 'Alex Short — Yacht Insurance Risk Analyst',
    template: '%s | Alex Short'
  },
  description: 'Independent yacht insurance risk analyst with operational superyacht experience. Structured analysis of policy architecture, underwriting triggers, and exclusion mechanics.',
  keywords: ['yacht insurance', 'marine insurance', 'risk analysis', 'superyacht', 'policy analysis', 'underwriting'],
  authors: [{ name: 'Alex Short', url: 'https://alex-short.com' }],
  creator: 'Alex Short',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alex-short.com',
    siteName: 'Alex Short',
    title: 'Alex Short — Yacht Insurance Risk Analyst',
    description: 'Independent yacht insurance risk analyst with operational superyacht experience.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Alex Short — Yacht Insurance Risk Analyst',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Short — Yacht Insurance Risk Analyst',
    description: 'Independent yacht insurance risk analyst with operational superyacht experience.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://alex-short.com',
  },
}

// JSON-LD Person Schema - Static content, no user input
const personSchemaJson = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://alex-short.com/#person',
  name: 'Alex Short',
  jobTitle: 'Yacht Insurance Risk Analyst',
  description: 'Independent yacht insurance risk analyst with operational superyacht experience as a qualified ETO and former Head of Department.',
  url: 'https://alex-short.com',
  knowsAbout: [
    'Yacht Insurance',
    'Marine Insurance',
    'Risk Analysis',
    'Policy Architecture',
    'Underwriting Triggers',
    'Exclusion Mechanics',
    'Institute Yacht Clauses',
    'Navigational Warranties',
    'Marine Surveying',
    'Superyacht Operations'
  ],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Yacht Insurance Risk Analyst',
    occupationLocation: {
      '@type': 'Country',
      name: 'United Kingdom'
    }
  },
  alumniOf: [
    {
      '@type': 'Organization',
      name: 'Superyacht Industry',
      description: 'Head of Department across 5 superyachts (2023-2025)'
    }
  ],
  sameAs: [
    'https://myyachtsinsurance.com',
    'https://linkedin.com/in/alexshort'
  ]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="person-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {personSchemaJson}
        </Script>
      </head>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}
