// app/[locale]/industries/real-estate/page.tsx
import { getDictionary, Locale } from '../../../../i18n/dictionaries'
import LanguageSwitcher from '../../../../components/LanguageSwitcher'
import Footer from '../../../../components/Footer'

export default async function RealEstatePage({
  params,
}: {
  params: { locale: Locale }
}) {
  const dict = await getDictionary(params.locale)

  return (
    <main>
      <LanguageSwitcher locale={params.locale} />

      <section className="px-6 py-12">
        <h1 className="text-3xl font-bold">{dict.sectors.realEstate}</h1>
        <div className="mt-6 rounded-xl border border-slate-200 p-5">
          <h3 className="text-xl font-semibold">{dict.sectors.realEstateCardTitle}</h3>
          <p className="mt-2 text-slate-600">{dict.sectors.realEstateCardBody}</p>
        </div>

        <div className="mt-6 rounded-xl bg-slate-50 p-5">
          <h3 className="text-lg font-semibold">{dict.sectors.auditMinutesTitle}</h3>
          <p className="mt-1 text-slate-600">{dict.sectors.auditMinutesBody}</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
