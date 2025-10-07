// app/[locale]/industries/jewelry/page.tsx
import AnchorsRow from '../../../../components/AnchorsRow'
import FeatureChips from '../../../../components/FeatureChips'
import QrDemo from '../../../../components/QrDemo'
import type { Locale } from '../../../../i18n/dictionaries'
import { getDictionary } from '../../../../i18n/dictionaries'

import LanguageSwitcher from '../../../../components/LanguageSwitcher'
import Footer from '../../../../components/Footer'   // ⬅️ agrega esta línea


export default async function JewelryPage({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale)

  const anchors = [
    { key: 'ov', label: params.locale === 'es' ? 'Resumen' : 'Overview', href: '#overview' },
    { key: 'be', label: params.locale === 'es' ? 'Beneficios' : 'Benefits', href: '#benefits' },
    { key: 'hw', label: params.locale === 'es' ? 'Cómo funciona' : 'How it works', href: '#how' },
    { key: 'kp', label: 'KPIs', href: '#kpis' },
    { key: 'qr', label: 'QR / Verify', href: '#qr' },
  ]

  // Chips específicos de la industria (no repetimos los features globales)
  const chips =
    params.locale === 'es'
      ? ['Boleta/Certificado enlazados (POS)', 'Verificación privada (QR)', 'Evidencia lista para seguros', 'Papel / efectivo / mixto']
      : ['Receipt/certificate binding (POS)', 'Private QR verification', 'Insurer-ready evidence', 'Paper / cash / mixed']

  const J = dict.jewelry

  return (
    <main className="px-6 py-8 text-slate-900">
      {/* Anchors navegables */}
      <div className="mx-auto max-w-6xl">
        <AnchorsRow items={anchors} />
      </div>

      {/* Chips propios de Joyería */}
      <div className="mx-auto mt-6 max-w-6xl">
        <FeatureChips items={chips} compact />
      </div>

      {/* OVERVIEW */}
      <section id="overview" className="mx-auto mt-10 max-w-5xl">
        <h1 className="mb-2 text-3xl font-semibold">{J.title}</h1>
        <p className="text-lg text-slate-600">{J.subtitle}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href="#qr" className="rounded-lg bg-indigo-600 px-4 py-2 text-white">{J.ctaExample}</a>
          <a href="#how" className="rounded-lg bg-slate-100 px-4 py-2 text-slate-900">{J.ctaDemo}</a>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="mx-auto mt-10 max-w-6xl">
        <h2 className="mb-4 text-xl font-semibold">{params.locale === 'es' ? 'Beneficios' : 'Benefits'}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {J.benefits.map((b) => (
            <div key={b.title} className="rounded-xl bg-slate-50 p-4">
              <h3 className="mb-1 text-lg font-semibold">{b.title}</h3>
              <p className="text-slate-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="mx-auto mt-10 max-w-5xl">
        <h2 className="mb-3 text-xl font-semibold">{J.howToTitle}</h2>
        <ol className="list-decimal space-y-1 pl-5 text-slate-700">
          {J.howToSteps.map((s, i) => <li key={i}>{s}</li>)}
        </ol>
        <p className="mt-6 rounded-xl bg-indigo-50 p-4">{J.originBlock}</p>
      </section>

      {/* KPIs */}
      <section id="kpis" className="mx-auto mt-10 max-w-6xl">
        <h2 className="mb-4 text-xl font-semibold">KPIs</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {J.kpis.map((k) => (
            <div key={k.label} className="rounded-xl border border-slate-200 p-4">
              <div className="text-3xl font-bold">{k.value}</div>
              <div className="text-slate-600">{k.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* QR */}
      <section id="qr" className="mx-auto mt-10 max-w-5xl">
        <h2 className="mb-4 text-xl font-semibold">{J.qrLabel}</h2>
        <QrDemo value={J.qrUrl} label={J.qrLabel} />
      </section>

      {/* DIAGRAMA */}
      <section className="mx-auto mt-10 max-w-6xl">
        <figure className="mx-auto max-w-5xl">
          <svg viewBox="0 0 1080 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={J.diagramCaption}>
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
            <text x="110" y="66" textAnchor="middle" className="title">{J.diagram.mineTitle}</text>
            <text x="110" y="86" textAnchor="middle" className="note">{J.diagram.mineNote}</text>

            <rect x="230" y="46" width="180" height="70" rx="10" className="box"/>
            <text x="320" y="66" textAnchor="middle" className="title">{J.diagram.refineryTitle}</text>
            <text x="320" y="86" textAnchor="middle" className="note">{J.diagram.refineryNote}</text>

            <rect x="440" y="46" width="180" height="70" rx="10" className="box"/>
            <text x="530" y="66" textAnchor="middle" className="title">{J.diagram.manufTitle}</text>
            <text x="530" y="86" textAnchor="middle" className="note">{J.diagram.manufNote}</text>

            <rect x="650" y="46" width="180" height="70" rx="10" className="box"/>
            <text x="740" y="66" textAnchor="middle" className="title">{J.diagram.wholesaleTitle}</text>
            <text x="740" y="86" textAnchor="middle" className="note">{J.diagram.wholesaleNote}</text>

            <rect x="860" y="46" width="200" height="70" rx="10" className="box"/>
            <text x="960" y="66" textAnchor="middle" className="title">{J.diagram.posTitle}</text>
            <text x="960" y="86" textAnchor="middle" className="note">{J.diagram.posNote}</text>

            {/* verify_log pills */}
            <rect x="70"  y="150" width="120" height="30" rx="16" className="pill"/>
            <text x="130" y="170" textAnchor="middle" className="pilltxt">verify_log • 01</text>

            <rect x="280" y="150" width="120" height="30" rx="16" className="pill"/>
            <text x="340" y="170" textAnchor="middle" className="pilltxt">verify_log • 02</text>

            <rect x="490" y="150" width="120" height="30" rx="16" className="pill"/>
            <text x="550" y="170" textAnchor="middle" className="pilltxt">verify_log • 03</text>

            <rect x="700" y="150" width="120" height="30" rx="16" className="pill"/>
            <text x="760" y="170" textAnchor="middle" className="pilltxt">verify_log • 04</text>

            <rect x="910" y="150" width="140" height="30" rx="16" className="pill"/>
            <text x="980" y="170" textAnchor="middle" className="pilltxt">{J.diagram.verifyPosLabel}</text>

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
            <text x="130" y="200" textAnchor="middle" className="lock">✔ {J.diagram.lock1}</text>
            <text x="340" y="200" textAnchor="middle" className="lock">✔ {J.diagram.lock2}</text>
            <text x="550" y="200" textAnchor="middle" className="lock">✔ {J.diagram.lock3}</text>
            <text x="760" y="200" textAnchor="middle" className="lock">✔ {J.diagram.lock4}</text>
            <text x="980" y="200" textAnchor="middle" className="lock">✔ {J.diagram.lock5}</text>
          </svg>
          <figcaption className="mt-2 text-center text-slate-600">{J.diagramCaption}</figcaption>
        </figure>
      </section>

      <Footer locale={params.locale} />

    </main>
  )
}
