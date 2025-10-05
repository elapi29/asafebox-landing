// components/TopBar.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function TopBar() {
  return (
    <header className="w-full border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link href="/">
          <span className="inline-flex items-center gap-2">
            <Image
              src="/brand/asafebox-logo.svg"
              alt="AsafeBox"
              width={160}
              height={40}
              priority
              className="h-6 w-auto"
            />
          </span>
        </Link>
        <nav className="text-sm">
          <Link href="/#features" className="px-3">Features</Link>
          <Link href="/#pricing" className="px-3">Pricing</Link>
        </nav>
      </div>
    </header>
  );
}