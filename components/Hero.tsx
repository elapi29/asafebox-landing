// components/Hero.tsx
import EmailCapture from './EmailCapture'

type Props = {
  title: string
  subtitle: string
  emailPlaceholder: string
  cta: string
  disclaimer: string
}

export default function Hero({ title, subtitle, emailPlaceholder, cta, disclaimer }: Props) {
  return (
    <section className="px-6 pt-16 pb-8 bg-radial-dots bg-dots">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          <span className="bg-brand-gradient bg-clip-text text-transparent">{title}</span>
        </h1>
        <p className="mt-4 text-lg text-slate-700">{subtitle}</p>

        <div className="mt-6">
          <EmailCapture placeholder={emailPlaceholder} cta={cta} />
          <p className="mt-2 text-xs text-slate-500">{disclaimer}</p>
        </div>
      </div>
    </section>
  )
}

