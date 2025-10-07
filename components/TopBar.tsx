// components/TopBar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
// Import estático => Next resuelve la ruta con basePath en export
import wordmark from '@/public/brand/asafebox-wordmark.png';

export default function TopBar({ locale }: { locale: string }) {
  // Slash final importante con trailingSlash:true (sirve /index.html por carpeta)
  const home = `/${locale}/`;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-b-2xl px-4 py-3">
        <Link href={home} className="flex items-center gap-2" prefetch={false}>
          <Image
            src={wordmark}
            alt="AsafeBox"
            width={128}
            height={24}
            priority
            unoptimized
            className="h-6 w-auto"
          />
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium text-slate-700">
          <Link href={`${home}#features`} className="hover:underline" prefetch={false}>
            Features
          </Link>
          <Link href={`${home}#pricing`} className="hover:underline" prefetch={false}>
            Pricing
          </Link>
        </nav>
      </div>
    </header>
  );
}