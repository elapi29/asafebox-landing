import QrDemo from './QrDemo'

type DiagramTexts = {
  mineTitle: string
  mineNote: string
  refineryTitle: string
  refineryNote: string
  manufTitle: string
  manufNote: string
  wholesaleTitle: string
  wholesaleNote: string
  posTitle: string
  posNote: string
  lock1: string
  lock2: string
  lock3: string
  lock4: string
  lock5: string
  verifyPosLabel: string // se usa para la píldora 05
}

type Props = {
  title: string
  subtitle: string
  ctaDemo: string
  ctaExample: string
  benefits: { title: string; desc: string }[]
  howToTitle: string
  howToSteps: string[]
  originBlock: string
  kpis: { value: string; label: string }[]
  qrLabel: string
  qrUrl: string
  diagramCaption: string
  diagram: DiagramTexts
  evWord?: string // ← NUEVO: 'evento' | 'event' | 'Ereignis'
}

export default function JewelrySection({
  title,
  subtitle,
  ctaDemo,
  ctaExample,
  benefits,
  howToTitle,
  howToSteps,
  originBlock,
  kpis,
  qrLabel,
  qrUrl,
  diagramCaption,
  diagram,
  evWord = 'evento',
}: Props) {
  return (
    <section id="joyeria-asafebox" className="py-12 text-slate-900">
      <div className="mx-auto max-w-5xl px-5">
        {/* Hero */}
        <h2 className="mb-2 text-3xl font-semibold">{title}</h2>
        <p className="mb-4 text-lg text-slate-600">{subtitle}</p>

        <div className="mb-7 flex flex-wrap gap-3">
          <a href="#demo" className="rounded-lg bg-indigo-600 px-4 py-2 text-white">{ctaDemo}</a>
          <a href="#qr-ejemplo" className="rounded-lg bg-slate-100 px-4 py-2 text-slate-900">{ctaExample}</a>
        </div>

        {/* Beneficios */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-xl bg-slate-50 p-4">
              <h3 className="mb-1 text-lg font-semibold">{b.title}</h3>
              <p className="text-slate-600">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Cómo se usa */}
        <div className="mt-7">
          <h3 className="mb-2 text-xl font-semibold">{howToTitle}</h3>
          <ol className="list-decimal space-y-1 pl-5 text-slate-700">
            {howToSteps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
        </div>

        {/* Complementa trazabilidad de origen */}
        <div className="mt-7 rounded-xl bg-indigo-50 p-4">{originBlock}</div>

        {/* KPIs */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {kpis.map((k) => (
            <div key={k.label} className="rounded-xl border border-slate-200 p-4">
              <div className="text-3xl font-bold">{k.value}</div>
              <div className="text-slate-600">{k.label}</div>
            </div>
          ))}
        </div>

        {/* QR ejemplo */}
        <div id="qr-ejemplo" className="mt-6">
          <QrDemo value={qrUrl} label={qrLabel} />
        </div>

        {/* Diagrama SVG (100% localizado) */}
        <figure className="mx-auto mt-8 max-w-5xl">
          <svg
            viewBox="0 0 1080 240"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={diagramCaption}
          >
            <style>
              {`.box{fill:#f8fafc;stroke:#94a3b8;stroke-width:1.2;}
                .title{font:600 14px system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;}
                .note{font:400 12px system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; fill:#475569;}
                .pill{fill:#eef2ff;stroke:#6366f1;stroke-width:1;}
                .pilltxt{font:600 12px system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; fill:#3730a3;}
                .arrow{stroke:#94a3b8; stroke-width:1.2; marker-end:url(#arrowHead);}
                .lock{font:700 14px system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; fill:#0f172a;}`}
            </style>
            <defs>
              <marker id="arrowHead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/>
              </marker>
            </defs>

            {/* Top nodes */}
            <rect x="20"  y="46" width="180" height="70" rx="10" className="box"/>
            <text x="110" y="66" textAnchor="middle" className="title">{diagram.mineTitle}</text>
            <text x="110" y="86" textAnchor="middle" className="note">{diagram.mineNote}</text>

            <rect x="230" y="46" width="180" height="70" rx="10" className="box"/>
            <text x="320" y="66" textAnchor="middle" className="title">{diagram.refineryTitle}</text>
            <text x="320" y="86" textAnchor="middle" className="note">{diagram.refineryNote}</text>

            <rect x="440" y="46" width="180" height="70" rx="10" className="box"/>
            <text x="530" y="66" textAnchor="middle" className="title">{diagram.manufTitle}</text>
            <text x="530" y="86" textAnchor="middle" className="note">{diagram.manufNote}</text>

            <rect x="650" y="46" width="180" height="70" rx="10" className="box"/>
            <text x="740" y="66" textAnchor="middle" className="title">{diagram.wholesaleTitle}</text>
            <text x="740" y="86" textAnchor="middle" className="note">{diagram.wholesaleNote}</text>

            <rect x="860" y="46" width="200" height="70" rx="10" className="box"/>
            <text x="960" y="66" textAnchor="middle" className="title">{diagram.posTitle}</text>
            <text x="960" y="86" textAnchor="middle" className="note">{diagram.posNote}</text>

            {/* Evento pills */}
            <rect x="70"  y="150" width="120" height="30" rx="16" className="pill"/>
            <text x="130" y="170" textAnchor="middle" className="pilltxt">{`${evWord} • 01`}</text>

            <rect x="280" y="150" width="120" height="30" rx="16" className="pill"/>
            <text x="340" y="170" textAnchor="middle" className="pilltxt">{`${evWord} • 02`}</text>

            <rect x="490" y="150" width="120" height="30" rx="16" className="pill"/>
            <text x="550" y="170" textAnchor="middle" className="pilltxt">{`${evWord} • 03`}</text>

            <rect x="700" y="150" width="120" height="30" rx="16" className="pill"/>
            <text x="760" y="170" textAnchor="middle" className="pilltxt">{`${evWord} • 04`}</text>

            <rect x="910" y="150" width="140" height="30" rx="16" className="pill"/>
            <text x="980" y="170" textAnchor="middle" className="pilltxt">{diagram.verifyPosLabel}</text>

            {/* Arrows */}
            <line x1="200" y1="81" x2="230" y2="81" className="arrow"/>
            <line x1="410" y1="81" x2="440" y2="81" className="arrow"/>
            <line x1="620" y1="81" x2="650" y2="81" className="arrow"/>
            <line x1="830" y1="81" x2="860" y2="81" className="arrow"/>

            <line x1="190" y1="165" x2="280" y2="165" className="arrow"/>
            <line x1="400" y1="165" x2="490" y2="165" className="arrow"/>
            <line x1="610" y1="165" x2="700" y2="165" className="arrow"/>
            <line x1="820" y1="165" x2="910" y2="165" className="arrow"/>

            {/* Locks/labels */}
            <text x="130" y="200" textAnchor="middle" className="lock">✔ {diagram.lock1}</text>
            <text x="340" y="200" textAnchor="middle" className="lock">✔ {diagram.lock2}</text>
            <text x="550" y="200" textAnchor="middle" className="lock">✔ {diagram.lock3}</text>
            <text x="760" y="200" textAnchor="middle" className="lock">✔ {diagram.lock4}</text>
            <text x="980" y="200" textAnchor="middle" className="lock">✔ {diagram.lock5}</text>
          </svg>
          <figcaption className="mt-2 text-center text-slate-600">{diagramCaption}</figcaption>
        </figure>

        <div className="mt-6">
          <a href="#demo" className="rounded-lg bg-indigo-600 px-4 py-2 text-white">{ctaDemo}</a>
        </div>
      </div>
    </section>
  )
}
