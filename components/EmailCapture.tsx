// components/EmailCapture.tsx
'use client'

import { useMemo, useState, FormEvent } from 'react'

type Props = {
  placeholder: string
  cta: string
  successPath?: string // default: '/thanks/'
}

export default function EmailCapture({ placeholder, cta, successPath = '/thanks/' }: Props) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')          // opcional: ayuda con spam score
  const [hp, setHp] = useState('')              // honeypot

  // basePath para GH Pages (inyectado en build desde next.config.mjs)
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const nextUrl = `${base}${successPath}`

  // endpoint público de Formspree (inyectado en build)
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || ''

  // Usamos redirect server-side de Formspree si hay endpoint
  const action = useMemo(() => {
    if (!endpoint) return ''
    const join = endpoint.includes('?') ? '&' : '?'
    // Formspree soporta `?redirect=https://...`
    return `${endpoint}${join}redirect=${encodeURIComponent(nextUrl)}`
  }, [endpoint, nextUrl])

  // Fallback: si no hay endpoint, interceptamos y redirigimos client-side
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (!action) {
      e.preventDefault()
      // podrías hacer aquí un fetch a tu propia API si quisieras
      window.location.assign(nextUrl)
    }
  }

  return (
    <form
      action={action || undefined}
      method="POST"
      onSubmit={onSubmit}
      className="mx-auto flex w-full max-w-md flex-col gap-2 rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:flex-row sm:items-center"
    >
      {/* HONEYPOT anti-bots */}
      <input
        type="text"
        name="_gotcha"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        style={{ position: 'absolute', left: '-9999px' }}
        aria-hidden="true"
      />

      {/* Un campo opcional de nombre ayuda a reducir spam */}
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name (optional)"
        className="w-full rounded-lg border-0 px-3 py-2 text-base outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-brand-500 sm:max-w-[40%]"
      />

      <input
        type="email"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        className="w-full flex-1 rounded-lg border-0 px-3 py-2 text-base outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-brand-500"
        aria-label="Email"
        autoComplete="email"
        inputMode="email"
      />

      {/* Subject ayuda con filtros */}
      <input type="hidden" name="_subject" value="New signup from AsafeBox Landing" />

      <button
        type="submit"
        className="whitespace-nowrap rounded-lg bg-brand-900 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-800 focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        {cta}
      </button>
    </form>
  )
}

