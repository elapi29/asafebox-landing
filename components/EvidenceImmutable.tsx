// components/EvidenceImmutable.tsx
import IntegritySealIllo from './illos/IntegritySealIllo'

type Props = {
  title: string
  body: string
  bullets: string[]
  sealTitle: string
  sealBody: string
}

export default function EvidenceImmutable({
  title,
  body,
  bullets,
  sealTitle,
  sealBody,
}: Props) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid items-start gap-10 md:grid-cols-2">
        {/* Texto */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-ink-900">{title}</h2>
          <p className="mt-4 leading-relaxed text-slate-700">{body}</p>
          <ul className="mt-4 list-disc pl-5 text-slate-700">
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>

        {/* Ilustración + caption */}
        <figure className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
          <IntegritySealIllo />
          <figcaption className="mt-3">
            <div className="text-lg font-semibold">{sealTitle}</div>
            <p className="text-slate-700">{sealBody}</p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}