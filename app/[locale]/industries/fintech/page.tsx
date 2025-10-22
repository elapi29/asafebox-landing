// app/[locale]/industries/fintech/page.tsx
import { getDictionary, Locale } from '../../../../i18n/dictionaries'
{/*import LanguageSwitcher from '../../../../components/LanguageSwitcher'*/}
import Footer from '../../../../components/Footer'

export default async function FintechPage({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale)

  return (
    <main>
      {/*<LanguageSwitcher locale={params.locale} />*/}

      <section className="px-6 py-10">
        <h1 className="text-3xl font-bold">{dict.sectors.fintech}</h1>

        <div className="mt-4 rounded-xl border border-slate-200 p-5">
          <h2 className="text-xl font-semibold">{dict.sectors.neutralTitle}</h2>
          <p className="mt-2 text-slate-600">{dict.sectors.neutralBody}</p>
          <p className="mt-4 text-slate-700">{dict.sectors.fintechCardBody}</p>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-5xl">
        <p className="text-sm text-slate-500">
          Política de Evidencia y Privacidad disponible bajo NDA. Solicite el whitepaper técnico y el modelo de amenazas.
        </p>
      </section>


      <Footer locale={params.locale} />

    </main>
  )
}

