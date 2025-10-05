// app/page.tsx
'use client';

import { useEffect } from 'react';
import Link from 'next/link';

const DEFAULT_LOCALE = 'en'; // cambiálo si querés 'es' o 'de'

export default function RootRedirect() {
  useEffect(() => {
    // redirect client-side para export estático
    window.location.replace(`/${DEFAULT_LOCALE}/`);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center">
        <p className="mb-3">Redirigiendo…</p>
        <p>
          Si no ocurre en 1s, abrí{' '}
          <Link href={`/${DEFAULT_LOCALE}/`} className="underline">
            {`/${DEFAULT_LOCALE}/`}
          </Link>
        </p>
      </div>
    </main>
  );
}