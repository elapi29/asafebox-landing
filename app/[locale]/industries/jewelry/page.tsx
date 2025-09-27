// app/[locale]/industries/jewelry/page.tsx
import { getDictionary, Locale } from '../../../../../i18n/dictionaries'
import LanguageSwitcher from '../../../../../components/LanguageSwitcher'
import JewelrySection from '../../../../../components/JewelrySection'
import Footer from '../../../../../components/Footer'

export default async function JewelryPage({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale)
  const j = dict.jewelry

  return (
    <main>
      <LanguageSwitcher locale={params.locale} />

      <JewelrySection
        title={j.title}
        subtitle={j.subtitle}
        ctaDemo={j.ctaDemo}
        ctaExample={j.ctaExample}
        benefits={j.benefits}
        howToTitle={j.howToTitle}
        howToSteps={j.howToSteps}
        originBlock={j.originBlock}
        kpis={j.kpis}
        qrLabel={j.qrLabel}
        qrUrl={j.qrUrl}
        diagramCaption={j.diagramCaption}
        diagram={j.diagram}
      />

      <Footer />
    </main>
  )
}
