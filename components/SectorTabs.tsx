"use client";

import { useState } from "react";

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

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      className="text-slate-400 group-hover:translate-x-0.5 transition"
    >
      <path
        d="M5 12h12m0 0l-4-4m4 4l-4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
            <ArrowIcon />
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
      icon: `${base}/metadata.png`,
      title: "Boleto/Escritura con QR",
      subtitle:
        "El QR encadena el PDF escaneado (hash) a un log inmutable; cualquier alteración se detecta al instante.",
    },
    {
      icon: `${base}/blind-reveal.png`,
      title: "Auditoría en minutos",
      subtitle:
        "Blind-Reveal para verificar consistencia sin exponer datos: juez o auditor validan con el QR.",
    },
  ];

  const fintech: Card[] = [
    {
      icon: `${base}/banking-integrity-seal.png`,
      title: "Sello de integridad",
      subtitle:
        "Cada campo clave sella su ‘huella’; cualquier cambio dispara mismatch y alerta antifraude.",
    },
    {
      icon: `${base}/metadata.png`,
      title: "Cumplimiento automático",
      subtitle:
        "Bitácora inmutable: evidencia lista para reguladores (CNV, BCRA, PCI-DSS, UIF).",
    },
  ];

  const banking: Card[] = [
    {
      icon: `${base}/l2-anchoring.png`,
      title: "Verify Log → L2",
      subtitle:
        "Append-only log con pruebas de inclusión/consistencia; anclaje económico en L2.",
    },
    {
      icon: `${base}/blind-reveal.png`,
      title: "Privacidad (ZK)",
      subtitle:
        "Validez sin revelar datos de clientes; latencia operativa imperceptible.",
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

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {(tab === "real" ? inmobiliaria : tab === "fin" ? fintech : banking).map(
          (c) => (
            <CardItem key={c.title} card={c} />
          )
        )}
      </div>

      <div className="mt-14 rounded-2xl border border-slate-200 p-6 bg-white">
        <h3 className="text-xl font-semibold">
          ¿Por qué este sistema es seguro y confidencial?
        </h3>
        <ul className="mt-3 space-y-2 text-slate-700 text-sm leading-relaxed">
          <li>
            <strong>Blindaje con pruebas matemáticas:</strong> commit-reveal y
            sello de integridad con clave impiden manipulación de monto, cuenta,
            identidad u orden.
          </li>
          <li>
            <strong>Privacidad total:</strong> Blind-Reveal y ZK permiten probar
            validez sin exponer el dato a contrapartes ni auditores externos.
          </li>
          <li>
            <strong>Evidencia inmutable:</strong> cada transacción/firmado/KYC/pago
            queda en un log auditable; cualquier manipulación se detecta.
          </li>
          <li>
            <strong>Auditoría instantánea:</strong> millones de eventos en minutos
            cumpliendo UIF, BCRA, CNV, PCI-DSS.
          </li>
          <li>
            <strong>Puente papel↔digital:</strong> en inmobiliaria, el QR encadena
            el PDF físico al hash del master; validación en segundos.
          </li>
        </ul>
      </div>
    </section>
  );
}

