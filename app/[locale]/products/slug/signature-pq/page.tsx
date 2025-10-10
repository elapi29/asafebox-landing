// app/[locale]/products/signature-pq/page.tsx
import Link from 'next/link'
import type { Locale } from '../../../../i18n/dictionaries'
import Footer from '../../../../components/Footer'
import SignaturePQDiagram from '../../../../components/illos/SignaturePQDiagram'

export default function SignaturePQPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params
  const home = `/${locale}/`

  return (
    <main className="px-6">
      {/* HERO */}
      <section className="mx-auto max-w-6xl pt-10">
        <h1 className="text-3xl font-bold text-slate-900">
          Firma confiable hoy. Lista para el mundo post-cuántico.
        </h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          Un núcleo de firma listo para producción que separa transporte seguro, verificación de contenido y evidencia inmutable.
          Protegés tus flujos ahora y quedás preparado para el salto PQ cuando lo decidas.
        </p>

        {/* CTAs */}
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`${home}#contact`}
            prefetch={false}
            className="inline-block rounded-xl bg-slate-900 px-5 py-3 text-white shadow hover:bg-slate-800"
          >
            Prueba guiada en 48 h
          </Link>
          <Link
            href={`${home}under-construction/`}
            prefetch={false}
            className="inline-block rounded-xl border border-slate-300 px-5 py-3 text-slate-800 hover:bg-slate-50"
          >
            Whitepaper
          </Link>
        </div>
      </section>

      {/* DIAGRAMA */}
      <section className="mx-auto mt-10 max-w-6xl">
        <SignaturePQDiagram className="w-full" />
      </section>

      {/* VALUE BULLETS */}
      <section className="mx-auto max-w-6xl py-10">
        <div className="grid gap-4 md:grid-cols-3">
          <Card
            title="Sin fricción"
            body="Integrás en horas, no en semanas. Endpoints y clientes listos para usar."
          />
          <Card
            title="A prueba de futuro"
            body="Ruta híbrida a post-cuántico cuando tu entorno esté listo, sin reescribir."
          />
          <Card
            title="Trazable por defecto"
            body="Cada operación deja evidencia auditable; control de abusos y reversos."
          />
        </div>
      </section>

      {/* MINI FAQ / DIFERENCIAL */}
      <section className="mx-auto max-w-6xl pb-14">
        <h2 className="text-2xl font-semibold text-slate-900">¿Por qué elegir Signature PQ-ready?</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          <li>Separación clara de responsabilidades: transporte autenticado, controles previos y evidencia.</li>
          <li>Latencia baja y predecible con opción edge/colo. Idempotencia para RPO=0.</li>
          <li>Compatibilidad con KMS/HSM existentes. Camino a firmas híbridas (clásico + PQ).</li>
        </ul>

        <div className="mt-6">
          <Link
            href={`${home}#contact`}
            prefetch={false}
            className="inline-block rounded-xl bg-slate-900 px-5 py-3 text-white shadow hover:bg-slate-800"
          >
            Hablemos de tu caso
          </Link>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  )
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="font-semibold text-slate-900">{title}</div>
      <p className="mt-2 text-sm text-slate-600">{body}</p>
    </div>
  )
}