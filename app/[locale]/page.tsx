// app/[locale]/page.tsx
import { getDictionary, Locale } from '../../i18n/dictionaries'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import Hero from '../../components/Hero'
import Illustration from '../../components/Illustration'
import EvidenceImmutable from '../../components/EvidenceImmutable'
import PrivacyBlindReveal from '../../components/PrivacyBlindReveal'
import Features from '../../components/Features'
import SectorTabs from '../../components/SectorTabs'
import Footer from '../../components/Footer'
// import JewelrySection from '../../components/JewelrySection' // (silenciado por ahora)
import FeatureChips from '../../components/FeatureChips'
import GatewayLegend from '../../components/GatewayLegend'
import SystemLegend from '../../components/SystemLegend'

export default async function Page({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale)

  return (
    <main>
      <LanguageSwitcher locale={params.locale} />

      <Hero
        title={dict.hero.title}
        subtitle={dict.hero.subtitle}
        emailPlaceholder={dict.hero.emailPlaceholder}
        cta={dict.hero.cta}
        disclaimer={dict.hero.disclaimer}
      />

      {/* Chips de features globales (compacto, tipo zksync/starknet) */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <FeatureChips
          items={[
            dict.features.immutableEvidence,
            dict.features.privacyBR,
            dict.features.auditReady,
            dict.features.pqcReady,
          ]}
        />
      </section>

      {/* Cómo funciona */}
      <section className="px-6 py-12">
        <h2 className="text-center text-2xl font-bold">{dict.howItWorks.title}</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-slate-600">{dict.howItWorks.subtitle}</p>
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
      </section>

      {/* Evidencia inmutable */}
      <EvidenceImmutable
        title={dict.evidence.title}
        body={dict.evidence.body}
        bullets={dict.evidence.bullets}
        sealTitle={dict.evidence.sealTitle}
        sealBody={dict.evidence.sealBody}
      />

      {/* Privacidad */}
      <PrivacyBlindReveal
        title={dict.privacy.title}
        body={dict.privacy.body}
        cta={dict.privacy.cta}
      />

      {/* Features (bloques simples, refuerzo visual) */}
      <Features
        immutableEvidence={dict.features.immutableEvidence}
        privacyBR={dict.features.privacyBR}
        auditReady={dict.features.auditReady}
        pqcReady={dict.features.pqcReady}
      />

      {/* Sectores */}
      <SectorTabs
        title={dict.sectors.title}
        realEstate={dict.sectors.realEstate}
        fintech={dict.sectors.fintech}
        banking={dict.sectors.banking}
        jewelry={dict.sectors.jewelry}
        realEstateCardBody={dict.sectors.realEstateCardBody}
        bankingCardBody={dict.sectors.bankingCardBody}
        fintechCardBody={dict.sectors.fintechCardBody}
        jewelryCardBody={dict.sectors.jewelryCardBody}
        neutralTitle={dict.sectors.neutralTitle}
        neutralBody={dict.sectors.neutralBody}
        locale={params.locale}
      />

      {/* Leyendas (Gateway 4xx + Sistema) */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h3 className="text-xl font-bold">Gateway-Verify — códigos y acciones</h3>
        <p className="mb-4 text-slate-600">Semántica de respuestas y efectos (freeze / log).</p>
        <GatewayLegend />

        <h3 className="mt-10 text-xl font-bold">Lógica del sistema (pasillo)</h3>
        <p className="mb-4 text-slate-600">Bloques y responsabilidades.</p>
        <SystemLegend />
      </section>

      {/* 💎 Sección Joyería (preview en home) — silenciada
      <JewelrySection ... />
      */}

      <Footer />
    </main>
  )
}