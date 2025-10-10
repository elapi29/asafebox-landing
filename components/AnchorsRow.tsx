// components/AnchorsRow.tsx
import Link from 'next/link';

type Locale = 'es' | 'en' | 'de';
type Anchor = { key?: string; label: string; href: string };

export default function AnchorsRow({
  locale = 'en',
  items,
}: {
  locale?: Locale;
  items?: Anchor[];
}) {
  const home = `/${locale}/`;

  // Si no te pasan items, usamos un set por defecto
  const list: Anchor[] =
    items && items.length > 0
      ? items
      : [
          { key: 'what', label: 'What is In aSafeBox®', href: `${home}introduction/#what-is` },
          { key: 'how', label: 'How it works', href: `${home}introduction/#how-it-works` },
          // Briefing → ahora va al Home del locale
          { key: 'briefing', label: 'Briefing', href: home },
        ];

  return (
    <div className="flex flex-wrap gap-3">
      {list.map((a) => (
        <Link
          key={a.key ?? a.label}
          href={a.href} // Link maneja basePath automáticamente
          prefetch={false}
          className={
            a.key === 'briefing'
              ? 'rounded-xl bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800'
              : 'rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50'
          }
        >
          {a.label}
        </Link>
      ))}
    </div>
  );
}