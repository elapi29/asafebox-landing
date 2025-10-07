// components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Footer({ locale }: { locale: 'es' | 'en' | 'de' }) {
  const home = `/${locale}/`;
  return (
    <footer className="border-t border-slate-200 py-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <Link href={home} className="inline-flex items-center" prefetch={false}>
          <Image
            src="/brand/asafebox-wordmark.png"
            alt="AsafeBox"
            width={128}
            height={24}
            unoptimized
            className="h-6 w-auto"
          />
        </Link>
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} AsafeBox</p>
      </div>
    </footer>
  );
}

