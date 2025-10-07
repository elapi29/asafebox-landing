// components/TopBar.tsx
import Link from 'next/link'
import { withBase } from './lib/withBase'
import type { Locale } from '../i18n/dictionaries'

export default function TopBar({ locale }: { locale: Locale }) {
  const logoSrc = withBase('/brand/asafebox-wordmark.png')
  const homeHref = `/${locale}`   // Link maneja basePath automáticamente

  return (
    <header className="sticky top-0 z-40 glass">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href={homeHref} className="flex items-center gap-2">
          <img
            src={logoSrc}
            alt="AsafeBox"
            className="h-6 w-auto"
            loading="eager"
            decoding="async"
          />
        </Link>
        {/* … el resto del nav … */}
      </div>
    </header>
  )
}