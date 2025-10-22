import type { Locale } from '../../../../../i18n/dictionaries'
import Footer from '../../../../components/Footer'
import Link from 'next/link'

export default function PublicIntegrityPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params
  const T = (es: string, en: string, de?: string) =>
    locale === 'es' ? es : locale === 'de' ? (de || en) : en

  const chips = locale === 'es'
    ? ['Expedientes sellados', 'Cadena de custodia', 'Verificación privada (QR)', 'Export probatoria 1-clic']
    : locale === 'de'
    ? ['Versiegelte Akten', 'Beweiskette', 'Private QR-Prüfung', 'Beweisexport 1-Klick']
    : ['Sealed case files', 'Chain of custody', 'Private QR verification', '1-click evidence export']

  const benefits = locale === 'es'
    ? [
        { t: 'Anticorrupción / compras', d: 'Licitaciones y pagos encadenados — sin reescrituras.' },
        { t: 'AML/CTF', d: 'Hecho↔documento↔pago vinculados; evidencia lista para UIF/FATF.' },
        { t: 'Auditoría rápida', d: 'Carpeta exportable (ZIP) en minutos.' },
        { t: 'Privacidad', d: 'Verificación sin exponer PII; acceso por perfil.' },
      ]
    : locale === 'de'
    ? [
        { t: 'Anti-Korruption / Beschaffung', d: 'Ausschreibungen & Zahlungen verkettet — nicht überschreibbar.' },
        { t: 'AML/CTF', d: 'Fakt↔Dokument↔Zahlung gebunden; Evidenz für FIU/FATF.' },
        { t: 'Schnelles Audit', d: 'Exportierbare Akte (ZIP) in Minuten.' },
        { t: 'Privatsphäre', d: 'Prüfung ohne PII offenzulegen; rollenbasierter Zugriff.' },
      ]
    : [
        { t: 'Anti-corruption / procurement', d: 'Tenders & payments chained — no rewrites.' },
        { t: 'AML/CTF', d: 'Fact↔document↔payment bound; FIU/FATF-ready evidence.' },
        { t: 'Fast audits', d: 'Exportable bundle (ZIP) in minutes.' },
        { t: 'Privacy', d: 'Verification without exposing PII; role-based access.' },
      ]

  const steps = locale === 'es'
    ? ['Sellás expediente/documentos con QR verificable',
       'Encadenás eventos (quién-qué-cuándo)',
       'Atás pagos/transferencias al expediente',
       'Exportás evidencia (ZIP) para auditoría/justicia']
    : locale === 'de'
    ? ['Akte/Dokumente mit QR versiegeln',
       'Ereignisse verketten (wer-was-wann)',
       'Zahlungen/Transfers an Akte binden',
       'Evidenz (ZIP) für Audit/Justiz exportieren']
    : ['Seal case file/documents with QR',
       'Chain events (who-what-when)',
       'Bind payments/transfers to the case',
       'Export evidence (ZIP) for audits/courts']

  return (
    <main className="px-6 py-8 text-slate-900">
      {/* HERO */}
      <section className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold">
          {T('Integridad Pública & Antilavado (AML/CTF)',
             'Public Integrity & Financial Crime (AML/CTF)',
             'Öffentliche Integrität & Finanzkriminalität (AML/CTF)')}
        </h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          {T(
            'Prueba de integridad y cadena de custodia para anticorrupción, AML/CTF y auditorías del sector público — verificación en segundos, sin exponer datos sensibles.',
            'Tamper-evident records and chain of custody for anti-corruption, AML/CTF and public audits — verifiable in seconds, without exposing sensitive data.',
            'Fälschungssichere Nachweise und Beweiskette für Anti-Korruption, AML/CTF und öffentliche Audits — prüfbar in Sekunden, ohne sensible Daten offenzulegen.'
          )}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={`/${locale}/verify/demo/`} prefetch={false}
            className="rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">
            {T('Ver demo','See demo','Demo ansehen')}
          </Link>
          <Link href={`/${locale}/#contact`} prefetch={false}
            className="rounded-lg border border-slate-300 px-4 py-2 text-slate-900 hover:bg-slate-50">
            {T('Hablar con el equipo','Talk to sales','Mit dem Team sprechen')}
          </Link>
        </div>
      </section>

      {/* CHIPS */}
      <section className="mx-auto mt-8 max-w-6xl">
        <div className="flex flex-wrap gap-2">
          {chips.map((c) => (
            <span key={c} className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs font-semibold">
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto mt-10 max-w-6xl">
        <h2 className="mb-4 text-xl font-semibold">{T('Beneficios','Benefits','Vorteile')}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(b => (
            <div key={b.t} className="rounded-xl bg-slate-50 p-4">
              <h3 className="mb-1 text-lg font-semibold">{b.t}</h3>
              <p className="text-slate-600">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto mt-10 max-w-5xl">
        <h2 className="mb-3 text-xl font-semibold">{T('Cómo se usa','How it works','So funktioniert es')}</h2>
        <ol className="list-decimal space-y-1 pl-5 text-slate-700">
          {steps.map((s, i) => <li key={i}>{s}</li>)}
        </ol>
      </section>

      {/* Nota pública */}
      <section className="mx-auto mt-10 max-w-5xl">
        <p className="text-sm text-slate-500">
          {T(
            'Política de Evidencia y Privacidad disponible bajo NDA. Integraciones AML/CTF y listas de sanciones se tratan en briefing técnico.',
            'Evidence & Privacy Policy available under NDA. AML/CTF and sanctions integrations covered in technical briefing.',
            'Evidenz- & Datenschutzrichtlinie unter NDA. AML/CTF- und Sanktions-Integrationen im technischen Briefing.'
          )}
        </p>
      </section>

      <section className="mx-auto mt-10 max-w-5xl">
        <p className="text-sm text-slate-500">
            Política de Evidencia y Privacidad disponible bajo NDA. Solicite el whitepaper técnico y el modelo de amenazas.
        </p>
      </section>

    <section className="mx-auto mt-10 max-w-5xl">
          <p className="text-sm text-slate-500">
            Política de Evidencia y Privacidad disponible bajo NDA. Solicite el whitepaper técnico y el modelo de amenazas.
          </p>
    </section>


      <Footer locale={locale} />
    </main>
  )
}