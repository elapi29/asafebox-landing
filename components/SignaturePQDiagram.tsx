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
  chips = [
    'Canal autenticado',
    'Controles previos a firmar',
    'Evidencia auditable',
    'Ruta híbrida a PQ',
  ],
  bottomLabel = 'Evidencia / Ledger (on-prem / cloud / chain)',
  className = '',
}: Props) {
  // Paleta alineada al wordmark (naranja → magenta → violeta)
  const OR = '#FF7A00';
  const MG = '#FF4D8D';
  const VI = '#8A2BE2';
  const NIGHT = '#0E1A2F';
  const CHIP_BG = '#FFFFFF';

  return (
    <div className={className} aria-hidden>
      <svg
        viewBox="0 0 1280 760"
        role="img"
        aria-label="Diagrama Signature PQ-ready Connect"
        className="w-full h-auto"
      >
        <defs>
          {/* Gradiente de marca */}
          <linearGradient id="gBrand" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={OR} />
            <stop offset="50%" stopColor={MG} />
            <stop offset="100%" stopColor={VI} />
          </linearGradient>

          {/* Versión “azulada” para flechas y detalles */}
          <linearGradient id="gAccent" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>

          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="10" stdDeviation="18" floodOpacity="0.18" />
          </filter>

          <style>{`
            .h1    { font: 800 46px/1.2 Inter, ui-sans-serif, system-ui; fill: #ffffff }
            .h2    { font: 700 28px/1.25 Inter, ui-sans-serif, system-ui; fill: #ffffff }
            .muted { font: 500 19px/1.4  Inter, ui-sans-serif, system-ui; fill: #E6ECFF }
            .chip  { font: 700 18px/1    Inter, ui-sans-serif, system-ui; fill: #0f172a }
            .label { font: 600 16px/1    Inter, ui-sans-serif, system-ui; fill: #0f172a }
            .small { font: 600 16px/1.2  Inter, ui-sans-serif, system-ui; fill: #DDE6FF }
          `}</style>
        </defs>

        {/* Título / subtítulo */}
        <text x="640" y="80" textAnchor="middle" className="h1">{title}</text>
        <text x="640" y="114" textAnchor="middle" className="muted">{subtitle}</text>

        {/* Actores superiores */}
        {topLabels.map((label, i) => {
          const x = 320 + i * 320; // 320, 640, 960
          return (
            <g key={label}>
              <rect x={x - 48} y={165} width="96" height="96" rx="22" fill="url(#gBrand)" />
              {/* iconito */}
              <circle cx={x} cy={213} r="18" fill="#fff" />
              <rect x={x - 12} y={201} width="24" height="24" rx="6" fill={NIGHT} />
              <text x={x} y={288} textAnchor="middle" className="label">{label}</text>
              {/* flecha */}
              <path d={`M ${x} 302 L ${x} 350`} stroke="url(#gAccent)" strokeWidth="5" fill="none" />
              <polygon points={`${x-9},350 ${x+9},350 ${x},368`} fill="#2563EB" />
            </g>
          );
        })}

        {/* Caja principal */}
        <g filter="url(#softShadow)">
          <rect x="110" y="378" width="1060" height="230" rx="36" fill="url(#gBrand)" />
          <text x="640" y="430" textAnchor="middle" className="h2">
            In aSafeBox® — Signature PQ-ready Connect
          </text>

          {/* Chips (más anchos + mayor contraste) */}
          {chips.slice(0, 4).map((c, i) => {
            const cx = 300 + i * 240; // reparte 4
            return (
              <g key={c}>
                <rect
                  x={cx - 170}
                  y="458"
                  width="340"
                  height="50"
                  rx="26"
                  fill={CHIP_BG}
                  opacity="0.96"
                />
                <text x={cx} y="489" textAnchor="middle" className="chip">{c}</text>
              </g>
            );
          })}

          {/* Línea aclaratoria (sube contraste y tamaño) */}
          <text x="640" y="536" textAnchor="middle" className="small">
            Firma sólo lo que pasa los controles · Preparado para modo híbrido post-cuántico
          </text>
        </g>

        {/* Salida hacia evidencia / ledger */}
        <path d="M640 608 L640 654" stroke="url(#gAccent)" strokeWidth="5" fill="none" />
        <polygon points="631,654 649,654 640,672" fill="#2563EB" />

        <g filter="url(#softShadow)">
          <rect x="510" y="680" width="360" height="58" rx="16" fill="#fff" />
          <rect x="510" y="680" width="360" height="58" rx="16" fill="none" stroke="#E2E8F0" />
          <text x="690" y="715" textAnchor="middle" className="label">{bottomLabel}</text>
        </g>
      </svg>
    </div>
  );
}
