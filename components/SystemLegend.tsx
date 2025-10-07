// components/SystemLegend.tsx
import { BoxIcon, HsmIcon, LedgerIcon } from './SystemIcons';

type Block = { icon: JSX.Element; title: string; desc: string };

export default function SystemLegend() {
  const blocks: Block[] = [
    {
      icon: <BoxIcon className="w-5 h-5" />,
      title: 'Gateway-Verify',
      desc: 'Portero digital: HMAC/ZK, timestamp y nonce. 4xx + freeze si falla.',
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
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {blocks.map((b) => (
        <div key={b.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2">
            {b.icon}
            <div className="font-semibold text-slate-900">{b.title}</div>
          </div>
          <p className="mt-2 text-sm text-slate-600">{b.desc}</p>
        </div>
      ))}
    </div>
  );
}
