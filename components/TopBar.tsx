// components/TopBar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

const LOCALES = ['es', 'en', 'de'] as const;

export default function TopBar({ locale }: { locale: string }) {
  // slash final: importante con trailingSlash:true (GitHub Pages)
  const home = `/${locale}/`;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-b-2xl px-4 py-3">
        {/* Logo: NO basePath manual, NO import desde '@/public' */}
        <Link href={home} className="flex items-center gap-2" prefetch={false}>
          <Image
            src="/brand/asafebox-wordmark.png"
            alt="AsafeBox"
            width={128}
            height={24}
            priority
            unoptimized
            className="h-6 w-auto"
          />
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium text-slate-700">
          <Link href={`${home}#features`} className="hover:underline" prefetch={false}>Features</Link>
          <Link href={`${home}#pricing`} className="hover:underline" prefetch={false}>Pricing</Link>

          {/* Selector de idioma SIMPLE en el TopBar */}
          <div className="ml-4 flex items-center gap-2">
            {LOCALES.map((code) => {
              const href = `/${code}/`;
              const active = code === locale;
              return (
                <Link
                  key={code}
                  href={href}
                  prefetch={false}
                  className={`rounded-md px-2 py-1 ${
                    active
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-700 hover:bg-slate-100'
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