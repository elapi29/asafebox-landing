// components/PrivacyBlindReveal.tsx
'use client'

import Image from 'next/image'

type Props = {
  title: string
  body: string
  cta: string
}

export default function PrivacyBlindReveal({ title, body, cta }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid items-start gap-8 md:grid-cols-2">
        {/* IMAGEN: alineada al top y con basePath correcto gracias a next/image */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-2 md:p-3">
          <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl">
            <Image
              src="/illustrations/blind-reveal.png"
              alt="Blind-Reveal"
              fill
              sizes="(min-width: 768px) 48vw, 90vw"
              className="object-contain object-top"
              priority
            />
          </div>
        </div>

        {/* TEXTO */}
        <div className="pt-0 md:pt-1">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-7 text-slate-600">{body}</p>

          <a
            href="#how-it-works"
            className="mt-6 inline-block rounded-xl bg-indigo-600 px-5 py-3 text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            {cta}
          </a>
        </div>
      </div>
    </section>
  )
}