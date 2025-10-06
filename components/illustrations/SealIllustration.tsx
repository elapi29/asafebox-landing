export default function SealIllustration() {
  return (
    <figure className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <svg viewBox="0 0 1200 360" className="w-full h-auto" role="img" aria-label="Chained integrity seal">
        <rect x="72" y="200" width="150" height="110" rx="16" className="fill-white stroke-slate-300" />
        <rect x="276" y="200" width="150" height="110" rx="16" className="fill-white stroke-slate-300" />
        <rect x="480" y="200" width="150" height="110" rx="16" className="fill-white stroke-slate-300" />
        <rect x="684" y="200" width="150" height="110" rx="16" className="fill-white stroke-slate-300" />
        <rect x="888" y="200" width="210" height="126" rx="18" className="fill-blue-50 stroke-blue-400" />
        {[147, 351, 555, 759, 993].map((cx, i) => (
          <g key={i} transform={`translate(${cx},255)`}>
            <ellipse rx="22" ry="30" className="fill-none stroke-slate-700" strokeWidth="3" />
            <ellipse rx="14" ry="20" className="fill-none stroke-slate-700" strokeWidth="3" />
            <ellipse rx="7"  ry="10" className="fill-none stroke-slate-700" strokeWidth="3" />
          </g>
        ))}
        <path d="M222,255 L324,255 L528,255 L732,255 L888,255" className="fill-none stroke-slate-300" strokeWidth="2" />
        <g transform="translate(993,110)">
          <path d="M-120,80 a120,80 0 0 1 240,0 l-120,40z" className="fill-blue-100 stroke-blue-500" />
        </g>
      </svg>
    </figure>
  )
}