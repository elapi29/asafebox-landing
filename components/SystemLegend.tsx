// components/SystemLegend.tsx
import { CloudArrows, ShieldNode, HardwareKey, BlocksChain, Replay, ZKBadge, ZKBadgeX } from './icons/SystemIcons'

const Row = ({ Icon, title, desc, tone = 'text-slate-700' }:{
  Icon: (p:{className?:string})=>JSX.Element; title:string; desc:string; tone?:string
}) => (
  <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
    <Icon className={`h-6 w-6 ${tone}`} />
    <div>
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <p className="text-sm text-slate-600">{desc}</p>
    </div>
  </div>
)

export default function SystemLegend() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <Row Icon={CloudArrows} title="API-Gateway" desc="Rate-limit/JWT; pasa cuerpo crudo." />
      <Row Icon={ShieldNode}  title="Side-car Verify" desc="HMAC/ZK/timestamp/nonce → 204 o 4xx + freeze." tone="text-brand-500" />
      <Row Icon={HardwareKey} title="Signing-Proxy + HSM" desc="Firma custodial sólo si Verify aprueba." />
      <Row Icon={BlocksChain} title="Ledger / CTE" desc="Segunda firma, freeze loop y liquidación." />
      <Row Icon={ZKBadge}     title="ZK Proof OK" desc="Validez demostrada sin exponer datos." />
      <Row Icon={ZKBadgeX}    title="ZK Proof FAIL" desc="Rechazo controlado; no contamina backend." />
      <Row Icon={Replay}      title="Anti-replay" desc="Nonce/ventana temporal evitan duplicados." />
    </div>
  )
}