// app/[locale]/layout.tsx
import type { ReactNode } from 'react'
import type { Locale } from '../../i18n/dictionaries'
import TopBar from '../../components/TopBar'
import '../../styles/globals.css'        // ⬅️  ESTA ES LA RUTA CORRECTA

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: { locale: Locale }
}) {
  return (
    <html lang={params.locale}>
      <body>
        <TopBar locale={params.locale} />
        {children}
      </body>
    </html>
  )
}

