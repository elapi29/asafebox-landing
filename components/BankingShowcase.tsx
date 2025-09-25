export default function BankingShowcase() {
  const base = (process.env.NEXT_PUBLIC_BASE_PATH || '') + '/illustrations'
  const cards = [
  { src: `${base}/banking-integrity-seal.png`, title: 'Sello de integridad', desc: 'Pila de huellas protegida por un sello maestro.' },
  { src: `${base}/l2-anchoring.png`,          title: 'Verify Log → L2',  desc: 'Append-only y anclaje económico en L2.' },
  { src: `${base}/blind-reveal.png`,          title: 'Privacidad (ZK)',   desc: 'Validez sin revelar el dato.' },
  { src: `${base}/metadata.png`,              title: 'Metadata pública',  desc: 'Tokens/políticas visibles, dato protegido.' },
    ]

  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <h2 className="text-center text-2xl font-bold">Banca: integridad, privacidad y auditoría</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(c => (
          <figure key={c.title} className="rounded-2xl border border-slate-200 p-4 shadow-sm">
            <img src={c.src} alt={c.title} className="w-full h-auto" loading="lazy" />
            <figcaption className="mt-3">
              <div className="text-base font-semibold">{c.title}</div>
              <p className="text-sm text-slate-600">{c.desc}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}