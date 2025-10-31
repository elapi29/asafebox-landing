// app/[locale]/products/slug/signature-pq/page.tsx
import Link from 'next/link'
import Footer from '../../../../../components/Footer'
import SignaturePQDiagram from '../../../../../components/SignaturePQDiagram'

type Locale = 'es' | 'en' | 'de'

export default function SignaturePQPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params
  const home = `/${locale}/`

  return (
    <main className="px-6">
      {/* HERO centrado con card degradado y pills */}
      <section className="pt-10 pb-8">
        <div className="mx-auto w-full max-w-5xl">
          <div className="mx-auto w-full rounded-[28px] bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 p-6 shadow-xl sm:p-8">
            <h1 className="text-center text-3xl font-extrabold text-white sm:text-4xl">
              Signature PQ-ready Connect
            </h1>

            <p className="mt-2 text-center text-white/90">
              Transporte seguro • Controles de contenido • Evidencia inmutable
            </p>

            {/* Pills centradas */}
            <div className="mx-auto mt-6 grid w-full max-w-3xl grid-cols-1 gap-4 md:grid-cols-2">
              <div className="w-full rounded-full bg-white/95 px-5 py-4 text-center font-semibold text-slate-900 shadow-sm">
                Canal autenticado
              </div>
              <div className="w-full rounded-full bg-white/95 px-5 py-4 text-center font-semibold text-slate-900 shadow-sm">
                Controles previos a firmar
              </div>
              <div className="w-full rounded-full bg-white/95 px-5 py-4 text-center font-semibold text-slate-900 shadow-sm">
                Evidencia auditable
              </div>
              <div className="w-full rounded-full bg-white/95 px-5 py-4 text-center font-semibold text-slate-900 shadow-sm">
                Ruta híbrida a PQ
              </div>
            </div>

            <p className="mx-auto mt-5 max-w-3xl text-center text-white/90">
              Firma sólo lo que pasa los controles • Preparado para modo híbrido post-cuántico
            </p>

            {/* CTAs del hero */}
            <div className="mx-auto mt-6 flex w-full max-w-3xl flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={`${home}under-construction/`}
                prefetch={false}
                className="inline-block rounded-xl bg-white/95 px-5 py-3 font-semibold text-slate-900 shadow hover:bg-white"
              >
                Prueba guiada en 48 h
              </Link>
              <Link
                href={`${home}#contact`}
                prefetch={false}
                className="inline-block rounded-xl bg-transparent px-5 py-3 font-semibold text-white ring-1 ring-white/60 hover:bg-white/10"
              >
                Hablar con ventas
              </Link>
            </div>
          </div>
        </div>

        {/* espacio inferior/“flecha” centrado si lo necesitás */}
        <div className="mx-auto mt-8 w-full max-w-3xl text-center">
          {/* aquí podrías renderizar una flecha o badge si aplica */}
        </div>
      </section>

      {/* Bloque de copy breve (opcional) */}
      <section className="mx-auto max-w-5xl pb-6">
        <p className="mx-auto max-w-3xl text-center text-slate-700">
          Un núcleo de firma listo para producción que separa transporte seguro, verificación de
          contenido y evidencia inmutable. Protegés tus flujos ahora y quedás preparado para el
          salto post-cuántico cuando lo decidas.
        </p>
      </section>

      {/* Diagrama (centrado y responsive) */}
      <section className="mx-auto max-w-6xl pb-10">
        <SignaturePQDiagram size="lg" showActors={false} className="mx-auto w-full" />
      </section>

      {/* CTA secundaria */}
      <section className="mx-auto max-w-6xl pb-14 text-center">
        <p className="text-slate-600">¿Querés los fundamentos formales y el modelo de amenazas?</p>
        <a
          href="#"
          className="mt-3 inline-block rounded-xl bg-slate-900 px-5 py-3 text-white shadow hover:bg-slate-800"
        >
          Whitepaper (PDF)
        </a>
      </section>

      <Footer locale={locale} />
    </main>
  )
}
