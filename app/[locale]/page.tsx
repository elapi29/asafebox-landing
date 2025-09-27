// app/[locale]/page.tsx
import { getDict } from '../../i18n'
import type { Locale } from '../../i18n/dictionaries'

import Hero from '../../components/Hero'
import Illustration from '../../components/Illustration'
import EvidenceImmutable from '../../components/EvidenceImmutable'
import PrivacyBlindReveal from '../../components/PrivacyBlindReveal'
import Features from '../../components/Features'
import SectorTabs from '../../components/SectorTabs'
import InteropSection from '../../components/InteropSection'
import Footer from '../../components/Footer'

export default function Page({ params }: { params: { locale: Locale } }) {
  const t = getDict(params.locale)

  return (
    <main>
      <Hero />

      <section className="px-6 py-12">
        <h2 className="text-center text-2xl font-bold">{t.how_title}</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-slate-600">
          {t.how_sub}
        </p>
        <div className="mt-8">
          <Illustration />
        </div>
      </section>

      <EvidenceImmutable />
      <PrivacyBlindReveal />
      <Features />
      <SectorTabs />
      <InteropSection />
      <Footer />
    </main>
  )
}

