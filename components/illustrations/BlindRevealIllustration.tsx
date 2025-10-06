export default function BlindRevealIllustration() {
  return (
    <figure className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <svg viewBox="0 0 800 640" className="w-full h-auto" role="img" aria-label="Blind reveal privacy">
        <rect x="80" y="80" width="640" height="480" rx="40" className="fill-emerald-50" />
        <g transform="translate(260,150)">
          <rect x="100" y="0" width="140" height="28" rx="6" className="fill-slate-900" />
          <rect x="0" y="140" width="340" height="24" rx="4" className="fill-slate-900" />
        </g>
        <g transform="translate(400,320)">
          <ellipse rx="80" ry="110" className="fill-none stroke-emerald-900" strokeWidth="12" />
          <ellipse rx="55" ry="80"  className="fill-none stroke-emerald-900" strokeWidth="12" />
          <ellipse rx="30" ry="45"  className="fill-none stroke-emerald-900" strokeWidth="12" />
        </g>
        <g transform="translate(520,220) rotate(35)">
          <rect x="-20" y="-120" width="40" height="240" rx="8" className="fill-slate-900" />
          <rect x="-90" y="-30" width="180" height="60" rx="8" className="fill-emerald-700" />
        </g>
        <g transform="translate(400,510)">
          <rect x="-110" y="-70" width="220" height="140" rx="16" className="fill-emerald-600" />
          <rect x="-70" y="-30" width="140" height="40" rx="6" className="fill-emerald-200" />
          {[...Array(3)].map((_, r) =>
            [...Array(4)].map((__, c) => (
              <rect key={`${r}-${c}`} x={-90 + c*50} y={20 + r*40} width="30" height="24" rx="4" className="fill-emerald-200" />
            ))
          )}
        </g>
      </svg>
    </figure>
  )
}