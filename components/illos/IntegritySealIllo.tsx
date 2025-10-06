// components/illos/IntegritySealIllo.tsx
export default function IntegritySealIllo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 320"
      role="img"
      aria-labelledby="sealTitle sealDesc"
      className={className + ' w-full h-auto'}
    >
      <title id="sealTitle">Sello de integridad encadenado</title>
      <desc id="sealDesc">Pila de huellas con un sello maestro que garantiza integridad.</desc>

      {/* Base card */}
      <rect x="16" y="16" width="528" height="288" rx="16" fill="#ffffff" stroke="#e2e8f0" />

      {/* Grid de “huellas” */}
      {Array.from({ length: 4 }).map((_, r) =>
        Array.from({ length: 8 }).map((__, c) => {
          const x = 48 + c * 56
          const y = 56 + r * 50
          return (
            <g key={`${r}-${c}`} transform={`translate(${x},${y})`}>
              <rect x="-18" y="-12" width="36" height="24" rx="6" fill="#ffffff" stroke="#cbd5e1" />
              <ellipse cx="0" cy="0" rx="10" ry="12" fill="none" stroke="#64748b" strokeWidth="2"/>
              <ellipse cx="0" cy="0" rx="5"  ry="7"  fill="none" stroke="#64748b" strokeWidth="2"/>
            </g>
          )
        })
      )}

      {/* Sello maestro */}
      <g transform="translate(460, 60)">
        <circle r="44" fill="#f1f5f9" stroke="#94a3b8" />
        <circle r="30" fill="#e0e7ff" stroke="#6366f1" />
        <path d="M-12 4 l8 8 16-20" fill="none" stroke="#1d4ed8" strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* Banda “PQ-ready” */}
      <rect x="40" y="236" width="480" height="40" rx="10" fill="#dbeafe" />
      <text x="280" y="262" textAnchor="middle" fill="#1e40af" fontWeight="600" fontSize="14">
        Transporte autenticado Post-Quantum-Ready (mTLS)
      </text>
    </svg>
  )
}