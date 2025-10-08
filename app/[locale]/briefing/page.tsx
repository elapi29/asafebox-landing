// app/[locale]/briefing/page.tsx
import type { Locale } from '../../../i18n/dictionaries'
import GatewayLegend from '../../../components/GatewayLegend'
import SystemLegend from '../../../components/SystemLegend'
import LanguageSwitcher from '../../../components/LanguageSwitcher'
import PrintButton from '../../../components/PrintButton'

export const metadata = {
  title: 'Briefing • Gateway & System — In aSAFEBOX®',
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
            <PrintButton />
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
    </main>
  )
}