// components/BrandWordmark.tsx
export default function BrandWordmark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 128 24"
      className={className}
      role="img"
      aria-label="AsafeBox"
    >
      <title>AsafeBox</title>
      {/* TODO: sustituir por tu SVG de wordmark real */}
      <rect x="0" y="8" width="128" height="8" rx="4" fill="currentColor" />
    </svg>
  );
}