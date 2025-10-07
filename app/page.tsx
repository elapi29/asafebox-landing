// app/page.tsx
'use client';

import { useEffect } from 'react';
import Link from 'next/link';

const DEFAULT_LOCALE = 'en'; // cambiálo si querés 'es' o 'de'

export default function RootRedirect() {
  useEffect(() => {
    window.location.replace(`/${DEFAULT_LOCALE}/`);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center">
        <p className="mb-3">Redirecting…</p>
        <p>
          If it doesn’t happen in ~1s, open{' '}
          <Link href={`/${DEFAULT_LOCALE}/`} className="underline">
            {`/${DEFAULT_LOCALE}/`}
          </Link>
        </p>
      </div>
    </main>
  );
}
