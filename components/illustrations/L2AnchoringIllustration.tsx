export default function L2AnchoringIllustration() {
  return (
    <figure className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <svg viewBox="0 0 1200 420" className="w-full h-auto" role="img" aria-label="Transparency log anchored on L2">
        <rect x="80"  y="120" width="220" height="160" rx="16" className="fill-sky-100 stroke-sky-600" />
        <rect x="420" y="100" width="260" height="200" rx="16" className="fill-teal-100 stroke-teal-700" />
        <rect x="820" y="120" width="220" height="160" rx="16" className="fill-emerald-400 stroke-emerald-700" />
        <circle cx="1010" cy="120" r="30" className="fill-transparent stroke-emerald-800" strokeWidth="8" />
        <rect x="1000" y="110" width="20" height="20" rx="3" className="fill-emerald-800" />
        <path d="M300,200 L420,200 M680,200 L820,200" className="fill-none stroke-slate-500" strokeWidth="6" markerEnd="url(#a)" />
        <defs>
          <marker id="a" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
            <path d="M0,0 L12,6 L0,12 z" className="fill-slate-500" />
          </marker>
        </defs>
        {[0,1,2,3].map(i => (
          <rect key={i} x={450} y={120 + i*40} width="200" height="18" rx="4" className="fill-white stroke-teal-400" />
        ))}
        <path d="M190,280 C190,340 1010,340 1010,280" className="fill-none stroke-slate-400" strokeWidth="4" />
      </svg>
    </figure>
  )
}