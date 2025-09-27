// app/[locale]/page.tsx
import Hero from '../../components/Hero'
import Illustration from '../../components/Illustration'
import EvidenceImmutable from '../../components/EvidenceImmutable'
import PrivacyBlindReveal from '../../components/PrivacyBlindReveal'
import Features from '../../components/Features'
import SectorTabs from '../../components/SectorTabs'
import InteropSection from '../../components/InteropSection'
import Footer from '../../components/Footer'
import { getDictionary, Locale } from '../../i18n/dictionaries'

export default async function Page({
  params,
}: {
  params: { locale: Locale }
}) {
  const locale = (params?.locale || 'es') as Locale
  const dict = await getDictionary(locale)

  return (
    <main>
      <Hero
        title={dict.hero.title}
        subtitle={dict.hero.subtitle}
        emailPlaceholder={dict.hero.emailPlaceholder}
        cta={dict.hero.cta}
        disclaimer={dict.hero.disclaimer}
      />

      <section className="px-6 py-12">
        <h2 className="text-center text-2xl font-bold">{dict.how.title}</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-slate-600">
          {dict.how.subtitle}
        </p>
        <div className="mt-8">
          <Illustration />
        </div>
      </section>

      <EvidenceImmutable
        title={dict.evidence.title}
        body={dict.evidence.body}
        bullets={dict.evidence.bullets}
        sealTitle={dict.evidence.sealTitle}
        sealBody={dict.evidence.sealBody}
      />

      <PrivacyBlindReveal
        title={dict.privacy.title}
        body={dict.privacy.body}
        cta={dict.privacy.cta}
      />

      <Features
        immutable={dict.features.immutable}
        immutableDesc={dict.features.immutableDesc}
        privacy={dict.features.privacy}
        privacyDesc={dict.features.privacyDesc}
        audits={dict.features.audits}
        auditsDesc={dict.features.auditsDesc}
        pqc={dict.features.pqc}
        pqcDesc={dict.features.pqcDesc}
      />

      <SectorTabs
        title={dict.sectors.title}
        realEstate={dict.sectors.realEstate}
        fintech={dict.sectors.fintech}
        banking={dict.sectors.banking}
      />

      <InteropSection />

      <Footer
        line1={dict.footer.line1}
        line2={dict.footer.line2}
      />
    </main>
  )
}

