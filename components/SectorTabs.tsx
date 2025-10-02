// components/SectorTabs.tsx
import Link from 'next/link'

type Item = { title: string; body: string; href: string }
type Props = {
  title: string
  locale: string
  items: Item[]
}

export default function SectorTabs({ title, locale, items }: Props) {
  return (
    <section className="px-6 py-12">
      <h2 className="text-center text-2xl font-bold">{title}</h2>

      <div className="mx-auto mt-6 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <Link
            key={it.title}
            href={`/${locale}${it.href}`}
            className="block rounded-xl border border-slate-200 p-4 transition hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <h3 className="text-lg font-semibold">{it.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{it.body}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}


