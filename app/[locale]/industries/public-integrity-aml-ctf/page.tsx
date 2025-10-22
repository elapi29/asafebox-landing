// app/[locale]/industries/public-integrity-aml-ctf/page.tsx
import type { Locale } from '../../../../i18n/dictionaries'
import Footer from '../../../../components/Footer'

export default function PublicIntegrityPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params
  return (
    <main className="px-6 py-8 text-slate-900">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-semibold">
          {locale === 'es' ? 'Integridad Pública & Antilavado (AML/CTF)' :
           locale === 'de' ? 'Öffentliche Integrität & AML/CTF' :
           'Public Integrity & Financial Crime (AML/CTF)'}
        </h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          {locale === 'es'
            ? 'Prueba de integridad y cadena de custodia para anticorrupción, AML/CTF y auditorías del sector público — verificación en segundos, sin exponer datos sensibles.'
            : locale === 'de'
            ? 'Fälschungssichere Nachweise und Chain of Custody für Anti-Korruption, AML/CTF und öffentliche Audits — prüfbar in Sekunden, ohne sensible Daten offenzulegen.'
            : 'Tamper-evident records and chain of custody for anti-corruption, AML/CTF and public audits — verifiable in seconds, without exposing sensitive data.'}
        </p>
      </section>

      <section className="mx-auto mt-10 max-w-5xl">
        <p className="text-sm text-slate-500">
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