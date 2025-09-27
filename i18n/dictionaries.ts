// i18n/dictionaries.ts
export type Locale = 'es' | 'en' | 'de'

export type Dict = {
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
  illustration: {
    transport: string
    sender: string
    ledger: string
    blindId: string
    receiver: string
    caption: string
  }
  evidence: {
    title: string
    body: string
    bullets: string[]
    sealTitle: string
    sealBody: string
  }
  privacy: {
    title: string
    body: string
    cta: string
  }
  features: {
    immutableEvidence: string
    privacyBR: string
    auditReady: string
    pqcReady: string
  }
  sectors: {
    title: string
    realEstate: string
    fintech: string
    banking: string
    realEstateCardTitle: string
    realEstateCardBody: string
    auditMinutesTitle: string
    auditMinutesBody: string
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
    subtitle:
      'Del encadenamiento inmutable a la identidad cegada, bajo transporte PQ-ready.',
  },
  illustration: {
    transport: 'Capa de Seguridad de Transporte Post-Quantum-Ready',
    sender: 'Emisor',
    ledger: 'Ledger Inmutable',
    blindId: 'Identidad Cegada',
    receiver: 'Receptor',
    caption:
      'Transporte autenticado (mTLS PQ-ready), evidencia inmutable y privacidad por diseño.',
  },
  evidence: {
    title: 'Evidencia inmutable',
    body:
      'Cada paso (transacción, firma, KYC) queda sellado con un Ledger Inmutable y pruebas ZK. El encadenamiento permite detectar cualquier manipulación incluso meses o años más tarde, manteniendo auditabilidad con impacto mínimo en la operación.',
    bullets: ['Transporte PQ-ready (mTLS)', 'Ledger inmutable (encadenamiento)', 'Control extremo a extremo'],
    sealTitle: 'Sello de Integridad Encadenado',
    sealBody:
      'Un “sello” criptográfico por evento; los sellos se encadenan en un libro de evidencias.',
  },
  privacy: {
    title: 'Privacidad con Blind-Reveal',
    body:
      'Demostramos validez sin exponer datos sensibles a contrapartes ni auditores. Las partes verifican la consistencia de la operación con pruebas criptográficas, preservando la identidad del cliente y minimizando supuestos de confianza.',
    cta: 'Learn how it works',
  },
  features: {
    immutableEvidence: 'Evidencia inmutable',
    privacyBR: 'Privacidad con Blind-Reveal',
    auditReady: 'Listo para auditorías',
    pqcReady: 'PQC-ready',
  },
  sectors: {
    title: 'Soluciones por industria',
    realEstate: 'Inmobiliaria (HUGO)',
    fintech: 'Fintech',
    banking: 'Banking',
    realEstateCardTitle: 'Boleto/Escritura con QR',
    realEstateCardBody:
      'El QR encadena el PDF (hash) a un log inmutable; cualquier alteración se detecta al instante.',
    auditMinutesTitle: 'Auditoría en minutos',
    auditMinutesBody:
      'Blind-Reveal: juez/auditor validan consistencia sin ver datos sensibles.',
  },
  footer: {
    rights: '© 2025 aSAFEBOX® · Jacob Integrity Lab',
    madeWith:
      'Hecho con Next.js + Tailwind. Cumplimos buenas prácticas de accesibilidad y SEO.',
  },
}

const en: Dict = {
  meta: {
    siteName: 'aSAFEBOX® — Secure Ventures',
    description:
      'Digital integrity layer for transactions and contracts: tamper-proof evidence, Blind-Reveal privacy and audits in minutes.',
  },
  hero: {
    title: 'aSAFEBOX® — Secure Ventures',
    subtitle:
      'We seal every operation with cryptographic evidence: what was signed is exactly what gets executed. Full privacy with Blind-Reveal and ZK proofs. Audits in minutes, post-quantum ready.',
    emailPlaceholder: 'you@example.com',
    cta: 'Keep me posted',
    disclaimer: 'No spam. Only key updates.',
  },
  howItWorks: {
    title: 'How it works',
    subtitle:
      'From an immutable chain to a blinded identity, all under a PQ-ready transport.',
  },
  illustration: {
    transport: 'Post-Quantum-Ready Transport Security',
    sender: 'Sender',
    ledger: 'Immutable Ledger',
    blindId: 'Blinded Identity',
    receiver: 'Receiver',
    caption:
      'Authenticated transport (PQ mTLS), tamper-proof evidence and privacy by design.',
  },
  evidence: {
    title: 'Immutable evidence',
    body:
      'Each step (transaction, signature, KYC) is sealed into an Immutable Ledger with ZK proofs. Chaining makes any manipulation detectable even months or years later, keeping operations auditable with minimal overhead.',
    bullets: ['PQ-ready transport (mTLS)', 'Immutable chained ledger', 'End-to-end control'],
    sealTitle: 'Chained Integrity Seal',
    sealBody:
      'A cryptographic “seal” per event; seals are chained into an evidence book.',
  },
  privacy: {
    title: 'Privacy with Blind-Reveal',
    body:
      'We prove validity without exposing sensitive data to counterparties or auditors. Parties verify consistency with cryptographic proofs while preserving customer identity and minimizing trust assumptions.',
    cta: 'Learn how it works',
  },
  features: {
    immutableEvidence: 'Immutable evidence',
    privacyBR: 'Privacy with Blind-Reveal',
    auditReady: 'Audit-ready',
    pqcReady: 'PQC-ready',
  },
  sectors: {
    title: 'Solutions by industry',
    realEstate: 'Real Estate (HUGO)',
    fintech: 'Fintech',
    banking: 'Banking',
    realEstateCardTitle: 'Deed/Ticket with QR',
    realEstateCardBody:
      'The QR binds the PDF (hash) to an immutable log; any change is detected instantly.',
    auditMinutesTitle: 'Audits in minutes',
    auditMinutesBody:
      'Blind-Reveal: judge/auditor validate consistency without seeing sensitive data.',
  },
  footer: {
    rights: '© 2025 aSAFEBOX® · Jacob Integrity Lab',
    madeWith: 'Built with Next.js + Tailwind. Accessible and SEO-friendly.',
  },
}

const de: Dict = {
  meta: {
    siteName: 'aSAFEBOX® — Sicheres Vorhaben',
    description:
      'Digitale Integritätsschicht für Transaktionen und Verträge: fälschungssichere Evidenz, Blind-Reveal-Privatsphäre und Audits in Minuten.',
  },
  hero: {
    title: 'aSAFEBOX® — Sicheres Vorhaben',
    subtitle:
      'Wir versiegeln jede Operation mit kryptografischer Evidenz: Was unterschrieben wurde, ist exakt das, was ausgeführt wird. Volle Privatsphäre mit Blind-Reveal und ZK-Beweisen. Audits in Minuten, post-quanten-bereit.',
    emailPlaceholder: 'du@beispiel.de',
    cta: 'Ich möchte Updates',
    disclaimer: 'Kein Spam. Nur wichtige Neuigkeiten.',
  },
  howItWorks: {
    title: 'So funktioniert es',
    subtitle:
      'Von einer unveränderlichen Kette bis zur geblendeten Identität – alles über einen PQ-fähigen Transport.',
  },
  illustration: {
    transport: 'Post-Quantum-fähige Transportsicherheit',
    sender: 'Sender',
    ledger: 'Unveränderliches Ledger',
    blindId: 'Geblendete Identität',
    receiver: 'Empfänger',
    caption:
      'Authentifizierter Transport (PQ-mTLS), fälschungssichere Evidenz und Privacy by Design.',
  },
  evidence: {
    title: 'Unveränderliche Evidenz',
    body:
      'Jeder Schritt (Transaktion, Signatur, KYC) wird in ein unveränderliches Ledger mit ZK-Beweisen versiegelt. Durch das Verketteten ist jede Manipulation auch nach Monaten/Jahren nachweisbar – mit minimalem Betriebsaufwand.',
    bullets: ['PQ-fähiger Transport (mTLS)', 'Unveränderliches, verkettetes Ledger', 'End-to-End-Kontrolle'],
    sealTitle: 'Verkettetes Integritätssiegel',
    sealBody:
      'Ein kryptografisches „Siegel“ pro Ereignis; die Siegel werden zu einem Evidenzbuch verkettet.',
  },
  privacy: {
    title: 'Privatsphäre mit Blind-Reveal',
    body:
      'Wir belegen Gültigkeit, ohne sensible Daten gegenüber Gegenparteien oder Prüfern offenzulegen. Parteien prüfen die Konsistenz per kryptografischer Beweise, wahren die Kundenidentität und minimieren Vertrauenserfordernisse.',
    cta: 'So funktioniert es',
  },
  features: {
    immutableEvidence: 'Unveränderliche Evidenz',
    privacyBR: 'Privatsphäre mit Blind-Reveal',
    auditReady: 'Audit-bereit',
    pqcReady: 'PQC-bereit',
  },
  sectors: {
    title: 'Lösungen nach Branchen',
    realEstate: 'Immobilien (HUGO)',
    fintech: 'Fintech',
    banking: 'Banking',
    realEstateCardTitle: 'Urkunde/Ticket mit QR',
    realEstateCardBody:
      'Der QR verknüpft das PDF (Hash) mit einem unveränderlichen Log; jede Änderung wird sofort erkannt.',
    auditMinutesTitle: 'Audit in Minuten',
    auditMinutesBody:
      'Blind-Reveal: Richter/Prüfer validieren Konsistenz ohne Einsicht in sensible Daten.',
  },
  footer: {
    rights: '© 2025 aSAFEBOX® · Jacob Integrity Lab',
    madeWith:
      'Erstellt mit Next.js + Tailwind. Barrierefrei und SEO-freundlich.',
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


