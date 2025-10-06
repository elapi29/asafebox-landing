// components/TopBar.tsx
import Link from 'next/link';
import Image from 'next/image';

const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? '');

export default function TopBar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-neutral-200/70
                       bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2">
          <Image
            src={`${base}/brand/asafebox-logo.svg`}   // 👈 evita 404 en GH Pages
            alt="aSAFEBOX"
            width={160}
            height={40}
            priority
            unoptimized
            className="h-6 w-auto"
          />
        </Link>
        <nav className="text-sm">
          <Link href="/#features" className="px-3">Features</Link>
          <Link href="/#pricing" className="px-3">Pricing</Link>
        </nav>
      </div>
    </header>
  );
}