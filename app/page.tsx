import Hero from '../components/Hero'
import Illustration from '../components/Illustration'
import Features from '../components/Features'
import TwoFlows from '../components/TwoFlows'
import SectorTabs from '../components/SectorTabs'
import Footer from '../components/Footer'
import InteropSection from '../components/InteropSection'


export default function Page() {
  return (
    <main>
      <Hero />

      {/* diagrama corto (opcional) */}
      <section className="px-6 py-12">
        <h2 className="text-center text-2xl font-bold">Cómo funciona</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-slate-600">
          Del encadenamiento inmutable a la identidad cegada, bajo transporte PQ-ready.
        </p>
        <div className="mt-8">
          <Illustration />
        </div>
      </section>

      <TwoFlows />       {/* ← tus dos flujos grandes */}
      <InteropSection />
      <Features />
      <SectorTabs />
      <Footer />
    </main>
  )
}


