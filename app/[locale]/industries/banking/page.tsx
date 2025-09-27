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

      <section className="px-6 py-12">
        <h1 className="text-3xl font-bold">{dict.sectors.banking}</h1>
        <p className="mt-3 max-w-3xl text-slate-600">{dict.hero.subtitle}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-4">
            <h3 className="text-lg font-semibold">{dict.features.auditReady}</h3>
            <p className="text-slate-600">{dict.evidence.title}</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <h3 className="text-lg font-semibold">{dict.features.privacyBR}</h3>
            <p className="text-slate-600">{dict.privacy.title}</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

