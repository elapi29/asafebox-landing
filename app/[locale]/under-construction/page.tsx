// app/[locale]/page.tsx
import { getDictionary, Locale } from '../../i18n/dictionaries'
import Hero from '../../components/Hero'
import FeatureChips from '../../components/FeatureChips'
import Footer from '../../components/Footer'

export default async function Page({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale)

  return (
    <main>
      <Hero
        title={dict.hero.title}
        subtitle={dict.hero.subtitle}
        emailPlaceholder={dict.hero.emailPlaceholder}
        cta={dict.hero.cta}
        disclaimer={dict.hero.disclaimer}
      />

      {/* ⬇️ Chips “auto por locale” → mandan a /{locale}/under-construction/ */}
      <section className="mx-auto max-w-6xl px-6 pt-4 pb-10">
        <FeatureChips locale={params.locale} />
      </section>

      {/* …resto de secciones… */}

      <Footer locale={params.locale} />
    </main>
  )
}