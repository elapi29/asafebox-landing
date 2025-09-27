// components/LedgerBook.tsx
// Ilustración XL: “libro de cartas digitales” + huella clara + banda PQ-ready
export default function LedgerBook() {
  return (
    <figure className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <svg
        viewBox="0 0 1200 700"
        role="img"
        aria-labelledby="pqTitle ledgerCaption"
        className="w-full h-auto"
      >
        <title id="pqTitle">Capa de Seguridad de Transporte Post-Quantum-Ready</title>
        <desc id="ledgerCaption">Libro de cartas digitales con huellas criptográficas únicas</desc>

        {/* Banda superior PQ-ready */}
        <rect x="20" y="24" width="1160" height="110" rx="18" className="fill-blue-100" />
        <text x="600" y="92" textAnchor="middle" className="fill-blue-900">
          <tspan fontSize="28" fontWeight="700">
            Capa de Seguridad de Transporte Post-Quantum-Ready (mTLS PQ-Ready)
          </tspan>
        </text>

        {/* Marco del “libro” */}
        <rect x="90" y="170" width="1020" height="420" rx="22" className="fill-white" stroke="#CBD5E1" strokeWidth="3" />

        {/* Título del contenido */}
        <text x="600" y="210" textAnchor="middle" className="fill-slate-900">
          <tspan fontSize="24" fontWeight="700">Ledger Inmutable</tspan>
          <tspan x="600" dy="32" fontSize="18" fill="#475569">Matriz de “cartas” con huella criptográfica única</tspan>
        </text>

        {/* Grid de sobres (3 filas x 5 columnas, tamaño grande) */}
        {Array.from({ length: 15 }).map((_, i) => {
          const col = i % 5;
          const row = Math.floor(i / 5);
          const cx = 180 + col * 200; // separación grande
          const cy = 280 + row * 120;

          return (
            <g key={i} transform={`translate(${cx},${cy})`}>
              {/* “Carta” (sobre) grande */}
              <rect x="-70" y="-32" rx="12" width="140" height="90" fill="white" stroke="#94A3B8" strokeWidth="2.5" />
              {/* solapa */}
              <path d="M-66,-28 L0,20 L66,-28" fill="none" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
              {/* huella grande y clara */}
              <g transform="translate(0,18)">
                {/* círculo base suave para legibilidad */}
                <circle r="22" fill="none" stroke="#0F172A" strokeWidth="3" opacity="0.9" />
                {/* curvas internas estilo “huella” (paths gruesos para que se lean) */}
                <path d="M-8,6 q8,-10 16,0" fill="none" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
                <path d="M-12,0 q12,-14 24,0" fill="none" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
                <path d="M-16,-6 q16,-16 32,0" fill="none" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
                <path d="M-18,-12 q18,-16 36,0" fill="none" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
              </g>
            </g>
          );
        })}

        {/* Pie de figura grande */}
        <text x="600" y="630" textAnchor="middle" className="fill-slate-900">
          <tspan fontSize="22" fontWeight="700">Control total de integridad y privacidad, extremo a extremo</tspan>
        </text>
      </svg>
      <figcaption className="mt-4 text-center text-[15px] text-slate-600">
        Cada “carta” representa una transacción/documento sellado con una huella criptográfica.
        El libro completo forma un Ledger inmutable, protegido en tránsito por una capa PQ-ready.
      </figcaption>
    </figure>
  );
}