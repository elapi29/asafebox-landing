// components/FeatureChips.tsx
export default function FeatureChips({
  items,
  compact = false,
}: { items: string[]; compact?: boolean }) {
  const unique = Array.from(new Set(items)).filter(Boolean)

  return (
    <div className="flex flex-wrap gap-2">
      {unique.map((t) => (
        <span
          key={t}
          className={[
            'inline-flex items-center rounded-full border border-slate-200 bg-white',
            compact ? 'px-3 py-1 text-xs' : 'px-4 py-1.5 text-sm',
            'shadow-sm',
          ].join(' ')}
        >
          {t}
        </span>
      ))}
    </div>
  )
}