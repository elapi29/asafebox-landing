'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import LanguageSwitcher from './LanguageSwitcher'
import { useState } from 'react'

/**
 * Barra superior sticky, semi-transparente (backdrop-blur) con menú responsive.
 * El logo linkea a la home del locale actual (/[locale]).
 * Usa next/image para respetar basePath en GitHub Pages.
 */
export default function TopBar() {
  const pathname = usePathname() || '/'
  const locale = pathname.split('/').filter(Boolean)[0] || 'es'
  const homeHref = `/${locale}`

  const [open, setOpen] = useState(false)
  const navItem =
    'relative px-3 py-2 text-[15px] font-medium text-slate-900 hover:text-indigo-700 transition-colors'

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 rounded-2xl border border-white/20 bg-white/70 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="flex h-16 items-center justify-between px-4">
            {/* Logo (link a home) */}
            <Link href={homeHref} className="flex items-center gap-3" aria-label="Go to homepage">
              <Image
                src="/brand/asafebox-logo.svg"  // <- en /public/brand
                alt="In aSAFEBOX®"
                width={140}
                height={34}
                priority
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 md:flex">
              <Link className={navItem} href={`/${locale}/#network`}>Network</Link>
              <Link className={navItem} href={`/${locale}/#products`}>Products</Link>
              <Link className={navItem} href={`/${locale}/#developers`}>Developers</Link>
              <Link className={navItem} href={`/${locale}/#discover`}>Discover</Link>
            </nav>

            {/* Idiomas + menú mobile */}
            <div className="flex items-center gap-3">
              <div className="hidden md:block">
                <LanguageSwitcher locale={locale as any} />
              </div>

              {/* Botón hamburguesa */}
              <button
                aria-label="Open menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white/60 text-slate-700 hover:bg-white md:hidden"
                onClick={() => setOpen((v) => !v)}
              >
                <span className="sr-only">Menu</span>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile sheet */}
          {open && (
            <div className="border-t border-slate-200/60 p-3 md:hidden">
              <nav className="flex flex-col">
                <Link className="rounded-xl px-3 py-2 hover:bg-white" href={`/${locale}/#network`} onClick={() => setOpen(false)}>Network</Link>
                <Link className="rounded-xl px-3 py-2 hover:bg-white" href={`/${locale}/#products`} onClick={() => setOpen(false)}>Products</Link>
                <Link className="rounded-xl px-3 py-2 hover:bg-white" href={`/${locale}/#developers`} onClick={() => setOpen(false)}>Developers</Link>
                <Link className="rounded-xl px-3 py-2 hover:bg-white" href={`/${locale}/#discover`} onClick={() => setOpen(false)}>Discover</Link>

                <div className="mt-3">
                  <LanguageSwitcher locale={locale as any} />
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}