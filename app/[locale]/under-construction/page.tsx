// app/[locale]/under-construction/page.tsx
import { Locale } from '../../../i18n/dictionaries'
import UnderConstruction from '../../../components/UnderConstruction'

export const metadata = {
  title: 'Under construction',
}

export default function Page({ params }: { params: { locale: Locale } }) {
  return (
    <main className="px-6">
      <UnderConstruction locale={params.locale} />
    </main>
  )
}