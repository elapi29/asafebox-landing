// components/EmailCapture.tsx
'use client'

import { useState, FormEvent } from 'react'

type Props = {
  placeholder: string
  cta: string
  successPath?: string // default: '/thanks/'
}

export default function EmailCapture({ placeholder, cta, successPath = '/thanks/' }: Props) {
  const [email, setEmail] = useState('')

  // Si TENÉS Formsprree, setealo en env. Si no, action queda vacío.
  const action = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || ''

  // Construye nextUrl respetando basePath (local y GitHub Pages)
  const buildNextUrl = () => {
    const envBase = process.env.NEXT_PUBLIC_BASE_PATH || ''
    if (envBase) return `${envBase}${successPath}`
    if (typeof window !== 'undefined') {
      const base = window.location.pathname.startsWith('/asafebox-landing') ? '/asafebox-landing' : ''
      return `${base}${successPath}`
    }
    return successPath
  }
  const nextUrl = buildNextUrl()

  // Si no hay action (sin Formspree), intercepto y redirijo manualmente
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
      className="mx-auto flex w-full max-w-md items-center gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-sm"
    >
      {/* Con Formspree, _next hace el redirect server-side */}
      {action ? <input type="hidden" name="_next" value={nextUrl} /> : null}

      <input
        type="email"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border-0 px-3 py-2 text-base outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-brand-500"
        aria-label="Email"
      />
      <button
        type="submit"
        className="whitespace-nowrap rounded-lg bg-brand-900 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-800 focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        {cta}
      </button>
    </form>
  )
}

