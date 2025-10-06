// components/GatewayLegend.tsx
import { ShieldCheck, BracketsX, ClockAlert, HandStop, HashX, SnowLock, Ledger } from './icons/GatewayIcons'

type Item = { icon: (p:{className?:string})=>JSX.Element; label: string; tone: 'ok'|'warn'|'err'|'brand'|'muted' }

const toneToClass: Record<Item['tone'], string> = {
  ok: 'text-green-600',
  warn: 'text-amber-500',
  err: 'text-red-500',
  brand: 'text-brand-500',
  muted: 'text-slate-500'
}

export default function GatewayLegend() {
  const items: Item[] = [
    { icon: ShieldCheck, label: '204 Pass', tone: 'ok' },
    { icon: BracketsX,  label: '400 Bad Request', tone: 'warn' },
    { icon: ClockAlert, label: '401 Unauthorized (timestamp)', tone: 'warn' },
    { icon: HandStop,   label: '403 Forbidden (client)', tone: 'err' },
    { icon: HashX,      label: '409 Conflict (HMAC)', tone: 'err' },
    { icon: SnowLock,   label: 'Freeze + incident', tone: 'brand' },
    { icon: Ledger,     label: 'session.log firmado', tone: 'muted' },
  ]

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ icon:Icon, label, tone }) => (
        <div key={label} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
          <Icon className={`h-6 w-6 ${toneToClass[tone]}`} />
          <span className="text-sm font-medium text-slate-900">{label}</span>
        </div>
      ))}
    </div>
  )
}