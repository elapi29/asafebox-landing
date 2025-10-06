// components/illos/MetadataIllo.tsx
// Ilustración neutral: metadata pública (chips) + dato protegido
export default function MetadataIllo(
  { className = '' }: { className?: string } = {}
) {
  return (
    <svg
      viewBox="0 0 640 360"
      role="img"
      aria-label="Metadata pública y dato protegido"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gMeta" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2f7fff" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
      </defs>

      {/* base card */}
      <rect x="24" y="24" width="592" height="312" rx="16" fill="#fff" stroke="#e2e8f0" />

      {/* columna izquierda: chips de metadata pública */}
      <g transform="translate(160, 110)">
        {Array.from({ length: 6 }).map((_, i) => (
          <rect
            key={i}
            x="-90"
            y={-60 + i * 22}
            width="180"
            height="16"
            rx="8"
            fill="#f1f5f9"
            stroke="#e2e8f0"
          />
        ))}
      </g>

      {/* columna derecha: bloque protegido */}
      <g transform="translate(470, 110)">
        <rect x="-100" y="-60" width="200" height="120" rx="12" fill="#0f172a" opacity="0.85" />
        <rect x="-70" y="-30" width="140" height="10" rx="5" fill="#e2e8f0" opacity="0.4" />
        <rect x="-70" y="-10" width="140" height="10" rx="5" fill="#e2e8f0" opacity="0.4" />
        <rect x="-70" y="10"  width="140" height="10" rx="5" fill="#e2e8f0" opacity="0.4" />
      </g>

      {/* badge “policy” */}
      <g transform="translate(470, 246)">
        <rect x="-54" y="-18" width="108" height="36" rx="18" fill="#f8fafc" stroke="#e2e8f0" />
        <circle cx="-28" cy="0" r="8" fill="url(#gMeta)" />
        <rect x="-12" y="-6" width="64" height="12" rx="6" fill="#cbd5e1" />
      </g>
    </svg>
  )
}