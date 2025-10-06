// components/illos/StackScene.tsx
import Tile from './Tile';
import { WalletIcon } from './Icons';
export default function StackScene({ className = '' }) {
  return (
    <svg viewBox="0 0 680 420" className={className} role="img" aria-label="Immutable stack">
      <g transform="translate(340,210)">
        <Tile x={-130} y={-70} label="Wallet" icon={<WalletIcon/>} />
        <Tile x={130}  y={-70} label="Payments" icon={<WalletIcon/>} />
        <Tile x={0}    y={70}  label="Ops" icon={<WalletIcon/>} />
        {/* base y capas apiladas */}
        <rect x="-250" y="120" width="500" height="120" rx="16"
          fill="#E9F1FF" stroke="#0B3BDA" strokeWidth="2"/>
      </g>
    </svg>
  );
}