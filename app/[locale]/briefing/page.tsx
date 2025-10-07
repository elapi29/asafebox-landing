// app/[locale]/briefing/page.tsx
import type { Locale } from '../../../i18n/dictionaries'
import GatewayLegend from '../../../components/GatewayLegend'
import SystemLegend from '../../../components/SystemLegend'
import LanguageSwitcher from '../../../components/LanguageSwitcher'

export const metadata = {
  title: 'Briefing • Gateway & System — aSAFEBOX®',
  robots: { index: false, follow: false },
}

export default function BriefingPage({ params }: { params: { locale: Locale } }) {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-6 py-6 print:px-0">
        <div className="print:hidden">
          <LanguageSwitcher locale={params.locale} />
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Briefing — Gateway-Verify & System</h1>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); if (typeof window !== 'undefined') window.print() }}
              className="rounded-full border border-slate-300 px-4 py-1.5 text-sm font-semibold hover:bg-slate-50"
            >
              Print / Save as PDF
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="mb-3 text-xl font-bold">Gateway-Verify — códigos y acciones</h2>
          <p className="mb-4 text-slate-600">Semántica de respuestas y efectos (freeze / log).</p>
          <GatewayLegend />
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold">Lógica del sistema (pasillo)</h2>
          <p className="mb-4 text-slate-600">Bloques y responsabilidades.</p>
          <SystemLegend />
        </section>
      </div>
      <style jsx global>{`
        @media print {
          .print\\:hidden { display: none !important; }
          body { background: #fff; }
          main { padding: 0; }
        }
      `}</style>
    </main>
  )
}