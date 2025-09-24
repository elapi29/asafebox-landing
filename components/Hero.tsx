import EmailCapture from './EmailCapture'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 py-24 text-center sm:py-28">
        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">
          aSAFEBOX® — Emprendimiento Seguro
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-700">
          Sellamos cada operación con evidencia criptográfica: lo que se firmó es lo que se ejecutó.
          Privacidad total con Blind-Reveal y pruebas ZK. Auditorías en minutos y preparación post-cuántica.
        </p>
        <div className="mt-10 flex justify-center">
          <EmailCapture />
        </div>
        <p className="mt-4 text-xs text-slate-500">Sin spam. Te enviaremos solo novedades clave.
        </p>
      </div>
    </section>
  )
}
