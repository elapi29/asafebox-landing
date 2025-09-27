// components/Hero.tsx
'use client'

type Props = {
  title: string
  subtitle: string
  emailPlaceholder: string
  cta: string
  disclaimer: string
}

export default function Hero({ title, subtitle, emailPlaceholder, cta, disclaimer }: Props) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const formspree = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || ''

  return (
    <header className="px-6 py-16 text-center">
      <h1 className="mx-auto max-w-3xl text-3xl md:text-5xl font-extrabold tracking-tight">
        {title}
      </h1>
      <p className="mx-auto mt-4 max-w-3xl text-slate-600 text-lg">
        {subtitle}
      </p>

      <form
        className="mx-auto mt-8 flex max-w-md items-center gap-2"
        action={formspree || `${basePath}/thanks`}
        method="POST"
      >
        <input
          type="email"
          name="email"
          required
          placeholder={emailPlaceholder}
          className="w-full rounded-xl border border-slate-300 px-4 py-3"
        />
        <button
          type="submit"
          className="rounded-xl bg-brand-900 px-5 py-3 font-semibold text-white hover:bg-brand-800"
        >
          {cta}
        </button>
      </form>

      <p className="mt-2 text-xs text-slate-500">{disclaimer}</p>
    </header>
  )
}

