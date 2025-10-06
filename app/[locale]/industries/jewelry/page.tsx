// app/[locale]/industries/jewelry/page.tsx
import { getDictionary, type Locale } from '../../../../i18n/dictionaries'
import JewelrySection from '../../../../components/JewelrySection'
import FeatureChips from '../../../../components/FeatureChips'
import AnchorsRow from '../../../../components/AnchorsRow'

export default async function JewelryPage({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale)

  return (
    <main className="px-6 py-10">
      {/* Hero + beneficios + how-to + KPIs + QR + diagrama */}
      <JewelrySection
        title={dict.jewelry.title}
        subtitle={dict.jewelry.subtitle}
        ctaDemo={dict.jewelry.ctaDemo}
        ctaExample={dict.jewelry.ctaExample}
        benefits={dict.jewelry.benefits}
        howToTitle={dict.jewelry.howToTitle}
        howToSteps={dict.jewelry.howToSteps}
        originBlock={dict.jewelry.originBlock}
        kpis={dict.jewelry.kpis}
        qrLabel={dict.jewelry.qrLabel}
        qrUrl={dict.jewelry.qrUrl}
        diagramCaption={dict.jewelry.diagramCaption}
        diagram={dict.jewelry.diagram}
      />

      {/* Features modulares (chips) */}
      <section className="mx-auto mt-2 max-w-6xl">
        <h2 className="text-2xl font-bold text-slate-900">{dict.howItWorks.title}</h2>
        <p className="mt-1 text-slate-600">{dict.howItWorks.subtitle}</p>
        <FeatureChips
          items={[
            dict.features.immutableEvidence,
            dict.features.privacyBR,
            dict.features.auditReady,
            dict.features.pqcReady,
          ]}
        />
        {/* Anchors pluggables */}
        <AnchorsRow />
      </section>
    </main>
  )
}
