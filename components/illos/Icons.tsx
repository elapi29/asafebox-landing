// components/illos/Icons.tsx
// Iconitos mínimos en SVG para las escenas (estilo zksync/starknet)

export function WalletIcon({ className = '', title = 'Wallet' }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label={title}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <path
        d="M3.5 7.5A2.5 2.5 0 0 1 6 5h11a2 2 0 0 1 2 2v1h.5A2.5 2.5 0 0 1 22 10.5v3A2.5 2.5 0 0 1 19.5 16H6A2.5 2.5 0 0 1 3.5 13.5v-6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 8h-2.2c-.9 0-1.3-.5-1.3-1.1V5.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="17.5" cy="12" r="1.25" fill="currentColor" />
    </svg>
  );
}
