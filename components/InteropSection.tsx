// components/InteropSection.tsx
export default function InteropSection() {
  const base = (process.env.NEXT_PUBLIC_BASE_PATH || '') + '/illustrations'
  // Usá la imagen que prefieras. De ejemplo, reaprovecho l2-anchoring.png
  const imgSrc = `${base}/l2-anchoring.png`

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-3xl bg-gradient-to-b from-sky-50 to-white p-6 md:p-10 border border-slate-200">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Imagen */}
          <div className="order-1 md:order-none">
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white">
              <img
                src={imgSrc}
                alt="Gateway anclado a Ethereum; intercambio seguro entre cadenas"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>

          {/* Texto */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Connect to other ZKsync chains—no bridges required
            </h2>

            <p className="mt-4 text-slate-700 leading-relaxed">
              Interoperability isn’t an add-on—it’s part of the design. ZKsync Interop
              ofrece conectividad a nivel de protocolo entre cadenas sin depender
              de bridges terceros. Anclado en Ethereum y facilitado por <strong>Gateway</strong>,
              permite intercambio atómico de activos y datos, y ejecución entre cadenas
              públicas y privadas.
            </p>

            <p className="mt-3 text-slate-700 leading-relaxed">
              Esta interoperabilidad integrada reduce riesgo y supuestos de confianza,
              eliminando overhead de integración mientras mantiene verificabilidad on-chain.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="https://docs.zksync.io/zk-stack/zk-chains#how-interop-works"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 rounded-full px-5 py-3
                           text-md font-semibold text-white bg-brand-900 hover:bg-brand-800
                           transition focus-visible:outline-2 focus-visible:outline-offset-2
                           before:absolute before:inset-px before:rounded-[999px]
                           before:border before:border-white/10"
              >
                <span>Learn how it works</span>
                <svg
                  width="24" height="24" viewBox="0 0 24 24" fill="none"
                  className="transition group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}