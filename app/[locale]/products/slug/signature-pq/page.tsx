import React from 'react';
import Link from 'next/link';
import Footer from '../../../../../components/Footer';
import SignaturePQDiagram from '../../../../../components/SignaturePQDiagram';

type Locale = 'es' | 'en' | 'de';

export default function SignaturePQPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const home = `/${locale}/`;

  return (
    <main className="px-6">
      {/* Hero */}
      <section className="mx-auto max-w-6xl py-10">
        <h1 className="text-3xl font-bold text-slate-900">Signature PQ-ready Connect</h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          Un núcleo de firma listo para producción que separa transporte seguro, verificación de
          contenido y evidencia inmutable. Protegés tus flujos ahora y quedás preparado para el
          salto post-cuántico cuando lo decidas.
        </p>

        <div className="mt-6 flex gap-3">
          <Link
            href={`${home}under-construction/`}
            prefetch={false}
            className="rounded-xl bg-slate-900 px-5 py-3 text-white shadow hover:bg-slate-800"
          >
            Prueba guiada en 48 h
          </Link>
          <Link
            href={`${home}#contact`}
            prefetch={false}
            className="rounded-xl border border-slate-300 px-5 py-3 text-slate-800 hover:bg-slate-50"
          >
            Hablar con ventas
          </Link>
        </div>
      </section>

      {/* Diagrama (centrado y sin título interno) */}
      <section className="mx-auto max-w-6xl pb-10">
        <SignaturePQDiagram
          size="lg"
          showActors={false}
          showTitle={false}
          className="mx-auto w-full"
        />
      </section>

      {/* CTA secundaria */}
      <section className="mx-auto max-w-6xl pb-14">
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
  );
}