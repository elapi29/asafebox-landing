'use client'
import React, { useMemo, useState } from 'react'

/** ========= Métricas (loopback local, 100 iter, FIPS on) ========= */
const METRICS = {
  verify: {
    OK:        { P50: 71,  P95: 211, P99: 389, status: 204 },
    BAD_HMAC:  { P50: 79,  P95: 123, P99: 251, status: 400 },
    REPLAY:    { P50: 202, P95: 258, P99: 344, status: 409 },
    TS_WINDOW: { P50: 43,  P95: 62,  P99: 176, status: 401 },
  },
  freeze: {
    FREEZE: { P50: 39,  P95: 56,  P99: 198, status: 409 },
    REPLAY: { P50: 152, P95: 194, P99: 244, status: 409 },
  },
} as const

type PMode = 'P50' | 'P95' | 'P99'

/** ========= UI utilitarios (sin dependencias externas) ========= */
function useLatencyLabel(mode: PMode, val?: number) {
  return useMemo(() => (val != null ? `${val} µs ${mode}` : '—'), [mode, val])
}

const Badge = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium
    border border-slate-300 bg-slate-100 text-slate-700 ${className}`}>
    {children}
  </span>
)

const Toggle = ({
  active,
  onClick,
  children,
}: {
  active?: boolean
  onClick?: () => void
  children: React.ReactNode
}) => (
  <button
    type="button"
    onClick={onClick}
    className={[
      'rounded-md px-3 py-1 text-sm border transition',
      active
        ? 'bg-slate-900 text-white border-slate-900'
        : 'bg-white text-slate-800 border-slate-300 hover:bg-slate-50',
    ].join(' ')}
    aria-pressed={active}
  >
    {children}
  </button>
)

/** Íconos mínimos inline (sin librerías) */
const Icon = {
  shield: (cls = 'h-5 w-5 text-slate-700') => (
    <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7l7-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  lock: (cls = 'h-5 w-5 text-slate-700') => (
    <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="10" width="16" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 1 1 8 0v3" />
    </svg>
  ),
  timer: (cls = 'h-5 w-5 text-emerald-600') => (
    <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="13" r="8" />
      <path d="M12 13V9M9 3h6" />
    </svg>
  ),
  ban: (cls = 'h-5 w-5 text-rose-600') => (
    <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M5 19L19 5" />
    </svg>
  ),
  clock: (cls = 'h-5 w-5 text-amber-600') => (
    <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6l4 2" />
    </svg>
  ),
  refresh: (cls = 'h-5 w-5 text-slate-700') => (
    <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M20 12a8 8 0 1 1-2.343-5.657" />
      <path d="M20 4v6h-6" />
    </svg>
  ),
}

const Arrow = ({ label }: { label?: React.ReactNode }) => (
  <div className="flex flex-col items-center justify-center">
    <svg width="28" height="28" viewBox="0 0 24 24" className="text-slate-700" fill="none">
      <path d="M4 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13 7l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    {label && <div className="text-xs text-slate-500 -mt-1">{label}</div>}
  </div>
)

const Node = ({
  title,
  subtitle,
  icon,
  tone = 'neutral',
}: {
  title: string
  subtitle?: React.ReactNode
  icon?: React.ReactNode
  tone?: 'ok' | 'warn' | 'bad' | 'neutral'
}) => {
  const toneClass =
    tone === 'ok'
      ? 'border-emerald-500/60 bg-emerald-50'
      : tone === 'bad'
      ? 'border-rose-500/60 bg-rose-50'
      : tone === 'warn'
      ? 'border-amber-500/60 bg-amber-50'
      : 'border-slate-300 bg-white'
  return (
    <div className={`rounded-2xl border ${toneClass} p-4 shadow-sm flex flex-col gap-2`}>
      <div className="flex items-center gap-2">
        {icon}
        <div className="font-semibold text-slate-800">{title}</div>
      </div>
      {subtitle && <div className="text-sm text-slate-600">{subtitle}</div>}
    </div>
  )
}

/** ========= Componente principal ========= */
export default function FreezeVerifyDiagram() {
  const [mode, setMode] = useState<PMode>('P50')

  const l = {
    okVerify: useLatencyLabel(mode, METRICS.verify.OK[mode]),
    badVerify: useLatencyLabel(mode, METRICS.verify.BAD_HMAC[mode]),
    replayVerify: useLatencyLabel(mode, METRICS.verify.REPLAY[mode]),
    tsVerify: useLatencyLabel(mode, METRICS.verify.TS_WINDOW[mode]),
    manualFreeze: useLatencyLabel(mode, METRICS.freeze.FREEZE[mode]),
    replayFreeze: useLatencyLabel(mode, METRICS.freeze.REPLAY[mode]),
  }

  return (
    <div className="w-full p-4 md:p-6 lg:p-8">
      {/* Encabezado + selector percentil */}
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight">Freeze / Verify — Decision path (v1.4.2)</h2>
          <p className="text-sm text-slate-600">
            Loopback local · 100 iter · OpenSSL 3.5 FIPS · Clang 17 -O3 · 1 MiB cap · Nonce ring 4K · Rate limit 100/10s
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-500">Percentile:</span>
          <div className="flex gap-1">
            {(['P50', 'P95', 'P99'] as PMode[]).map((m) => (
              <Toggle key={m} active={mode === m} onClick={() => setMode(m)}>
                {m}
              </Toggle>
            ))}
          </div>
        </div>
      </div>

      {/* Fila 1 */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
        <div className="md:col-span-1">
          <Node
            title="HTTP Ingress"
            subtitle={
              <>
                <div>Envelope de integridad</div>
                <div><code>Digest: SHA-256=…</code></div>
              </>
            }
            icon={Icon.shield()}
          />
        </div>
        <Arrow />

        <div className="md:col-span-1">
          <Node
            title="Base checks"
            subtitle={
              <>
                <div>Const-time compare</div>
                <div>FIPS provider = on</div>
              </>
            }
            icon={Icon.lock()}
          />
        </div>
        <Arrow />

        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Node
              title="OK"
              subtitle={
                <>
                  <div>Verify: <b>{l.okVerify}</b></div>
                  <div>Status <Badge>204</Badge></div>
                  <div>Headers: <code>Server-Timing: verify;dur=…</code></div>
                  <div>Signatures: JWS + COSE</div>
                </>
              }
              icon={Icon.timer()}
              tone="ok"
            />
          </div>

          <div>
            <Node
              title="Bad integrity"
              subtitle={
                <>
                  <div>Verify: <b>{l.badVerify}</b></div>
                  <div>Status <Badge className="bg-rose-100 text-rose-700 border-rose-300">400</Badge></div>
                  <div>On-wire: problem+json (RFC 9457)</div>
                  <div>Signatures: JWS + COSE</div>
                </>
              }
              icon={Icon.ban()}
              tone="bad"
            />
          </div>

          <div>
            <Node
              title="TS window"
              subtitle={
                <>
                  <div>Verify: <b>{l.tsVerify}</b></div>
                  <div>Status <Badge className="bg-amber-100 text-amber-700 border-amber-300">401</Badge></div>
                  <div>Δt fuera de ventana</div>
                  <div>Signatures: JWS + COSE</div>
                </>
              }
              icon={Icon.clock()}
              tone="warn"
            />
          </div>
        </div>
      </div>

      {/* Fila 2 (Replay / Freeze) */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
        <div className="md:col-span-2">
          <Node
            title="Replay check"
            subtitle={
              <>
                <div>Nonce ring (4K)</div>
                <div>Constant-time lookup</div>
              </>
            }
            icon={Icon.refresh()}
          />
        </div>
        <Arrow />
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Node
              title="Replay → Verify"
              subtitle={
                <>
                  <div>Verify: <b>{l.replayVerify}</b></div>
                  <div>Status <Badge className="bg-rose-100 text-rose-700 border-rose-300">409</Badge></div>
                  <div>problem+json + firmas</div>
                </>
              }
              icon={Icon.timer('h-5 w-5 text-rose-600')}
              tone="bad"
            />
          </div>
          <div>
            <Node
              title="Replay → Freeze()"
              subtitle={
                <>
                  <div>Freeze: <b>{l.replayFreeze}</b></div>
                  <div>Redacción + artefactos</div>
                  <div>Headers: <code>Server-Timing: freeze;dur=…</code></div>
                  <div>Signatures: JWS + COSE</div>
                </>
              }
              icon={Icon.lock()}
            />
          </div>
        </div>
      </div>

      {/* Freeze manual */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="text-base font-semibold">Freeze manual (operador / regla)</div>
        <div className="mt-2 text-sm text-slate-700 space-y-2">
          <div>
            <Badge className="mr-2">Freeze {mode}</Badge>
            <span className="font-medium">{l.manualFreeze}</span>
          </div>
          <ul className="list-disc ml-5 space-y-1">
            <li>Redacta cuerpo y encabezados sensibles</li>
            <li>Captura artefactos verificables (COSE/JWS)</li>
            <li>Respuesta <b>409</b> firmada con <code>application/problem+json</code></li>
          </ul>
        </div>
      </div>

      {/* Evidencia footer */}
      <div className="mt-6 text-xs text-slate-500">
        <div className="mb-1 font-medium">Evidencia on-wire (todas las rutas 4xx):</div>
        <div className="grid md:grid-cols-3 gap-2">
          <div>• <code>Digest: SHA-256=…</code> del cuerpo</div>
          <div>• <code>Server-Timing: verify;dur=…, freeze;dur=…</code></div>
          <div>• Dual-sig: JWS (ES256) + COSE_Sign1</div>
        </div>
      </div>
    </div>
  )
}