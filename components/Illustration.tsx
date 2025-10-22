// components/Illustration.tsx
type Props = {
  transportLabel: string
  sender: string
  ledger: string
  blindId: string
  receiver: string
  caption: string
}

export default function Illustration({
  transportLabel,
  sender,
  ledger,
  blindId,
  receiver,
  caption,
}: Props) {
  return (
    <figure className="mx-auto max-w-4xl">
      <svg viewBox="0 0 1200 260" role="img" aria-label={transportLabel} className="w-full h-auto">
        {/* Banda post-cuántica */}
        <rect x="20" y="20" width="1160" height="60" rx="12" className="fill-blue-100" />
        <text x="600" y="58" textAnchor="middle" className="fill-blue-900 text-sm">
          {transportLabel}
        </text>

        {/* Línea de flujo */}
        <line x1="80" y1="160" x2="1120" y2="160" className="stroke-slate-300" strokeWidth="4" strokeDasharray="6 8" />

        {/* Estaciones */}
        {[
          { x: 120, title: sender, sub: '' },
          { x: 360, title: 'mTLS', sub: '' },
          { x: 600, title: 'Eventos', sub: ledger },
          { x: 840, title: 'Blind-Reveal', sub: blindId },
          { x: 1080, title: receiver, sub: '' },
        ].map((b, i) => (
          <g key={i} transform={`translate(${b.x}, 120)`}>
            <rect x="-70" y="-40" width="140" height="80" rx="14" className="fill-white stroke-slate-300" />
            <text x="0" y="-2" textAnchor="middle" className="fill-slate-900 text-[14px] font-semibold">
              {b.title}
            </text>
            {b.sub && (
              <text x="0" y="18" textAnchor="middle" className="fill-slate-600 text-[12px]">
                {b.sub}
              </text>
            )}
            {i < 4 && <polygon points="70,0 100,10 100,-10" className="fill-slate-300" />}
          </g>
        ))}
      </svg>
      <figcaption className="mt-3 text-center text-sm text-slate-500">{caption}</figcaption>
    </figure>
  )
}

