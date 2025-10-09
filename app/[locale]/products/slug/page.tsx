// app/[locale]/products/[slug]/page.tsx
import UnderConstruction from '../../../../components/UnderConstruction'
import type { Locale } from '../../../../i18n/dictionaries'

/**
 * IMPORTANT for `output: "export"`:
 * Pre-generate all locale+slug combinations so GitHub Pages has real files.
 */
export function generateStaticParams() {
  const locales: Locale[] = ['es', 'en', 'de']
  const slugs = [
    'signature-pq',
    'blind-reveal',
    'audit',
    'mtls-pq',
    'blindreveal-gov',
  ]

  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  )
}

export default function ProductPlaceholderPage({
  params,
}: {
  params: { locale: Locale; slug: string }
}) {
  // We render UC directly — no redirect — so the page is static.
  return (
    <main className="px-6 py-16">
      <UnderConstruction locale={params.locale} />
    </main>
  )
}
