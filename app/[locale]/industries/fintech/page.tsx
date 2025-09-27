// app/[locale]/industries/fintech/page.tsx
import { getDictionary, Locale } from '../../../../i18n/dictionaries'
import LanguageSwitcher from '../../../../components/LanguageSwitcher'
import Footer from '../../../../components/Footer'

export default async function FintechPage({
  params,
}: {
  params: { locale: Locale }
}) {
  const dict = await getDictionary(params.locale)

  return (
    <main>
      <LanguageSwitcher locale={params.locale} />

      <section className="px-6 py-12">
        <h1 className="text-3xl font-bold">{dict.sectors.fintech}</h1>
        <p className="mt-3 max-w-3xl text-slate-600">{dict.howItWorks.subtitle}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-4">
            <h3 className="text-lg font-semibold">{dict.features.immutableEvidence}</h3>
            <p className="text-slate-600">{dict.evidence.body}</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <h3 className="text-lg font-semibold">{dict.features.pqcReady}</h3>
            <p className="text-slate-600">{dict.illustration.caption}</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

