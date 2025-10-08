// app/[locale]/introduction/page.tsx
import { getDictionary, Locale } from '../../../i18n/dictionaries'
import Illustration from '../../../components/Illustration'
import SystemLegend from '../../../components/SystemLegend'
import GatewayLegend from '../../../components/GatewayLegend'
import Footer from '../../../components/Footer'

export default async function IntroductionPage({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale)

  return (
    <main id="intro" className="px-6">
      <section className="mx-auto max-w-4xl py-10">
        <h1 className="text-3xl font-bold">{dict.howItWorks.title}</h1>
        <p className="mt-2 text-slate-600">{dict.howItWorks.subtitle}</p>

        <div className="mt-8">
          <Illustration
            transportLabel={dict.illustration.transport}
            sender={dict.illustration.sender}
            ledger={dict.illustration.ledger}
            blindId={dict.illustration.blindId}
            receiver={dict.illustration.receiver}
            caption={dict.illustration.caption}
          />
        </div>

        {/* bloques técnicos (si ya los tenés) */}
        <div className="mt-10 grid gap-8">
          <SystemLegend />
          <GatewayLegend />
        </div>

        <p className="mt-10 text-center text-slate-600">
          {dict.howItWorks.footerNote /* si existe; si no, podés borrar esta línea */}
        </p>
      </section>

      <Footer locale={params.locale} />
    </main>
  )
}