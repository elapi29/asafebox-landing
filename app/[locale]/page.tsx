// app/[locale]/page.tsx
import Link from 'next/link'
import Footer from '../../components/Footer'
import type { Locale } from '../../i18n/dictionaries'

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const { locale } = params

  return (
    <main className="px-6 py-16">
      {/* Placeholder simple para recuperar la home (podés volver a tu Hero luego) */}
      <section className="mx-auto max-w-6xl py-10">
        <h1 className="text-4xl font-bold">In aSAFEBOX®</h1>
        <p className="mt-3 text-lg text-slate-600">
          Evidencia criptográfica, verificación previa al asentamiento y gobierno humano.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/${locale}/introduction/`}
            className="rounded-xl bg-slate-900 px-5 py-2.5 text-white hover:bg-slate-800"
            prefetch={false}
          >
            How it works
          </Link>
          <Link
            href={`/${locale}/products/signature-pq/`}
            className="rounded-xl border border-slate-300 px-5 py-2.5 hover:bg-slate-50"
            prefetch={false}
          >
            Products
          </Link>
        </div>
      </section>

      <div className="mt-12">
        <Footer locale={locale} />
      </div>
    </main>
  )
}
