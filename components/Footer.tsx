// components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Footer({ locale = 'en' }: { locale?: 'es' | 'en' | 'de' }) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const homeHref = `${base}/${locale}/`;

  return (
    <footer className="mt-20 border-t">
      <div className="mx-auto max-w-6xl px-4 py-8 flex items-center justify-between">
        <Link href={homeHref}>
          <Image
            src="/brand/asafebox-wordmark.png"
            alt="AsafeBox"
            width={160}
            height={28}
            className="h-6 w-auto"
            priority
          />
        </Link>
        <p className="text-xs text-neutral-500">
          © {new Date().getFullYear()} AsafeBox
        </p>
      </div>
    </footer>
  );
}

