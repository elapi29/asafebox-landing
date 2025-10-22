// app/[locale]/industries/banking/page.tsx
import { getDictionary, Locale } from '../../../../i18n/dictionaries'
{/*import LanguageSwitcher from '../../../../components/LanguageSwitcher'*/}
import BankingShowcase from '../../../../components/BankingShowcase'
import Footer from '../../../../components/Footer'   // ⬅️ FALTA ESTE IMPORT

export default async function BankingPage({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale)

  return (
    <main>
      {/*<LanguageSwitcher locale={params.locale} />*/}
      {/* …tu contenido (titulos/props que uses con dict)… */}
      <BankingShowcase />

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
      
      <Footer locale={params.locale} />  {/* ⬅️ ya compila */}
    </main>
  )
}


