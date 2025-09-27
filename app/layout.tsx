// app/[locale]/layout.tsx
import type { ReactNode } from 'react'
import { getDict } from '../../i18n'
import type { Locale } from '../../i18n/dictionaries'

// ✅ No redefinimos <html>/<body>. Deja que el layout raíz muestre el header con el switcher.
export const dynamicParams = false
export function generateStaticParams() {
  return [{ locale: 'es' }, { locale: 'en' }, { locale: 'de' }]
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: { locale: Locale }
}) {
  // Si necesitás el dict a nivel layout (p.ej. para <Footer /> localizable), lo cargás acá
  const _t = getDict(params.locale)
  return (
    <section data-locale={params.locale}>
      {children}
    </section>
  )
}
