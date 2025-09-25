// components/TwoFlows.tsx
export default function TwoFlows() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 space-y-14">
      {/* ====== Flujo 1 ====== */}
      <figure className="rounded-2xl border border-slate-200 p-5 shadow-sm bg-white">
        <figcaption className="mb-4 text-center text-lg font-semibold text-slate-900">
          Emisor → Receptor
        </figcaption>

        <svg viewBox="0 0 1200 300" className="w-full h-auto" role="img" aria-label="Flujo 1: Emisor a Receptor">
          {/* Banda superior: Comunicación Encriptada Post-Cuántica */}
          <rect x="20" y="20" width="1160" height="60" rx="12" className="fill-blue-100" />
          <text x="600" y="58" textAnchor="middle" className="fill-blue-900 text-sm">
            Comunicación Encriptada Post-Cuántica (mTLS PQ-Ready)
          </text>

          {/* Subtítulo de protección */}
          <text x="600" y="100" textAnchor="middle" className="fill-slate-600 text-[12px]">
            Protegido por Encadenamiento Inmutable
          </text>

          {/* Línea de flujo */}
          <line x1="80" y1="190" x2="1120" y2="190" className="stroke-slate-300" strokeWidth="4" strokeDasharray="6 8"/>

          {/* Emisor → Receptor */}
          {[
            { x:160,  title:"Emisor" },
            { x:1040, title:"Receptor" },
          ].map((b, i) => (
            <g key={i} transform={`translate(${b.x}, 190)`}>
              <rect x="-110" y="-40" width="220" height="80" rx="14" className="fill-white stroke-slate-300" />
              <text x="0" y="6" textAnchor="middle" className="fill-slate-900 text-[14px] font-semibold">{b.title}</text>
            </g>
          ))}

          {/* Flechas intermedias + “encadenamiento” (tres eslabones) */}
          <g transform="translate(600,190)">
            <polygon points="-30,0 -5,10 -5,-10" className="fill-slate-300" />
            <circle cx="10" cy="0" r="6" className="fill-slate-300" />
            <circle cx="34" cy="0" r="6" className="fill-slate-300" />
            <circle cx="58" cy="0" r="6" className="fill-slate-300" />
            <polygon points="85,0 110,10 110,-10" className="fill-slate-300" />
          </g>
        </svg>
      </figure>

      {/* ====== Flujo 2 ====== */}
      <figure className="rounded-2xl border border-slate-200 p-5 shadow-sm bg-white">
        <figcaption className="mb-4 text-center text-lg font-semibold text-slate-900">
          Ledger Inmutable + Identidad Cegada
        </figcaption>

        <svg viewBox="0 0 1200 340" className="w-full h-auto" role="img" aria-label="Flujo 2: Ledger inmutable e identidad cegada">
          {/* Banda superior: protección de clientes */}
          <rect x="20" y="20" width="1160" height="60" rx="12" className="fill-blue-100" />
          <text x="600" y="58" textAnchor="middle" className="fill-blue-900 text-sm">
            Protección máxima de clientes con Identidad Cegada
          </text>

          {/* Grid de Ledger (millones de transacciones) */}
          <text x="270" y="110" textAnchor="middle" className="fill-slate-600 text-[12px]">
            Ledger Inmutable de millones de transacciones
          </text>
          <g transform="translate(270,170)">
            {Array.from({ length: 6 }).map((_, r) =>
              Array.from({ length: 8 }).map((__, c) => (
                <rect key={`${r}-${c}`} x={c*22-85} y={r*16-40} width="18" height="12" rx="2" className="fill-slate-300" />
              ))
            )}
            {/* Raíz / hash agregado */}
            <rect x="90" y="-18" width="90" height="36" rx="6" className="fill-white stroke-slate-300" />
            <text x="135" y="2" textAnchor="middle" className="fill-slate-900 text-[12px]">Raíz Merkle</text>
          </g>

          {/* Flecha hacia Identidad Cegada */}
          <polygon points="540,170 570,180 570,160" className="fill-slate-300" />

          {/* Identidad Cegada (blind) */}
          <g transform="translate(880,170)">
            <rect x="-140" y="-50" width="280" height="100" rx="14" className="fill-white stroke-slate-300" />
            <text x="0" y="-10" textAnchor="middle" className="fill-slate-900 text-[14px] font-semibold">Identidad Cegada</text>
            <text x="0" y="18" textAnchor="middle" className="fill-slate-600 text-[12px]">
              Validez sin exponer datos del cliente
            </text>
          </g>
        </svg>
      </figure>
    </section>
  )
}