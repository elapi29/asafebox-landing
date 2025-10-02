// app/[locale]/industries/banking/page.tsx
import { getDictionary, Locale } from '../../../../i18n/dictionaries'
import LanguageSwitcher from '../../../../components/LanguageSwitcher'
import Footer from '../../../../components/Footer'

export default async function BankingPage({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale)

  return (
    <main>
      <LanguageSwitcher locale={params.locale} />

      <section className="px-6 py-10">
        <h1 className="text-3xl font-bold">{dict.sectors.banking}</h1>

        <div className="mt-4 rounded-xl border border-slate-200 p-5">
          <h2 className="text-xl font-semibold">{dict.sectors.neutralTitle}</h2>
          <p className="mt-2 text-slate-600">{dict.sectors.neutralBody}</p>
          <p className="mt-4 text-slate-700">{dict.sectors.bankingCardBody}</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

