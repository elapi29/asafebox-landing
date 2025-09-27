// components/Features.tsx
type Props = {
  immutableEvidence: string
  privacyBR: string
  auditReady: string
  pqcReady: string
}

export default function Features({ immutableEvidence, privacyBR, auditReady, pqcReady }: Props) {
  const items = [immutableEvidence, privacyBR, auditReady, pqcReady]
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((t) => (
          <div key={t} className="rounded-xl border border-slate-200 p-4 shadow-sm">
            <p className="font-medium text-slate-900">{t}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
