// app/[locale]/industries/real-estate/page.tsx
import { getDictionary, Locale } from '../../../../../i18n/dictionaries'
import LanguageSwitcher from '../../../../../components/LanguageSwitcher'
import Footer from '../../../../../components/Footer'

export default async function RealEstatePage({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale)
  return (
    <main>
      <LanguageSwitcher locale={params.locale} />
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-3xl font-semibold">{dict.sectors.realEstate}</h1>
        <h2 className="mt-6 text-xl font-semibold">{dict.sectors.realEstateCardTitle}</h2>
        <p className="mt-2 text-slate-700">{dict.sectors.realEstateCardBody}</p>
      </section>
      <Footer />
    </main>
  )
}
