// components/BankingShowcase.tsx
import IntegritySealIllo from './illos/IntegritySealIllo'
import BlindRevealIllo from './illos/BlindRevealIllo'
import L2AnchoringIllo from './illos/L2AnchoringIllo'
import MetadataIllo from './illos/MetadataIllo'

type IlloCmp = (props: { className?: string }) => JSX.Element

type Card = {
  Cmp: IlloCmp
  title: string
  desc: string
}

export default function BankingShowcase() {
  const cards: Card[] = [
    { Cmp: IntegritySealIllo, title: 'Sello de integridad', desc: 'Pila de huellas protegida por un sello maestro.' },
    { Cmp: L2AnchoringIllo,   title: 'Verify Log → L2',     desc: 'Append-only y anclaje económico en L2.' },
    { Cmp: BlindRevealIllo,   title: 'Privacidad (ZK)',      desc: 'Validez sin revelar el dato.' },
    { Cmp: MetadataIllo,      title: 'Metadata pública',     desc: 'Tokens/políticas visibles, dato protegido.' },
  ]

  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <h2 className="text-center text-2xl font-bold">Banca: integridad, privacidad y auditoría</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ Cmp, title, desc }) => (
          <figure key={title} className="rounded-2xl border border-slate-200 p-4 shadow-soft bg-white">
            <Cmp className="w-full h-auto" />
            <figcaption className="mt-3">
              <div className="text-base font-semibold">{title}</div>
              <p className="text-sm text-slate-600">{desc}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}