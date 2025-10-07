// components/Footer.tsx
import Link from 'next/link';
//import BrandWordmark from './BrandWordmark';

export default function Footer({ locale }: { locale: 'es' | 'en' | 'de' }) {
  const home = `/${locale}/`;
  return (
    <footer className="border-t border-slate-200 py-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        {/*// components/Footer.tsx (logo)*/}
        <Link href={home} prefetch={false} className="inline-flex items-center">
          <Image
            src="/brand/asafebox-wordmark.svg"   // o .png
            alt="AsafeBox®"
            width={140}
            height={28}
            unoptimized
            className="h-7 w-auto"
          />
        </Link>

        <p className="text-sm text-slate-500">© {new Date().getFullYear()} AsafeBox</p>
      </div>
    </footer>
  );
}

