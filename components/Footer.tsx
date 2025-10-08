// components/Footer.tsx
import Link from 'next/link';

export default function Footer({ locale }: { locale: 'es' | 'en' | 'de' }) {
  const home = `/${locale}/`;
  // mismo mecanismo de basePath que en TopBar
  const base =
    typeof window !== 'undefined' && window.location.pathname.startsWith('/asafebox-landing')
      ? '/asafebox-landing'
      : '';
  const logoSvg = `${base}/brand/asafebox-wordmark.svg`;
  const logoPng = `${base}/brand/asafebox-wordmark.png`;

  return (
    <footer className="border-t border-slate-200 py-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <Link href={home} prefetch={false} className="inline-flex items-center">
          <picture>
            <source srcSet={logoSvg} type="image/svg+xml" />
            <img
              src={logoPng}
              alt="AsafeBox®"
              width={140}
              height={28}
              className="h-7 w-auto"
              decoding="async"
            />
          </picture>
        </Link>
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} AsafeBox</p>
      </div>
    </footer>
  );
}

