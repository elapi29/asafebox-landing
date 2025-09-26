// components/InteropSection.tsx
export default function InteropSection() {
  const base = (process.env.NEXT_PUBLIC_BASE_PATH || '') + '/illustrations'
  // Usá la imagen que prefieras (de ejemplo: l2-anchoring.png)
  const imgSrc = `${base}/l2-anchoring.png`

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-3xl bg-gradient-to-b from-sky-50 to-white p-6 md:p-10 border border-slate-200">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Texto (izquierda) */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Cada transacción es parte de un Ledger Inmutable que viaja bajo una capa de seguridad Post-Quantum-Ready,
              asegurando integridad, confidencialidad y auditabilidad de extremo a extremo.
            </h2>

            <p className="mt-4 text-slate-700 leading-relaxed">
              El “libro de cartas digitales” encapsula documentos, firmas y eventos. Las huellas criptográficas
              detectan cualquier alteración de inmediato, y el transporte cifrado (mTLS PQ-ready) protege los datos en movimiento.
            </p>

            {/* CTA sin link externo */}
            <div className="mt-8">
              <button
                type="button"
                className="group relative inline-flex items-center gap-2 rounded-full px-5 py-3
                           text-md font-semibold text-white bg-brand-900 hover:bg-brand-800
                           transition focus-visible:outline-2 focus-visible:outline-offset-2
                           before:absolute before:inset-px before:rounded-[999px]
                           before:border before:border-white/10"
                aria-label="Learn how it works"
              >
                <span>Learn how it works</span>
                <svg
                  width="24" height="24" viewBox="0 0 24 24" aria-hidden
                  className="transition group-hover:translate-x-0.5"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Imagen (derecha) */}
          <div className="order-1 md:order-none md:pl-6">
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white">
              <img
                src={imgSrc}
                alt="Capa PQ-ready y Ledger Inmutable anclado"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-center text-sm text-slate-600">
              Capa de Seguridad de Transporte Post-Quantum-Ready (mTLS) + Ledger Inmutable.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}