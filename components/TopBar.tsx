// components/TopBar.tsx
import Link from 'next/link'
import Image from 'next/image'

export default function TopBar() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return (
    <header className="w-full sticky top-0 z-40">
      <div className="glass mx-auto max-w-6xl px-4 h-14 flex items-center justify-between rounded-b-2xl">
        <Link href={`${base}/`}>
          <span className="inline-flex items-center gap-2">
            <Image
              src={`${base}/brand/asafebox-logo.svg`}
              alt="AsafeBox"
              width={160}
              height={40}
              priority
              className="h-6 w-auto"
            />
          </span>
        </Link>
        <nav className="text-sm">
          <Link href={`${base}/#features`} className="px-3">Features</Link>
          <Link href={`${base}/#pricing`} className="px-3">Pricing</Link>
        </nav>
      </div>
    </header>
  )
}