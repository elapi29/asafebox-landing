// components/PrivacyBlindReveal.tsx
import Image from 'next/image'

type Props = {
  title: string
  body: string
  cta: string
  // Si querés, podés permitir override del src/alt:
  imgSrc?: string
  imgAlt?: string
  ctaHref?: string
}

export default function PrivacyBlindReveal({
  title,
  body,
  cta,
  imgSrc = '/illustrations/blind-reveal.png',
  imgAlt = 'Blind-Reveal',
  ctaHref = '#how-it-works',
}: Props) {
  return (
    <section id="privacy" className="px-6 py-16">
      <div className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-2">
        {/* Imagen: usa next/image para respetar basePath en GitHub Pages */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <Image
            src={imgSrc}
            alt={imgAlt}
            fill
            priority
            className="object-cover object-top" // 👈 contenido alineado arriba
            sizes="(min-width: 1024px) 560px, 100vw"
          />
        </div>

        {/* Texto */}
        <div className="mx-auto w-full max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            {body}
          </p>

          <div className="mt-6">
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}