// components/SectorTabs.tsx
type Props = {
  title: string
  realEstate: string
  fintech: string
  banking: string
  realEstateCardTitle: string
  realEstateCardBody: string
  auditMinutesTitle: string
  auditMinutesBody: string
}

export default function SectorTabs({
  title,
  realEstate,
  fintech,
  banking,
  realEstateCardTitle,
  realEstateCardBody,
  auditMinutesTitle,
  auditMinutesBody,
}: Props) {
  const base = (process.env.NEXT_PUBLIC_BASE_PATH || '') + '/illustrations'
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-center text-2xl md:text-3xl font-bold">{title}</h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <figure className="rounded-2xl border border-slate-200 p-4 shadow-sm">
          <img src={`${base}/metadata.png`} alt={realEstate} className="w-full h-auto" loading="lazy" />
          <figcaption className="mt-3">
            <div className="text-base font-semibold">{realEstateCardTitle}</div>
            <p className="text-sm text-slate-600">{realEstateCardBody}</p>
          </figcaption>
        </figure>

        <figure className="rounded-2xl border border-slate-200 p-4 shadow-sm">
          <img src={`${base}/l2-anchoring.png`} alt={fintech} className="w-full h-auto" loading="lazy" />
          <figcaption className="mt-3">
            <div className="text-base font-semibold">{auditMinutesTitle}</div>
            <p className="text-sm text-slate-600">{auditMinutesBody}</p>
          </figcaption>
        </figure>

        <figure className="rounded-2xl border border-slate-200 p-4 shadow-sm">
          <img src={`${base}/banking-integrity-seal.png`} alt={banking} className="w-full h-auto" loading="lazy" />
          <figcaption className="mt-3">
            <div className="text-base font-semibold">{banking}</div>
            <p className="text-sm text-slate-600">aSAFEBOX®</p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}


