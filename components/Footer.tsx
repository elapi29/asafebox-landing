// components/Footer.tsx
import Link from 'next/link';
import BrandWordmark from './BrandWordmark';

export default function Footer({ locale }: { locale: 'es' | 'en' | 'de' }) {
  const home = `/${locale}/`;
  return (
    <footer className="border-t border-slate-200 py-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <Link href={home} prefetch={false} className="inline-flex items-center">
          <BrandWordmark className="h-6 w-[128px] text-slate-900" />
        </Link>
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} AsafeBox</p>
      </div>
    </footer>
  );
}

