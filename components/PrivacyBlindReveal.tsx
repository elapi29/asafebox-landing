// components/PrivacyBlindReveal.tsx
import Link from 'next/link'
import BlindRevealIllo from './illos/BlindRevealIllo'

type Props = {
  title: string
  body: string
  cta: string
  href?: string            // ← NUEVO (destino del botón)
}

export default function PrivacyBlindReveal({ title, body, cta, href = '#learn' }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Texto */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-ink-900">{title}</h2>
          <p className="mt-4 leading-relaxed text-slate-700">{body}</p>

          <Link
            href={href}                 // ← usa el destino recibido
            prefetch={false}
            className="mt-6 inline-block rounded-full bg-brand-900 px-5 py-2.5 font-semibold text-white hover:bg-brand-800 transition-shadow shadow-soft"
          >
            {cta}
          </Link>
        </div>

        {/* Ilustración */}
        <figure className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
          <BlindRevealIllo />
        </figure>
      </div>
    </section>
  )
}

