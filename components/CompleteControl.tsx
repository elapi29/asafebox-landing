// components/CompleteControl.tsx
export default function CompleteControl() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Izquierda: texto (tu copy tal cual) */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Complete control</h3>
          <p className="mt-3 text-lg font-semibold text-slate-900">
            Control total de integridad y privacidad, extremo a extremo
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Cada transacción es parte de un <strong>Ledger Inmutable</strong> que viaja bajo una
            <strong> capa de seguridad Post-Quantum-Ready</strong>, asegurando integridad, confidencialidad
            y auditabilidad de extremo a extremo.
          </p>

          {/* CTA sin link */}
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

        {/* Derecha: gráfico (SVG) */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <svg viewBox="0 0 1200 560" className="w-full h-auto" role="img"
               aria-label="Capa PQ-ready; Emisor→Receptor; matriz de huellas ofuscadas en Ledger Inmutable">

            {/* 1) Banda superior PQ (caption más grande) */}
            <rect x="20" y="20" width="1160" height="80" rx="16" className="fill-blue-100" />
            <text x="600" y="72" textAnchor="middle" className="fill-blue-900 text-base">
              Capa de Seguridad de Transporte Post-Quantum-Ready (mTLS PQ-Ready)
            </text>

            {/* 2) Línea principal Emisor→Receptor */}
            <line x1="120" y1="260" x2="1080" y2="260" className="stroke-slate-300" strokeWidth="6" strokeDasharray="6 10" />
            {[{ x: 220, title: 'Emisor' }, { x: 980, title: 'Receptor' }].map((b, i) => (
              <g key={i} transform={`translate(${b.x}, 260)`}>
                <rect x="-150" y="-56" width="300" height="112" rx="16" className="fill-white stroke-slate-300" />
                <text x="0" y="8" textAnchor="middle" className="fill-slate-900 text-[16px] font-semibold">{b.title}</text>
              </g>
            ))}
            {/* Flechas intermedias con “huellas” sueltas */}
            <g transform="translate(600, 260)">
              <polygon points="-230,0 -200,12 -200,-12" className="fill-slate-300" />
              {[-120, 0, 120].map((cx, idx) => (
                <g key={idx} transform={`translate(${cx},0)`}>
                  <circle cx="0" cy="0" r="34" className="fill-white stroke-slate-300" />
                  <ellipse cx="0" cy="0" rx="22" ry="30" fill="none" className="stroke-slate-600" strokeWidth="3"/>
                  <ellipse cx="0" cy="0" rx="13" ry="18" fill="none" className="stroke-slate-600" strokeWidth="3"/>
                  <ellipse cx="0" cy="0" rx="6"  ry="9"  fill="none" className="stroke-slate-600" strokeWidth="3"/>
                </g>
              ))}
              <polygon points="200,0 230,12 230,-12" className="fill-slate-300" />
            </g>

            {/* 3) Ledger Inmutable como MATRIZ de huellas ofuscadas */}
            <g transform="translate(600, 420)">
              <rect x="-250" y="-90" width="500" height="180" rx="16" className="fill-white stroke-slate-300" />
              {
                // 5 filas x 10 columnas de “huellas”
                Array.from({ length: 5 }).map((_, r) =>
                  Array.from({ length: 10 }).map((__, c) => {
                    const cx = -210 + c * 48
                    const cy = -60 + r * 36
                    return (
                      <g key={`${r}-${c}`} transform={`translate(${cx},${cy})`}>
                        <rect x="-20" y="-14" width="40" height="28" rx="6" className="fill-white stroke-slate-200" />
                        <ellipse cx="0" cy="0" rx="12" ry="16" fill="none" className="stroke-slate-500" strokeWidth="2"/>
                        <ellipse cx="0" cy="0" rx="7"  ry="10" fill="none" className="stroke-slate-500" strokeWidth="2"/>
                        <ellipse cx="0" cy="0" rx="3"  ry="5"  fill="none" className="stroke-slate-500" strokeWidth="2"/>
                      </g>
                    )
                  })
                )
              }
              <text x="0" y="108" textAnchor="middle" className="fill-slate-900 text-sm">
                Ledger Inmutable (matriz de huellas ofuscadas)
              </text>
            </g>

            {/* Caption inferior MÁS grande */}
            <text x="600" y="540" textAnchor="middle" className="fill-slate-700 text-base">
              Cada transacción integra el Ledger Inmutable y se transporta bajo una capa PQ-ready.
            </text>
          </svg>
        </div>
      </div>
    </section>
  )
}