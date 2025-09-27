// components/EvidenceImmutable.tsx
type Props = {
  title: string
  body: string
  bullets: string[]
  sealTitle: string
  sealBody: string
}

export default function EvidenceImmutable({ title, body, bullets, sealTitle, sealBody }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-2 items-start">
        {/* Texto izquierda */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">{body}</p>
          <ul className="mt-4 list-disc pl-5 text-slate-700">
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>

        {/* “Sello” derecha */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">{sealTitle}</h3>
          <p className="mt-2 text-slate-700">{sealBody}</p>
          <img
            src={(process.env.NEXT_PUBLIC_BASE_PATH || '') + '/illustrations/banking-integrity-seal.png'}
            alt={sealTitle}
            className="mt-4 w-full h-auto rounded-xl border border-slate-200"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}