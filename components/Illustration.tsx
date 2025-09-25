export default function Illustration() {
  return (
    <figure className="mx-auto max-w-4xl rounded-2xl border border-slate-200 p-4 shadow-sm">
      <svg viewBox="0 0 1200 260" role="img" aria-labelledby="dsrTitle dsrDesc" className="w-full h-auto">
        <title id="dsrTitle">Flujo aSAFEBOX: integridad y privacidad</title>
        <desc id="dsrDesc">Emisor, Ledger Inmutable, Identidad Cegada, Receptor bajo capa de transporte PQ-ready</desc>

        {/* Banda post-cuántica (solo una línea arriba que cubre todo) */}
        <rect x="20" y="20" width="1160" height="60" rx="12" className="fill-blue-100" />
        <text x="600" y="58" textAnchor="middle" className="fill-blue-900 text-sm">
          Capa de Seguridad de Transporte Post-Quantum-Ready
        </text>
        {/* Etiqueta pequeña 'mTLS' */}
        <text x="600" y="95" textAnchor="middle" className="fill-slate-600 text-[12px]">mTLS</text>

        {/* Línea de flujo */}
        <line x1="80" y1="160" x2="1120" y2="160" className="stroke-slate-300" strokeWidth="4" strokeDasharray="6 8"/>

        {/* Estaciones con labels cortos */}
        {[
          { x:120,  title:"Emisor" },
          { x:480,  title:"Ledger Inmutable" },
          { x:840,  title:"Identidad Cegada" },
          { x:1080, title:"Receptor" },
        ].map((b, i) => (
          <g key={i} transform={`translate(${b.x}, 120)`}>
            <rect x="-90" y="-40" width="180" height="80" rx="14" className="fill-white stroke-slate-300" />
            <text x="0" y="6" textAnchor="middle" className="fill-slate-900 text-[14px] font-semibold">{b.title}</text>
            {i < 3 && <polygon points="90,0 120,10 120,-10" className="fill-slate-300" />}
          </g>
        ))}
      </svg>
      <figcaption className="mt-3 text-center text-sm text-slate-500">
        Transporte autenticado (mTLS PQ-ready), evidencia inmutable y privacidad por diseño.
      </figcaption>
    </figure>
  )
}

