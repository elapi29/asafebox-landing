// app/[locale]/layout.tsx
import type { Metadata } from 'next'
import '../../styles/globals.css'
import { Locale, getDictionary } from '../../i18n/dictionaries'
import TopBar from '../../components/TopBar'

export async function generateStaticParams() {
  return [{ locale: 'es' }, { locale: 'en' }, { locale: 'de' }]
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale }
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale)
  return {
    title: dict.meta.siteName,
    description: dict.meta.description,
    openGraph: { title: dict.meta.siteName, description: dict.meta.description },
    twitter: { title: dict.meta.siteName, description: dict.meta.description },
  }
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  return (
    <html lang={params.locale}>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <TopBar />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  )
}
