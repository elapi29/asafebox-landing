// app/[locale]/introduction/page.tsx
import type { Locale } from '../../../i18n/dictionaries'
import Illustration from '../../../components/Illustration'
import BlindRevealIllo from '../../../components/illos/BlindRevealIllo'
import SystemLegend from '../../../components/SystemLegend'
import GatewayLegend from '../../../components/GatewayLegend'
import Footer from '../../../components/Footer'

export default function IntroductionPage({ params }: { params: { locale: Locale } }) {
  return (
    <main className="px-6">
      {/* A. What is In aSafeBox® */}
      <section id="what-is" className="mx-auto max-w-6xl py-10">
        <h1 className="text-3xl font-bold">What is In aSafeBox®</h1>
        <p className="mt-3 text-slate-700">
          In aSafeBox® is a **trust layer** for data and transactions. It separates
          transport, content verification, audit, and human governance so every record
          is not only ordered, but **verified** and **policy-compliant**.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card
            title="Blocksender"
            body="Authenticated, PQ-ready transport (mTLS) to move events securely from A→B."
          />
          <Card
            title="Blockchecker"
            body="Content integrity: HMAC/nonce and zero-knowledge checks to reject tampering or replay."
          />
          <Card
            title="Blockgoverning & Blockauditory"
            body="Dual approvals, flags, and immutable evidence to satisfy policy and audits."
          />
        </div>
      </section>

      {/* B. How it works */}
      <section id="how-it-works" className="mx-auto max-w-6xl py-10">
        <h2 className="text-2xl font-semibold">How it works</h2>
        <p className="mt-2 text-slate-700">
          From an immutable chain of evidence to a blinded identity — all under a post-quantum-ready transport.
        </p>

        {/* Vista general (sender → ledger → blind identity → receiver) */}
        <div className="mt-8">
          <Illustration
            transportLabel="Post-Quantum-Ready Transport Security"
            sender="Sender"
            ledger="Immutable Ledger"
            blindId="Blinded Identity"
            receiver="Receiver"
            caption="Authenticated transport, tamper-proof evidence and privacy by design."
          />
        </div>

        {/* Zoom en Blind-Reveal / ZK */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4">
          <BlindRevealIllo className="h-auto w-full" />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card title="Sequence integrity" body="Blockchain ordering + timestamping you can’t rewrite." />
          <Card title="Content integrity" body="Blockchecker: the JSON you verify is the JSON that gets recorded." />
          <Card title="Human governance" body="Dual-signing & flags to enforce policies before settlement." />
        </div>
      </section>

      {/* C. For Small Businesses */}
      <section id="small-business" className="mx-auto max-w-6xl py-10">
        <h2 className="text-2xl font-semibold">For Small Businesses</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          <li>**Verify documents** with a QR in seconds (sales, invoices, PoS slips).</li>
          <li>**Onboard clients** with sealed, auditable KYC without exposing raw PII.</li>
          <li>**Simple setup**: hosted endpoints + templates; no crypto expertise required.</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={`/${locale}/under-construction/`} className="btn"> 
            Real Estate
          </a>
          <a href={`/${locale}/under-construction/`} className="btn">
            Jewelry
          </a>
          <a href={`/${locale}/under-construction/`} className="btn-secondary">
            Talk to us
          </a>
        </div>
      </section>

      {/* D. For Institutions */}
      <section id="institutions" className="mx-auto max-w-6xl py-10">
        <h2 className="text-2xl font-semibold">For Institutions</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          <li>**Audit-ready evidence** streams: immutable, chain-linked, and explainable.</li>
          <li>**Policy flags & dual approvals**: freeze paths and reversible workflows.</li>
          <li>**Privacy by design**: ZK proofs to validate claims without exposing secrets.</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={`/${locale}/under-construction/`} className="btn">
            Banking
          </a>
          <a href={`/${locale}/under-construction/`} className="btn">
            Fintech
          </a>
          <a href={`/${locale}/under-construction/`} className="btn-secondary">
            Request a briefing
          </a>
        </div>
      </section>

      {/* E. Developers */}
      <section id="developers" className="mx-auto max-w-6xl py-10">
        <h2 className="text-2xl font-semibold">Developers</h2>
        <div className="mt-3 grid gap-4 md:grid-cols-3">
          <Card title="Signature PQ-ready Connect" body="Endpoints + clients for PQ mTLS and tamper-proof signing." />
          <Card title="Blind-Reveal Connect" body="ZK-friendly flows: prove facts without revealing sensitive payloads." />
          <Card title="Audit Connect" body="Hash-linked logs and integrity seals for mass verification." />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={`/${locale}/under-construction/`} className="btn">Signature PQ-ready</a>
          <a href={`/${locale}/under-construction/`} className="btn">Blind-Reveal</a>
          <a href={`/${locale}/under-construction/`} className="btn">Audit</a>
          <a href={`/${locale}/under-construction/`} className="btn">mTLS PQ-Ready</a>
          <a href={`/${locale}/under-construction/`} className="btn">Governing</a>
        </div>
      </section>

      {/* F. White Paper */}
      <section id="white-paper" className="mx-auto max-w-6xl py-10">
        <h2 className="text-2xl font-semibold">White Paper</h2>
        <p className="mt-2 text-slate-700">
          Dive deeper into the design goals, threat models and formal guarantees behind In aSafeBox®.
        </p>
        {/* reemplazá href por el path real si ya tenés el PDF publicado */}
        <a
          href="#"
          className="mt-4 inline-block rounded-xl bg-slate-900 px-5 py-3 text-white shadow hover:bg-slate-800"
        >
          Download White Paper (PDF)
        </a>
      </section>

      {/* Diagramas / leyendas (opcional, deja valor visual) 
      <section id="diagrams" className="mx-auto max-w-6xl pb-14">
        <SystemLegend />
        <div className="mt-6">
          <GatewayLegend />
        </div>
      </section>*/}

      <Footer locale={params.locale} />
    </main>
  )
}

// —————————————————————————————————————————————————————————————
// helpers de UI (botones y cards)
// —————————————————————————————————————————————————————————————
function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="font-semibold text-slate-900">{title}</div>
      <p className="mt-2 text-sm text-slate-600">{body}</p>
    </div>
  )
}