// components/SectorTabs.tsx
"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

type Card = {
  icon?: string; // ruta a /public/illustrations o emoji fallback
  title: string;
  subtitle: string;
  href?: string;
};

const TabButton = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className={[
      "px-4 py-2 rounded-full text-sm font-medium transition",
      active
        ? "bg-slate-900 text-white shadow-sm"
        : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50",
    ].join(" ")}
  >
    {children}
  </button>
);

function CardItem({ card }: { card: Card }) {
  const hasIcon = Boolean(card.icon);
  return (
    <a
      href={card.href || "#"}
      className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition"
    >
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 overflow-hidden">
          {hasIcon ? (
            // usa img normal para export estático
            <img src={card.icon} alt="" className="h-8 w-8 object-contain" />
          ) : (
            <span aria-hidden>🔒</span>
          )}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold text-slate-900">
              {card.title}
            </h3>
            <ArrowRight
              size={18}
              className="text-slate-400 group-hover:translate-x-0.5 transition"
              aria-hidden
            />
          </div>
          <p className="mt-1 text-sm text-slate-600">{card.subtitle}</p>
        </div>
      </div>
    </a>
  );
}

export default function SectorTabs() {
  const base = (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/illustrations";
  const [tab, setTab] = useState<"real" | "fin" | "bank">("real");

  const inmobiliaria: Card[] = [
    {
      icon: `${base}/metadata.png`, // si aún no la tenés, podés cambiarla o dejar vacío
      title: "Boleto/Escritura con QR",
      subtitle:
        "El QR encadena el PDF escaneado (hash) a un log inmutable; cualquier alteración se detecta al instante.",
      href: "#",
    },
    {
      icon: `${base}/blind-reveal.png`,
      title: "Auditoría en minutos",
      subtitle:
        "Blind-Reveal para verificar consistencia sin exponer datos: juez o auditor validan con el QR.",
      href: "#",
    },
  ];

  const fintech: Card[] = [
    {
      icon: `${base}/banking-integrity-seal.png`,
      title: "Sello de integridad",
      subtitle:
        "Cada campo clave sella su ‘huella’; cualquier cambio dispara mismatch y alerta antifraude.",
      href: "#",
    },
    {
      icon: `${base}/metadata.png`,
      title: "Cumplimiento automático",
      subtitle:
        "Bitácora HMAC inmutable: evidencia lista para reguladores (CNV, BCRA, PCI-DSS, UIF).",
      href: "#",
    },
  ];

  const banking: Card[] = [
    {
      icon: `${base}/l2-anchoring.png`,
      title: "Verify Log → L2",
      subtitle:
        "Append-only log con pruebas de inclusión/consistencia; anclaje económico en L2.",
      href: "#",
    },
    {
      icon: `${base}/blind-reveal.png`,
      title: "Privacidad (ZK)",
      subtitle:
        "Validez sin revelar datos de clientes; latencia operativa imperceptible.",
      href: "#",
    },
  ];

  return (
    <section className="px-6 py-16 mx-auto max-w-6xl">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h2 className="text-2xl font-bold">Soluciones por industria</h2>
        <div className="flex gap-2">
          <TabButton active={tab === "real"} onClick={() => setTab("real")}>
            Inmobiliaria (HUGO)
          </TabButton>
          <TabButton active={tab === "fin"} onClick={() => setTab("fin")}>
            Fintech
          </TabButton>
          <TabButton active={tab === "bank"} onClick={() => setTab("bank")}>
            Banking
          </TabButton>
        </div>
      </div>

      {/* Cards */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {(tab === "real" ? inmobiliaria : tab === "fin" ? fintech : banking).map(
          (c) => (
            <CardItem key={c.title} card={c} />
          )
        )}
      </div>

      {/* Texto “¿Por qué este sistema es seguro y confidencial?” */}
      <div className="mt-14 rounded-2xl border border-slate-200 p-6 bg-white">
        <h3 className="text-xl font-semibold">
          ¿Por qué este sistema es seguro y confidencial?
        </h3>
        <ul className="mt-3 space-y-2 text-slate-700 text-sm leading-relaxed">
          <li>
            <strong>Blindaje con pruebas matemáticas:</strong> usamos commit-reveal
            y sello de integridad con clave (tipo HMAC) para impedir manipulación
            de monto, cuenta, identidad u orden incluso ante atacantes con acceso
            parcial al flujo. :contentReference[oaicite:0]{index=0}
          </li>
          <li>
            <strong>Privacidad total:</strong> con Blind-Reveal y ZK, cada parte
            prueba validez sin exponer el dato a contrapartes ni auditores
            externos; es como sellar una jugada y mostrarla después. :contentReference[oaicite:1]{index=1}
          </li>
          <li>
            <strong>Evidencia inmutable:</strong> cada transacción/firmado/KYC/pago
            queda en un log inmutable y auditable; cualquier intento de
            manipulación se detecta, incluso meses o años después. :contentReference[oaicite:2]{index=2}
          </li>
          <li>
            <strong>Auditoría instantánea:</strong> verificamos millones de eventos
            en minutos cumpliendo UIF, BCRA, CNV, PCI-DSS y normas
            internacionales. 
          </li>
          <li>
            <strong>Puente papel↔digital:</strong> en inmobiliaria, el QR en el
            boleto/escritura encadena la copia física al hash del PDF master; el
            juez valida en segundos. :contentReference[oaicite:4]{index=4}
          </li>
        </ul>
      </div>
    </section>
  );
}
