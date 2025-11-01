// components/SystemLegend.tsx
import { BoxIcon, HsmIcon, LedgerIcon } from './SystemIcons'

type Locale = 'es' | 'en' | 'de'
type Block = { icon: JSX.Element; title: string; desc: string }

const L: Record<Locale, { cards: Block[] }> = {
  es: {
    cards: [
      {
        icon: <BoxIcon className="w-5 h-5" />,
        title: 'Gateway-Verify',
        desc: 'Portero digital: pruebas ZK, timestamp y vector aleatorio. 4xx + freeze si falla.',
      },
      {
        icon: <HsmIcon className="w-5 h-5" />,
        title: 'Signing-Proxy + HSM',
        desc: 'Firma sólo si pasó el portero. Las claves nunca salen del HSM.',
      },
      {
        icon: <LedgerIcon className="w-5 h-5" />,
        title: 'Ledger / CTE',
        desc: 'Segunda firma, freeze loop y estado final (SoftFreeze → Settled).',
      },
    ],
  },
  en: {
    cards: [
      {
        icon: <BoxIcon className="w-5 h-5" />,
        title: 'Gateway-Verify',
        desc: 'Edge gate: ZK checks, timestamp and random vector. 4xx + freeze on failure.',
      },
      {
        icon: <HsmIcon className="w-5 h-5" />,
        title: 'Signing-Proxy + HSM',
        desc: 'Signs only if gateway passed. Keys never leave the HSM.',
      },
      {
        icon: <LedgerIcon className="w-5 h-5" />,
        title: 'Ledger / CTE',
        desc: 'Second signature, freeze loop and final state (SoftFreeze → Settled).',
      },
    ],
  },
  de: {
    cards: [
      {
        icon: <BoxIcon className="w-5 h-5" />,
        title: 'Gateway-Verify',
        desc: 'Edge-Tor: ZK-Prüfungen, Zeitstempel und Zufallsvektor. 4xx + Freeze bei Fehler.',
      },
      {
        icon: <HsmIcon className="w-5 h-5" />,
        title: 'Signing-Proxy + HSM',
        desc: 'Signiert nur nach erfolgreichem Gateway. Schlüssel verlassen das HSM nie.',
      },
      {
        icon: <LedgerIcon className="w-5 h-5" />,
        title: 'Ledger / CTE',
        desc: 'Zweite Signatur, Freeze-Schleife und Endstatus (SoftFreeze → Settled).',
      },
    ],
  },
}

export default function SystemLegend({ locale = 'es' as Locale }) {
  const blocks = L[locale].cards

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {blocks.map((b) => (
        <div
          key={b.title}
          className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          <div className="flex items-center gap-2">
            {b.icon}
            <div className="font-semibold text-slate-900">{b.title}</div>
          </div>
          <p className="mt-2 text-sm text-slate-600">{b.desc}</p>
        </div>
      ))}
    </div>
  )
}