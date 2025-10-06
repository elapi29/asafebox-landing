// components/illos/BlindRevealIllo.tsx
export default function BlindRevealIllo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 320"
      role="img"
      aria-labelledby="brTitle brDesc"
      className={className + ' w-full h-auto'}
    >
      <title id="brTitle">Blind-Reveal</title>
      <desc id="brDesc">Datos ofuscados con una ventana que revela sólo lo necesario.</desc>

      {/* Tarjeta */}
      <rect x="16" y="16" width="528" height="288" rx="16" fill="#ffffff" stroke="#e2e8f0" />

      {/* Líneas ofuscadas */}
      {Array.from({ length: 6 }).map((_, i) => (
        <rect
          key={i}
          x="48"
          y={60 + i * 28}
          width={360}
          height="14"
          rx="7"
          fill="#cbd5e1"
          opacity="0.8"
        />
      ))}

      {/* Ventana de “reveal” */}
      <g transform="translate(430, 104)">
        <rect x="-58" y="-28" width="116" height="56" rx="10" fill="#ecfeff" stroke="#06b6d4" />
        <text x="0" y="5" textAnchor="middle" fill="#0e7490" fontWeight="700" fontSize="13">
          ✓ válido
        </text>
      </g>

      {/* Candado */}
      <g transform="translate(100, 228)">
        <rect x="-26" y="-10" width="160" height="40" rx="10" fill="#e5e7eb" />
        <g transform="translate(-2, 10)">
          <rect x="0" y="-18" width="36" height="28" rx="6" fill="#ffffff" stroke="#94a3b8" />
          <path d="M6,-18 a12,12 0 0 1 24,0" fill="none" stroke="#94a3b8" strokeWidth="3" />
        </g>
        <text x="40" y="14" fill="#334155" fontWeight="600">Privacy by Design</text>
      </g>
    </svg>
  )
}