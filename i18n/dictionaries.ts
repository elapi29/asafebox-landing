// i18n/dictionaries.ts
export type Locale = 'es' | 'en' | 'de'

type Dict = {
  hero: {
    title: string
    subtitle: string
    emailLabel: string
    emailPlaceholder: string
    cta: string
    note: string
  }
  how: {
    title: string
    subtitle: string
    labels: {
      pqLayer: string
      mtls: string
      sender: string
      ledger: string
      blindId: string
      receiver: string
      caption: string
    }
  }
  evidence: {
    title: string
    body: string
    bullets: { transport: string; ledger: string; e2e: string }
  }
  seal: {
    title: string
    body: string
  }
  privacy: {
    title: string
    body: string
  }
  interopCta: string
  features: {
    immutable: { title: string; body: string }
    blind: { title: string; body: string }
    audit: { title: string; body: string }
    pqc: { title: string; body: string }
  }
  industries: {
    title: string
    realEstate: string
    fintech: string
    banking: string
    qrDocTitle: string
    qrDocBody: string
    auditMinutesTitle: string
    auditMinutesBody: string
  }
  why: {
    title: string
    bullets: string[]
  }
  book: {
    title: string
    body: string
  }
  footer: {
    line1: string
    line2: string
  }
}

const es: Dict = {
  hero: {
    title: 'aSAFEBOX® — Emprendimiento Seguro',
    subtitle:
      'Sellamos cada operación con evidencia criptográfica: lo que se firmó es lo que se ejecutó. Privacidad total con Blind-Reveal y pruebas ZK. Auditorías en minutos y preparación post-cuántica.',
    emailLabel: 'Email',
    emailPlaceholder: 'tu@email.com',
    cta: 'Quiero saber más',
    note: 'Sin spam. Te enviaremos solo novedades clave.',
  },
  how: {
    title: 'Cómo funciona',
    subtitle:
      'Del encadenamiento inmutable a la identidad cegada, bajo transporte PQ-ready.',
    labels: {
      pqLayer: 'Capa de Seguridad de Transporte Post-Quantum-Ready',
      mtls: 'mTLS',
      sender: 'Emisor',
      ledger: 'Ledger Inmutable',
      blindId: 'Identidad Cegada',
      receiver: 'Receptor',
      caption:
        'Transporte autenticado (mTLS PQ-ready), evidencia inmutable y privacidad por diseño.',
    },
  },
  evidence: {
    title: 'Evidencia inmutable',
    body:
      'Cada paso (transacción, firma, KYC) queda sellado con un Ledger Inmutable y pruebas ZK. El encadenamiento permite detectar cualquier manipulación incluso meses o años más tarde, manteniendo auditabilidad con impacto mínimo en la operación.',
    bullets: {
      transport: 'Transporte PQ-ready (mTLS)',
      ledger: 'Ledger inmutable (encadenamiento)',
      e2e: 'Control extremo a extremo',
    },
  },
  seal: {
    title: 'Sello de Integridad Encadenado',
    body:
      'Un “sello” criptográfico por evento; los sellos se encadenan en un libro de evidencias.',
  },
  privacy: {
    title: 'Privacidad con Blind-Reveal',
    body:
      'Demostramos validez sin exponer datos sensibles a contrapartes ni auditores. Las partes verifican la consistencia de la operación con pruebas criptográficas, preservando la identidad del cliente y minimizando supuestos de confianza.',
  },
  interopCta: 'Learn how it works',
  features: {
    immutable: {
      title: 'Evidencia inmutable',
      body: 'Cada paso (transacción, firma, KYC) queda sellado con logs HMAC y pruebas ZK.',
    },
    blind: {
      title: 'Privacidad con Blind-Reveal',
      body: 'Demostramos validez sin exponer datos sensibles a contrapartes ni auditores.',
    },
    audit: {
      title: 'Listo para auditorías',
      body: 'Auditoría masiva en minutos; cumplimiento para UIF, BCRA, CNV, PCI-DSS.',
    },
    pqc: {
      title: 'PQC-ready',
      body: 'Autenticación y firma compatibles con la década 2030 (post-cuántico).',
    },
  },
  industries: {
    title: 'Soluciones por industria',
    realEstate: 'Inmobiliaria (HUGO)',
    fintech: 'Fintech',
    banking: 'Banking',
    qrDocTitle: 'Boleto/Escritura con QR',
    qrDocBody:
      'El QR encadena el PDF (hash) a un log inmutable; cualquier alteración se detecta al instante.',
    auditMinutesTitle: 'Auditoría en minutos',
    auditMinutesBody:
      'Blind-Reveal: juez/auditor validan consistencia sin ver datos sensibles.',
  },
  why: {
    title: '¿Por qué este sistema es seguro y confidencial?',
    bullets: [
      'Blindaje con pruebas matemáticas: commit-reveal y sello de integridad con clave impiden manipulación de monto, cuenta, identidad u orden.',
      'Privacidad total: Blind-Reveal y ZK prueban validez sin exponer el dato a contrapartes ni auditores externos.',
      'Evidencia inmutable: cada transacción/firmado/KYC/pago queda en un log auditable; cualquier manipulación se detecta.',
      'Auditoría instantánea: millones de eventos en minutos cumpliendo UIF, BCRA, CNV, PCI-DSS.',
      'Puente papel↔digital: el QR encadena el PDF físico al hash del master; validación en segundos.',
    ],
  },
  book: {
    title: 'Cada transacción se sella con un Sello de Integridad Encadenado',
    body:
      'El “sello” es una huella criptográfica única por evento. Los sellos se encadenan en un libro de evidencias inmutable y viajan bajo mTLS Post-Quantum-Ready, asegurando integridad, confidencialidad y auditoría de extremo a extremo.',
  },
  footer: {
    line1:
      '© 2025 aSAFEBOX® · Jacob Integrity Lab',
    line2:
      'Hecho con Next.js + Tailwind. Cumplimos buenas prácticas de accesibilidad y SEO.',
  },
}

const en: Dict = {
  hero: {
    title: 'aSAFEBOX® — Secure Entrepreneurship',
    subtitle:
      'We seal every operation with cryptographic evidence: what was signed is exactly what was executed. Full privacy with Blind-Reveal and ZK proofs. Audits in minutes and post-quantum readiness.',
    emailLabel: 'Email',
    emailPlaceholder: 'your@email.com',
    cta: 'I want to know more',
    note: 'No spam. We’ll only send key updates.',
  },
  how: {
    title: 'How it works',
    subtitle:
      'From an unbreakable seal to a private tunnel and a tamper-proof evidence book.',
    labels: {
      pqLayer: 'Post-Quantum-Ready Transport Security Layer',
      mtls: 'mTLS',
      sender: 'Sender',
      ledger: 'Immutable Ledger',
      blindId: 'Blinded Identity',
      receiver: 'Receiver',
      caption:
        'Authenticated transport (PQ-ready mTLS), tamper-proof evidence, and privacy by design.',
    },
  },
  evidence: {
    title: 'Immutable evidence',
    body:
      'Every step (transaction, signature, KYC) is sealed into an Immutable Ledger with ZK proofs. The chaining detects any tampering even months or years later, keeping auditability with minimal operational impact.',
    bullets: {
      transport: 'PQ-ready transport (mTLS)',
      ledger: 'Immutable ledger (chaining)',
      e2e: 'End-to-end control',
    },
  },
  seal: {
    title: 'Chained Integrity Seal',
    body:
      'A cryptographic “seal” per event; seals are chained into an evidence book.',
  },
  privacy: {
    title: 'Privacy with Blind-Reveal',
    body:
      'We prove validity without exposing sensitive data to counterparties or auditors. Parties verify consistency with cryptographic proofs, preserving customer identity and minimizing trust assumptions.',
  },
  interopCta: 'Learn how it works',
  features: {
    immutable: {
      title: 'Immutable evidence',
      body: 'Every step (transaction, signature, KYC) is sealed with HMAC logs and ZK proofs.',
    },
    blind: {
      title: 'Privacy with Blind-Reveal',
      body: 'Validity proven without exposing sensitive data to counterparties or auditors.',
    },
    audit: {
      title: 'Audit-ready',
      body: 'Mass audits in minutes; compliant with UIF, BCRA, CNV, PCI-DSS.',
    },
    pqc: {
      title: 'PQC-ready',
      body: 'Authentication and signatures ready for the 2030s (post-quantum).',
    },
  },
  industries: {
    title: 'Solutions by industry',
    realEstate: 'Real Estate (HUGO)',
    fintech: 'Fintech',
    banking: 'Banking',
    qrDocTitle: 'Deed/Ticket with QR',
    qrDocBody:
      'The QR chains the PDF (hash) to an immutable log; any alteration is detected instantly.',
    auditMinutesTitle: 'Audits in minutes',
    auditMinutesBody:
      'Blind-Reveal: judge/auditor verify consistency without seeing sensitive data.',
  },
  why: {
    title: 'Why is this system secure and confidential?',
    bullets: [
      'Shielded by math-based proofs: commit-reveal and key-bound integrity seals prevent tampering with amount, account, identity, or order.',
      'Total privacy: Blind-Reveal and ZK prove validity without exposing data to counterparties or external auditors.',
      'Immutable evidence: every transaction/signing/KYC/payment lands in an auditable log; any manipulation is detected.',
      'Instant audits: millions of events in minutes, compliant with UIF, BCRA, CNV, PCI-DSS.',
      'Paper↔digital bridge: the QR chains the physical PDF to the master hash; validation in seconds.',
    ],
  },
  book: {
    title: 'Each transaction is sealed with a Chained Integrity Seal',
    body:
      'The “seal” is a unique cryptographic fingerprint per event. Seals are chained into an immutable evidence book and travel over Post-Quantum-Ready mTLS, ensuring end-to-end integrity, confidentiality, and auditability.',
  },
  footer: {
    line1:
      '© 2025 aSAFEBOX® · Jacob Integrity Lab',
    line2:
      'Built with Next.js + Tailwind. We follow accessibility and SEO best practices.',
  },
}

const de: Dict = {
  hero: {
    title: 'aSAFEBOX® — Sicheres Unternehmertum',
    subtitle:
      'Wir versiegeln jede Operation mit kryptografischer Evidenz: Was unterzeichnet wurde, ist exakt das, was ausgeführt wurde. Volle Privatsphäre mit Blind-Reveal und ZK-Nachweisen. Audits in Minuten, post-quantenfähig.',
    emailLabel: 'E-Mail',
    emailPlaceholder: 'deine@email.com',
    cta: 'Mehr erfahren',
    note: 'Kein Spam. Wir senden nur wichtige Neuigkeiten.',
  },
  how: {
    title: 'So funktioniert es',
    subtitle:
      'Vom unknackbaren Siegel über den privaten Tunnel bis zum manipulationssicheren Evidenzbuch.',
    labels: {
      pqLayer: 'Post-Quanten-fähige Transportsicherheits-Schicht',
      mtls: 'mTLS',
      sender: 'Absender',
      ledger: 'Unveränderliches Ledger',
      blindId: 'Geblendete Identität',
      receiver: 'Empfänger',
      caption:
        'Authentifizierter Transport (PQ-fähiges mTLS), manipulationssichere Evidenz und Privacy by Design.',
    },
  },
  evidence: {
    title: 'Unveränderliche Evidenz',
    body:
      'Jeder Schritt (Transaktion, Signatur, KYC) wird mit ZK-Nachweisen in ein unveränderliches Ledger versiegelt. Das Verkettungsprinzip deckt Manipulationen selbst nach Monaten oder Jahren auf – bei minimalem Betriebsaufwand.',
    bullets: {
      transport: 'PQ-fähiger Transport (mTLS)',
      ledger: 'Unveränderliches Ledger (Verkettung)',
      e2e: 'End-to-End-Kontrolle',
    },
  },
  seal: {
    title: 'Verkettetes Integritätssiegel',
    body:
      'Ein kryptografisches „Siegel“ pro Ereignis; die Siegel werden zu einem Evidenzbuch verkettet.',
  },
  privacy: {
    title: 'Privatsphäre mit Blind-Reveal',
    body:
      'Wir belegen Gültigkeit, ohne sensible Daten gegenüber Gegenparteien oder Prüfern offenzulegen. Parteien verifizieren die Konsistenz mit kryptografischen Nachweisen – Identitätsschutz und minimale Vertrauensannahmen.',
  },
  interopCta: 'Learn how it works',
  features: {
    immutable: {
      title: 'Unveränderliche Evidenz',
      body:
        'Jeder Schritt (Transaktion, Signatur, KYC) wird mit HMAC-Logs und ZK-Nachweisen versiegelt.',
    },
    blind: {
      title: 'Privatsphäre mit Blind-Reveal',
      body:
        'Gültigkeit wird nachgewiesen, ohne sensible Daten offenzulegen.',
    },
    audit: {
      title: 'Audit-bereit',
      body:
        'Massenprüfungen in Minuten; konform mit UIF, BCRA, CNV, PCI-DSS.',
    },
    pqc: {
      title: 'PQC-ready',
      body:
        'Authentifizierung und Signaturen sind für die 2030er vorbereitet (post-quantenfähig).',
    },
  },
  industries: {
    title: 'Lösungen nach Branche',
    realEstate: 'Immobilien (HUGO)',
    fintech: 'Fintech',
    banking: 'Banking',
    qrDocTitle: 'Ticket/Urkunde mit QR',
    qrDocBody:
      'Der QR verknüpft das PDF (Hash) mit einem unveränderlichen Log; jede Änderung wird sofort erkannt.',
    auditMinutesTitle: 'Audit in Minuten',
    auditMinutesBody:
      'Blind-Reveal: Richter/Prüfer bestätigen Konsistenz ohne Einsicht in sensible Daten.',
  },
  why: {
    title: 'Warum ist dieses System sicher und vertraulich?',
    bullets: [
      'Abschirmung durch mathematische Nachweise: Commit-Reveal und schlüsselgebundene Integritätssiegel verhindern Manipulation von Betrag, Konto, Identität oder Auftrag.',
      'Volle Privatsphäre: Blind-Reveal und ZK belegen Gültigkeit ohne Daten offenzulegen.',
      'Unveränderliche Evidenz: Jede Transaktion/Signatur/KYC/Zahlung landet in einem prüfbaren Log; Manipulationen werden erkannt.',
      'Sofortige Audits: Millionen Ereignisse in Minuten, konform mit UIF, BCRA, CNV, PCI-DSS.',
      'Brücke Papier↔Digital: Der QR verknüpft das physische PDF mit dem Master-Hash; Validierung in Sekunden.',
    ],
  },
  book: {
    title: 'Jede Transaktion wird mit einem verketteten Integritätssiegel versiegelt',
    body:
      'Das „Siegel“ ist ein eindeutiger kryptografischer Fingerabdruck pro Ereignis. Siegel werden zu einem unveränderlichen Evidenzbuch verkettet und über post-quantenfähiges mTLS übertragen – Integrität, Vertraulichkeit und Auditierbarkeit Ende-zu-Ende.',
  },
  footer: {
    line1:
      '© 2025 aSAFEBOX® · Jacob Integrity Lab',
    line2:
      'Erstellt mit Next.js + Tailwind. Wir befolgen Best Practices für Barrierefreiheit und SEO.',
  },
}

export const dictionaries: Record<Locale, Dict> = { es, en, de }

export function getDict(locale: Locale): Dict {
  return dictionaries[locale] ?? dictionaries.es
}
