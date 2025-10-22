// components/icons/GatewayIcons.tsx
// Todos aceptan { className } para tamaño/color con Tailwind.

export const ShieldCheck = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-label="Pass">
    <path d="M12 3l7 3v5c0 4.97-3.13 9.3-7 10-3.87-.7-7-5.03-7-10V6l7-3z" fill="none" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M8.8 12.4l2.2 2.2 4.2-4.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const BracketsX = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-label="Bad Request">
    <path d="M6 5h3v2H8v10h1v2H6zM18 5h-3v2h1v10h-1v2h3z" fill="currentColor"/>
    <path d="M9.5 12h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M11 10l2 4M13 10l-2 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

export const ClockAlert = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-label="Timestamp window">
    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="18.5" cy="5.5" r="1.8" fill="currentColor"/>
  </svg>
);

export const HandStop = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-label="Forbidden">
    <path d="M8 11V6a2 2 0 1 1 4 0v5" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
    <path d="M12 11V5a2 2 0 1 1 4 0v6" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
    <path d="M6 12v2a6 6 0 0 0 12 0v-2" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
  </svg>
);

export const HashX = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-label="Integrity token mismatch">
    <path d="M9 3L7 21M17 3l-2 18M4 8h16M3 16h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M8 12l8 0" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M9 21l6-6M15 21l-6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

export const SnowLock = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-label="Freeze">
    <path d="M12 2v20M4.93 4.93l14.14 14.14M2 12h20M4.93 19.07L19.07 4.93" stroke="currentColor" strokeWidth="1.2"/>
    <rect x="9" y="9.8" width="6" height="7.2" rx="1.4" fill="none" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M12 8.8a2 2 0 0 1 2 2v1.2h-4v-1.2a2 2 0 0 1 2-2z" fill="currentColor"/>
  </svg>
);

export const Ledger = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-label="Audit log">
    <rect x="5" y="4" width="14" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);