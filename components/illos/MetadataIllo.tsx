// components/illos/MetadataIllo.tsx
export default function MetadataIllo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 900 520" role="img" aria-label="Public metadata"
         className={['w-full h-auto', className].join(' ')}>
      <rect x="40" y="120" width="820" height="280" rx="22" fill="#fff" stroke="#cbd5e1"/>
      {/* nube */}
      <g transform="translate(160,160)">
        <ellipse cx="90" cy="38" rx="90" ry="38" fill="#e2e8f0"/>
        <circle cx="48" cy="32" r="34" fill="#e2e8f0"/>
        <circle cx="116" cy="22" r="28" fill="#e2e8f0"/>
        <polygon points="90,42 90,6 106,22" fill="#94a3b8"/>
      </g>
      {/* shields */}
      {[0,1,2,3].map(i=>(
        <g key={i} transform={`translate(${300+i*110},220)`}>
          <path d="M0,0 h80 v56 c0,32-40,56-40,56 s-40-24-40-56z" fill="#f1f5f9" stroke="#94a3b8"/>
          <path d="M20,34 l14,14 26-26" fill="none" stroke="#22c55e" strokeWidth="6" strokeLinecap="round"/>
        </g>
      ))}
      {/* target */}
      <g transform="translate(700,220)">
        <circle r="56" fill="none" stroke="#94a3b8" strokeWidth="6"/>
        <circle r="32" fill="none" stroke="#f59e0b" strokeWidth="6"/>
        <circle r="10" fill="#f59e0b"/>
      </g>
    </svg>
  )
}