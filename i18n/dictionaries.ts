// i18n/dictionaries.ts
export type Locale = 'es' | 'en' | 'de'

export type Dict = {
  meta: { siteName: string; description: string }
  hero: {
    title: string
    subtitle: string
    emailPlaceholder: string
    cta: string
    disclaimer: string
  }
  howItWorks: { title: string; subtitle: string }
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
  privacy: { title: string; body: string; cta: string }
  features: { immutableEvidence: string; privacyBR: string; auditReady: string; pqcReady: string }

  sectors: {
    title: string
    realEstate: string
    fintech: string
    banking: string
    jewelry: string
    // cuerpos (línea descriptiva por card)
    realEstateCardBody: string
    bankingCardBody: string
    fintechCardBody: string
    jewelryCardBody: string
    // neutro multi-industria (por si quieres usarlo en otra card/sección)
    neutralTitle: string
    neutralBody: string
  }

  footer: { rights: string; madeWith: string }

  jewelry: {
    title: string
    subtitle: string
    ctaDemo: string
    ctaExample: string
    benefits: { title: string; desc: string }[]
    howToTitle: string
    howToSteps: string[]
    originBlock: string
    kpis: { value: string; label: string }[]
    qrLabel: string
    qrUrl: string
    diagramCaption: string
    diagram: {
      mineTitle: string
      mineNote: string
      refineryTitle: string
      refineryNote: string
      manufTitle: string
      manufNote: string
      wholesaleTitle: string
      wholesaleNote: string
      posTitle: string
      posNote: string
      lock1: string
      lock2: string
      lock3: string
      lock4: string
      lock5: string
      verifyPosLabel: string
    }
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
  illustration: {
    transport: 'Capa de Seguridad de Transporte Post-Quantum-Ready',
    sender: 'Emisor',
    ledger: 'Ledger Inmutable',
    blindId: 'Identidad Cegada',
    receiver: 'Receptor',
    caption: 'Transporte autenticado (mTLS PQ-ready), evidencia inmutable y privacidad por diseño.',
  },
  evidence: {
    title: 'Evidencia inmutable',
    body:
      'Cada paso (transacción, firma, KYC) queda sellado con un Ledger Inmutable y pruebas ZK. El encadenamiento permite detectar cualquier manipulación incluso meses o años más tarde, manteniendo auditabilidad con impacto mínimo en la operación.',
    bullets: ['Transporte PQ-ready (mTLS)', 'Ledger inmutable (encadenamiento)', 'Control extremo a extremo'],
    sealTitle: 'Sello de Integridad Encadenado',
    sealBody: 'Un “sello” criptográfico por evento; los sellos se encadenan en un libro de evidencias.',
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
    jewelry: 'Joyería',
    realEstateCardBody:
      'Documentos con QR verificable; el PDF queda encadenado a un log inmutable.',
    bankingCardBody:
      'Integridad transaccional y evidencia de cumplimiento, sin exponer PII.',
    fintechCardBody:
      'Onboarding/KYC sellados y verificables en minutos, con auditoría masiva.',
    jewelryCardBody:
      'Autenticidad, privacidad y evidencia en el punto de venta.',
    neutralTitle: 'Verificación rápida y privada',
    neutralBody:
      'Evidencia verificable en segundos, sin exponer datos sensibles. Multi-industria.',
  },

  footer: {
    rights: '© 2025 aSAFEBOX® · Jacob Integrity Lab',
    madeWith: 'Hecho con Next.js + Tailwind. Cumplimos buenas prácticas de accesibilidad y SEO.',
  },

  jewelry: {
    title: 'Autenticidad y privacidad en cada compra de joya',
    subtitle:
      'Tu boleta, certificado y pago quedan sellados y verificables en segundos — sin exponer datos sensibles.',
    ctaDemo: 'Solicitar demo',
    ctaExample: 'Ver ejemplo con QR',
    benefits: [
      { title: 'Menos disputas', desc: 'Lo que figura en boleta/garantía es lo que realmente se entregó.' },
      { title: 'Privado por defecto', desc: 'Se verifica la legitimidad sin revelar datos sensibles del cliente.' },
      { title: 'Papel, efectivo o mixto', desc: 'El recibo físico queda vinculado; si se edita o duplica, la verificación falla.' },
      { title: 'Auditorías en minutos', desc: 'Evidencia lista para seguros y reguladores sin peritajes extensos.' },
    ],
    howToTitle: 'Cómo se usa',
    howToSteps: [
      'Emitís la boleta/certificado (papel o PDF).',
      'Se genera un sello verificable y un QR en el documento.',
      'El comprobante de pago (foto/scan) queda atado a la operación.',
      'Todo es privado: se revela solo lo necesario cuando hay que verificar.',
    ],
    originBlock:
      '¿Ya tenés trazabilidad de origen? Perfecto. aSAFEBOX® añade la prueba de la operación final (punto de venta): boleta, certificado y pago quedan sellados y verificables en segundos. Resultado: menos disputas, menos fraude documental y auditorías más rápidas.',
    kpis: [
      { value: '−40%', label: 'reclamos documentales' },
      { value: '< 10s', label: 'para verificar con QR' },
      { value: 'minutos', label: 'auditorías de seguros y controles' },
    ],
    qrLabel: 'Verificación de ejemplo',
    qrUrl: 'https://elapi29.github.io/asafebox-landing/verify/example?code=DEMO-QR-001',
    diagramCaption:
      'Cadena de valor con eventos encadenados y verificación rápida en el punto de venta (sin exponer datos sensibles).',
    diagram: {
      mineTitle: 'Pozo / Mina',
      mineNote: 'Lote, fecha, responsable',
      refineryTitle: 'Refinería',
      refineryNote: 'Ensayo de pureza / lote',
      manufTitle: 'Fabricación / Corte',
      manufNote: 'Asignación a pieza/serie',
      wholesaleTitle: 'Mayorista / Logística',
      wholesaleNote: 'Transferencia de custodia',
      posTitle: 'Joyería (POS)',
      posNote: 'Boleta + certificado + pago',
      lock1: 'Evento sellado',
      lock2: 'Encadenado',
      lock3: 'Íntegro',
      lock4: 'Transferible',
      lock5: 'Verificable en segundos (QR)',
      verifyPosLabel: 'verify_log • 05 (POS)',
    },
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
    subtitle: 'From an immutable chain to a blinded identity, all under a PQ-ready transport.',
  },
  illustration: {
    transport: 'Post-Quantum-Ready Transport Security',
    sender: 'Sender',
    ledger: 'Immutable Ledger',
    blindId: 'Blinded Identity',
    receiver: 'Receiver',
    caption: 'Authenticated transport (PQ mTLS), tamper-proof evidence and privacy by design.',
  },
  evidence: {
    title: 'Immutable evidence',
    body:
      'Each step (transaction, signature, KYC) is sealed into an Immutable Ledger with ZK proofs. Chaining makes any manipulation detectable even months or years later, keeping operations auditable with minimal overhead.',
    bullets: ['PQ-ready transport (mTLS)', 'Immutable chained ledger', 'End-to-end control'],
    sealTitle: 'Chained Integrity Seal',
    sealBody: 'A cryptographic “seal” per event; seals are chained into an evidence book.',
  },
  privacy: {
    title: 'Privacy with Blind-Reveal',
    body:
      'We prove validity without exposing sensitive data to counterparties or auditors. Parties verify consistency with cryptographic proofs while preserving customer identity and minimizing trust assumptions.',
    cta: 'Learn how it works',
  },
  features: { immutableEvidence: 'Immutable evidence', privacyBR: 'Privacy with Blind-Reveal', auditReady: 'Audit-ready', pqcReady: 'PQC-ready' },

  sectors: {
    title: 'Solutions by industry',
    realEstate: 'Real Estate (HUGO)',
    fintech: 'Fintech',
    banking: 'Banking',
    jewelry: 'Jewelry',
    realEstateCardBody:
      'QR-verifiable documents; the PDF is bound to an immutable log.',
    bankingCardBody:
      'Transactional integrity and compliance evidence without exposing PII.',
    fintechCardBody:
      'Onboarding/KYC sealed and verifiable in minutes, with at-scale audits.',
    jewelryCardBody:
      'Authenticity, privacy and evidence at the point of sale.',
    neutralTitle: 'Fast, private verification',
    neutralBody:
      'Tamper-proof evidence in seconds without exposing sensitive data. Multi-industry.',
  },

  footer: { rights: '© 2025 aSAFEBOX® · Jacob Integrity Lab', madeWith: 'Built with Next.js + Tailwind. Accessible and SEO-friendly.' },

  jewelry: {
    title: 'Authenticity and privacy in every jewelry purchase',
    subtitle:
      'Your receipt, certificate and payment are sealed and verifiable in seconds — without exposing sensitive data.',
    ctaDemo: 'Request a demo',
    ctaExample: 'See QR example',
    benefits: [
      { title: 'Fewer disputes', desc: 'What’s on the receipt/warranty is exactly what was delivered.' },
      { title: 'Private by default', desc: 'Legitimacy is verified without revealing customer data.' },
      { title: 'Paper, cash or mixed', desc: 'The paper receipt is bound; edits/duplicates fail verification.' },
      { title: 'Audits in minutes', desc: 'Evidence ready for insurers and regulators without lengthy forensics.' },
    ],
    howToTitle: 'How it works in-store',
    howToSteps: [
      'Issue the receipt/certificate (paper or PDF).',
      'A verifiable seal and a QR are added to the document.',
      'The payment slip (photo/scan) is bound to the operation.',
      'Everything stays private: only the necessary proof is revealed upon verification.',
    ],
    originBlock:
      'Already have provenance? Great. aSAFEBOX® adds proof of the final operation (point of sale): receipt, certificate and payment become sealed and verifiable in seconds. Result: fewer disputes, less document fraud and faster audits.',
    kpis: [
      { value: '−40%', label: 'document-related claims' },
      { value: '< 10s', label: 'to verify via QR' },
      { value: 'minutes', label: 'for insurance & compliance audits' },
    ],
    qrLabel: 'Sample verification',
    qrUrl: 'https://elapi29.github.io/asafebox-landing/verify/example?code=DEMO-QR-001',
    diagramCaption:
      'Value chain with chained events and fast verification at the point of sale (no sensitive data exposed).',
    diagram: {
      mineTitle: 'Mine',
      mineNote: 'Lot, date, operator',
      refineryTitle: 'Refinery',
      refineryNote: 'Assay / lot',
      manufTitle: 'Manufacturing / Cutting',
      manufNote: 'Assigned to piece/series',
      wholesaleTitle: 'Wholesale / Logistics',
      wholesaleNote: 'Custody transfer',
      posTitle: 'Jewelry (POS)',
      posNote: 'Receipt + certificate + payment',
      lock1: 'Event sealed',
      lock2: 'Chained',
      lock3: 'Tamper-evident',
      lock4: 'Transferable',
      lock5: 'QR verification in seconds',
      verifyPosLabel: 'verify_log • 05 (POS)',
    },
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
    caption: 'Authentifizierter Transport (PQ-mTLS), fälschungssichere Evidenz und Privacy by Design.',
  },
  evidence: {
    title: 'Unveränderliche Evidenz',
    body:
      'Jeder Schritt (Transaktion, Signatur, KYC) wird in ein unveränderliches Ledger mit ZK-Beweisen versiegelt. Durch das Verketteten ist jede Manipulation auch nach Monaten/Jahren nachweisbar – mit minimalem Betriebsaufwand.',
    bullets: ['PQ-fähiger Transport (mTLS)', 'Unveränderliches, verkettetes Ledger', 'End-to-End-Kontrolle'],
    sealTitle: 'Verkettetes Integritätssiegel',
    sealBody: 'Ein kryptografisches „Siegel“ pro Ereignis; die Siegel werden zu einem Evidenzbuch verkettet.',
  },
  privacy: {
    title: 'Privatsphäre mit Blind-Reveal',
    body:
      'Wir belegen Gültigkeit, ohne sensible Daten gegenüber Gegenparteien oder Prüfern offenzulegen. Parteien prüfen die Konsistenz per kryptografischer Beweise, wahren die Kundenidentität und minimieren Vertrauenserfordernisse.',
    cta: 'So funktioniert es',
  },
  features: { immutableEvidence: 'Unveränderliche Evidenz', privacyBR: 'Privatsphäre mit Blind-Reveal', auditReady: 'Audit-bereit', pqcReady: 'PQC-bereit' },

  sectors: {
    title: 'Lösungen nach Branchen',
    realEstate: 'Immobilien (HUGO)',
    fintech: 'Fintech',
    banking: 'Banking',
    jewelry: 'Schmuck',
    realEstateCardBody:
      'QR-prüfbare Dokumente; das PDF ist mit einem unveränderlichen Log verknüpft.',
    bankingCardBody:
      'Transaktionsintegrität und Compliance-Nachweise, ohne PII offenzulegen.',
    fintechCardBody:
      'Onboarding/KYC versiegelt und in Minuten prüfbar – Audits im großen Maßstab.',
    jewelryCardBody:
      'Authentizität, Privatsphäre und Evidenz am Point of Sale.',
    neutralTitle: 'Schnelle, private Verifizierung',
    neutralBody:
      'Nachweise in Sekunden, ohne sensible Daten offenzulegen. Branchenübergreifend.',
  },

  footer: {
    rights: '© 2025 aSAFEBOX® · Jacob Integrity Lab',
    madeWith: 'Erstellt mit Next.js + Tailwind. Barrierefrei und SEO-freundlich.',
  },

  jewelry: {
    title: 'Authentizität und Privatsphäre bei jedem Schmuckkauf',
    subtitle:
      'Beleg, Zertifikat und Zahlung werden in Sekunden versiegelt und verifizierbar — ohne sensible Daten offenzulegen.',
    ctaDemo: 'Demo anfordern',
    ctaExample: 'QR-Beispiel ansehen',
    benefits: [
      { title: 'Weniger Streitfälle', desc: 'Was auf Beleg/Garantie steht, ist genau das, was geliefert wurde.' },
      { title: 'Standardmäßig privat', desc: 'Die Echtheit wird ohne Kundendaten offenzulegen geprüft.' },
      { title: 'Papier, Bargeld oder gemischt', desc: 'Der Papierbeleg ist gebunden; Änderungen/Duplikate scheitern an der Prüfung.' },
      { title: 'Audits in Minuten', desc: 'Beweise für Versicherer und Aufsicht ohne langwierige Forensik.' },
    ],
    howToTitle: 'So funktioniert es',
    howToSteps: [
      'Beleg/Zertifikat ausstellen (Papier oder PDF).',
      'Ein verifizierbares Siegel und ein QR werden hinzugefügt.',
      'Der Zahlungsbeleg (Foto/Scan) wird an den Vorgang gebunden.',
      'Alles bleibt privat: Nur notwendige Nachweise werden bei der Prüfung offengelegt.',
    ],
    originBlock:
      'Sie haben bereits Herkunftsnachweise? Perfekt. aSAFEBOX® ergänzt den Nachweis des finalen Vorgangs (Point of Sale): Beleg, Zertifikat und Zahlung werden in Sekunden versiegelt und verifizierbar. Ergebnis: weniger Streitfälle, weniger Dokumentenbetrug und schnellere Audits.',
    kpis: [
      { value: '−40%', label: 'dokumentbezogene Reklamationen' },
      { value: '< 10s', label: 'für die QR-Prüfung' },
      { value: 'Minuten', label: 'für Versicherungs- & Compliance-Audits' },
    ],
    qrLabel: 'Beispiel-Verifizierung',
    qrUrl: '/verify/example?code=DEMO-QR-001',
    diagramCaption:
      'Wertschöpfungskette mit verketteten Ereignissen und schneller Prüfung am POS (ohne sensible Daten offenzulegen).',
    diagram: {
      mineTitle: 'Mine',
      mineNote: 'Los, Datum, Verantwortliche/r',
      refineryTitle: 'Raffinerie',
      refineryNote: 'Analyse / Los',
      manufTitle: 'Fertigung / Schliff',
      manufNote: 'Zuordnung zu Stück/Serie',
      wholesaleTitle: 'Großhandel / Logistik',
      wholesaleNote: 'Übergabe der Verwahrung',
      posTitle: 'Juwelier (POS)',
      posNote: 'Beleg + Zertifikat + Zahlung',
      lock1: 'Ereignis versiegelt',
      lock2: 'Verkettet',
      lock3: 'Unverfälschbar',
      lock4: 'Übertragbar',
      lock5: 'QR-Prüfung in Sekunden',
      verifyPosLabel: 'verify_log • 05 (POS)',
    },
  },
}

export type DictType = typeof es
export type { Locale as Lang }

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



