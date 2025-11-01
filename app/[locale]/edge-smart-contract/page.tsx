// app/[locale]/edge-smart-contract/page.tsx
import type { Locale } from '../../../../i18n/dictionaries'
import Footer from '../../../../components/Footer'
import SystemLegend from '../../../../components/SystemLegend'

export default function EdgeSmartContractPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params

  return (
    <main className="px-6 py-10 text-slate-900">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold">Edge-Smart-Contract (4xx)</h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          {locale === 'es'
            ? 'Contrato ligero en el borde que hace cumplir canonicidad, autenticación, frescura y anti-replay antes de aceptar/firmar. Llamados válidos pasan; los fallidos devuelven un 4xx con motivo, y la negativa queda sellada para auditoría. Cada decisión se registra de forma autenticada y el cierre de período queda firmado para verificación independiente.'
            : locale === 'de'
            ? 'Leichter Ingress-Vertrag am Edge, der Kanonisierung, Authentifizierung, Frische und Anti-Replay durchsetzt, bevor akzeptiert/signiert wird. Gültige Aufrufe passieren; fehlerhafte liefern einen 4xx-Grund, die Ablehnung wird revisionssicher versiegelt. Jede Entscheidung ist authentifiziert protokolliert; Periodenabschlüsse sind signiert und extern prüfbar.'
            : 'A lightweight ingress contract at the edge enforcing canonicalization, authentication, freshness and anti-replay before accept/sign. Good calls pass; failing ones return a reason-coded 4xx, and refusals are sealed for audit. Each decision is authenticated per-line, with signed period closures for third-party verification.'}
        </p>

        <div className="mt-8">
          <SystemLegend locale={locale} />
        </div>

        <p className="mt-8 rounded-lg bg-indigo-50 p-4 text-sm text-slate-700">
          {locale === 'es'
            ? 'Política de Evidencia y Privacidad disponible bajo NDA. Solicite el whitepaper técnico y el modelo de amenazas.'
            : locale === 'de'
            ? 'Evidenz- und Datenschutzrichtlinie unter NDA verfügbar. Fordern Sie das technische Whitepaper und das Bedrohungsmodell an.'
            : 'Evidence & Privacy Policy available under NDA. Request the technical whitepaper and threat model.'}
        </p>
      </section>

      <Footer locale={locale} />
    </main>
  )
}
