export const metadata = { title: '¡Gracias!' }

export default function Thanks() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="text-4xl font-bold">¡Gracias por tu interés!</h1>
      <p className="mt-4 text-lg text-slate-700">
        Recibimos tu email. Te contactaremos con avances y la demo.
      </p>
      <a href={(process.env.NEXT_PUBLIC_BASE_PATH || '') + '/'} className="mt-8 inline-block rounded-xl bg-brand-500 px-6 py-3 text-white shadow hover:bg-brand-600">Volver al inicio</a>
    </main>
  )
}
