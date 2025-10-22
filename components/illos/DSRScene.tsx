// components/illos/DSRScene.tsx
export default function DSRScene({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 980 420"
      className={className}
      role="img"
      aria-label="DSR stack: Sender → mTLS → Eventos → Blind-Reveal → Receiver"
    >
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#0B3BDA"/>
        </marker>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
          <feOffset dy="2"/><feGaussianBlur stdDeviation="2"/>
          <feColorMatrix type="matrix"
            values="0 0 0 0 0.05  0 0 0 0 0.12  0 0 0 0 0.45  0 0 0 0.2 0"/>
          <feBlend in="SourceGraphic" mode="normal"/>
        </filter>
      </defs>

      {/* Base (capa transport) */}
      <g transform="translate(490,330)">
        <rect x="-360" y="-28" width="720" height="56" rx="16" fill="#E9F1FF" stroke="#0B3BDA" strokeWidth="2"/>
        {[1,2,3,4].map(i=>(
          <rect key={i} x={-360+i*6} y={-28-i*6} width={720} height={56} rx="16"
            fill="none" stroke="#0B3BDA" strokeOpacity=".25" strokeWidth="2"/>
        ))}
      </g>

      {/* Sender */}
      <g transform="translate(140,180)">
        <rect x="-110" y="-70" width="220" height="140" rx="18" fill="#FFF5E6" stroke="#0B3BDA" strokeWidth="2"/>
        <rect x="-110" y="-70" width="220" height="140" rx="18" fill="none" stroke="#0B3BDA" strokeOpacity=".3" strokeWidth="2" transform="translate(6,6)"/>
        <g stroke="#0B3BDA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <circle cx="0" cy="-6" r="18"/>
          <path d="M-6 8 l12 0"/>
        </g>
        <text x="0" y="86" textAnchor="middle" fontFamily="Inter, ui-sans-serif" fontSize="12" fill="#0B3BDA">Sender</text>
      </g>

      {/* mTLS */}
      <g transform="translate(340,180)">
        <rect x="-110" y="-70" width="220" height="140" rx="18" fill="#FFF5E6" stroke="#0B3BDA" strokeWidth="2"/>
        <rect x="-110" y="-70" width="220" height="140" rx="18" fill="none" stroke="#0B3BDA" strokeOpacity=".3" strokeWidth="2" transform="translate(6,6)"/>
        <g stroke="#0B3BDA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <rect x="-20" y="-8" width="40" height="24" rx="6"/>
          <path d="M-8 -8 v-8 a8 8 0 0 1 16 0 v8"/>
        </g>
        <text x="0" y="86" textAnchor="middle" fontFamily="Inter, ui-sans-serif" fontSize="12" fill="#0B3BDA">mTLS</text>
      </g>

      {/* Eventos */}
      <g transform="translate(540,180)">
        <rect x="-110" y="-70" width="220" height="140" rx="18" fill="#FFF5E6" stroke="#0B3BDA" strokeWidth="2"/>
        <rect x="-110" y="-70" width="220" height="140" rx="18" fill="none" stroke="#0B3BDA" strokeOpacity=".3" strokeWidth="2" transform="translate(6,6)"/>
        <g stroke="#0B3BDA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <rect x="-40" y="-20" width="80" height="40" rx="8"/>
          <path d="M-24 -6 h48M-24 2 h34"/>
          <path d="M-34 -6 l-6 6 -3 -3"/>
        </g>
        <text x="0" y="86" textAnchor="middle" fontFamily="Inter, ui-sans-serif" fontSize="12" fill="#0B3BDA">Eventos</text>
      </g>

      {/* Blind-Reveal */}
      <g transform="translate(740,180)">
        <rect x="-110" y="-70" width="220" height="140" rx="18" fill="#FFF5E6" stroke="#0B3BDA" strokeWidth="2"/>
        <rect x="-110" y="-70" width="220" height="140" rx="18" fill="none" stroke="#0B3BDA" strokeOpacity=".3" strokeWidth="2" transform="translate(6,6)"/>
        <g stroke="#0B3BDA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <ellipse cx="-20" cy="-4" rx="10" ry="14"/>
          <ellipse cx="-20" cy="-4" rx="6" ry="9"/>
          <path d="M16 -14 v20M6 -4 h20"/>
        </g>
        <text x="0" y="86" textAnchor="middle" fontFamily="Inter, ui-sans-serif" fontSize="12" fill="#0B3BDA">Blind-Reveal</text>
      </g>

      {/* Receiver */}
      <g transform="translate(920,180)">
        <g filter="url(#soft)">
          <rect x="-70" y="-44" width="140" height="88" rx="14" fill="#E9F1FF" stroke="#0B3BDA" strokeWidth="2"/>
        </g>
        <text x="0" y="68" textAnchor="middle" fontFamily="Inter, ui-sans-serif" fontSize="12" fill="#0B3BDA">Receiver</text>
      </g>

      {/* Arrows */}
      <g stroke="#0B3BDA" strokeWidth="2" fill="none" markerEnd="url(#arrow)">
        <path d="M 250 180 Q 295 170 330 180"/>
        <path d="M 450 180 Q 495 170 530 180"/>
        <path d="M 650 180 Q 695 170 730 180"/>
        <path d="M 850 180 Q 885 170 910 180"/>
      </g>
    </svg>
  );
}