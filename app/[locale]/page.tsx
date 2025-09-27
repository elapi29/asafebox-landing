// app/[locale]/page.tsx
import { getDictionary, Locale } from '../../i18n/dictionaries'

// Componentes existentes (sin props nuevas)
import Hero from '../../components/Hero'
import EmailCapture from '../../components/EmailCapture'
import Illustration from '../../components/Illustration'
import EvidenceImmutable from '../../components/EvidenceImmutable'
import PrivacyBlindReveal from '../../components/PrivacyBlindReveal'
import InteropSection from '../../components/InteropSection'
import SectorTabs from '../../components/SectorTabs'
import Footer from '../../components/Footer'

export default async function Page({
  params,
}: {
  params: { locale: Locale }
}) {
  const dict = await getDictionary(params.locale)

  return (
    <main>
      {/* HERO: título/subtítulo desde i18n + tu Hero y EmailCapture */}
      <section className="px-6 pt-10 pb-6">
        <h1 className="mx-auto max-w-4xl text-balance text-center text-3xl md:text-5xl font-bold">
          {dict.hero.title}
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-slate-600 md:text-lg">
          {dict.hero.subtitle}
        </p>

        {/* Tu héroe visual y el capture (se mantienen tal cual) */}
        <div className="mt-8">
          <Hero />
        </div>

        <div className="mx-auto mt-6 max-w-md">
          <EmailCapture />
          <p className="mt-2 text-center text-xs text-slate-500">
            {dict.hero.disclaimer}
          </p>
        </div>
      </section>

      {/* Cómo funciona (título/subtítulo i18n) + tu ilustración */}
      <section className="px-6 py-12">
        <h2 className="text-center text-2xl md:text-3xl font-bold">
          {dict.home.howItWorksTitle}
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-slate-600">
          {dict.home.howItWorksSubtitle}
        </p>
        <div className="mt-8">
          <Illustration />
        </div>
      </section>

      {/* Evidencia inmutable: texto i18n + bloque visual existente */}
      <section className="px-6 py-12">
        <h3 className="text-xl md:text-2xl font-semibold">{dict.evidence.title}</h3>
        <p className="mt-2 max-w-3xl text-slate-700">{dict.evidence.body}</p>
        <div className="mt-6">
          <EvidenceImmutable />
        </div>
      </section>

      {/* Privacidad Blind-Reveal: texto i18n + bloque visual existente */}
      <section className="px-6 py-12">
        <h3 className="text-xl md:text-2xl font-semibold">{dict.privacy.title}</h3>
        <p className="mt-2 max-w-3xl text-slate-700">{dict.privacy.body}</p>
        <div className="mt-6">
          <PrivacyBlindReveal />
        </div>
      </section>

      {/* Sector tabs e interop (siguen usando tus componentes actuales) */}
      <section className="px-6 py-12">
        <h3 className="text-xl md:text-2xl font-semibold text-center">
          {dict.industries.title}
        </h3>
        <div className="mt-6">
          <SectorTabs />
        </div>
      </section>

      <InteropSection />
      <Footer />
    </main>
  )
}

