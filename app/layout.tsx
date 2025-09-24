import type { Metadata } from 'next'
import '../styles/globals.css'

const siteName = 'aSAFEBOX® — Emprendimiento Seguro'
const siteUrl = 'https://elapi29.github.io/asafebox-landing'
const description = 'Capa de integridad digital para transacciones y contratos: evidencia inmutable, privacidad con Blind-Reveal y auditoría en minutos.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: '%s — aSAFEBOX®'
  },
  description,
  keywords: ['aSAFEBOX', 'integridad digital', 'ZK', 'PQC', 'compliance', 'anti-fraude'],
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName,
    title: siteName,
    description,
    images: ['/og.png']
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description,
    images: ['/og.png']
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: { canonical: '/' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  )
}
