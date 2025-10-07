// components/TopBar.tsx
'use client'

import Link from 'next/link'
import { withBase } from './lib/withBase'

export default function TopBar({ locale }: { locale: string }) {
  const home = `/${locale}`
  const logoSrc = withBase('/brand/asafebox-wordmark.png')

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-b-2xl px-4 py-3">
        <Link href={home} className="flex items-center gap-2">
          {/* si prefieres SVG, cambia a /brand/asafebox-logo.svg */}
          <img
            src={logoSrc}
            alt="AsafeBox"
            width={128}
            height={24}
            className="h-6 w-auto"
          />
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium text-slate-700">
          <Link href={`${home}#features`} className="hover:underline">Features</Link>
          <Link href={`${home}#pricing`} className="hover:underline">Pricing</Link>
        </nav>
      </div>
    </header>
  )
}