// app/[locale]/industries/banking/page.tsx
import { getDictionary, Locale } from '../../../../i18n/dictionaries'
import LanguageSwitcher from '../../../../components/LanguageSwitcher'
import Footer from '../../../../components/Footer'

export default async function BankingPage({
  params,
}: {
  params: { locale: Locale }
}) {
  const dict = await getDictionary(params.locale)

  return (
    <main>
      <LanguageSwitcher locale={params.locale} />

      <section className="mx-auto max-w-5xl px-6 py-12 text-slate-900">
        <h1 className="text-3xl font-bold">{dict.sectors.banking}</h1>
        <p className="mt-3 text-slate-600">
          {/* Placeholder suave, luego lo reemplazamos por sección completa */}
          {dict.features.immutableEvidence} · {dict.features.privacyBR} · {dict.features.auditReady} · {dict.features.pqcReady}
        </p>
      </section>

      <Footer />
    </main>
  )
}

