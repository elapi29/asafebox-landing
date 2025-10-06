// components/illos/BlindRevealIllo.tsx
export default function BlindRevealIllo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 900 680" role="img" aria-label="Blind-Reveal"
         className={['w-full h-auto', className].join(' ')}>
      <rect x="0" y="0" width="900" height="680" rx="28" fill="#eafff3"/>
      {/* martillo */}
      <g transform="translate(620,180) rotate(35)">
        <rect x="-120" y="-22" width="240" height="44" rx="10" fill="#0f172a"/>
        <rect x="98" y="-60" width="80" height="120" rx="14" fill="#0f172a"/>
        <rect x="68" y="-45" width="80" height="90" rx="12" fill="#10b981"/>
      </g>
      {/* huella */}
      <g transform="translate(450,330)">
        <ellipse rx="110" ry="140" fill="none" stroke="#0f172a" strokeWidth="10"/>
        <ellipse rx="70"  ry="95"  fill="none" stroke="#0f172a" strokeWidth="10"/>
        <ellipse rx="35"  ry="48"  fill="none" stroke="#0f172a" strokeWidth="10"/>
      </g>
      {/* calculadora */}
      <g transform="translate(450,540)">
        <rect x="-130" y="-90" width="260" height="180" rx="24" fill="#34d399"/>
        <rect x="-80" y="-52" width="160" height="44" rx="8" fill="#a7f3d0"/>
        {[...Array(3)].map((_,r)=>
          [...Array(4)].map((__,c)=>(
            <rect key={`${r}-${c}`} x={-90+c*58} y={10+r*50} width="44" height="38" rx="8" fill="#059669"/>
          ))
        )}
      </g>
      {/* plus */}
      <rect x="430" y="445" width="40" height="120" rx="8" fill="#0f172a"/>
      <rect x="390" y="485" width="120" height="40" rx="8" fill="#0f172a"/>
    </svg>
  )
}