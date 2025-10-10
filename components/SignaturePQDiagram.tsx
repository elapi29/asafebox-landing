// components/SignaturePQDiagram.tsx
'use client';

type Props = {
  title?: string;
  subtitle?: string;
  topLabels?: [string, string, string];
  chips?: string[];
  bottomLabel?: string;
  className?: string;
};

export default function SignaturePQDiagram({
  title = 'Signature PQ-ready Connect',
  subtitle = 'Transporte seguro • Controles de contenido • Evidencia inmutable',
  topLabels = ['Backoffice', 'Mobile / Web', 'Partners'],
  chips = ['Canal autenticado', 'Controles previos a firmar', 'Evidencia auditable', 'Ruta híbrida a PQ'],
  bottomLabel = 'Evidencia / Ledger (on-prem / cloud / chain)',
  className = '',
}: Props) {
  const B = '#0A3AF2';
  const V = '#8A2BE2';
  const BG = '#0E1A2F';
  const CHIP = '#ECF2FF';

  return (
    <div className={className} aria-hidden>
      <svg viewBox="0 0 1200 720" role="img" aria-label="Diagrama Signature PQ-ready Connect" className="w-full h-auto">
        <defs>
          <linearGradient id="gBrand" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={B} />
            <stop offset="100%" stopColor={V} />
          </linearGradient>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="12" floodOpacity="0.16" />
          </filter>
          <style>{`
            .h1 { font: 700 42px/1.2 Inter, ui-sans-serif, system-ui; fill: #0f172a }
            .h2 { font: 600 26px/1.25 Inter, ui-sans-serif, system-ui; fill: #0f172a }
            .muted { font: 400 18px/1.4 Inter, ui-sans-serif, system-ui; fill: #475569 }
            .chip { font: 600 18px/1 Inter, ui-sans-serif, system-ui; fill: #0f172a }
            .label { font: 600 16px/1 Inter, ui-sans-serif, system-ui; fill: #0f172a }
            .small { font: 500 15px/1 Inter, ui-sans-serif, system-ui; fill: #475569 }
          `}</style>
        </defs>

        <text x="600" y="70" textAnchor="middle" className="h1">{title}</text>
        <text x="600" y="102" textAnchor="middle" className="muted">{subtitle}</text>

        {topLabels.map((label, i) => {
          const x = 300 + i * 300;
          return (
            <g key={label}>
              <rect x={x - 44} y={160} width="88" height="88" rx="20" fill="url(#gBrand)" />
              <circle cx={x} cy={204} r="18" fill="white" />
              <rect x={x - 12} y={192} width="24" height="24" rx="6" fill={BG} />
              <text x={x} y={270} textAnchor="middle" className="label">{label}</text>
              <path d={`M ${x} 288 L ${x} 330`} stroke={B} strokeWidth="4" fill="none" />
              <polygon points={`${x-8},330 ${x+8},330 ${x},346`} fill={B} />
            </g>
          );
        })}

        <g filter="url(#softShadow)">
          <rect x="120" y="350" width="960" height="190" rx="28" fill="url(#gBrand)" />
          <text x="600" y="395" textAnchor="middle" className="h2" fill="#fff">
            In aSafeBox® — Signature PQ-ready Connect
          </text>
          {chips.slice(0, 4).map((c, i) => {
            const cx = 320 + i * 190;
            return (
              <g key={c}>
                <rect x={cx - 140} y="420" width="280" height="44" rx="22" fill={CHIP} opacity="0.96" />
                <text x={cx} y="449" textAnchor="middle" className="chip">{c}</text>
              </g>
            );
          })}
          <text x="600" y="500" textAnchor="middle" className="small" fill="#E6ECFF">
            Firma solo lo que pasa los controles • Preparado para modo híbrido post-cuántico
          </text>
        </g>

        <path d="M600 540 L600 585" stroke={B} strokeWidth="4" fill="none" />
        <polygon points="592,585 608,585 600,600" fill={B} />
        <g filter="url(#softShadow)">
          <rect x="470" y="605" width="260" height="54" rx="14" fill="#fff" />
          <rect x="470" y="605" width="260" height="54" rx="14" fill="#fff" stroke="#E2E8F0" />
          <text x="600" y="638" textAnchor="middle" className="label">{bottomLabel}</text>
        </g>
      </svg>
    </div>
  );
}