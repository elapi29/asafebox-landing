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
      {/* HERO + Email (sin chips) */}
      <section className="mx-auto max-w-6xl px-6 pt-6 pb-10">
        <h1 className="text-3xl font-bold text-slate-900">{dict.hero.title}</h1>
        <p className="mt-2 max-w-2xl text-slate-600">{dict.hero.subtitle}</p>

        <div className="mt-6">
          <EmailCapture
            placeholder={dict.hero.emailPlaceholder}
            cta={dict.hero.cta}
            successPath="/thanks/"   // tu componente arma el _next con basePath
          />
        </div>

        {/* disclaimer bajo el form (opcional) */}
        {dict.hero.disclaimer && (
          <p className="mt-2 text-xs text-slate-500">{dict.hero.disclaimer}</p>
        )}
      </section>

      {/* Evidencia inmutable (sí va en Home) */}
      <section className="px-6">
        <EvidenceImmutable
          title={dict.evidence.title}
          body={dict.evidence.body}
          bullets={dict.evidence.bullets}
          sealTitle={dict.evidence.sealTitle}
          sealBody={dict.evidence.sealBody}
        />
      </section>

      {/* Privacidad con Blind-Reveal (sí va en Home) */}
      <section className="px-6">
        <PrivacyBlindReveal
          title={dict.privacy.title}
          body={dict.privacy.body}
          cta={dict.privacy.cta}
        />
      </section>

      {/* Soluciones por industria (sí va) */}
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
