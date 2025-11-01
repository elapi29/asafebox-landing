/// app/[locale]/edge-smart-contract/page.tsx
import type { Locale } from '../../../i18n/dictionaries'
import Link from 'next/link'
import SystemLegend from '../../../components/SystemLegend'
import Footer from '../../../components/Footer'

export default function EdgeSmartContractPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params

  return (
    <main className="px-6 py-10 text-slate-900">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold">Edge-Smart-Contract (4xx)</h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          {locale === 'es'
            ? 'Controles ligeros en el borde para hacer cumplir políticas antes de firmar/aceptar. Responde 2xx sólo si todos los chequeos pasan; de lo contrario 4xx + freeze.'
            : locale === 'de'
            ? 'Leichtgewichtige Edge-Kontrollen zur Durchsetzung von Richtlinien vor dem Signieren/Akzeptieren. 2xx nur bei Erfolg; sonst 4xx + Freeze.'
            : 'Lightweight edge controls to enforce policy before signing/accepting. Return 2xx only when all checks pass; otherwise 4xx + freeze.'}
        </p>

        <div className="mt-6">
          <SystemLegend locale={locale} />
        </div>

        <p className="mt-6 text-sm text-slate-500">
          {locale === 'es'
            ? 'Política de Evidencia y Privacidad disponible bajo NDA. Solicite el whitepaper técnico y el modelo de amenazas.'
            : locale === 'de'
            ? 'Evidenz- und Datenschutzrichtlinie unter NDA verfügbar. Fordern Sie das technische Whitepaper und das Bedrohungsmodell an.'
            : 'Evidence & Privacy Policy available under NDA. Request the technical whitepaper and threat model.'}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/${locale}/verify/demo/`}
            prefetch={false}
            className="rounded-xl bg-slate-900 px-5 py-3 text-white shadow hover:bg-slate-800"
          >
            {locale === 'es' ? 'Ver demo Blind-Reveal' : locale === 'de' ? 'Blind-Reveal-Demo ansehen' : 'See Blind-Reveal demo'}
          </Link>
          <Link
            href={`/${locale}/introduction/`}
            prefetch={false}
            className="rounded-xl border border-slate-300 px-5 py-3 text-slate-800 hover:bg-slate-50"
          >
            {locale === 'es' ? 'Introducción' : locale === 'de' ? 'Einführung' : 'Introduction'}
          </Link>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  )
}

