// components/TopBar.tsx
'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { withBase } from './lib/withBase';

const LOCALES = ['es', 'en', 'de'] as const;

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

  const logo = withBase('/brand/asafebox-wordmark.png'); // ✅ existe

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-b-2xl px-4 py-3">
        {/* LOGO grande */}
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
          <Link href={`${home}#intro`} className="hover:underline" prefetch={false}>
            Introduction
          </Link>

          {/* Products (dropdown) */}
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
                <MenuItem href={`${home}products/signature-pq`}   label="Signature PQ-ready Connect" />
                <MenuItem href={`${home}products/blind-reveal`}    label="Blind-Reveal Connect" />
                <MenuItem href={`${home}products/audit`}           label="Audit Connect" />
                <MenuItem href={`${home}products/mtls-pq`}         label="mTLS PQ-Ready" />
                <MenuItem href={`${home}products/blindreveal-gov`} label="Governing Connect" />
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

function MenuItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      prefetch={false}
      className="block rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50"
      role="menuitem"
    >
      {label}
    </Link>
  );
}