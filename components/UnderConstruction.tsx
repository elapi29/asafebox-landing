// components/UnderConstruction.tsx
import Link from 'next/link'

export default function UnderConstruction({
  title,
  backHref = '/',
}: {
  title: string
  backHref?: string
}) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
        <p className="mt-3 text-slate-600">
          Estamos trabajando en esta sección. Vuelve pronto para ver la demo y
          la documentación.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <Link
            href={backHref}
            prefetch={false}
            className="rounded-xl bg-slate-900 px-5 py-2 text-white hover:bg-slate-800"
          >
            ← Volver
          </Link>
          <a
            href={(process.env.NEXT_PUBLIC_BASE_PATH || '') + '/'}
            className="rounded-xl border border-slate-200 px-5 py-2 hover:bg-slate-50"
          >
            Ir al inicio
          </a>
        </div>
      </div>
    </main>
  )
}