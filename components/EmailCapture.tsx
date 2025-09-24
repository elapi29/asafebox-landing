'use client'
import { useState } from 'react'

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const emailOk = /^\S+@\S+\.\S+$/.test(email)
    if (!emailOk) { setError('Ingresá un email válido.'); return }
    if (!FORMSPREE_ENDPOINT) { setError('Endpoint no configurado.'); return }

    setLoading(true)
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, _gotcha: '' }) // honeypot
      })
      if (res.ok) {
        window.location.href = (process.env.NEXT_PUBLIC_BASE_PATH || '') + '/thanks/'
      } else {
        setError('No pudimos registrar tu email. Probá de nuevo en un momento.')
      }
    } catch (err) {
      setError('Error de red. Revisá tu conexión.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md gap-2">
      <label className="sr-only" htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="tu@email.com"
        autoComplete="email"
        required
        className="flex-1 rounded-xl border border-slate-300 bg-white/90 px-4 py-3 text-base shadow-sm focus:border-brand-500"
      />
      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-brand-500 px-5 py-3 text-white shadow hover:bg-brand-600 focus-visible:outline-brand-500 disabled:opacity-60"
        aria-busy={loading}
      >{loading ? 'Enviando…' : 'Quiero saber más'}</button>
      {error && <p className="sr-only" role="alert">{error}</p>}
    </form>
  )
}
