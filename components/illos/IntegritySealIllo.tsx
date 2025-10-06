// components/illos/IntegritySealIllo.tsx
// Ilustración neutral: “stack” de huellas encadenadas bajo un sello maestro
export default function IntegritySealIllo(
  { className = '' }: { className?: string } = {}
) {
  return (
    <svg
      viewBox="0 0 640 360"
      role="img"
      aria-label="Stack de huellas encadenadas con sello maestro"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gSeal" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2f7fff" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="10" floodOpacity="0.12" />
        </filter>
      </defs>

      {/* base card */}
      <rect x="24" y="24" width="592" height="312" rx="16" fill="#fff" stroke="#e2e8f0" />

      {/* pila de “huellas” */}
      {Array.from({ length: 5 }).map((_, i) => {
        const y = 80 + i * 34
        return (
          <g key={i} transform={`translate(110, ${y})`}>
            <rect x="-70" y="-16" width="140" height="32" rx="8" fill="#ffffff" stroke="#cbd5e1" />
            <g opacity="0.9">
              <ellipse cx="0" cy="0" rx="20" ry="12" fill="none" stroke="#334155" strokeWidth="2" />
              <ellipse cx="0" cy="0" rx="13" ry="8" fill="none" stroke="#334155" strokeWidth="2" />
              <ellipse cx="0" cy="0" rx="6" ry="4" fill="none" stroke="#334155" strokeWidth="2" />
            </g>
            {/* cadena */}
            <rect x="40" y="-6" width="52" height="12" rx="6" fill="#e2e8f0" />
          </g>
        )
      })}

      {/* sello maestro */}
      <g transform="translate(430, 170)" filter="url(#soft)">
        <circle r="56" fill="url(#gSeal)" />
        <circle r="44" fill="#fff" opacity="0.15" />
        {/* check estilizado */}
        <path d="M-18 2 l10 10 l18 -24" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
      </g>

      {/* leyenda neutral */}
      <rect x="340" y="252" width="240" height="48" rx="10" fill="#f8fafc" stroke="#e2e8f0" />
      <g transform="translate(460, 276)">
        <circle r="8" fill="#a855f7" />
        <rect x="16" y="-6" width="120" height="12" rx="6" fill="#cbd5e1" />
      </g>
    </svg>
  )
}