// components/AnchorsRow.tsx
import Link from 'next/link';

export default function AnchorsRow({ locale = 'en' }: { locale?: 'es' | 'en' | 'de' }) {
  const home = `/${locale}/`;

  return (
    <div className="flex flex-wrap gap-3">
      {/* Ejemplos de anchors que ya tengas */}
      <Link
        href={`${home}introduction/#what-is`}
        prefetch={false}
        className="rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
      >
        What is In aSafeBox®
      </Link>

      <Link
        href={`${home}introduction/#how-it-works`}
        prefetch={false}
        className="rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
      >
        How it works
      </Link>

      {/* Briefing → ahora va al Home */}
      <Link
        href={home} // 👈 redirige a la homepage del locale
        prefetch={false}
        className="rounded-xl bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800"
      >
        Briefing
      </Link>
    </div>
  );
}