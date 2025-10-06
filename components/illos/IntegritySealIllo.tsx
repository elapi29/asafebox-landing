// components/illos/IntegritySealIllo.tsx
export default function IntegritySealIllo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 520" role="img" aria-label="Chained integrity seal"
         className={['w-full h-auto', className].join(' ')}>
      <rect x="20" y="20" width="1160" height="80" rx="16" fill="#dbeafe" />
      {/* cadena de “cartas” con huellas */}
      {[0,1,2,3].map((i) => (
        <g key={i} transform={`translate(${120 + i*220}, 280)`}>
          <rect x="-80" y="-60" width="160" height="120" rx="18" fill="#fff" stroke="#cbd5e1" />
          <ellipse cx="0" cy="0" rx="30" ry="40" fill="none" stroke="#0f172a" strokeWidth="3"/>
          <ellipse cx="0" cy="0" rx="18" ry="26" fill="none" stroke="#0f172a" strokeWidth="3"/>
          <ellipse cx="0" cy="0" rx="8"  ry="12" fill="none" stroke="#0f172a" strokeWidth="3"/>
        </g>
      ))}
      {/* links */}
      <path d="M200,280 C360,300 520,300 680,280" stroke="#cbd5e1" fill="none"/>
      <path d="M420,280 C580,300 740,300 900,280" stroke="#cbd5e1" fill="none"/>
      {/* sello maestro */}
      <g transform="translate(960,280)">
        <rect x="-110" y="-70" width="220" height="140" rx="22" fill="#dbeafe" stroke="#3b82f6" strokeWidth="3"/>
        <ellipse cx="0" cy="0" rx="52" ry="72" fill="none" stroke="#2563eb" strokeWidth="4"/>
        <ellipse cx="0" cy="0" rx="34" ry="48" fill="none" stroke="#2563eb" strokeWidth="4"/>
        <ellipse cx="0" cy="0" rx="18" ry="26" fill="none" stroke="#2563eb" strokeWidth="4"/>
      </g>
    </svg>
  )
}