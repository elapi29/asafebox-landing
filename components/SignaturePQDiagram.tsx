'use client';

type Props = {
  title?: string;
  subtitle?: string;
  topLabels?: [string, string, string];
  chips?: string[];                 // hasta 4 (se acomodan en 2 filas)
  bottomLabel?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';        // controla tipografías y paddings
};

export default function SignaturePQDiagram({
  title = 'In aSafeBox® — Signature PQ-ready Connect',
  subtitle = 'Transporte seguro • Controles de contenido • Evidencia inmutable',
  topLabels = ['Backoffice', 'Mobile / Web', 'Partners'],
  chips = ['Canal autenticado', 'Controles previos a firmar', 'Evidencia auditable', 'Ruta híbrida a PQ'],
  bottomLabel = 'Evidencia / Ledger (on-prem / cloud / chain)',
  className = '',
  size = 'md',
}: Props) {
  // Paleta (logo): naranja → fucsia → violeta
  const A = '#FF7A00';   // naranja
  const B = '#FF3D6E';   // fucsia
  const C = '#7C3AED';   // violeta
  const CHIP_BG = '#F1F5FF';
  const DARK = '#0f172a';
  const MUTED = '#475569';

  // Escalas según size
  const S = {
    sm: { h1: 30, h2: 18, muted: 14, chip: 15, label: 14, small: 13, boxH: 180, chipW: 240, chipH: 42, gapX: 210 },
    md: { h1: 34, h2: 20, muted: 15, chip: 16, label: 15, small: 14, boxH: 190, chipW: 260, chipH: 46, gapX: 230 },
    lg: { h1: 40, h2: 22, muted: 16, chip: 17, label: 16, small: 15, boxH: 200, chipW: 280, chipH: 48, gapX: 250 },
  }[size];

  // chips en 2 filas (2 + 2) para que no colisionen
  const row1 = chips.slice(0, 2);
  const row2 = chips.slice(2, 4);

  return (
    <div className={className}>
      <svg
        viewBox="0 0 1200 760"
        className="w-full h-auto"
        role="img"
        aria-label="Diagrama Signature PQ-ready Connect"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="brandGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"  stopColor={A}/>
            <stop offset="50%" stopColor={B}/>
            <stop offset="100%" stopColor={C}/>
          </linearGradient>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="10" stdDeviation="16" floodOpacity="0.16" />
          </filter>
          <style>{`
            .t-h1   { font: 700 ${S.h1}px/1.25 Inter, ui-sans-serif, system-ui; fill:${DARK} }
            .t-h2   { font: 700 ${S.h2}px/1.25 Inter, ui-sans-serif, system-ui; fill:#fff }
            .t-muted{ font: 500 ${S.muted}px/1.35 Inter, ui-sans-serif, system-ui; fill:${MUTED} }
            .t-chip { font: 700 ${S.chip}px/1 Inter, ui-sans-serif, system-ui;  fill:${DARK} }
            .t-lbl  { font: 600 ${S.label}px/1 Inter, ui-sans-serif, system-ui; fill:${DARK} }
            .t-sm   { font: 500 ${S.small}px/1 Inter, ui-sans-serif, system-ui; fill:#E8ECFF }
          `}</style>
        </defs>

        {/* Subtítulo arriba */}
        <text x="600" y="60" textAnchor="middle" className="t-muted">{subtitle}</text>

        {/* Actores */}
        {topLabels.map((lbl, i) => {
          const x = 260 + i * 340; // 260, 600, 940
          return (
            <g key={lbl}>
              <rect x={x - 52} y={100} width="104" height="104" rx="26" fill="url(#brandGrad)" />
              {/* ícono simple */}
              <circle cx={x} cy={152} r="17" fill="#111827" />
              <circle cx={x} cy={152} r="9"  fill="#fff" />
              <text x={x} y={238} textAnchor="middle" className="t-lbl">{lbl}</text>

              {/* flecha hacia la caja */}
              <path d={`M ${x} 260 L ${x} 300`} stroke={B} strokeWidth="6" fill="none" />
              <polygon points={`${x-10},300 ${x+10},300 ${x},320`} fill={B} />
            </g>
          );
        })}

        {/* Caja principal */}
        <g filter="url(#softShadow)">
          <rect x="180" y="320" width="840" height={S.boxH} rx="42" fill="url(#brandGrad)" />
          <text x="600" y="375" textAnchor="middle" className="t-h2">
            {title}
          </text>

          {/* Chips fila 1 */}
          {row1.map((c, i) => {
            const cx = 390 + i * (S.gapX + S.chipW/2); // centrados
            const y  = 410;
            return (
              <g key={`r1-${c}`}>
                <rect x={cx - S.chipW/2} y={y} width={S.chipW} height={S.chipH} rx={S.chipH/2} fill="#fff" opacity="0.96" />
                <text x={cx} y={y + S.chipH*0.68} textAnchor="middle" className="t-chip">{c}</text>
              </g>
            );
          })}
          {/* Chips fila 2 */}
          {row2.map((c, i) => {
            const cx = 390 + i * (S.gapX + S.chipW/2);
            const y  = 410 + S.chipH + 16;
            return (
              <g key={`r2-${c}`}>
                <rect x={cx - S.chipW/2} y={y} width={S.chipW} height={S.chipH} rx={S.chipH/2} fill="#fff" opacity="0.96" />
                <text x={cx} y={y + S.chipH*0.68} textAnchor="middle" className="t-chip">{c}</text>
              </g>
            );
          })}

          {/* leyenda pequeña */}
          <text x="600" y={320 + S.boxH - 22} textAnchor="middle" className="t-sm">
            Firma sólo lo que pasa los controles · Preparado para modo híbrido post-cuántico
          </text>
        </g>

        {/* Salida hacia evidencia */}
        <path d="M600 520 L600 560" stroke={B} strokeWidth="6" fill="none" />
        <polygon points="590,560 610,560 600,580" fill={B} />
        <g filter="url(#softShadow)">
          <rect x="510" y="590" width="380" height="64" rx="18" fill="#fff" />
          <rect x="510" y="590" width="380" height="64" rx="18" fill="none" stroke="#E2E8F0" />
          <text x="700" y="631" textAnchor="middle" className="t-lbl">{bottomLabel}</text>
        </g>
      </svg>
    </div>
  );
}
