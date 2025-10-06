// app/page.tsx
'use client';

import { useEffect } from 'react';
import Link from 'next/link';

const DEFAULT_LOCALE = 'en';

export default function RootRedirect() {
  useEffect(() => {
    const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? '');
    // asegura subpath correcto en GH Pages
    window.location.replace(`${base}/${DEFAULT_LOCALE}/`);
  }, []);

  const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? '');
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center">
        <p className="mb-3">Redirigiendo…</p>
        <p>
          Si no ocurre en 1s, abrí{' '}
          <Link href={`/${DEFAULT_LOCALE}/`} className="underline">
            {`${base}/${DEFAULT_LOCALE}/`}
          </Link>
        </p>
      </div>
    </main>
  );
}