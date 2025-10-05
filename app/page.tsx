// app/page.tsx
import TopBar from '@/components/TopBar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import EmailCapture from '@/components/EmailCapture';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <TopBar />
      <main className="mx-auto max-w-6xl px-4">
        {/* Hero principal */}
        <section className="py-10">
          <Hero />
        </section>

        {/* Bloque de features */}
        <section id="features" className="py-16">
          <Features />
        </section>

        {/* Captura de email / CTA */}
        <section id="cta" className="py-16">
          <EmailCapture />
        </section>
      </main>

      <Footer />
    </>
  );
}