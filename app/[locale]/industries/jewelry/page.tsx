// app/[locale]/industries/jewelry/page.tsx
import { getDictionary, Locale } from '../../../../i18n/dictionaries'
import FeatureChips from '../../../../components/FeatureChips'
import AnchorsRow from '../../../../components/AnchorsRow'
import JewelrySection from '../../../../components/JewelrySection'

export const dynamic = 'force-static'

export default async function JewelryIndustryPage({
  params,
}: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale)

  // Features (chips) a partir del diccionario i18n
  const chips = [
    { label: dict.features.immutableEvidence, desc: '' },
    { label: dict.features.privacyBR,         desc: '' },
    { label: dict.features.auditReady,        desc: '' },
    { label: dict.features.pqcReady,          desc: '' },
  ]

  // Anchors “pluggables” (solo textos; los href podrían mapear a secciones)
  const anchors = [
    { key: 'immutable', label: dict.features.immutableEvidence, href: '#immutable' },
    { key: 'privacy',   label: dict.features.privacyBR,         href: '#privacy' },
    { key: 'audit',     label: dict.features.auditReady,        href: '#audit' },
    { key: 'pqc',       label: dict.features.pqcReady,          href: '#pqc' },
  ]

  return (
    <main className="px-6 py-10">
      {/* Row de anchors tipo zksync/starknet */}
      <div className="mx-auto max-w-6xl">
        <AnchorsRow items={anchors} />
      </div>

      {/* Chips de features */}
      <div className="mx-auto mt-6 max-w-6xl">
        <FeatureChips items={chips} />
      </div>

      {/* Contenido de industria (la sección completa que ya tenías) */}
      <div className="mt-10">
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
      </div>
    </main>
  )
}
