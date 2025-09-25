// components/EvidenceImmutable.tsx
export default function EvidenceImmutable() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Izquierda: texto grande */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Evidencia inmutable</h3>
          <p className="mt-3 text-lg md:text-xl text-slate-900">
            Cada paso (transacción, firma, KYC) queda sellado con un Ledger Inmutable y pruebas ZK.
          </p>

          <p className="mt-4 text-slate-700 leading-relaxed">
            El encadenamiento inmutable permite detectar cualquier manipulación, incluso meses o años
            más tarde, manteniendo la auditabilidad operativa con impacto mínimo en la latencia.
          </p>
        </div>

        {/* Derecha: construcción del Ledger (matriz de huellas) + banda PQ */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <svg viewBox="0 0 1200 560" className="w-full h-auto" role="img"
               aria-label="Capa PQ-ready y construcción del Ledger Inmutable como matriz de huellas ofuscadas">

            {/* Banda PQ (más grande) */}
            <rect x="20" y="20" width="1160" height="90" rx="18" className="fill-blue-100" />
            <text x="600" y="78" textAnchor="middle" className="fill-blue-900 text-base">
              Capa de Seguridad de Transporte Post-Quantum-Ready (mTLS PQ-Ready)
            </text>

            {/* Título dentro del gráfico */}
            <text x="600" y="140" textAnchor="middle" className="fill-slate-900 text-sm">
              Ledger Inmutable (matriz de huellas ofuscadas)
            </text>

            {/* Matriz de huellas (más grande) */}
            <g transform="translate(600, 350)">
              <rect x="-360" y="-160" width="720" height="320" rx="18" className="fill-white stroke-slate-300" />
              {
                // 6 filas x 12 columnas; celdas mayores
                Array.from({ length: 6 }).map((_, r) =>
                  Array.from({ length: 12 }).map((__, c) => {
                    const cx = -300 + c * 55
                    const cy = -120 + r * 50
                    return (
                      <g key={`${r}-${c}`} transform={`translate(${cx},${cy})`}>
                        <rect x="-24" y="-18" width="48" height="36" rx="8" className="fill-white stroke-slate-200" />
                        <ellipse cx="0" cy="0" rx="14" ry="18" fill="none" className="stroke-slate-500" strokeWidth="2.5"/>
                        <ellipse cx="0" cy="0" rx="9"  ry="12" fill="none" className="stroke-slate-500" strokeWidth="2.5"/>
                        <ellipse cx="0" cy="0" rx="4"  ry="6"  fill="none" className="stroke-slate-500" strokeWidth="2.5"/>
                      </g>
                    )
                  })
                )
              }
            </g>

            {/* Caption inferior (GRANDE) */}
            <text x="600" y="520" textAnchor="middle" className="fill-slate-900 text-base">
              Control total de integridad y privacidad, extremo a extremo
            </text>
          </svg>
        </div>
      </div>
    </section>
  )
}