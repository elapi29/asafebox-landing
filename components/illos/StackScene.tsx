// components/illos/StackScene.tsx
// Pequeña escena de “stack inmutable” con un ícono (WalletIcon) y tiles
import Tile from './Tile';
import { WalletIcon } from './Icons';

type Props = { className?: string };

export default function StackScene({ className = '' }: Props) {
  return (
    <svg
      viewBox="0 0 680 420"
      className={className}
      role="img"
      aria-label="Immutable stack"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="6" result="blur" />
          <feOffset dx="0" dy="4" result="offset" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.18" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode in="offset" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Fondo suave */}
      <rect x="0" y="0" width="680" height="420" rx="24" fill="#ffffff" />

      {/* Header pill con ícono (sin foreignObject) */}
      <g transform="translate(34, 30)">
        <rect width="180" height="40" rx="20" fill="#eef2ff" stroke="#6366f1" />
        {/* Ícono SVG directo */}
        <g transform="translate(14, 6)" fill="#3730a3" stroke="#3730a3">
          <WalletIcon title="Wallet" />
        </g>
        <text
          x="54"
          y="26"
          fontFamily="system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
          fontSize="14"
          fontWeight="600"
          fill="#3730a3"
        >
          Immutable Stack
        </text>
      </g>

      {/* Tiles apilados */}
      <g filter="url(#soft)">
        <Tile x={60} y={100} w={560} h={70} title="Transport Security (PQ mTLS)" note="Authenticated channel" />
        <Tile x={60} y={190} w={560} h={70} title="Eventos (append-only)" note="Chained integrity seals" />
        <Tile x={60} y={280} w={560} h={70} title="Blind-Reveal (ZK proofs)" note="Validity without exposing data" />
      </g>
    </svg>
  );
}