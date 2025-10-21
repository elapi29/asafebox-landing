// app/[locale]/verify/example/page.tsx
'use client'

import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { withBase } from '../../../components/lib/withBase' // ruta relativa desde app/[locale]/verify/

type Locale = 'es' | 'en' | 'de'

// Utilidades pequeñas
const b64 = {
  enc: (obj: unknown) => typeof window !== 'undefined'
    ? btoa(unescape(encodeURIComponent(JSON.stringify(obj))))
    : '',
  dec: (s: string) => JSON.parse(decodeURIComponent(escape(atob(s)))),
}

async function sha256(file: File): Promise<string> {
  const buf = await file.arrayBuffer()
  const hash = await crypto.subtle.digest('SHA-256', buf)
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

function absoluteUrl(path: string) {
  // withBase te da /asafebox-landing/... en GH Pages; acá le agregamos origin
  if (typeof window === 'undefined') return path
  const p = withBase(path)
  return `${location.origin}${p}`
}

export default function VerifyExamplePage({ params }: { params: { locale: Locale } }) {
  const { locale } = params
  const sp = useSearchParams()
  const token = sp.get('token') || ''

  // ——————————————————————————————————————————————————————————
  // MODO RECEPTOR (viene con ?token=...)
  // ——————————————————————————————————————————————————————————
  const view = useMemo(() => {
    if (!token) return null
    try {
      const obj = b64.dec(token)
      return obj
    } catch {
      return { error: 'Invalid token' }
    }
  }, [token])

  const [revealPass, setRevealPass] = useState('')
  const [unlocked, setUnlocked] = useState(false)

  useEffect(() => {
    // Si el token indica que no hay password, se desbloquea solo
    if (view && (view as any)?.protect?.mode !== 'password') setUnlocked(true)
  }, [view])

  // ——————————————————————————————————————————————————————————
  // MODO EMISOR (sin token): form para subir archivo y armar evento
  // ——————————————————————————————————————————————————————————
  const [file, setFile] = useState<File | null>(null)
  const [amount, setAmount] = useState('')
  const [recipient, setRecipient] = useState('me@example.com')
  const [issuer, setIssuer] = useState('Jewelry Store X')
  const [note, setNote] = useState('')
  const [passRequired, setPassRequired] = useState(false)
  const [pass, setPass] = useState('')

  const [shareUrl, setShareUrl] = useState<string>('')

  async function onCreateEvent() {
    if (!file) return alert('Subí un archivo (PDF/JPG/PNG).')
    const hash = await sha256(file)
    const now = new Date().toISOString()

    const event = {
      kind: 'sale_event_demo',
      i18n: locale,
      issuer,
      recipient,           // email o teléfono que el cliente ponga
      amount,
      note,
      file: {
        name: file.name,
        size: file.size,
        type: file.type || 'application/octet-stream',
        sha256: hash,
      },
      timestamp: now,
      protect: passRequired
        ? { mode: 'password', hint: 'ask the seller', kdf: 'demo', salt: 'demo' }
        : { mode: 'none' },
      // En real: acá firmaría el backend / HSM; en demo guardamos en localStorage
    }

    // Guardamos en localStorage por si refrescan (no es seguridad, es demo UX)
    try { localStorage.setItem('asafebox-demo-event', JSON.stringify(event)) } catch {}

    const token = b64.enc(event)
    const url = absoluteUrl(`/${locale}/verify/example/?token=${encodeURIComponent(token)}`)
    setShareUrl(url)
  }

  function onReveal() {
    if ((view as any)?.protect?.mode === 'password') {
      // Validación demo: password exacta = "demo" o la que el emisor eligió (si lo incluyeras)
      if (revealPass.trim() === 'demo') setUnlocked(true)
      else alert(locale === 'es' ? 'Password inválido' : 'Invalid password')
    } else {
      setUnlocked(true)
    }
  }

  const T = (en: string, es: string, de?: string) =>
    locale === 'es' ? es : locale === 'de' ? (de || en) : en

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-bold text-slate-900">
        {T('QR Demo — Verify & Send',
           'Demo QR — Verificar & Enviar',
           'QR Demo — Prüfen & Senden')}
      </h1>

      {!token && (
        <section className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-slate-600">
            {T(
              'Create a demo “sale event”: upload a file, we compute its hash in your browser and generate a shareable verification link.',
              'Creá un “evento de venta” demo: subí un archivo, calculamos el hash en tu navegador y generamos un enlace verificable para compartir.',
              'Erzeuge ein Demo-„Verkaufsereignis“: Datei hochladen, Hash im Browser berechnen und teilbaren Verifizierungslink erstellen.'
            )}
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm text-slate-700">{T('Recipient (email/phone)','Destinatario (email/teléfono)')}</span>
              <input value={recipient} onChange={e => setRecipient(e.target.value)} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
            </label>
            <label className="block">
              <span className="text-sm text-slate-700">{T('Amount','Importe')}</span>
              <input value={amount} onChange={e => setAmount(e.target.value)} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder={T('$1200','$1200')} />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-sm text-slate-700">{T('Issuer','Emisor')}</span>
              <input value={issuer} onChange={e => setIssuer(e.target.value)} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-sm text-slate-700">{T('Attach file (PDF/JPG/PNG)','Adjuntar archivo (PDF/JPG/PNG)')}</span>
              <input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={e => setFile(e.target.files?.[0] || null)} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
            </label>
            <label className="flex items-center gap-3 sm:col-span-2">
              <input type="checkbox" checked={passRequired} onChange={e => setPassRequired(e.target.checked)} />
              <span className="text-sm text-slate-700">{T('Require password to reveal private fields','Requerir password para revelar datos privados')}</span>
            </label>
            {passRequired && (
              <label className="block sm:col-span-2">
                <span className="text-sm text-slate-700">{T('Demo password (use “demo”)','Password demo (usá “demo”)')}</span>
                <input value={pass} onChange={e => setPass(e.target.value)} placeholder="demo" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
              </label>
            )}
          </div>

          <div className="pt-2">
            <button
              onClick={onCreateEvent}
              className="rounded-xl bg-slate-900 px-5 py-3 text-white hover:bg-slate-800"
            >
              {T('Generate verification link','Generar enlace verificable')}
            </button>
          </div>

          {!!shareUrl && (
            <div className="rounded-xl bg-slate-50 p-4">
              <div className="text-sm text-slate-700">{T('Share this link (scan from your phone):','Compartí este link (escaneá desde tu teléfono):')}</div>
              <a href={shareUrl} className="mt-1 block break-all text-indigo-700 underline" target="_blank" rel="noreferrer">{shareUrl}</a>
            </div>
          )}
        </section>
      )}

      {!!token && (
        <section className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold">{T('Verification receipt','Recibo de verificación')}</h2>
          {'error' in (view as any) ? (
            <p className="text-red-600">{T('Invalid token','Token inválido')}</p>
          ) : (
            <>
              <div className="grid gap-3 sm:grid-cols-2">
                <Info label={T('Issuer','Emisor')} value={(view as any).issuer} />
                <Info label={T('Timestamp','Fecha')} value={(view as any).timestamp} />
                <Info label={T('Recipient','Destinatario')} value={unlocked ? (view as any).recipient : '••••••••'} />
                <Info label={T('Amount','Importe')} value={unlocked ? (view as any).amount : '••••••••'} />
                <Info label={T('File name','Archivo')} value={(view as any).file?.name} />
                <Info label="SHA-256" value={(view as any).file?.sha256} mono />
                {!!(view as any).note && <Info label={T('Note','Nota')} value={unlocked ? (view as any).note : '••••'} />}
              </div>

              {(view as any).protect?.mode === 'password' && !unlocked && (
                <div className="rounded-xl bg-amber-50 p-3">
                  <div className="font-medium text-amber-900">{T('This event has private fields. Enter the password to reveal.','Este evento tiene campos privados. Ingresá el password para revelar.')}</div>
                  <div className="mt-2 flex gap-2">
                    <input value={revealPass} onChange={e => setRevealPass(e.target.value)} className="w-64 rounded-lg border border-amber-300 px-3 py-2" placeholder="demo" />
                    <button onClick={onReveal} className="rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">{T('Reveal','Revelar')}</button>
                  </div>
                </div>
              )}
            </>
          )}
        </section>
      )}
    </main>
  )
}

function Info({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="rounded-lg border border-slate-200 p-3">
      <div className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</div>
      <div className={`mt-1 break-all ${mono ? 'font-mono text-[13px]' : ''}`}>{value || '—'}</div>
    </div>
  )
}
