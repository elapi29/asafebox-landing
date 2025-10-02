// components/PrivacyBlindReveal.tsx
type Props = { title: string; body: string; cta: string }

export default function PrivacyBlindReveal({ title, body, cta }: Props) {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-2">
        {/* Imagen a la izquierda */}
        <div className="flex justify-center lg:justify-start">
          <img
            src="/illustrations/blind-reveal.png"
            alt="Blind-Reveal"
            className="h-auto w-full max-w-md"
            loading="lazy"
          />
        </div>

        {/* Texto a la derecha, alineado arriba */}
        <div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-3 max-w-prose text-slate-700">{body}</p>
          <a
            href="#how-it-works"
            className="mt-5 inline-block rounded-lg bg-indigo-600 px-4 py-2 text-white"
          >
            {cta}
          </a>
        </div>
      </div>
    </section>
  )
}