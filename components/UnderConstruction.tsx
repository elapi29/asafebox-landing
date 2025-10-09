// components/UnderConstruction.tsx
import Link from 'next/link'
import { withBase } from './lib/withBase'

export default function UnderConstruction({ locale = 'en' as const }) {
  const home = `/${locale}/`
  return (
    <section className="mx-auto max-w-2xl px-6 py-20 text-center">
      <h1 className="text-3xl font-bold">Under construction</h1>
      <p className="mt-3 text-slate-600">
        We’re crafting this page. Meanwhile, reach out and we’ll share a demo.
      </p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <Link
          href={withBase(home)}
          prefetch={false}
          className="rounded-xl bg-slate-900 px-6 py-3 text-white hover:bg-slate-800"
        >
          ← Back to home
        </Link>
        <a
          href="#contact"
          className="rounded-xl border border-slate-300 px-6 py-3 text-slate-800 hover:bg-slate-50"
        >
          Contact
        </a>
      </div>
    </section>
  )
}