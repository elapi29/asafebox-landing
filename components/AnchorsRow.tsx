// components/AnchorsRow.tsx
type Anchor = { key: string; label: string; note?: string }

const Icon = ({ k }: { k: string }) => {
  switch (k) {
    case 'eth':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
          <path d="M12 2l7 10-7 4-7-4 7-10z" fill="currentColor" opacity=".9"/>
          <path d="M12 16l7-4-7 10-7-10 7 4z" fill="currentColor" opacity=".6"/>
        </svg>
      )
    case 'btc':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
          <circle cx="12" cy="12" r="10" fill="currentColor" opacity=".12"/>
          <path d="M9 7h4a2.5 2.5 0 010 5H8m5 0a2.5 2.5 0 010 5H9" stroke="currentColor" strokeWidth="1.6" fill="none"/>
        </svg>
      )
    case 'zksync':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
          <path d="M5 12l6-6v4h8l-6 6v-4H5z" fill="currentColor"/>
        </svg>
      )
    case 'stark':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
          <path d="M12 3l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z" fill="currentColor"/>
        </svg>
      )
    default:
      return null
  }
}

export default function AnchorsRow({
  items = [
    { key: 'eth',   label: 'Ethereum L1/L2', note: 'Anchoring' },
    { key: 'zksync',label: 'zkSync',         note: 'Fast finality' },
    { key: 'stark', label: 'Starknet',       note: 'ZK rollup' },
    { key: 'btc',   label: 'Bitcoin',        note: 'Price/time attestation' },
  ],
}: { items?: Anchor[] }) {
  return (
    <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
      <div className="text-sm font-semibold text-slate-900">Pluggable anchors</div>
      <div className="mt-3 flex flex-wrap gap-3">
        {items.map(it => (
          <span
            key={it.key}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm"
          >
            <Icon k={it.key} />
            <span className="font-medium">{it.label}</span>
            {it.note && <span className="text-slate-500">· {it.note}</span>}
          </span>
        ))}
      </div>
    </div>
  )
}