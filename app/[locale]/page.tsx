// app/[locale]/page.tsx
import { getDictionary, Locale } from '../../i18n/dictionaries'
import EmailCapture from '../../components/EmailCapture'
import EvidenceImmutable from '../../components/EvidenceImmutable'
import PrivacyBlindReveal from '../../components/PrivacyBlindReveal'
import SectorTabs from '../../components/SectorTabs'
import Footer from '../../components/Footer'

export default async function Page({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale)

  return (
    <main>
      {/* 1) CTA: Dejanos tu E-mail */}
      <section className="mx-auto max-w-6xl px-6 pt-4 pb-10">
        <EmailCapture
          title={dict.hero.title}
          subtitle={dict.hero.subtitle}
          emailPlaceholder={dict.hero.emailPlaceholder}
          cta={dict.hero.cta}
          disclaimer={dict.hero.disclaimer}
          locale={params.locale}
        />
      </section>

      {/* 2) Evidencia inmutable (sí va en Home) */}
      <section className="px-6">
        <EvidenceImmutable
          title={dict.evidence.title}
          body={dict.evidence.body}
          bullets={dict.evidence.bullets}
          sealTitle={dict.evidence.sealTitle}
          sealBody={dict.evidence.sealBody}
        />
      </section>

      {/* 3) Privacidad con Blind-Reveal (sí va en Home) */}
      <section className="px-6">
        <PrivacyBlindReveal
          title={dict.privacy.title}
          body={dict.privacy.body}
          cta={dict.privacy.cta}
        />
      </section>

      {/* 4) (OPCIONAL) Si usás un bloque de Features globales, lo podés dejar; los "chips" NO. */}
      {/* Si no querés nada acá, elimina este bloque. */}

      {/* 5) Soluciones por industria (sí va) */}
      <section className="px-6 py-12">
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
      </section>

      <Footer locale={params.locale} />
    </main>
  )
}
