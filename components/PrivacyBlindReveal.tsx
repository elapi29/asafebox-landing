// components/PrivacyBlindReveal.tsx
export default function PrivacyBlindReveal() {
  const base = (process.env.NEXT_PUBLIC_BASE_PATH || '') + '/illustrations'
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Izquierda: texto grande */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Privacidad con Blind-Reveal</h3>
          <p className="mt-3 text-lg md:text-xl text-slate-900">
            Demostramos validez sin exponer datos sensibles a contrapartes ni auditores.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Las partes verifican la consistencia de la operación con pruebas criptográficas, preservando
            la identidad del cliente y minimizando supuestos de confianza.
          </p>

          {/* (Opcional) CTA sin link */}
          <div className="mt-8">
            <button
              type="button"
              className="group relative inline-flex items-center gap-2 rounded-full px-5 py-3
                         text-md font-semibold text-white bg-brand-900 hover:bg-brand-800
                         transition focus-visible:outline-2 focus-visible:outline-offset-2
                         before:absolute before:inset-px before:rounded-[999px]
                         before:border before:border-white/10"
            >
              <span>Learn how it works</span>
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden
                   className="transition group-hover:translate-x-0.5">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor"
                      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Derecha: imagen verde ZK */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <img
              src={`${base}/blind-reveal.png`}
              alt="Blind-Reveal: validez demostrada sin exponer datos"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}