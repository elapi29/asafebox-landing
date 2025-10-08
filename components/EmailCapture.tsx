// components/EmailCapture.tsx  (déjalo como lo tenías)
'use client'

import { useState } from 'react'

type Props = {
  placeholder: string
  cta: string
  successPath?: string
}

export default function EmailCapture({ placeholder, cta, successPath = '/thanks/' }: Props) {
  const [email, setEmail] = useState('')
  const action = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || ''

  const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const nextUrl = `${base}${successPath}`

  return (
    <form
      action={action || undefined}
      method="POST"
      className="mx-auto flex w-full max-w-md items-center gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-sm"
    >
      {/* Redirect en Formspree */}
      {action ? <input type="hidden" name="_next" value={nextUrl} /> : null}

      {/* Campo requerido por Formspree */}
      <input
        type="email"
        name="email"            // ⬅️ clave: debe llamarse 'email' (o el nombre que esperes en Formspree)
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border-0 px-3 py-2 text-base outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-brand-500"
        aria-label="Email"
      />

      {/* Opcional: asunto personalizado en Formspree */}
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

