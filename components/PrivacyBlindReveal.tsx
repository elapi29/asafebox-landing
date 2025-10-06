// components/PrivacyBlindReveal.tsx
import BlindRevealIllo from './illos/BlindRevealIllo'

export default function PrivacyBlindReveal({
  title, body, cta,
}: { title: string; body: string; cta: string }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-ink-900">{title}</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">{body}</p>
          <a
            href="#learn"
            className="mt-6 inline-block rounded-full bg-brand-900 px-5 py-2.5 text-white font-semibold hover:bg-brand-800"
          >
            {cta}
          </a>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
          <BlindRevealIllo />
        </div>
      </div>
    </section>
  )
}
