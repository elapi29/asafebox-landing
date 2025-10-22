// components/GatewayLegend.tsx
function OkIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="12" r="10" fill="#10b981" opacity="0.12" />
      <path d="M7 12l3 3 7-7" stroke="#10b981" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function WarnIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="12" r="10" fill="#f59e0b" opacity="0.12" />
      <path d="M12 7v6m0 4h.01" stroke="#f59e0b" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
function StopIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="12" r="10" fill="#ef4444" opacity="0.12" />
      <path d="M15 9l-6 6M9 9l6 6" stroke="#ef4444" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

type Row = { icon: JSX.Element; code: string; label: string; note?: string };

export default function GatewayLegend() {
  const rows: Row[] = [
    { icon: <OkIcon className="w-5 h-5" />,   code: '204', label: 'Pass',    note: 'Proxy continúa; sin body.' },
    { icon: <WarnIcon className="w-5 h-5" />, code: '400', label: 'Bad req', note: 'Headers/JSON inválidos.' },
    { icon: <WarnIcon className="w-5 h-5" />, code: '401', label: 'Clock',   note: 'Timestamp fuera de ventana.' },
    { icon: <WarnIcon className="w-5 h-5" />, code: '403', label: 'Unknown', note: 'Cliente no permitido.' },
    { icon: <StopIcon className="w-5 h-5" />, code: '409', label: 'Token de integridad',    note: 'No coincide; freeze + log.' },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <ul className="divide-y divide-slate-100">
        {rows.map((r) => (
          <li key={r.code} className="flex items-center gap-3 py-2">
            {r.icon}
            <span className="w-12 font-mono text-sm text-slate-700">{r.code}</span>
            <span className="font-medium text-slate-900">{r.label}</span>
            {r.note && <span className="ml-auto text-sm text-slate-500">{r.note}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

