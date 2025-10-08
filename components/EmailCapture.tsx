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
  const [name, setName] = useState('')
  const [hp, setHp] = useState('')

  const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const nextUrl = `${base}${successPath}`
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || ''

  const action = useMemo(() => {
    if (!endpoint) return ''
    const join = endpoint.includes('?') ? '&' : '?'
    return `${endpoint}${join}redirect=${encodeURIComponent(nextUrl)}`
  }, [endpoint, nextUrl])

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (!action) {
      e.preventDefault()
      window.location.assign(nextUrl)
    }
  }

  return (
    <form
      action={action || undefined}
      method="POST"
      onSubmit={onSubmit}
      className="mx-auto flex w-full max-w-3xl flex-col gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur sm:flex-row sm:items-center"
    >
      {/* honeypot */}
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

      {/* Nombre (opcional) */}
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name (optional)"
        className="h-12 w-full min-w-0 rounded-xl border border-slate-300 px-4 text-base outline-none placeholder:text-slate-400 focus:border-slate-400 focus:ring-0 sm:max-w-[30%]"
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        autoComplete="email"
        inputMode="email"
        className="h-12 w-full flex-1 min-w-0 rounded-xl border border-slate-300 px-4 text-base outline-none placeholder:text-slate-400 focus:border-slate-400 focus:ring-0"
        aria-label="Email"
      />

      {/* Subject ayuda a filtros */}
      <input type="hidden" name="_subject" value="New signup from AsafeBox Landing" />

      <button
        type="submit"
        className="h-12 shrink-0 rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        {cta}
      </button>
    </form>
  )
}

