// app/[locale]/page.tsx
import { getDictionary, Locale } from '../../i18n/dictionaries'
import UnderConstruction from '../../components/UnderConstruction'
import Footer from '../../components/Footer'

export default async function LocaleHome({
  params,
}: { params: { locale: Locale } }) {
  // Si querés usar el dict más adelante, lo dejamos cargado
  await getDictionary(params.locale)

  return (
    <main className="px-6 py-16">
      <UnderConstruction locale={params.locale} />
      <div className="mt-12">
        <Footer locale={params.locale} />
      </div>
    </main>
  )
}
