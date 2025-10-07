// components/SystemIcons.tsx
export const BoxIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const HsmIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <rect x="5" y="7" width="14" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M9 7V5a3 3 0 0 1 6 0v2" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const LedgerIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path d="M5 4h10l4 4v12H5z" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M15 4v4h4" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

