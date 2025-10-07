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
import FeatureChips from '../../components/FeatureChips'

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

      <EvidenceImmutable
        title={dict.evidence.title}
        body={dict.evidence.body}
        bullets={dict.evidence.bullets}
        sealTitle={dict.evidence.sealTitle}
        sealBody={dict.evidence.sealBody}
      />

      <PrivacyBlindReveal title={dict.privacy.title} body={dict.privacy.body} cta={dict.privacy.cta} />

      <Features
        immutableEvidence={dict.features.immutableEvidence}
        privacyBR={dict.features.privacyBR}
        auditReady={dict.features.auditReady}
        pqcReady={dict.features.pqcReady}
      />

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

      {/*/ al final del archivo app/[locale]/page.tsx*/}
      <Footer locale={params.locale} />

    </main>
  )
}