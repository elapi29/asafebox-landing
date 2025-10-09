import Link from 'next/link'
import { withBase } from './lib/withBase'

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

  // AUTO por locale → SIEMPRE under-construction
  if (!items || items.length === 0) {
    const loc = (locale || 'en') as Locale
    const uc = withBase(`/${loc}/under-construction/`)
    const chips = [
      { label: 'Signature PQ-ready', href: uc },
      { label: 'Blind-Reveal',       href: uc },
      { label: 'Audit',              href: uc },
      { label: 'mTLS PQ-Ready',      href: uc },
      { label: 'Governing',          href: uc },
    ]
    return (
      <div className="mt-6 flex flex-wrap gap-4">
        {chips.map((c) => (
          <Link key={c.label} href={c.href} prefetch={false} className={pill}>
            {c.label}
          </Link>
        ))}
      </div>
    )
  }

  // CUSTOM (respeta href; si es interno, se pasa por withBase)
  const norm = items.map((it) =>
    typeof it === 'string' ? { label: it } : { label: it.label, href: it.href }
  )

  return (
    <div className="mt-6 flex flex-wrap gap-4">
      {norm.map((c) => {
        const href = c.href
          ? (c.href.startsWith('/') ? withBase(c.href) : c.href)
          : undefined
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
