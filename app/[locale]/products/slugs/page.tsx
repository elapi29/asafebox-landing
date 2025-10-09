// app/[locale]/products/[slug]/page.tsx
import UnderConstruction from '../../../../components/UnderConstruction'
import type { Locale } from '../../../../i18n/dictionaries'

const LABELS: Record<string, string> = {
  'signature-pq': 'Signature PQ-ready Connect',
  'blind-reveal': 'Blockaudit · Blind-Reveal',
  'audit': 'Blockchecker · Audit',
  'mtls-pq': 'Blocksender · mTLS PQ-Ready',
  'blindreveal-gov': 'Blockcontrol · Governing',
}

export default function ProductStub({
  params,
}: {
  params: { locale: Locale; slug: string }
}) {
  const { locale, slug } = params
  const title = LABELS[slug] ?? 'Producto en preparación'
  // back a la home del mismo idioma (con slash final)
  const back = `/${locale}/`
  return <UnderConstruction title={title} backHref={back} />
}