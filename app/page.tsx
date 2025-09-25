import Hero from '../components/Hero'
import Illustration from '../components/Illustration'
import Features from '../components/Features'
import EvidenceImmutable from '../components/EvidenceImmutable'      // ⬅️ nuevo
import PrivacyBlindReveal from '../components/PrivacyBlindReveal'    // ⬅️ nuevo
import SectorTabs from '../components/SectorTabs'
import InteropSection from '../components/InteropSection'
import Footer from '../components/Footer'

export default function Page() {
  return (
    <main>
      <Hero />

      {/* Mantener tu título y subtítulo */}
      <section className="px-6 py-12">
        <h2 className="text-center text-2xl font-bold">Cómo funciona</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-slate-600">
          Del encadenamiento inmutable a la identidad cegada, bajo transporte PQ-ready.
        </p>
        <div className="mt-8">
          <Illustration />
        </div>
      </section>

      {/* Bloque 1: Evidencia inmutable (texto izq, ledger der) */}
      <EvidenceImmutable />

      {/* Bloque 2: Privacidad con Blind-Reveal (texto izq, imagen verde der) */}
      <PrivacyBlindReveal />

      <Features />
      <SectorTabs />
      <InteropSection />
      <Footer />
    </main>
  )
}


