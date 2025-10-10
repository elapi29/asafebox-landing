// components/AnchorsRow.tsx
type Anchor = { key: string; label: string; href: string }

export default function AnchorsRow({ items }: { items: Anchor[] }) {
  return (
    <nav aria-label="Sections" className="w-full overflow-x-auto">
      <ul className="mx-auto flex w-full max-w-6xl gap-2 px-1 py-2">
        {items.map((a) => (
          <li key={a.key}>
            <a
              href={a.href}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
            >
              {a.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}