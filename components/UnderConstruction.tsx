// components/UnderConstruction.tsx
import Link from 'next/link';

type Locale = 'es' | 'en' | 'de';

export default function UnderConstruction({ locale = 'en' }: { locale?: Locale }) {
  const home = `/${locale}/`; // ← NO withBase aquí

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">Under construction</h1>
        <p className="mx-auto mt-3 max-w-xl text-slate-600">
          We are polishing this page. In the meantime, you can go back to the homepage.
        </p>

        <div className="mt-6">
          <Link
            href={home}            // ← basePath lo resuelve Next
            prefetch={false}
            className="inline-block rounded-xl bg-slate-900 px-5 py-3 text-white hover:bg-slate-800"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
}