// app/[locale]/verify/demo/page.tsx
'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';

type Locale = 'es' | 'en' | 'de';

function urlSafe(b: ArrayBuffer | Uint8Array) {
  const bytes = b instanceof Uint8Array ? b : new Uint8Array(b);
  let str = '';
  for (let i = 0; i < bytes.byteLength; i++) str += String.fromCharCode(bytes[i]);
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}
function fromUrlSafe(s: string) {
  s = s.replace(/-/g, '+').replace(/_/g, '/');
  while (s.length % 4) s += '=';
  const bin = atob(s);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

async function sha256File(file: File): Promise<string> {
  const ab = await file.arrayBuffer();
  const d = await crypto.subtle.digest('SHA-256', ab);
  return [...new Uint8Array(d)].map(x => x.toString(16).padStart(2, '0')).join('');
}

async function deriveKey(password: string, salt: Uint8Array) {
  const enc = new TextEncoder();
  const baseKey = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveKey']);
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: 120_000, hash: 'SHA-256' },
    baseKey,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

async function encryptWithPassword(password: string, plaintext: string) {
  const enc = new TextEncoder();
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const key = await deriveKey(password, salt);
  const ct = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, enc.encode(plaintext));
  return {
    iv: urlSafe(iv),
    salt: urlSafe(salt),
    ct: urlSafe(ct),
  };
}

async function decryptWithPassword(password: string, payload: { iv: string; salt: string; ct: string }) {
  const dec = new TextDecoder();
  const iv = fromUrlSafe(payload.iv);
  const salt = fromUrlSafe(payload.salt);
  const key = await deriveKey(password, salt);
  const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, fromUrlSafe(payload.ct));
  return dec.decode(pt);
}

type EventEnvelope = {
  v: 1;
  ts: string;            // ISO timestamp
  fileHash: string;      // SHA-256 hex
  senderAlias: string;   // visible alias
  recipient: string;     // email/teléfono (texto libre)
  reveal?: { iv: string; salt: string; ct: string }; // secreto cifrado (opcional)
};

function makeVerifyUrl(baseHref: string, e: EventEnvelope) {
  // Todo via fragment (#p=...) para que no quede en logs
  const payload = urlSafe(new TextEncoder().encode(JSON.stringify(e)));
  return `${baseHref}#p=${payload}`;
}

function parsePayloadFromHash(hash: string): EventEnvelope | null {
  const m = hash.match(/[#&]p=([^&]+)/);
  if (!m) return null;
  try {
    const raw = fromUrlSafe(m[1]);
    const json = new TextDecoder().decode(raw);
    return JSON.parse(json);
  } catch {
    return null;
  }
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function DemoPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const home = `/${locale}/`;
  const verifyBase = `/${locale}/verify/demo/`;

  // UI state (CREAR)
  const [file, setFile] = useState<File | null>(null);
  const [fileHash, setFileHash] = useState<string>('');
  const [senderAlias, setSenderAlias] = useState('');
  const [recipient, setRecipient] = useState('');
  const [secret, setSecret] = useState('Identidad legal del emisor');
  const [password, setPassword] = useState('');
  const [link, setLink] = useState('');
  const [ts, setTs] = useState<string>('');

  // UI state (VER)
  const [payload, setPayload] = useState<EventEnvelope | null>(null);
  const [revealPass, setRevealPass] = useState('');
  const [revealed, setRevealed] = useState<string>('');
  const [revealError, setRevealError] = useState<string>('');

  // Si entra con #p=..., auto-parsear
  useEffect(() => {
    const p = parsePayloadFromHash(window.location.hash);
    if (p) setPayload(p);
  }, []);

  // hash del archivo
  useEffect(() => {
    let canceled = false;
    if (!file) { setFileHash(''); return; }
    sha256File(file).then(h => { if (!canceled) setFileHash(h); });
    return () => { canceled = true; };
  }, [file]);

  const canMake = useMemo(() => fileHash && senderAlias && recipient, [fileHash, senderAlias, recipient]);

  async function onCreateLink() {
    const now = new Date().toISOString();
    setTs(now);

    let reveal: EventEnvelope['reveal'] | undefined = undefined;
    if (password && secret) {
      reveal = await encryptWithPassword(password, secret);
    }
    const env: EventEnvelope = {
      v: 1,
      ts: now,
      fileHash,
      senderAlias,
      recipient,
      reveal,
    };
    const href = makeVerifyUrl(verifyBase, env);
    setLink(href);
    // para la pestaña "verificar" local
    setPayload(env);
    window.history.replaceState(null, '', href);
  }

  async function onReveal() {
    setRevealError('');
    setRevealed('');
    if (!payload?.reveal) { setRevealError('El evento no tiene datos protegidos.'); return; }
    try {
      const msg = await decryptWithPassword(revealPass, payload.reveal);
      setRevealed(msg);
    } catch (e) {
      setRevealError('Password inválido.');
    }
  }

  function shareLink() {
    if (!link) return;
    const msg = `Evento de venta — Verificación: ${location.origin}${link}`;
    if ((navigator as any).share) {
      (navigator as any).share({ title: 'Evento de venta', text: 'Te comparto el comprobante', url: link }).catch(()=>{});
    } else {
      // fallback: mailto
      const subject = encodeURIComponent('Evento de venta — verificación');
      const body = encodeURIComponent(msg);
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    }
  }

  return (
    <main className="px-6 py-10 space-y-8">
      {/* CREAR */}
      <Section title="Crear evento">
        <div className="grid gap-4">
          <label className="block">
            <span className="text-sm text-slate-700">Archivo (se calcula hash SHA-256)</span>
            <input type="file" className="mt-1 block w-full" onChange={e => setFile(e.target.files?.[0] || null)} />
          </label>

          {fileHash && (
            <div className="rounded-lg bg-slate-50 p-3 text-xs font-mono break-all text-slate-700">
              SHA-256: {fileHash}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm text-slate-700">Tu alias visible</span>
              <input value={senderAlias} onChange={e=>setSenderAlias(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Joyas Martín · Sucursal 1" />
            </label>
            <label className="block">
              <span className="text-sm text-slate-700">Destinatario (tel/email)</span>
              <input value={recipient} onChange={e=>setRecipient(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" placeholder="+54 9 11 ... / cliente@email.com" />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm text-slate-700">Dato protegido (opcional)</span>
              <input value={secret} onChange={e=>setSecret(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Identidad legal del emisor" />
            </label>
            <label className="block">
              <span className="text-sm text-slate-700">Password para revelar (opcional)</span>
              <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" placeholder="••••••••" />
            </label>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              className="rounded-xl bg-slate-900 px-5 py-3 text-white shadow hover:bg-slate-800 disabled:opacity-50"
              onClick={onCreateLink}
              disabled={!canMake}
            >
              Generar link de verificación
            </button>
            {link && (
              <>
                <button className="rounded-xl border px-5 py-3 hover:bg-slate-50" onClick={() => { navigator.clipboard.writeText(location.origin + link); }}>
                  Copiar link
                </button>
                <button className="rounded-xl border px-5 py-3 hover:bg-slate-50" onClick={shareLink}>
                  Compartir / auto-enviarme
                </button>
              </>
            )}
          </div>

          {ts && (
            <p className="text-sm text-slate-600">
              Generado: <span className="font-mono">{ts}</span>
            </p>
          )}

          {link && (
            <div className="rounded-lg bg-slate-50 p-3 text-sm">
              Link: <a className="text-slate-900 underline" href={link}>{link}</a>
            </div>
          )}
        </div>
      </Section>

      {/* VERIFICAR */}
      <Section title="Verificar / Revelar">
        {!payload ? (
          <p className="text-slate-600">Abrí un link con <code className="font-mono">#p=…</code> o generá uno arriba.</p>
        ) : (
          <div className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg border p-3">
                <div className="text-sm text-slate-500">Archivo (SHA-256)</div>
                <div className="mt-1 font-mono text-sm break-all">{payload.fileHash}</div>
              </div>
              <div className="rounded-lg border p-3">
                <div className="text-sm text-slate-500">Fecha / hora</div>
                <div className="mt-1 text-sm">{new Date(payload.ts).toLocaleString()}</div>
              </div>
              <div className="rounded-lg border p-3">
                <div className="text-sm text-slate-500">Emitido por</div>
                <div className="mt-1 text-sm">{payload.senderAlias}</div>
              </div>
              <div className="rounded-lg border p-3">
                <div className="text-sm text-slate-500">Destinatario</div>
                <div className="mt-1 text-sm">{payload.recipient}</div>
              </div>
            </div>

            <div className="rounded-lg border p-3">
              <div className="text-sm text-slate-500">Dato protegido (opcional)</div>
              {payload.reveal ? (
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <input
                    type="password"
                    placeholder="Password para revelar"
                    value={revealPass}
                    onChange={e=>setRevealPass(e.target.value)}
                    className="w-full max-w-xs rounded-md border px-3 py-2"
                  />
                  <button onClick={onReveal} className="rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">
                    Revelar
                  </button>
                  {revealed && <span className="text-slate-900">🔓 {revealed}</span>}
                  {revealError && <span className="text-red-600">{revealError}</span>}
                </div>
              ) : (
                <div className="mt-1 text-sm text-slate-600">Este evento no incluye dato protegido.</div>
              )}
            </div>

            <div className="flex gap-3">
              <Link href={home} prefetch={false} className="rounded-md border px-4 py-2 hover:bg-slate-50">
                Volver al inicio
              </Link>
            </div>
          </div>
        )}
      </Section>
    </main>
  );
}
