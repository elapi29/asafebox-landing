// components/FeatureChips.tsx
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
  const pill =
    `rounded-2xl bg-slate-900 text-white hover:bg-slate-800 ` +
    (compact ? 'px-4 py-2 text-sm' : 'px-6 py-3')

  // ────────────────────────────────────────────────────────────────────────────
  // MODO A: auto por locale → todos a /{locale}/under-construction/
  // ────────────────────────────────────────────────────────────────────────────
  if (!items || items.length === 0) {
    const loc = (locale || 'en') as Locale

    // NOTA: usar comentarios JS/TS normales (no JSX) para evitar errores:
    // Si más adelante querés volver a products/*, cambiá href abajo.
    const chips: Array<{ label: string; href: string }> = [
      // { label: 'Signature PQ-ready', href: withBase(`/${loc}/products/signature-pq/`) },
      // { label: 'Blind-Reveal',       href: withBase(`/${loc}/products/blind-reveal/`) },
      // { label: 'Audit',              href: withBase(`/${loc}/products/audit/`) },
      // { label: 'mTLS PQ-Ready',      href: withBase(`/${loc}/products/mtls-pq/`) },
      // { label: 'Governing',          href: withBase(`/${loc}/products/blindreveal-gov/`) },

      // Actual: todas a under-construction
      { label: 'Signature PQ-ready', href: withBase(`/${loc}/under-construction/`) },
      { label: 'Blind-Reveal',       href: withBase(`/${loc}/under-construction/`) },
      { label: 'Audit',              href: withBase(`/${loc}/under-construction/`) },
      { label: 'mTLS PQ-Ready',      href: withBase(`/${loc}/under-construction/`) },
      { label: 'Governing',          href: withBase(`/${loc}/under-construction/`) },
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

  // ────────────────────────────────────────────────────────────────────────────
  // MODO B: custom (string[] o {label, href}[])
  // ────────────────────────────────────────────────────────────────────────────
  const norm = items.map((it) =>
    typeof it === 'string' ? { label: it, href: undefined } : { label: it.label, href: it.href }
  )

  return (
    <div className="mt-6 flex flex-wrap gap-4">
      {norm.map((c) => {
        // Si es ruta interna (empieza con '/'), la pasamos por withBase para respetar basePath
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