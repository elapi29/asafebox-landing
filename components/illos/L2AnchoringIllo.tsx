// components/illos/L2AnchoringIllo.tsx
// Ilustración neutral: log append-only con anclaje hacia un L2
export default function L2AnchoringIllo(
  { className = '' }: { className?: string } = {}
) {
  return (
    <svg
      viewBox="0 0 640 360"
      role="img"
      aria-label="Append-only log anclado a L2"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gLink" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2f7fff" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/>
        </marker>
      </defs>

      {/* base card */}
      <rect x="24" y="24" width="592" height="312" rx="16" fill="#fff" stroke="#e2e8f0" />

      {/* bloques append-only */}
      {Array.from({ length: 6 }).map((_, i) => (
        <rect
          key={i}
          x={60 + i * 80}
          y={110}
          width="64"
          height="64"
          rx="10"
          fill="#f8fafc"
          stroke="#cbd5e1"
        />
      ))}

      {/* flechas entre bloques */}
      {Array.from({ length: 5 }).map((_, i) => (
        <line
          key={i}
          x1={124 + i * 80}
          y1={142}
          x2={140 + i * 80}
          y2={142}
          stroke="#94a3b8"
          strokeWidth="2"
          markerEnd="url(#arrow)"
        />
      ))}

      {/* cinta hacia L2 */}
      <rect x="60" y="210" width="520" height="14" rx="7" fill="url(#gLink)" opacity="0.9" />

      {/* burbuja L2 */}
      <g transform="translate(560, 210)">
        <circle r="26" fill="#f8fafc" stroke="#cbd5e1" />
        <rect x="-10" y="-4" width="20" height="8" rx="4" fill="#a855f7" />
      </g>
    </svg>
  )
}
