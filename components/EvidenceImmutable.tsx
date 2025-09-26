// components/EvidenceImmutable.tsx
export default function EvidenceImmutable() {
  const base = (process.env.NEXT_PUBLIC_BASE_PATH || '') + '/illustrations'
  const img = `${base}/banking-integrity-seal.png` // PNG del “sello” grande

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Texto (izquierda) */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Evidencia inmutable
          </h2>
          <p className="mt-4 text-lg md:text-xl text-slate-700 leading-relaxed">
            Cada paso (transacción, firma, KYC) queda sellado con un&nbsp;
            <strong>Ledger Inmutable</strong> y pruebas ZK. El encadenamiento permite
            detectar cualquier manipulación incluso meses o años más tarde, manteniendo
            auditabilidad con impacto mínimo en la operación.
          </p>

          {/* Pills grandes para conceptos clave */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-sky-100 px-4 py-2 text-base md:text-lg font-semibold text-sky-900">
              Transporte PQ-ready (mTLS)
            </span>
            <span className="rounded-full bg-emerald-100 px-4 py-2 text-base md:text-lg font-semibold text-emerald-900">
              Ledger inmutable (encadenamiento)
            </span>
            <span className="rounded-full bg-indigo-100 px-4 py-2 text-base md:text-lg font-semibold text-indigo-900">
              Control extremo a extremo
            </span>
          </div>
        </div>

        {/* Imagen (derecha) */}
        <figure className="order-1 md:order-none">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <img
              src={img}
              alt="Sello de Integridad Encadenado"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <figcaption className="mt-4 text-center text-base md:text-lg text-slate-600">
            Un “sello” criptográfico por evento; los sellos se encadenan en un libro de evidencias.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}