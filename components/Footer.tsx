// components/Footer.tsx
import Link from 'next/link';

const base = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Footer() {
  return (
    <footer className="mt-20 border-t">
      <div className="mx-auto max-w-6xl px-4 py-8 flex items-center justify-between">
        <Link href={`${base}/`}>
          <span className="inline-flex items-center gap-2">
            <img
              src={`${base}/brand/asafebox-wordmark.png`}
              alt="AsafeBox"
              width={160}
              height={28}
              className="h-6 w-auto"
              loading="lazy"
            />
          </span>
        </Link>
        <p className="text-xs text-neutral-500">
          © {new Date().getFullYear()} AsafeBox
        </p>
      </div>
    </footer>
  );
}

