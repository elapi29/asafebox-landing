export default function Illustration() {
  return (
    <figure className="mx-auto max-w-4xl">
      <svg viewBox="0 0 1200 260" role="img" aria-labelledby="dsrTitle dsrDesc" className="w-full h-auto">
        <title id="dsrTitle">Flujo aSAFEBOX: integridad y privacidad</title>
        <desc id="dsrDesc">Hash/Commit, mTLS, Verify Log, Blind-Reveal y capa post-cuántica</desc>

        {/* Banda post-cuántica */}
        <rect x="20" y="20" width="1160" height="60" rx="12" className="fill-blue-100" />
        <text x="600" y="58" textAnchor="middle" className="fill-blue-900 text-sm">
          Post-Quantum ready (transporte y firmas)
        </text>

        {/* Línea de flujo */}
        <line x1="80" y1="160" x2="1120" y2="160" className="stroke-slate-300" strokeWidth="4" strokeDasharray="6 8"/>

        {/* Estaciones con nuevos subtítulos */}
        {[
          { x:120,  title:"Emisor",        sub:"Ofuscamiento criptográfico (PQ-ready)" },          // antes: Hash + Commit
          { x:360,  title:"mTLS",          sub:"Capa de Seguridad de Transporte (PQ-ready)" },     // antes: Autenticación mutua
          { x:600,  title:"Verify Log",    sub:"Evidencia Ledger inmutable inmediata (off-chain)" },// antes: HMAC / Verify Log
          { x:840,  title:"Blind-Reveal",  sub:"Identidad cegada: protección máxima del customer" },// antes: Privacidad por diseño
          { x:1080, title:"Receptor",      sub:"Entrega verificable" },
        ].map((b, i) => (
          <g key={i} transform={`translate(${b.x}, 120)`}>
            <rect x="-70" y="-40" width="140" height="80" rx="14" className="fill-white stroke-slate-300" />
            <text x="0" y="-8" textAnchor="middle" className="fill-slate-900 text-[14px] font-semibold">{b.title}</text>
            <text x="0" y="16" textAnchor="middle" className="fill-slate-600 text-[12px]">{b.sub}</text>
            {i < 4 && <polygon points="70,0 100,10 100,-10" className="fill-slate-300" />}
          </g>
        ))}
      </svg>
      <figcaption className="mt-3 text-center text-sm text-slate-500">
        Evidencia inmutable, transporte autenticado y privacidad con Blind-Reveal.
      </figcaption>
    </figure>
  )
}
