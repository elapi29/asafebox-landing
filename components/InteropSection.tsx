// components/InteropSection.tsx
export default function InteropSection() {
  const base = (process.env.NEXT_PUBLIC_BASE_PATH || '') + '/illustrations'
  const imgSrc = `${base}/banking-integrity-seal.png` // 👈 sello de integridad encadenado (PNG)

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-3xl bg-gradient-to-b from-sky-50 to-white p-6 md:p-12 border border-slate-200">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Texto (izquierda) */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Cada transacción se sella con un Sello de Integridad Encadenado
            </h2>
            <p className="mt-4 text-lg md:text-xl text-slate-700 leading-relaxed">
              El “sello” es una huella criptográfica única por evento. Los sellos se encadenan
              en un libro de evidencias inmutable y viajan bajo <strong>mTLS Post-Quantum-Ready</strong>,
              asegurando integridad, confidencialidad y auditoría de extremo a extremo.
            </p>

            <div className="mt-8">
              <button
                type="button"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3
                           text-base md:text-lg font-semibold text-white bg-brand-900 hover:bg-brand-800
                           transition focus-visible:outline-2 focus-visible:outline-offset-2"
                aria-label="Learn how it works"
              >
                <span>Learn how it works</span>
                <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden className="transition group-hover:translate-x-0.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Imagen (derecha) */}
          <div className="order-1 md:order-none">
            <figure className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white">
              <img
                src={imgSrc}
                alt="Sello de integridad encadenado"
                className="w-full h-auto"
                loading="lazy"
              />
              <figcaption className="p-5 text-center space-y-2">
                <div className="text-xl md:text-2xl font-bold text-slate-900">
                  Capa de Seguridad de Transporte Post-Quantum-Ready (mTLS PQ-Ready)
                </div>
                <div className="text-base md:text-lg text-slate-700">
                  Sello de Integridad Encadenado (evidencia criptográfica por evento)
                </div>
                <div className="text-base font-semibold text-slate-900">
                  Control total de integridad y privacidad, extremo a extremo
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}