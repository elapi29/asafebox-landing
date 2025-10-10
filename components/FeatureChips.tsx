// components/FeatureChips.tsx
import Link from 'next/link';

type Locale = 'es' | 'en' | 'de';
type ChipInput = string | { label: string; href?: string };

export default function FeatureChips({
  locale,
  items,
  compact = false,
}: {
  locale?: Locale;
  items?: ChipInput[];
  compact?: boolean;
}) {
  const pill = `rounded-2xl bg-slate-900 text-white hover:bg-slate-800 ${
    compact ? 'px-4 py-2 text-sm' : 'px-6 py-3'
  }`;

  // Modo A (auto): chips que van a under-construction por ahora
  if (!items || items.length === 0) {
    const loc = (locale || 'en') as Locale;
    const chips = [
      { label: 'Signature PQ-ready', href: `/${loc}/products/slug/signature-pq/` },
      { label: 'Blind-Reveal',       href: `/${loc}/under-construction/` },
      { label: 'Audit',              href: `/${loc}/under-construction/` },
      { label: 'mTLS PQ-Ready',      href: `/${loc}/under-construction/` },
      { label: 'Governing',          href: `/${loc}/under-construction/` },
    ];

    return (
      <div className="mt-6 flex flex-wrap gap-4">
        {chips.map((c) => (
          <Link key={c.label} href={c.href!} prefetch={false} className={pill}>
            {c.label}
          </Link>
        ))}
      </div>
    );
  }

  // Modo B (custom): respeta lo que venga
  const norm = items.map((it) =>
    typeof it === 'string' ? { label: it } : { label: it.label, href: it.href }
  );

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
  );
}