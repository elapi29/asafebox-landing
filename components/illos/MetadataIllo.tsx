// components/illos/MetadataIllo.tsx
export default function MetadataIllo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 320"
      role="img"
      aria-labelledby="metaTitle metaDesc"
      className={className + ' w-full h-auto'}
    >
      <title id="metaTitle">Metadata pública + dato protegido</title>
      <desc id="metaDesc">Mitad izquierda pública, mitad derecha privada/protegida.</desc>

      <rect x="16" y="16" width="528" height="288" rx="16" fill="#ffffff" stroke="#e2e8f0" />

      {/* Izquierda: pública */}
      <rect x="32" y="40" width="240" height="240" rx="12" fill="#ecfeff" stroke="#06b6d4" />
      {['token: KYCv2', 'policy: AML-std', 'scope: POS'].map((t, i) => (
        <text key={t} x="52" y={80 + i * 28} fill="#0e7490" fontWeight="600">{t}</text>
      ))}
      <text x="152" y="260" textAnchor="middle" fill="#0e7490" fontWeight="700">Metadata pública</text>

      {/* Derecha: privada */}
      <rect x="286" y="40" width="240" height="240" rx="12" fill="#f8fafc" stroke="#94a3b8" />
      <rect x="306" y="88" width="200" height="14" rx="7" fill="#cbd5e1" />
      <rect x="306" y="120" width="200" height="14" rx="7" fill="#cbd5e1" />
      <rect x="306" y="152" width="160" height="14" rx="7" fill="#cbd5e1" />
      <g transform="translate(436, 200)">
        <rect x="-30" y="-18" width="60" height="36" rx="8" fill="#ffffff" stroke="#94a3b8" />
        <path d="M-16,-18 a16,16 0 0 1 32,0" fill="none" stroke="#94a3b8" strokeWidth="3" />
      </g>
      <text x="406" y="260" textAnchor="middle" fill="#334155" fontWeight="700">Dato protegido</text>
    </svg>
  )
}