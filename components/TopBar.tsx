// components/TopBar.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function TopBar() {
  const pathname = usePathname() || '/'
  // Tomamos el primer segmento como locale (fallback 'es')
  const parts = pathname.split('/').filter(Boolean)
  const currentLocale = parts[0]?.length === 2 ? parts[0] : 'es'
  const homeHref = `/${currentLocale}`

  const [open, setOpen] = useState(false)

  const linkBase =
    'relative flex h-16 cursor-pointer items-center gap-1 px-3 text-sm font-semibold text-slate-800 transition hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500'

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center gap-4">
          {/* LOGO -> link a página de inicio por idioma */}
          <Link href={homeHref} className="w-max" aria-label="Ir al inicio">
            <Image
              src="/brand/asafebox-logo.png"
              alt="In aSAFEBOX®"
              width={160}
              height={36}
              priority
              className="h-8 w-auto"
            />
          </Link>

          {/* NAV (desktop) */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-0.5">
              <li><a className={linkBase} href="#network">Network</a></li>
              <li><a className={linkBase} href="#products">Products</a></li>
              <li><a className={linkBase} href="#developers">Developers</a></li>
              <li><a className={linkBase} href="#discover">Discover</a></li>
            </ul>
          </nav>

          {/* CTA / Espacio a la derecha (desktop) */}
          <div className="ml-auto hidden items-center gap-2 md:flex">
            {/* aquí puedes poner CTAs o el switcher si lo deseas */}
          </div>

          {/* Botón hamburguesa (mobile) */}
          <button
            type="button"
            aria-label="Abrir menú"
            className="ml-auto inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Panel mobile */}
      {open && (
        <div className="md:hidden">
          <div
            className="absolute inset-x-0 top-16 z-50 border-b border-slate-200 bg-white/95 backdrop-blur"
            role="dialog"
            aria-label="Menú"
          >
            <nav className="mx-auto max-w-7xl px-4 py-3">
              <ul className="grid gap-1">
                <li><a className="block rounded-lg px-3 py-2 font-semibold text-slate-800 hover:bg-slate-100" href="#network" onClick={() => setOpen(false)}>Network</a></li>
                <li><a className="block rounded-lg px-3 py-2 font-semibold text-slate-800 hover:bg-slate-100" href="#products" onClick={() => setOpen(false)}>Products</a></li>
                <li><a className="block rounded-lg px-3 py-2 font-semibold text-slate-800 hover:bg-slate-100" href="#developers" onClick={() => setOpen(false)}>Developers</a></li>
                <li><a className="block rounded-lg px-3 py-2 font-semibold text-slate-800 hover:bg-slate-100" href="#discover" onClick={() => setOpen(false)}>Discover</a></li>
                <li>
                  <Link
                    href={homeHref}
                    className="mt-1 block rounded-lg border border-slate-200 px-3 py-2 text-center font-semibold hover:bg-slate-50"
                    onClick={() => setOpen(false)}
                  >
                    {currentLocale.toUpperCase()} / Home
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/30"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
        </div>
      )}
    </header>
  )
}
