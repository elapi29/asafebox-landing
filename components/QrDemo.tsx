// components/QrDemo.tsx
'use client';

import { useEffect, useState } from 'react';
import { withBase } from './lib/withBase';

type Props = { value: string; label: string };

function toAbsolute(val: string) {
  if (/^https?:\/\//i.test(val)) return val;              // ya es absoluta
  try {
    const path = withBase(val);                           // añade /asafebox-landing si corresponde
    return `${window.location.origin}${path}`;
  } catch {
    return val; // fallback
  }
}

export default function QrDemo({ value, label }: Props) {
  const [abs, setAbs] = useState(value);

  useEffect(() => { setAbs(toAbsolute(value)); }, [value]);

  const url = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(abs)}`;

  return (
    <div className="flex items-center gap-4 rounded-xl border border-dashed border-slate-300 p-4">
      <img src={url} alt={label} width={220} height={220} className="rounded-lg" />
      <div className="min-w-0">
        <strong className="block">{label}</strong>
        <a href={abs} className="mt-1 block break-all text-slate-600 underline" target="_blank" rel="noreferrer">
          {abs}
        </a>
        <div className="mt-2 text-xs text-slate-500">Escaneá con la cámara del teléfono.</div>
      </div>
    </div>
  );
}

