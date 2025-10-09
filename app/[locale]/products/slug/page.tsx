// app/[locale]/products/[slug]/page.tsx
import type { Locale } from '../../../../i18n/dictionaries';
import UnderConstruction from '../../../../components/UnderConstruction';
import Footer from '../../../../components/Footer';

export const dynamicParams = false;

// slugs que queremos pre-generar (deben matchear los del TopBar y chips)
const SLUGS = [
  'signature-pq',
  'blind-reveal',
  'audit',
  'mtls-pq',
  'blindreveal-gov',
];

// Next export necesita saber todos los params para este segmento dinámico
export function generateStaticParams() {
  // OJO: los locales ya se generan en app/[locale]/layout.tsx
  // En este nivel solo devolvemos slug
  return SLUGS.map((slug) => ({ slug }));
}

export default function ProductUnderConstruction({
  params,
}: {
  params: { locale: Locale; slug: string };
}) {
  // Mostramos la misma pantalla “Under construction”
  return (
    <main className="px-6 py-16">
      <UnderConstruction locale={params.locale} />
      <div className="mt-12">
        <Footer locale={params.locale} />
      </div>
    </main>
  );
}