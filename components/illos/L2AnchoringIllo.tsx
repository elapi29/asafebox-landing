// components/illos/L2AnchoringIllo.tsx
export default function L2AnchoringIllo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 1100 520" role="img" aria-label="Transparency log anchored on L2"
         className={['w-full h-auto', className].join(' ')}>
      {/* sistema */}
      <rect x="60" y="140" width="240" height="180" rx="18" fill="#dbeafe" stroke="#1e3a8a"/>
      <circle cx="180" cy="230" r="58" fill="none" stroke="#1e3a8a" strokeWidth="6"/>
      <rect x="150" y="260" width="60" height="8" fill="#1e3a8a"/>
      {/* log */}
      <rect x="370" y="110" width="300" height="240" rx="18" fill="#a7f3d0" stroke="#065f46"/>
      {[0,1,2,3].map(i=>(
        <g key={i} transform={`translate(400,150 ${''})`}>
          <rect x="0" y={i*48} width="22" height="22" rx="4" fill="#059669"/>
          <rect x="34" y={i*48+3} width="230" height="16" rx="8" fill="#047857"/>
        </g>
      ))}
      {/* flecha */}
      <path d="M300,230 H370" stroke="#64748b" strokeWidth="6" markerEnd="url(#a)"/>
      <defs><marker id="a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/></marker></defs>
      {/* L2 box */}
      <rect x="720" y="150" width="270" height="180" rx="22" fill="#34d399" stroke="#047857" strokeWidth="4"/>
      <text x="855" y="255" textAnchor="middle" fontSize="88" fontWeight="800" fill="#064e3b">L2</text>
      <circle cx="970" cy="150" r="36" fill="#10b981" stroke="#065f46" strokeWidth="4"/>
      <rect x="960" y="138" width="20" height="24" rx="4" fill="#064e3b"/>
    </svg>
  )
}