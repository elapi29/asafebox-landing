// components/FeatureChips.tsx
type Props = { items: string[] }

export default function FeatureChips({ items }: Props) {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((t) => (
        <div
          key={t}
          className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft"
        >
          <p className="font-medium text-slate-900">{t}</p>
        </div>
      ))}
    </div>
  )
}