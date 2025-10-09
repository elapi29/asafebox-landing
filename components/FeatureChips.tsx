import Link from 'next/link'

export default function FeatureChips({ locale }: { locale: 'es'|'en'|'de' }) {
  const base = `/${locale}/products/` // Next maneja basePath solo
  const chips = [
    { label: 'Signature PQ-ready', href: base + 'signature-pq/' },
    { label: 'Blind-Reveal',       href: base + 'blind-reveal/' },
    { label: 'Audit',              href: base + 'audit/' },
    { label: 'mTLS PQ-Ready',      href: base + 'mtls-pq/' },
    { label: 'Governing',          href: base + 'blindreveal-gov/' },
  ]

  return (
    <div className="mt-6 flex flex-wrap gap-4">
      {chips.map(c => (
        <Link
          key={c.label}
          href={c.href}
          prefetch={false}
          className="rounded-2xl bg-slate-900 px-6 py-3 text-white hover:bg-slate-800"
        >
          {c.label}
        </Link>
      ))}
    </div>
  )
}