// components/UnderConstruction.tsx
'use client';

import Link from 'next/link';
import { withBase } from './lib/withBase';

type Locale = 'es' | 'en' | 'de';

export default function UnderConstruction({ locale = 'en' }: { locale?: Locale }) {
  const copy: Record<Locale, { title: string; body: string; cta: string }> = {
    en: {
      title: 'Under construction',
      body:  'We are polishing this page. In the meantime, you can go back to the homepage.',
      cta:   'Back to homepage',
    },
    es: {
      title: 'En construcción',
      body:  'Estamos puliendo esta página. Mientras tanto, podés volver al inicio.',
      cta:   'Volver al inicio',
    },
    de: {
      title: 'Im Aufbau',
      body:  'Wir feilen noch an dieser Seite. In der Zwischenzeit zurück zur Startseite.',
      cta:   'Zur Startseite',
    },
  };

  const t = copy[locale];

  return (
    <section className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white px-6 py-10 text-center shadow-sm">
      <h1 className="text-3xl font-bold">{t.title}</h1>
      <p className="mt-3 text-slate-700">{t.body}</p>

      <div className="mt-6">
        <Link
          href={withBase(`/${locale}/`)}
          prefetch={false}
          className="inline-block rounded-xl bg-slate-900 px-5 py-3 text-white hover:bg-slate-800"
        >
          {t.cta}
        </Link>
      </div>
    </section>
  );
}