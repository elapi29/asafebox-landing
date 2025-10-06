// components/PrivacyBlindReveal.tsx
import Image from 'next/image';

type Props = {
  title: string;
  body: string;
  cta?: string;
};

export default function PrivacyBlindReveal({ title, body, cta }: Props) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-2xl font-semibold mb-3">{title}</h2>
        <p className="text-slate-700 mb-6">{body}</p>

        <div className="w-full max-w-md mx-auto">
          <Image
            src="/illustrations/blind-reveal.png"
            alt="Blind reveal"
            width={1200}
            height={800}
            priority
            className="w-full h-auto"
          />
        </div>

        {cta ? (
          <div className="mt-6 text-center">
            <span className="inline-block rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold">
              {cta}
            </span>
          </div>
        ) : null}
      </div>
    </section>
  );
}
