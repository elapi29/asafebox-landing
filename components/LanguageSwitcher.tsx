// components/LanguageSwitcher.tsx
'use client'

type Locale = 'es' | 'en' | 'de'

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const locales: Locale[] = ['es', 'en', 'de']

  return (
    <nav
      aria-label="Language"
      className="mx-auto mb-6 flex w-full max-w-5xl items-center justify-end gap-2 px-6"
    >
      {locales.map((l) => {
        const active = l === locale
        return (
          <a
            key={l}
            href={`/${l}`}
            aria-current={active ? 'page' : undefined}
            className={[
              'inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium transition',
              active
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            ].join(' ')}
          >
            {l.toUpperCase()}
          </a>
        )
      })}
    </nav>
  )
}

