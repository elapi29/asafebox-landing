// i18n/dictionaries.ts
export type Locale = 'es' | 'en' | 'de'

type Dict = {
  meta: {
    siteName: string
    description: string
  }
  hero: {
    title: string
    subtitle: string
    emailPlaceholder: string
    cta: string
    disclaimer: string
  }
  howItWorks: {
    title: string
    subtitle: string
  }
  blocks: {
    evidenceTitle: string
    evidenceCopy: string
    pqc: string
    ledger: string
    e2e: string
    sealTitle: string
    sealCopy: string
    privacyTitle: string
    privacyCopy: string
  }
  sectors: {
    title: string
    realEstate: string
    fintech: string
    banking: string
    realEstateCardTitle: string
    realEstateCardCopy: string
    auditCardTitle: string
    auditCardCopy: string
  }
  footer: {
    rights: string
    madeWith: string
  }
}

const es: Dict = {
  meta: {
    siteName: 'aSAFEBOX® — Emprendimiento Seguro',
    description:
      'Capa de integridad digital para transacciones y contratos: evidencia inmutable, privacidad con Blind-Reveal y auditoría en minutos.',
  },
  hero: {
    title: 'aSAFEBOX® — Emprendimiento Seguro',
    subtitle:
      'Sellamos cada operación con evidencia criptográfica: lo que se firmó es lo que se ejecutó. Privacidad total con Blind-Reveal y pruebas ZK. Auditorías en minutos y preparación post-cuántica.',
    emailPlaceholder: 'tu@email.com',
    cta: 'Quiero saber más',
    disclaimer: 'Sin spam. Te enviaremos solo novedades clave.',
  },
  howItWorks: {
    title: 'Cómo funciona',
    subtitle: 'Del encadenamiento inmutable a la identidad cegada, bajo transporte PQ-ready.',
  },
  blocks: {
    evidenceTitle: 'Evidencia inmutable',
    evidenceCopy:
      'Cada paso (transacción, firma, KYC) queda sellado con un Ledger Inmutable y pruebas ZK. El encadenamiento permite detectar cualquier manipulación incluso meses o años más tarde, manteniendo auditabilidad con impacto mínimo en la operación.',
    pqc: 'Transporte PQ-ready (mTLS)',
    ledger: 'Ledger inmutable (encadenamiento)',
    e2e: 'Control extremo a extremo',
    sealTitle: 'Sello de Integridad Encadenado',
    sealCopy:
      'Un “sello” criptográfico por evento; los sellos se encadenan en un libro de evidencias.',
    privacyTitle: 'Privacidad con Blind-Reveal',
    privacyCopy:
      'Demostramos validez sin exponer datos sensibles a contrapartes ni auditores.',
  },
  sectors: {
    title: 'Soluciones por industria',
    realEstate: 'Inmobiliaria (HUGO)',
    fintech: 'Fintech',
    banking: 'Banking',
    realEstateCardTitle: 'Boleto/Escritura con QR',
    realEstateCardCopy:
      'El QR encadena el PDF (hash) a un log inmutable; cualquier alteración se detecta al instante.',
    auditCardTitle: 'Auditoría en minutos',
    auditCardCopy: 'Blind-Reveal: juez/auditor validan consistencia sin ver datos sensibles.',
  },
  footer: {
    rights: '© 2025 aSAFEBOX® · Jacob Integrity Lab',
    madeWith:
      'Hecho con Next.js + Tailwind. Cumplimos buenas prácticas de accesibilidad y SEO.',
  },
}

const en: Dict = {
  meta: {
    siteName: 'aSAFEBOX® — Secure Entrepreneurship',
    description:
      'Digital integrity layer for transactions and contracts: tamper-proof evidence, Blind-Reveal privacy, and audits in minutes.',
  },
  hero: {
    title: 'aSAFEBOX® — Secure Entrepreneurship',
    subtitle:
      'We seal every operation with cryptographic evidence: what was signed is what gets executed. Full privacy via Blind-Reveal and ZK proofs. Audits in minutes and post-quantum readiness.',
    emailPlaceholder: 'you@email.com',
    cta: 'Keep me posted',
    disclaimer: 'No spam. Only key updates.',
  },
  howItWorks: {
    title: 'How it works',
    subtitle:
      'From a tamper-proof chain to blinded identity, all under a PQ-ready transport.',
  },
  blocks: {
    evidenceTitle: 'Tamper-proof evidence',
    evidenceCopy:
      'Each step (transaction, signature, KYC) is sealed in an Immutable Ledger with ZK proofs. Chaining lets you detect any manipulation even months or years later with minimal operational impact.',
    pqc: 'PQ-ready transport (mTLS)',
    ledger: 'Immutable ledger (chaining)',
    e2e: 'End-to-end control',
    sealTitle: 'Chained Integrity Seal',
    sealCopy: 'One cryptographic “seal” per event; seals are chained into an evidence book.',
    privacyTitle: 'Privacy with Blind-Reveal',
    privacyCopy:
      'We prove validity without exposing sensitive data to counterparts or auditors.',
  },
  sectors: {
    title: 'Industry solutions',
    realEstate: 'Real Estate (HUGO)',
    fintech: 'Fintech',
    banking: 'Banking',
    realEstateCardTitle: 'Deed/Ticket with QR',
    realEstateCardCopy:
      'The QR binds the PDF (hash) to an immutable log; any alteration is instantly detected.',
    auditCardTitle: 'Audits in minutes',
    auditCardCopy:
      'Blind-Reveal: judges/auditors validate consistency without seeing sensitive data.',
  },
  footer: {
    rights: '© 2025 aSAFEBOX® · Jacob Integrity Lab',
    madeWith: 'Built with Next.js + Tailwind. Accessibility & SEO best practices.',
  },
}

const de: Dict = {
  meta: {
    siteName: 'aSAFEBOX® — Sicheres Unternehmertum',
    description:
      'Digitale Integritätsschicht für Transaktionen und Verträge: fälschungssichere Evidenz, Blind-Reveal-Privatsphäre und Audits in Minuten.',
  },
  hero: {
    title: 'aSAFEBOX® — Sicheres Unternehmertum',
    subtitle:
      'Wir versiegeln jede Operation mit kryptografischer Evidenz: Was unterschrieben wurde, wird ausgeführt. Volle Privatsphäre mit Blind-Reveal und ZK-Beweisen. Audits in Minuten, post-quantenfähig.',
    emailPlaceholder: 'deine@email.de',
    cta: 'Ich möchte informiert werden',
    disclaimer: 'Kein Spam. Nur wesentliche Neuigkeiten.',
  },
  howItWorks: {
    title: 'So funktioniert es',
    subtitle:
      'Vom unverletzlichen Kettensiegel zur geblendeten Identität – alles über einen PQ-fähigen Transport.',
  },
  blocks: {
    evidenceTitle: 'Unveränderliche Evidenz',
    evidenceCopy:
      'Jeder Schritt (Transaktion, Signatur, KYC) wird in einem Unveränderlichen Ledger mit ZK-Beweisen versiegelt. Durch Verkettung lässt sich jede Manipulation auch nach Monaten oder Jahren nachweisen – mit minimalen Betriebsunterbrechungen.',
    pqc: 'PQ-fähiger Transport (mTLS)',
    ledger: 'Unveränderliches Ledger (Verkettung)',
    e2e: 'End-to-End-Kontrolle',
    sealTitle: 'Verkettetes Integritätssiegel',
    sealCopy:
      'Ein kryptografisches „Siegel“ pro Ereignis; die Siegel werden zu einem Evidenzbuch verkettet.',
    privacyTitle: 'Privatsphäre mit Blind-Reveal',
    privacyCopy:
      'Wir belegen die Gültigkeit, ohne sensible Daten gegenüber Gegenparteien oder Prüfern offenzulegen.',
  },
  sectors: {
    title: 'Branchenspezifische Lösungen',
    realEstate: 'Immobilien (HUGO)',
    fintech: 'Fintech',
    banking: 'Banking',
    realEstateCardTitle: 'Urkunde/Ticket mit QR',
    realEstateCardCopy:
      'Der QR verknüpft das PDF (Hash) mit einem unveränderlichen Log; jede Änderung wird sofort erkannt.',
    auditCardTitle: 'Audits in Minuten',
    auditCardCopy:
      'Blind-Reveal: Richter/Prüfer validieren die Konsistenz, ohne sensible Daten zu sehen.',
  },
  footer: {
    rights: '© 2025 aSAFEBOX® · Jacob Integrity Lab',
    madeWith:
      'Erstellt mit Next.js + Tailwind. Best Practices für Barrierefreiheit und SEO.',
  },
}

export async function getDictionary(locale: Locale): Promise<Dict> {
  switch (locale) {
    case 'en':
      return en
    case 'de':
      return de
    default:
      return es
  }
}
