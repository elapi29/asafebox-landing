// components/illos/Tile.tsx
export default function Tile({
  x = 0, y = 0, label, icon,
}: { x?: number; y?: number; label?: string; icon?: React.ReactNode }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="-100" y="-68" rx="18" width="200" height="136"
        fill="#FFF5E6" stroke="#0B3BDA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="-100" y="-68" rx="18" width="200" height="136"
        fill="none" stroke="#0B3BDA" strokeOpacity="0.3" strokeWidth="2"
        transform="translate(6,6)"/>
      <g>{icon}</g>
      {label && (
        <text x="0" y="86" textAnchor="middle" fontFamily="Inter,ui-sans-serif" fontSize="12" fill="#0B3BDA">{label}</text>
      )}
    </g>
  );
}