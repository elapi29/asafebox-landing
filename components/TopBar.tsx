// components/TopBar.tsx
'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { withBase } from './lib/withBase';

const LOCALES = ['es', 'en', 'de'] as const;

// ───────────────────────────────────────────────────────────────────────────────
// ÍCONOS (SVG inline, livianos y consistentes)
// ───────────────────────────────────────────────────────────────────────────────
const SignatureIcon = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path d="M3 21h6M4 17l9-9 4 4-9 9H4zM14 8l2-2 4 4-2 2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ZKIcon = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path d="M2 12s3-6 10-6 10 6 10 6-3 6-10 6-10-6-10-6z" fill="none" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="12" cy="12" r="3" fill="currentColor"/>
    <path d="M16.5 6.5l4 4M7.5 17.5l-4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);
const AuditIcon = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <rect x="4" y="4" width="12" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M8 9h6M8 13h6M16 16l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);
const MtlsIcon = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <rect x="3" y="10" width="14" height="9" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M10 10V7a4 4 0 1 1 8 0v3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M5 14h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
const GovIcon = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path d="M4 20h16M7 20l7-7 3 3-7 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 9l2-2 3 3-2 2z" fill="currentColor"/>
  </svg>
);

// ───────────────────────────────────────────────────────────────────────────────
// Ítem del menú con ícono
// ───────────────────────────────────────────────────────────────────────────────
function MenuItem({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: (p: { className?: string }) => JSX.Element;
}) {
  return (
    <Link
      href={href}
      prefetch={false}
      role="menuitem"
      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-800 hover:bg-slate-50 focus:bg-slate-50"
    >
      <span className="rounded-md bg-slate-100 p-2 text-slate-700">
        <Icon className="h-4 w-4" />
      </span>
      <span className="leading-none">{label}</span>
    </Link>
  );
}

export default function TopBar({ locale }: { locale: string }) {
  const home = `/${locale}/`; // slash final: importante en GitHub Pages
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);

  const logo = withBase('/brand/asafebox-logo.svg'); // ✅ existe

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-b-2xl px-4 py-3">
        {/* LOGO */}
        <Link href={home} className="flex items-center gap-2" prefetch={false}>
          <img
            src={logo}
            alt="In aSAFEBOX®"
            width={176}
            height={36}
            className="h-9 w-auto md:h-10"
            decoding="async"
          />
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium text-slate-700">
          <Link href={`${home}introduction/`} className="hover:underline" prefetch={false}>
            Introduction
          </Link>

          {/* Products (dropdown con iconos) */}
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setOpen(v => !v)}
              className="inline-flex items-center gap-1 rounded-md px-2 py-1 hover:bg-slate-100"
              aria-haspopup="menu"
              aria-expanded={open}
            >
              Products
              <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden>
                <path d="M6 8l4 4 4-4" fill="currentColor" />
              </svg>
            </button>

            {open && (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-80 rounded-xl border border-slate-200 bg-white p-2 shadow-lg"
              >
                <MenuItem
                  href={`${home}products/signature-pq`}
                  label="Signature PQ-ready Connect"
                  Icon={SignatureIcon}
                />
                <MenuItem
                  href={`${home}products/blind-reveal`}
                  label="Blockaudit · Blind-Reveal"
                  Icon={ZKIcon}
                />
                <MenuItem
                  href={`${home}products/audit`}
                  label="Blockchecker · Audit"
                  Icon={AuditIcon}
                />
                <MenuItem
                  href={`${home}products/mtls-pq`}
                  label="Blocksender · mTLS PQ-Ready"
                  Icon={MtlsIcon}
                />
                <MenuItem
                  href={`${home}products/blindreveal-gov`}
                  label="Blockcontrol · Governing"
                  Icon={GovIcon}
                />
              </div>
            )}
          </div>

          <Link href={`${home}#contact`} className="hover:underline" prefetch={false}>
            Contact
          </Link>

          {/* Language Switcher */}
          <div className="ml-2 flex items-center gap-2">
            {LOCALES.map(code => {
              const href = `/${code}/`;
              const active = code === locale;
              return (
                <Link
                  key={code}
                  href={href}
                  prefetch={false}
                  className={`rounded-md px-2 py-1 ${
                    active ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {code.toUpperCase()}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}