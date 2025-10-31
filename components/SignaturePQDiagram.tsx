'use client';

type Size = 'sm' | 'md' | 'lg';

type Props = {
  title?: string;
  subtitle?: string;
  chips?: string[];            // máx 4
  bottomLabel?: string;
  showActors?: boolean;        // muestra los 3 “actores” arriba
  size?: Size;                 // 'sm'|'md'|'lg'
  className?: string;
  showTitle?: boolean;         // NUEVO: permite ocultar el título dentro del card
};

export default function SignaturePQDiagram({
  title = 'In aSafeBox® — Signature PQ-ready Connect',
  subtitle = 'Transporte seguro • Controles de contenido • Evidencia inmutable',
  chips = ['Canal autenticado', 'Controles previos a firmar', 'Evidencia auditable', 'Ruta híbrida a PQ'],
  bottomLabel = 'Evidencia / Ledger (on-prem / cloud / chain)',
  showActors = false,
  size = 'lg',
  className = '',
  showTitle = true,
}: Props) {
  // paleta alineada al logo (naranja→rosa→violeta)
  const G1 = '#FF7A18';
  const G2 = '#FF2D55';
  const G3 = '#8A2BE2';

  // escala por tamaño
  const S = {
    sm: { title: 28, sub: 15, chip: 18, boxH: 300, chipH: 48, rx: 28, gapY: 18 },
    md: { title: 34, sub: 16, chip: 19, boxH: 340, chipH: 56, rx: 32, gapY: 20 },
    lg: { title: 38, sub: 18, chip: 20, boxH: 380, chipH: 64, rx: 36, gapY: 22 },
  }[size];

  // layout base
  const VBW = 1200;
  const VBH = 720;
  const marginX = 120;
  const boxW = VBW - marginX * 2;
  const boxX = marginX;
  const boxY = showActors ? 220 : 160; // si no hay actores, subimos la caja
  const boxH = S.boxH;

  // chips (2x2)
  const chipW = (boxW - 210) / 2; // 2 columnas con padding interno
  const chipH = S.chipH;
  const chipRX = chipH / 2;
  const row1Y = boxY + 130;
  const row2Y = row1Y + chipH + 26;

  // tipografías embebidas (para SVG)
  const css = `
    .t-title { font: 700 ${S.title}px/1.25 Inter, ui-sans-serif, system-ui; fill: #fff }
    .t-sub   { font: 600 ${S.sub}px/1.35 Inter, ui-sans-serif, system-ui; fill: #E6ECFF; opacity:.95 }
    .t-chip  { font: 700 ${S.chip}px/1 Inter, ui-sans-serif, system-ui; fill: #0f172a }
    .t-pill  { font: 600 ${S.chip - 2}px/1.2 Inter, ui-sans-serif, system-ui; fill: #0f172a }
    .t-actor { font: 600 16px/1 Inter, ui-sans-serif, system-ui; fill: #0f172a }
    .shadow  { filter: drop-shadow(0 18px 28px rgba(16,24,40,.16)) }
  `;

  return (
    <div className={['block mx-auto', className].join(' ')} aria-hidden>
      <svg
        viewBox={`0 0 ${VBW} ${VBH}`}
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto"
        role="img"
        aria-label="Signature PQ-ready diagram"
      >
        <defs>
          <linearGradient id="brand" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={G1} />
            <stop offset="55%" stopColor={G2} />
            <stop offset="100%" stopColor={G3} />
          </linearGradient>
          <style>{css}</style>
        </defs>

        {/* Actores opcionales */}
        {showActors && (
          <>
            {['Backoffice', 'Mobile / Web', 'Partners'].map((label, i) => {
              const x = 300 + i * 300;
              return (
                <g key={label}>
                  <rect x={x - 44} y={80} width="88" height="88" rx="22" fill="url(#brand)" className="shadow" />
                  <circle cx={x} cy={124} r="16" fill="#fff" />
                  <rect x={x - 10} y={114} width="20" height="20" rx="6" fill="#0E1A2F" />
                  <text x={x} y={192} textAnchor="middle" className="t-actor">{label}</text>
                  <path d={`M ${x} 206 L ${x} ${boxY - 16}`} stroke="#2151F5" strokeWidth="5" fill="none" />
                  <polygon points={`${x - 10},${boxY - 16} ${x + 10},${boxY - 16} ${x},${boxY}`} fill="#2151F5" />
                </g>
              );
            })}
          </>
        )}

        {/* Caja principal */}
        <g className="shadow">
          <rect x={boxX} y={boxY} width={boxW} height={boxH} rx={S.rx} fill="url(#brand)" />
        </g>

        {/* Título y subtítulo (el título puede ocultarse con showTitle) */}
        {showTitle && (
          <text x={VBW / 2} y={boxY + 60} textAnchor="middle" className="t-title">
            {title}
          </text>
        )}
        <text
          x={VBW / 2}
          y={boxY + (showTitle ? 92 : 70)}  // si no hay título, subimos el subtítulo
          textAnchor="middle"
          className="t-sub"
        >
          {subtitle}
        </text>

        {/* Chips (fila 1) */}
        <g>
          {/* Izq */}
          <rect x={boxX + 70} y={row1Y} width={chipW} height={chipH} rx={chipRX} fill="#fff" />
          <text x={boxX + 70 + chipW / 2} y={row1Y + chipH / 2 + S.chip / 3} textAnchor="middle" className="t-chip">
            {chips[0] || ''}
          </text>
          {/* Der */}
          <rect x={boxX + 70 + chipW + 70} y={row1Y} width={chipW} height={chipH} rx={chipRX} fill="#fff" />
          <text x={boxX + 70 + chipW + 70 + chipW / 2} y={row1Y + chipH / 2 + S.chip / 3} textAnchor="middle" className="t-chip">
            {chips[1] || ''}
          </text>
        </g>

        {/* Chips (fila 2) */}
        <g>
          {/* Izq */}
          <rect x={boxX + 70} y={row2Y} width={chipW} height={chipH} rx={chipRX} fill="#fff" />
          <text x={boxX + 70 + chipW / 2} y={row2Y + chipH / 2 + S.chip / 3} textAnchor="middle" className="t-chip">
            {chips[2] || ''}
          </text>
          {/* Der */}
          <rect x={boxX + 70 + chipW + 70} y={row2Y} width={chipW} height={chipH} rx={chipRX} fill="#fff" />
          <text x={boxX + 70 + chipW + 70 + chipW / 2} y={row2Y + chipH / 2 + S.chip / 3} textAnchor="middle" className="t-chip">
            {chips[3] || ''}
          </text>
        </g>

        {/* Línea “mini” dentro de la caja */}
        <text x={VBW / 2} y={row2Y + chipH + S.gapY + 22} textAnchor="middle" className="t-sub">
          Firma sólo lo que pasa los controles • Preparado para modo híbrido post-cuántico
        </text>

        {/* Flecha hacia la evidencia */}
        <path d={`M ${VBW / 2} ${boxY + boxH} L ${VBW / 2} ${boxY + boxH + 44}`} stroke="#2151F5" strokeWidth="6" fill="none" />
        <polygon points={`${VBW / 2 - 12},${boxY + boxH + 44} ${VBW / 2 + 12},${boxY + boxH + 44} ${VBW / 2},${boxY + boxH + 68}`} fill="#2151F5" />

        {/* Pill de evidencia */}
        <g className="shadow">
          <rect x={VBW / 2 - 300} y={boxY + boxH + 84} width="600" height={chipH} rx={chipRX} fill="#fff" />
          <text x={VBW / 2} y={boxY + boxH + 84 + chipH / 2 + S.chip / 3} textAnchor="middle" className="t-pill">
            {bottomLabel}
          </text>
        </g>
      </svg>
    </div>
  );
}
