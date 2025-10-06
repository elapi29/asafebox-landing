// components/illos/Tile.tsx
type Props = {
  x: number; y: number; w: number; h: number;
  title: string; note?: string;
};

export default function Tile({ x, y, w, h, title, note }: Props) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect width={w} height={h} rx="16" fill="#f8fafc" stroke="#94a3b8" />
      <text x={16} y={28} fontFamily="system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
            fontSize="16" fontWeight="700" fill="#0f172a">
        {title}
      </text>
      {note && (
        <text x={16} y={48} fontFamily="system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
              fontSize="13" fill="#475569">
          {note}
        </text>
      )}
    </g>
  );
}