/// components/LanguageSwitcher.tsx
export default function LanguageSwitcher() {
  const locales = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
  ]
  return (
    <nav aria-label="Language" className="flex gap-2">
      {locales.map(l => (
        <a
          key={l.code}
          href={`/${l.code}`}
          className="rounded-full border border-slate-300 px-3 py-1 text-sm hover:bg-slate-50"
        >
          {l.label}
        </a>
      ))}
    </nav>
  )
}
