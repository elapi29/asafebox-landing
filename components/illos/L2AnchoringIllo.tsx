// components/illos/L2AnchoringIllo.tsx
export default function L2AnchoringIllo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 320"
      role="img"
      aria-labelledby="l2Title l2Desc"
      className={className + ' w-full h-auto'}
    >
      <title id="l2Title">Anclaje a L2</title>
      <desc id="l2Desc">Log append-only con flecha hacia una cadena L2.</desc>

      {/* Panel izquierdo: log */}
      <rect x="16" y="16" width="260" height="288" rx="16" fill="#ffffff" stroke="#e2e8f0" />
      {Array.from({ length: 7 }).map((_, i) => (
        <rect key={i} x="40" y={48 + i * 32} width="200" height="18" rx="9" fill="#e2e8f0" />
      ))}
      <text x="146" y="280" textAnchor="middle" fill="#334155" fontWeight="600">Verify Log (append-only)</text>

      {/* Flecha */}
      <polygon points="296,160 336,176 336,144" fill="#94a3b8" />

      {/* Panel derecho: L2 */}
      <rect x="344" y="16" width="200" height="288" rx="16" fill="#f5f3ff" stroke="#c4b5fd" />
      <text x="444" y="56" textAnchor="middle" fill="#6d28d9" fontWeight="700">Layer 2</text>
      {Array.from({ length: 4 }).map((_, i) => (
        <circle key={i} cx="444" cy={100 + i * 46} r="14" fill="#ddd6fe" stroke="#7c3aed" />
      ))}
      <text x="444" y="280" textAnchor="middle" fill="#6d28d9" fontWeight="600">Economic anchoring</text>
    </svg>
  )
}
