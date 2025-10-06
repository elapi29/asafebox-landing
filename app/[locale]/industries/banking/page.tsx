// app/[locale]/industries/banking/page.tsx
import DSRShowcase from '../../../../components/DSRShowcase'
import BankingShowcase from '../../../../components/BankingShowcase'

export const metadata = {
  title: 'Banking — aSAFEBOX®',
  description: 'Integrity, privacy and audit-readiness for financial operations.',
}

export default function BankingPage() {
  return (
    <main className="min-h-[60vh]">
      <header className="mx-auto max-w-6xl px-6 pt-10">
        <h1 className="text-3xl font-bold">Banking: integrity, privacy and audit</h1>
        <p className="mt-2 text-slate-600">
          Evidence for each step (transactions, signatures, onboarding/KYC) with PQ-ready transport.
        </p>
      </header>

      {/* Escena tipo zksync (DSR) */}
      <DSRShowcase />

      {/* Cards/galería bancaria (tus 4 conceptos resumidos) */}
      <BankingShowcase />
    </main>
  )
}


