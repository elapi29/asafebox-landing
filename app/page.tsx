import Hero from '../components/Hero'
import Illustration from '../components/Illustration'
import Features from '../components/Features'
import SectorTabs from '../components/SectorTabs'
import Footer from '../components/Footer'

export default function Page() {
  return (
    <main>
      <Hero />

      <section className="px-6 py-12">
        <h2 className="text-center text-2xl font-bold">Cómo funciona</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-slate-600">
          Del Hash/Commit inicial al Blind-Reveal, todo queda probado y listo para auditoría.
        </p>
        <div className="mt-8">
          <Illustration />
        </div>
      </section>

      <Features />

      {/* 👇 nueva sección con solapas */}
      <SectorTabs />

      <Footer />
    </main>
  )
}


