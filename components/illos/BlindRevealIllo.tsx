// components/illos/BlindRevealIllo.tsx
// Ilustración neutral: dos columnas con “dato” oculto y verificación ZK
export default function BlindRevealIllo(
  { className = '' }: { className?: string } = {}
) {
  return (
    <svg
      viewBox="0 0 640 360"
      role="img"
      aria-label="Blind-Reveal / Zero-Knowledge verification"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gZK" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2f7fff" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
        <marker id="arrowBR" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/>
        </marker>
      </defs>

      {/* base card */}
      <rect x="24" y="24" width="592" height="312" rx="16" fill="#fff" stroke="#e2e8f0" />

      {/* Panel izquierdo (dato oculto) */}
      <g transform="translate(130, 110)">
        <rect x="-90" y="-60" width="180" height="120" rx="12" fill="#f8fafc" stroke="#cbd5e1" />
        {/* “dato” tapado por banda */}
        <rect x="-60" y="-12" width="120" height="24" rx="6" fill="#0f172a" opacity="0.85" />
        <rect x="-72" y="30" width="144" height="10" rx="5" fill="#e2e8f0" />
        <rect x="-72" y="-40" width="144" height="10" rx="5" fill="#e2e8f0" />
      </g>

      {/* Panel derecho (verificación) */}
      <g transform="translate(510, 110)">
        <rect x="-90" y="-60" width="180" height="120" rx="12" fill="#f8fafc" stroke="#cbd5e1" />
        {/* “prueba” */}
        <circle cx="0" cy="0" r="22" fill="url(#gZK)" />
        <rect x="-72" y="30" width="144" height="10" rx="5" fill="#e2e8f0" />
        <rect x="-72" y="-40" width="144" height="10" rx="5" fill="#e2e8f0" />
      </g>

      {/* flecha/relación */}
      <line x1="220" y1="110" x2="420" y2="110" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowBR)" />
      <rect x="280" y="96" width="80" height="28" rx="14" fill="#f1f5f9" stroke="#e2e8f0" />

      {/* chip inferior “válido” */}
      <g transform="translate(320, 250)">
        <rect x="-70" y="-18" width="140" height="36" rx="18" fill="#ecfeff" stroke="#a5f3fc" />
        <circle r="8" fill="#22d3ee" />
        <rect x="12" y="-6" width="64" height="12" rx="6" fill="#06b6d4" opacity="0.25" />
      </g>
    </svg>
  )
}