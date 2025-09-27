// components/PrivacyBlindReveal.tsx
type Props = { title: string; body: string; cta: string }

export default function PrivacyBlindReveal({ title, body, cta }: Props) {
  const base = (process.env.NEXT_PUBLIC_BASE_PATH || '') + '/illustrations'
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-2 items-center">
        {/* Texto izquierda (mismo tamaño) */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">{body}</p>

          <button
            type="button"
            className="group mt-6 inline-flex items-center gap-2 rounded-full bg-brand-900 px-5 py-3 text-md font-semibold text-white hover:bg-brand-800"
            aria-label={cta}
          >
            <span>{cta}</span>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden className="transition group-hover:translate-x-0.5">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Imagen derecha (verde ZK) */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <img
            src={`${base}/blind-reveal.png`}
            alt="Blind-Reveal"
            className="w-full h-auto rounded-xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}