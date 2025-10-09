import Link from 'next/link'

type Locale = 'es' | 'en' | 'de'
type ChipInput = string | { label: string; href?: string }

export default function FeatureChips({
  locale,
  items,
  compact = false,
}: {
  /** Si pasás locale y no pasás items → modo automático con links a /products */
  locale?: Locale
  /** Si pasás items → modo custom. Puede ser string[] o {label, href}[] */
  items?: ChipInput[]
  /** Tamaño compacto opcional */
  compact?: boolean
}) {
  // Estilo común
  const pill = `rounded-2xl bg-slate-900 text-white hover:bg-slate-800 ${
    compact ? 'px-4 py-2 text-sm' : 'px-6 py-3'
  }`

  // ───────────────────────────────────────────────────────────────────────────
  // MODO A (AUTO POR LOCALE): si NO hay items, construir chips de Products
  // ───────────────────────────────────────────────────────────────────────────
  if (!items || items.length === 0) {
    // Fallback defensivo si no llegó locale (evita crashear en build)
    const loc = (locale || 'en') as Locale
    const base = `/${loc}/products/`
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
          <Link key={c.label} href={c.href} prefetch={false} className={pill}>
            {c.label}
          </Link>
        ))}
      </div>
    )
  }

  // ───────────────────────────────────────────────────────────────────────────
  // MODO B (CUSTOM): items provistos por el caller (string[] o {label, href}[])
  // ───────────────────────────────────────────────────────────────────────────
  const norm = items.map<Required<Pick<ChipInput & { label: string }, 'label'>> & { href?: string }>(
    it => (typeof it === 'string' ? { label: it } : { label: it.label, href: it.href })
  )

  return (
    <div className="mt-6 flex flex-wrap gap-4">
      {norm.map((c) =>
        c.href ? (
          <Link key={c.label} href={c.href} prefetch={false} className={pill}>
            {c.label}
          </Link>
        ) : (
          <span key={c.label} className={pill} aria-disabled="true">
            {c.label}
          </span>
        )
      )}
    </div>
  )
}