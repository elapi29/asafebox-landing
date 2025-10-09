import Link from 'next/link'
import { withBase } from './lib/withBase' // ⬅️ importa el helper

type Locale = 'es' | 'en' | 'de'
type ChipInput = string | { label: string; href?: string }

export default function FeatureChips({
  locale,
  items,
  compact = false,
}: {
  locale?: Locale
  items?: ChipInput[]
  compact?: boolean
}) {
  const pill = `rounded-2xl bg-slate-900 text-white hover:bg-slate-800 ${
    compact ? 'px-4 py-2 text-sm' : 'px-6 py-3'
  }`

  // MODO A: auto por locale → apunta a /{locale}/products/*
  if (!items || items.length === 0) {
    const loc = (locale || 'en') as Locale
    const chips = [
      { label: 'Signature PQ-ready', href: withBase(`/${loc}/products/signature-pq/`) },
      { label: 'Blind-Reveal',       href: withBase(`/${loc}/products/blind-reveal/`) },
      { label: 'Audit',              href: withBase(`/${loc}/products/audit/`) },
      { label: 'mTLS PQ-Ready',      href: withBase(`/${loc}/products/mtls-pq/`) },
      { label: 'Governing',          href: withBase(`/${loc}/products/blindreveal-gov/`) },
    ]

    return (
      <div className="mt-6 flex flex-wrap gap-4">
        {chips.map(c => (
          <Link key={c.label} href={c.href} prefetch={false} className={pill}>
            {c.label}
          </Link>
        ))}
      </div>
    )
  }

  // MODO B: custom (string[] o {label, href}[])
  const norm = items.map(it =>
    typeof it === 'string' ? { label: it } : { label: it.label, href: it.href }
  )

  return (
    <div className="mt-6 flex flex-wrap gap-4">
      {norm.map((c) => {
        // si el caller pasó href interno (empieza con /), lo pasamos por withBase
        const href = c.href?.startsWith('/') ? withBase(c.href) : c.href
        return href ? (
          <Link key={c.label} href={href} prefetch={false} className={pill}>
            {c.label}
          </Link>
        ) : (
          <span key={c.label} className={pill} aria-disabled="true">
            {c.label}
          </span>
        )
      })}
    </div>
  )
}
