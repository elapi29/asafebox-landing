// app/[locale]/layout.tsx
import type { ReactNode } from 'react'
import type { Locale } from '../../i18n/dictionaries'
import TopBar from '../../components/TopBar'
import '../../styles/globals.css'

export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: 'es' }, { locale: 'en' }, { locale: 'de' }];
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: { locale: Locale }
}) {
  return (
    <html lang={params.locale}>
      {/* padding-top para despegar el contenido del TopBar fijo */}
      <body className="min-h-screen bg-white text-slate-900 antialiased pt-20">
        <TopBar locale={params.locale} />
        <main>{children}</main>
      </body>
    </html>
  )
}

