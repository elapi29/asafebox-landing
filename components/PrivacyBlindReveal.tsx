// components/PrivacyBlindReveal.tsx
import Image from 'next/image';

export default function PrivacyBlindReveal() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-2xl font-semibold mb-6">Blind reveal</h2>
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
      </div>
    </section>
  );
}
