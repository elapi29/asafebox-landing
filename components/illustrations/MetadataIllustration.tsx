export default function MetadataIllustration() {
  return (
    <figure className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <svg viewBox="0 0 800 600" className="w-full h-auto" role="img" aria-label="Public metadata, protected data">
        <rect x="120" y="120" width="560" height="340" rx="20" className="fill-white stroke-slate-300" />
        {[0,1,2].map(i => (
          <g key={i} transform={`translate(${210 + i*150}, 180)`}>
            <circle r="34" className="fill-indigo-100 stroke-indigo-600" />
            <path d="M-10,2 l8,8 l16,-16" className="fill-none stroke-indigo-700" strokeWidth="4" />
          </g>
        ))}
        {[0,1,2].map(i => (
          <rect key={i} x={200} y={260 + i*40} width="400" height="20" rx="6" className="fill-slate-200" />
        ))}
        <rect x="160" y="420" width="80" height="80" rx="18" className="fill-amber-100 stroke-amber-500" />
        <g transform="translate(620,160)">
          <circle r="42" className="fill-none stroke-slate-800" strokeWidth="6" />
          <circle r="18" className="fill-amber-400" />
        </g>
      </svg>
    </figure>
  )
}