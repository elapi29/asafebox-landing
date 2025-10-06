// components/PrivacyBlindReveal.tsx
import Image from 'next/image';

type Props = {
  title: string;
  body: string;
  cta: string;
};

const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? '');

export default function PrivacyBlindReveal({ title, body, cta }: Props) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4 grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
          <p className="mt-3 text-slate-700">{body}</p>
          <a
            href="#learn-blind-reveal"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            {cta}
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="w-full max-w-md md:max-w-none md:justify-self-end">
          <Image
            src={`${base}/illustrations/blind-reveal.png`}
            alt="Blind reveal"
            width={1200}
            height={800}
            priority
            unoptimized
            className="w-full h-auto rounded-xl border border-slate-200 shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
