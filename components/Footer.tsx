// components/Footer.tsx
import Link from 'next/link';
import { withBase } from './lib/withBase';

export default function Footer({ locale }: { locale: 'es' | 'en' | 'de' }) {
  const home = `/${locale}/`;
  const logo = withBase('/brand/asafebox-wordmark.png'); // ✅ existe en /public/brand/

  return (
    <footer className="border-t border-slate-200 py-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <Link href={home} prefetch={false} className="inline-flex items-center">
          <img
            src={logo}
            alt="In aSAFEBOX®"
            width={150}
            height={30}
            className="h-8 w-auto"
            decoding="async"
          />
        </Link>
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} AsafeBox</p>
      </div>
    </footer>
  );
}