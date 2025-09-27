// i18n/dictionaries.ts
export type Locale = 'es' | 'en' | 'de'

type Dict = {
  meta: {
    siteName: string
    description: string
  }
  nav: {
    solutionsByIndustry: string
  }
  hero: {
    title: string
    subtitle: string
    emailPlaceholder: string
    cta: string
    disclaimer: string
  }
  how: {
    title: string
    subtitle: string
  }
  illustration: {
    transportBanner: string
    emitter: string
    immutableLedger: string
    blindId: string
    receiver: string
    footer: string
  }
  evidence: {
    title: string
    body: string
    bullets: [string, string, string]
  }
  privacy: {
    title: string
    body: string
    cta: string
    badgeTitle: string
  }
  features: {
    title: string
    items: {
      immutable: { title: string; desc: string }
      privacy: { title: string; desc: string }
      audit: { title: string; desc: string }
      pqc: { title: string; desc: string }
    }
  }
  sectors: {
    title: string
    tabs: { realEstate: string; fintech: string; banking: string }
    realEstate: {
      card1Title: string
      card1Desc: string
      card2Title: string
      card2Desc: string
    }
  }
  ledgerSeal: {
    title: string
    body: string
    banner1: string
    banner2: string
    banner3: string
  }
  footer: {
    madeWith: string
    rights: string
  }
}

const es: Dict = {
  meta: {
    siteName: 'aSAFEBOX® — Emprendimiento Seguro',
    description:
      'Capa de integridad digital para transacciones y contratos: evidencia inmutable, privacidad con Blind-Reveal y auditoría en minutos.',
  },
  nav: {
    solutionsByIndustry: 'Soluciones por industria',
  },
  hero: {
    title: 'aSAFEBOX® — Emprendimiento Seguro',
    subtitle:
      'Sellamos cada operación con evidencia criptográfica: lo que se firmó es lo que se ejecutó. Privacidad total con Blind-Reveal y pruebas ZK. Auditorías en minutos y preparación post-cuántica.',
    emailPlaceholder: 'tu@email.com',
    cta: 'Quiero saber más',
    disclaimer: 'Sin spam. Te enviaremos solo novedades clave.',
  },
  how: {
    title: 'Cómo funciona',
    subtitle:
      'Del encadenamiento inmutable a la identidad cegada, bajo transporte PQ-ready.',
  },
  illustration: {
    transportBanner:
      'Capa de Seguridad de Transporte Post-Quantum-Ready (mTLS PQ-Ready)',
    emitter: 'Emisor',
    immutableLedger: 'Ledger Inmutable',
    blindId: 'Identidad Cegada',
    receiver: 'Receptor',
    footer:
      'Transporte autenticado (mTLS PQ-ready), evidencia inmutable y privacidad por diseño.',
  },
  evidence: {
    title: 'Evidencia inmutable',
    body:
      'Cada paso (transacción, firma, KYC) queda sellado con un Ledger Inmutable y pruebas ZK. El encadenamiento permite detectar cualquier manipulación incluso meses o años más tarde, manteniendo auditabilidad con impacto mínimo en la operación.',
    bullets: [
      'Transporte PQ-ready (mTLS)',
      'Ledger inmutable (encadenamiento)',
      'Control extremo a extremo',
    ],
  },
  privacy: {
    title: 'Privacidad con Blind-Reveal',
    body:
      'Demostramos validez sin exponer datos sensibles a contrapartes ni auditores. Las partes verifican la consistencia con pruebas criptográficas, preservando la identidad del cliente y minimizando supuestos de confianza.',
    cta: 'Learn how it works',
    badgeTitle: 'Blind-Reveal: validez sin exponer datos',
  },
  features: {
    title: 'Listo para auditorías',
    items: {
      immutable: {
        title: 'Evidencia inmutable',
        desc:
          'Cada paso queda sellado con un Ledger inmutable y pruebas ZK; manipulación detectable.',
      },
      privacy: {
        title: 'Privacidad con Blind-Reveal',
        desc:
          'Validez demostrada sin exponer datos a contrapartes ni auditores.',
      },
      audit: {
        title: 'Auditoría en minutos',
        desc:
          'Millones de eventos en minutos; cumple UIF, BCRA, CNV, PCI-DSS.',
      },
      pqc: {
        title: 'PQC-ready',
        desc:
          'Autenticación y firma preparadas para la década 2030 (post-cuántico).',
      },
    },
  },
  sectors: {
    title: 'Soluciones por industria',
    tabs: { realEstate: 'Inmobiliaria (HUGO)', fintech: 'Fintech', banking: 'Banking' },
    realEstate: {
      card1Title: 'Boleto/Escritura con QR',
      card1Desc:
        'El QR encadena el PDF (hash) a un log inmutable; cualquier alteración se detecta al instante.',
      card2Title: 'Auditoría en minutos',
      card2Desc:
        'Blind-Reveal: juez/auditor validan consistencia sin ver datos sensibles.',
    },
  },
  ledgerSeal: {
    title: 'Cada transacción se sella con un Sello de Integridad Encadenado',
    body:
      'El “sello” es una huella criptográfica única por evento. Los sellos se encadenan en un libro de evidencias inmutable y viajan bajo mTLS Post-Quantum-Ready, asegurando integridad, confidencialidad y auditoría de extremo a extremo.',
    banner1:
      'Capa de Seguridad de Transporte Post-Quantum-Ready (mTLS PQ-Ready)',
    banner2: 'Sello de Integridad Encadenado (evidencia criptográfica por evento)',
    banner3: 'Control total de integridad y privacidad, extremo a extremo',
  },
  footer: {
    madeWith:
      'Hecho con Next.js + Tailwind. Cumplimos buenas prácticas de accesibilidad y SEO.',
    rights: '© 2025 aSAFEBOX® · Jacob Integrity Lab',
  },
}

const en: Dict = {
  meta: {
    siteName: 'aSAFEBOX® — Trusted Operations',
    description:
      'Digital integrity layer for transactions and contracts: immutable evidence, Blind-Reveal privacy, and audits in minutes.',
  },
  nav: {
    solutionsByIndustry: 'Solutions by industry',
  },
  hero: {
    title: 'aSAFEBOX® — Trusted Operations',
    subtitle:
      'We seal every operation with cryptographic evidence: what was signed is what gets executed. Full privacy with Blind-Reveal and ZK proofs. Audits in minutes and post-quantum readiness.',
    emailPlaceholder: 'your@email.com',
    cta: 'Keep me posted',
    disclaimer: 'No spam. Only key updates.',
  },
  how: {
    title: 'How it works',
    subtitle:
      'From an unbreakable seal to a private tunnel and a tamper-proof evidence book.',
  },
  illustration: {
    transportBanner: 'Post-Quantum-Ready Transport Security (mTLS PQ-Ready)',
    emitter: 'Sender',
    immutableLedger: 'Immutable Ledger',
    blindId: 'Blinded Identity',
    receiver: 'Receiver',
    footer:
      'Authenticated transport (mTLS PQ-ready), immutable evidence, and privacy by design.',
  },
  evidence: {
    title: 'Immutable evidence',
    body:
      'Each step (transaction, signature, KYC) is sealed with an Immutable Ledger and ZK proofs. Chaining detects any tampering even months or years later while keeping auditability with minimal operational impact.',
    bullets: [
      'PQ-ready transport (mTLS)',
      'Immutable ledger (chaining)',
      'End-to-end control',
    ],
  },
  privacy: {
    title: 'Privacy with Blind-Reveal',
    body:
      'We prove validity without exposing sensitive data to counterparties or auditors. Parties verify consistency with cryptographic proofs, preserving customer identity and minimizing trust assumptions.',
    cta: 'Learn how it works',
    badgeTitle: 'Blind-Reveal: validity without exposing data',
  },
  features: {
    title: 'Audit-ready',
    items: {
      immutable: {
        title: 'Immutable evidence',
        desc:
          'Every step is sealed with an immutable ledger and ZK proofs; tampering is detectable.',
      },
      privacy: {
        title: 'Privacy with Blind-Reveal',
        desc:
          'Validity proven without revealing data to counterparties or auditors.',
      },
      audit: {
        title: 'Audits in minutes',
        desc:
          'Millions of events in minutes; compliant with UIF, BCRA, CNV, PCI-DSS.',
      },
      pqc: {
        title: 'PQC-ready',
        desc:
          'Authentication and signatures prepared for the 2030s (post-quantum).',
      },
    },
  },
  sectors: {
    title: 'Solutions by industry',
    tabs: { realEstate: 'Real Estate (HUGO)', fintech: 'Fintech', banking: 'Banking' },
    realEstate: {
      card1Title: 'Deed/Ticket with QR',
      card1Desc:
        'The QR anchors the PDF (hash) to an immutable log; any alteration is detected instantly.',
      card2Title: 'Audit in minutes',
      card2Desc:
        'Blind-Reveal: judge/auditor validates consistency without seeing sensitive data.',
    },
  },
  ledgerSeal: {
    title: 'Every transaction is sealed with a Chained Integrity Seal',
    body:
      'The “seal” is a unique cryptographic fingerprint per event. Seals are chained into an immutable evidence book and travel under mTLS Post-Quantum-Ready, ensuring end-to-end integrity, confidentiality, and auditability.',
    banner1: 'Post-Quantum-Ready Transport Security (mTLS PQ-Ready)',
    banner2: 'Chained Integrity Seal (cryptographic evidence per event)',
    banner3: 'End-to-end control of integrity and privacy',
  },
  footer: {
    madeWith:
      'Built with Next.js + Tailwind. We follow accessibility and SEO best practices.',
    rights: '© 2025 aSAFEBOX® · Jacob Integrity Lab',
  },
}

const de: Dict = {
  meta: {
    siteName: 'aSAFEBOX® — Vertrauenswürdige Abläufe',
    description:
      'Digitale Integritätsschicht für Transaktionen und Verträge: unveränderliche Evidenz, Blind-Reveal-Privatsphäre und Audits in Minuten.',
  },
  nav: {
    solutionsByIndustry: 'Branchenlösungen',
  },
  hero: {
    title: 'aSAFEBOX® — Vertrauenswürdige Abläufe',
    subtitle:
      'Wir versiegeln jeden Vorgang mit kryptografischer Evidenz: Was unterschrieben wurde, ist das, was ausgeführt wird. Volle Privatsphäre mit Blind-Reveal und ZK-Nachweisen. Audits in Minuten und Post-Quanten-Bereitschaft.',
    emailPlaceholder: 'deine@email.com',
    cta: 'Ich möchte informiert werden',
    disclaimer: 'Kein Spam. Nur wesentliche Neuigkeiten.',
  },
  how: {
    title: 'So funktioniert es',
    subtitle:
      'Vom unverletzlichen Siegel über den privaten Tunnel bis zum fälschungssicheren Beweisbuch.',
  },
  illustration: {
    transportBanner:
      'Post-Quanten-fähige Transportsicherheit (mTLS PQ-Ready)',
    emitter: 'Sender',
    immutableLedger: 'Unveränderliches Ledger',
    blindId: 'Geblendete Identität',
    receiver: 'Empfänger',
    footer:
      'Authentifizierter Transport (mTLS PQ-Ready), unveränderliche Evidenz und Privacy by Design.',
  },
  evidence: {
    title: 'Unveränderliche Evidenz',
    body:
      'Jeder Schritt (Transaktion, Signatur, KYC) wird mit einem unveränderlichen Ledger und ZK-Nachweisen versiegelt. Die Verkettung erkennt Manipulationen auch nach Monaten oder Jahren – bei minimalem Einfluss auf den Betrieb.',
    bullets: [
      'PQ-fähige Transporteebene (mTLS)',
      'Unveränderliches Ledger (Verkettung)',
      'Ende-zu-Ende-Kontrolle',
    ],
  },
  privacy: {
    title: 'Privatsphäre mit Blind-Reveal',
    body:
      'Wir weisen die Gültigkeit nach, ohne sensible Daten gegenüber Gegenparteien oder Prüfern offenzulegen. Die Parteien prüfen die Konsistenz mit kryptografischen Nachweisen, wahren die Kundenidentität und minimieren Vertrauensannahmen.',
    cta: 'So funktioniert es',
    badgeTitle: 'Blind-Reveal: Gültigkeit ohne Datenpreisgabe',
  },
  features: {
    title: 'Audit-bereit',
    items: {
      immutable: {
        title: 'Unveränderliche Evidenz',
        desc:
          'Jeder Schritt wird mit einem unveränderlichen Ledger und ZK-Nachweisen versiegelt; Manipulation ist erkennbar.',
      },
      privacy: {
        title: 'Privatsphäre mit Blind-Reveal',
        desc:
          'Gültigkeit ohne Offenlegung gegenüber Gegenparteien oder Prüfern.',
      },
      audit: {
        title: 'Audits in Minuten',
        desc:
          'Millionen Ereignisse in Minuten; konform mit UIF, BCRA, CNV, PCI-DSS.',
      },
      pqc: {
        title: 'PQC-bereit',
        desc:
          'Authentifizierung und Signaturen für die 2030er vorbereitet (Post-Quantum).',
      },
    },
  },
  sectors: {
    title: 'Branchenlösungen',
    tabs: { realEstate: 'Immobilien (HUGO)', fintech: 'Fintech', banking: 'Banking' },
    realEstate: {
      card1Title: 'Urkunde/Ticket mit QR',
      card1Desc:
        'Der QR verankert das PDF (Hash) in einem unveränderlichen Log; jede Änderung wird sofort erkannt.',
      card2Title: 'Audit in Minuten',
      card2Desc:
        'Blind-Reveal: Richter/Prüfer bestätigt Konsistenz ohne Einsicht in sensible Daten.',
    },
  },
  ledgerSeal: {
    title:
      'Jede Transaktion wird mit einem verketteten Integritätssiegel versiegelt',
    body:
      'Das „Siegel“ ist ein eindeutiger kryptografischer Fingerabdruck pro Ereignis. Die Siegel werden zu einem unveränderlichen Beweisbuch verkettet und über mTLS Post-Quantum-Ready übertragen – für Ende-zu-Ende-Integrität, Vertraulichkeit und Auditierbarkeit.',
    banner1: 'Post-Quanten-fähige Transportsicherheit (mTLS PQ-Ready)',
    banner2:
      'Verkettetes Integritätssiegel (kryptografischer Nachweis pro Ereignis)',
    banner3:
      'Vollständige Ende-zu-Ende-Kontrolle von Integrität und Privatsphäre',
  },
  footer: {
    madeWith:
      'Erstellt mit Next.js + Tailwind. Wir folgen Best Practices für Barrierefreiheit und SEO.',
    rights: '© 2025 aSAFEBOX® · Jacob Integrity Lab',
  },
}

const dictionaries: Record<Locale, Dict> = { es, en, de }

export async function getDictionary(locale: Locale): Promise<Dict> {
  return dictionaries[locale] ?? dictionaries.es
}

