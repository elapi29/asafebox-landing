// app/[locale]/page.tsx
import { Locale, getDictionary } from '../../i18n/dictionaries'
import Hero from '../../components/Hero'
import Illustration from '../../components/Illustration'
import EvidenceImmutable from '../../components/EvidenceImmutable'
import PrivacyBlindReveal from '../../components/PrivacyBlindReveal'
import SectorTabs from '../../components/SectorTabs'
import InteropSection from '../../components/InteropSection'
import Footer from '../../components/Footer'
import LanguageSwitcher from '../../components/LanguageSwitcher'

export const dynamic = 'error' // asegurar SSG

export default async function LocalePage({ params }: { params: { locale: Locale } }) {
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

      <section className="px-6 py-12">
        <h2 className="text-center text-2xl font-bold">{dict.howItWorks.title}</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-slate-600">
          {dict.howItWorks.subtitle}
        </p>
        <div className="mt-8">
          <Illustration />
        </div>
      </section>

      <EvidenceImmutable />
      <PrivacyBlindReveal />

      <SectorTabs />
      <InteropSection />
      <Footer />
    </main>
  )
}

