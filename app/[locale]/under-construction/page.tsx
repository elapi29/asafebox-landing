// app/[locale]/under-construction/page.tsx
import type { Locale } from '../../../i18n/dictionaries';
import UnderConstruction from '../../../components/UnderConstruction';
import Footer from '../../../components/Footer';

export default function Page({ params }: { params: { locale: Locale } }) {
  return (
    <main>
      <UnderConstruction locale={params.locale} />
      <Footer locale={params.locale} />
    </main>
  );
}