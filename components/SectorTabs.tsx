// components/SectorTabs.tsx
'use client'
import Link from 'next/link'

type Props = {
  title: string
  realEstate: string
  fintech: string
  banking: string
  jewelry: string
  realEstateCardBody: string
  bankingCardBody: string
  fintechCardBody: string
  jewelryCardBody: string
  neutralTitle: string
  neutralBody: string
  locale?: string
}

export default function SectorTabs({
  title,
  realEstate,
  fintech,
  banking,
  jewelry,
  realEstateCardBody,
  bankingCardBody,
  fintechCardBody,
  jewelryCardBody,
  neutralTitle,
  neutralBody,
  locale = 'es',
}: Props) {
  const t = (es: string, en: string, de?: string) =>
    locale === 'es' ? es : locale === 'de' ? (de ?? en) : en

  const publicIntegrityTitle = t(
    'Integridad Pública & AML/CTF',
    'Public Integrity & AML/CTF',
    'Öffentliche Integrität & AML/CTF'
  )
  const publicIntegrityBody = t(
    'Evidencia verificable para anticorrupción, AML/CTF y auditorías del sector público.',
    'Verifiable evidence for anti-corruption, AML/CTF and public-sector audits.',
    'Prüfbare Evidenz für Anti-Korruption, AML/CTF und öffentliche Audits.'
  )
  const exploreLabel = t('Ver', 'Explore', 'Öffnen')

  const items = [
    {
      title: realEstate,
      body: realEstateCardBody,
      href: `/${locale}/industries/real-estate`,
      bg: 'bg-indigo-50',
      ring: 'ring-indigo-200',
      hover: 'hover:bg-indigo-100',
    },
    {
      title: banking,
      body: bankingCardBody,
      href: `/${locale}/industries/banking`,
      bg: 'bg-teal-50',
      ring: 'ring-teal-200',
      hover: 'hover:bg-teal-100',
    },
    {
      title: fintech,
      body: fintechCardBody,
      href: `/${locale}/industries/fintech`,
      bg: 'bg-amber-50',
      ring: 'ring-amber-200',
      hover: 'hover:bg-amber-100',
    },
    {
      title: jewelry,
      body: jewelryCardBody,
      href: `/${locale}/industries/jewelry`,
      bg: 'bg-purple-50',
      ring: 'ring-purple-200',
      hover: 'hover:bg-purple-100',
    },
    // Nueva tarjeta
    {
      title: publicIntegrityTitle,
      body: publicIntegrityBody,
      href: `/${locale}/industries/public-integrity-aml-ctf`,
      bg: 'bg-sky-50',
      ring: 'ring-sky-200',
      hover: 'hover:bg-sky-100',
    },
  ]

  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-bold">{title}</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-slate-600">
          <strong>{neutralTitle}:</strong> {neutralBody}
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {items.map((it) => (
            <Link
              key={it.title}
              href={it.href}
              className={[
                'group block rounded-2xl border border-slate-200 p-5 transition',
                'ring-1 ring-inset', it.bg, it.ring, it.hover,
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500',
                'shadow-sm hover:shadow-md',
              ].join(' ')}
            >
              <div className="flex h-full flex-col">
                <h3 className="text-sm font-black uppercase tracking-wide text-slate-900">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{it.body}</p>
                <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-slate-300/70 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-700 transition group-hover:bg-white">
                  {exploreLabel}
                  <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-80">
                    <path d="M13 5l7 7-7 7M5 12h14" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}


