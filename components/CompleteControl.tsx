// components/CompleteControl.tsx
export default function CompleteControl() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Izquierda: texto */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Complete control</h3>
          <p className="mt-3 text-lg font-semibold text-slate-900">
            Own your blockchain infrastructure, full-stack
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            With <strong>Prividium</strong> and the <strong>ZKsync Stack</strong>, enterprises get full
            control of their blockchain environment—public or private. Customize, extend, and deploy
            infrastructure that meets your exact needs while benefiting from Ethereum’s security guarantees.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Cada transacción es parte de un <strong>Ledger Inmutable</strong> que viaja bajo una
            <strong> capa de seguridad Post-Quantum-Ready</strong>, asegurando integridad, confidencialidad
            y auditabilidad de extremo a extremo.
          </p>
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
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden className="transition group-hover:translate-x-0.5">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Derecha: gráfico (SVG, exporta estático) */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <svg viewBox="0 0 1200 520" className="w-full h-auto" role="img"
               aria-label="Emisor → Receptor bajo capa PQ-ready, con huellas y ledger inmutable">

            {/* Banda PQ */}
            <rect x="20" y="20" width="1160" height="70" rx="16" className="fill-blue-100" />
            <text x="600" y="62" textAnchor="middle" className="fill-blue-900 text-sm">
              Capa de Seguridad de Transporte Post-Quantum-Ready (mTLS PQ-Ready)
            </text>

            {/* Línea principal */}
            <line x1="120" y1="280" x2="1080" y2="280" className="stroke-slate-300" strokeWidth="6" strokeDasharray="6 10" />

            {/* Emisor y Receptor */}
            {[
              { x:220,  title:"Emisor" },
              { x:980,  title:"Receptor" },
            ].map((b, i) => (
              <g key={i} transform={`translate(${b.x}, 280)`}>
                <rect x="-150" y="-56" width="300" height="112" rx="16" className="fill-white stroke-slate-300" />
                <text x="0" y="8" textAnchor="middle" className="fill-slate-900 text-[16px] font-semibold">{b.title}</text>
              </g>
            ))}

            {/* “Huellas” (concentric ellipses) y flechas intermedias */}
            <g transform="translate(600, 280)">
              {/* flecha izq */}
              <polygon points="-230,0 -200,12 -200,-12" className="fill-slate-300" />
              {/* 3 huellas */}
              {[-130, 0, 130].map((cx, idx) => (
                <g key={idx} transform={`translate(${cx},0)`}>
                  <circle cx="0" cy="0" r="42" className="fill-white stroke-slate-300" />
                  <ellipse cx="0" cy="0" rx="26" ry="36" fill="none" className="stroke-slate-600" strokeWidth="3"/>
                  <ellipse cx="0" cy="0" rx="16" ry="22" fill="none" className="stroke-slate-600" strokeWidth="3"/>
                  <ellipse cx="0" cy="0" rx="8"  ry="12" fill="none" className="stroke-slate-600" strokeWidth="3"/>
                </g>
              ))}
              {/* flecha der */}
              <polygon points="200,0 230,12 230,-12" className="fill-slate-300" />
            </g>

            {/* Bloque Ledger Inmutable (mini grid) */}
            <g transform="translate(600, 420)">
              <rect x="-220" y="-44" width="440" height="88" rx="14" className="fill-white stroke-slate-300" />
              {Array.from({length:5}).map((_, r) =>
                Array.from({length:18}).map((__, c) => (
                  <rect key={`${r}-${c}`} x={-200 + c*22} y={-28 + r*16} width="18" height="12" rx="2" className="fill-slate-300" />
                ))
              )}
              <text x="0" y="8" textAnchor="middle" className="fill-slate-900 text-[12px]">Ledger Inmutable</text>
            </g>
          </svg>

          <figcaption className="mt-3 text-center text-sm text-slate-600">
            Cada transacción integra el Ledger Inmutable y se transporta bajo una capa PQ-ready.
          </figcaption>
        </div>
      </div>
    </section>
  )
}