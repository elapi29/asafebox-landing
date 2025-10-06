// components/DSRShowcase.tsx
import DSRScene from './illos/DSRScene'

export default function DSRShowcase() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-ink-900">
            Transport + Evidence + Privacy (PQ-ready)
          </h2>
          <p className="mt-4 text-slate-700">
            Authenticated transport (mTLS), immutable Verify Log and Blind-Reveal checks.
            Tamper-evident by design, private by default, audit-ready.
          </p>
          <ul className="mt-4 space-y-1 text-slate-700">
            <li>• PQ-ready transport</li>
            <li>• Chained evidence (append-only)</li>
            <li>• Blind-Reveal validation</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
          <DSRScene className="w-full h-auto" />
        </div>
      </div>
    </section>
  )
}