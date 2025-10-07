// app/[locale]/industries/banking/page.tsx
import { getDictionary, Locale } from '../../../../i18n/dictionaries'
import LanguageSwitcher from '../../../../components/LanguageSwitcher'
import BankingShowcase from '../../../../components/BankingShowcase'
import Footer from '../../../../components/Footer'   // ⬅️ FALTA ESTE IMPORT

export default async function BankingPage({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale)

  return (
    <main>
      <LanguageSwitcher locale={params.locale} />
      {/* …tu contenido (titulos/props que uses con dict)… */}
      <BankingShowcase />

      <Footer locale={params.locale} />  {/* ⬅️ ya compila */}
    </main>
  )
}


