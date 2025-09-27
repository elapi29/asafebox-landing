// i18n/dictionaries.ts
export type Locale = 'es' | 'en' | 'de';

export const dictionaries: Record<Locale, any> = {
  es: {
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
    how: {
      title: 'Cómo funciona',
      subtitle:
        'Del encadenamiento inmutable a la identidad cegada, bajo transporte PQ-ready.',
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
      immutable: 'Evidencia inmutable',
      privacy: 'Privacidad con Blind-Reveal',
      audits: 'Listo para auditorías',
      pqc: 'PQC-ready',
      immutableDesc:
        'Cada paso (transacción, firma, KYC) queda sellado con logs HMAC y pruebas ZK.',
      privacyDesc:
        'Validez demostrada sin exponer datos a contrapartes ni auditores.',
      auditsDesc:
        'Auditoría masiva en minutos; cumplimiento para UIF, BCRA, CNV, PCI-DSS.',
      pqcDesc:
        'Autenticación y firma compatibles con la década 2030 (post-cuántico).',
    },
    sectors: {
      title: 'Soluciones por industria',
      realEstate: 'Inmobiliaria (HUGO)',
      fintech: 'Fintech',
      banking: 'Banking',
    },
    footer: {
      line1: '© 2025 aSAFEBOX® · Jacob Integrity Lab',
      line2: 'Hecho con Next.js + Tailwind. Cumplimos buenas prácticas de accesibilidad y SEO.',
    },
  },

  en: {
    meta: {
      siteName: 'aSAFEBOX® — Secure Venture',
      description:
        'Integrity layer for transactions and contracts: tamper-proof evidence, Blind-Reveal privacy, and minute-long audits.',
    },
    hero: {
      title: 'aSAFEBOX® — Secure Venture',
      subtitle:
        'We seal every operation with cryptographic evidence: what was signed is what gets executed. Full privacy with Blind-Reveal and ZK proofs. Audits in minutes, post-quantum ready.',
      emailPlaceholder: 'you@email.com',
      cta: 'Keep me posted',
      disclaimer: 'No spam. Only key updates.',
    },
    how: {
      title: 'How it works',
      subtitle:
        'From a tamper-proof chain to blinded identity, under a PQ-ready transport.',
    },
    evidence: {
      title: 'Tamper-proof evidence',
      body:
        'Each step (transaction, signature, KYC) is sealed into an immutable ledger with ZK proofs. Chaining detects any manipulation—even months or years later—preserving auditability with minimal operational impact.',
      bullets: [
        'PQ-ready transport (mTLS)',
        'Immutable ledger (chaining)',
        'End-to-end control',
      ],
      sealTitle: 'Chained Integrity Seal',
      sealBody:
        'A cryptographic “seal” per event; seals are chained into an evidence book.',
    },
    privacy: {
      title: 'Privacy with Blind-Reveal',
      body:
        'We prove validity without exposing sensitive data to counterparties or auditors. Parties verify consistency with cryptographic proofs, preserving client identity and minimizing trust assumptions.',
      cta: 'Learn how it works',
    },
    features: {
      immutable: 'Immutable evidence',
      privacy: 'Privacy with Blind-Reveal',
      audits: 'Audit-ready',
      pqc: 'PQC-ready',
      immutableDesc:
        'Every step (transaction, signature, KYC) sealed with HMAC logs and ZK proofs.',
      privacyDesc:
        'Validity proven without exposing data to counterparties or auditors.',
      auditsDesc:
        'Mass audits in minutes; compliant with financial and security standards.',
      pqcDesc:
        'Authentication and signatures ready for the 2030s (post-quantum).',
    },
    sectors: {
      title: 'Solutions by industry',
      realEstate: 'Real Estate (HUGO)',
      fintech: 'Fintech',
      banking: 'Banking',
    },
    footer: {
      line1: '© 2025 aSAFEBOX® · Jacob Integrity Lab',
      line2:
        'Built with Next.js + Tailwind. We follow accessibility and SEO best practices.',
    },
  },

  de: {
    meta: {
      siteName: 'aSAFEBOX® — Sicheres Unternehmertum',
      description:
        'Integritätsschicht für Transaktionen und Verträge: fälschungssichere Evidenz, Blind-Reveal-Privatsphäre und Audits in Minuten.',
    },
    hero: {
      title: 'aSAFEBOX® — Sicheres Unternehmertum',
      subtitle:
        'Wir versiegeln jede Operation mit kryptografischer Evidenz: Was unterschrieben wurde, wird ausgeführt. Volle Privatsphäre mit Blind-Reveal und ZK-Beweisen. Audits in Minuten, post-quanten-bereit.',
      emailPlaceholder: 'du@email.de',
      cta: 'Mehr erfahren',
      disclaimer: 'Kein Spam. Nur wichtige Updates.',
    },
    how: {
      title: 'Wie es funktioniert',
      subtitle:
        'Von einer fälschungssicheren Kette bis zur geblendeten Identität – unter einem PQ-fähigen Transport.',
    },
    evidence: {
      title: 'Unveränderliche Evidenz',
      body:
        'Jeder Schritt (Transaktion, Signatur, KYC) wird in ein unveränderliches Ledger mit ZK-Beweisen versiegelt. Verkettung deckt Manipulationen auch nach Monaten/Jahren auf – mit minimaler Beeinträchtigung des Betriebs.',
      bullets: [
        'PQ-fähiger Transport (mTLS)',
        'Unveränderliches Ledger (Verkettung)',
        'End-to-End-Kontrolle',
      ],
      sealTitle: 'Verkettetes Integritätssiegel',
      sealBody:
        'Ein kryptografisches „Siegel“ pro Ereignis; Siegel werden zu einem Evidenzbuch verkettet.',
    },
    privacy: {
      title: 'Privatsphäre mit Blind-Reveal',
      body:
        'Wir belegen Gültigkeit, ohne sensible Daten gegenüber Gegenparteien oder Prüfern offenzulegen. Parteien prüfen die Konsistenz per kryptografischer Beweise und wahren die Identität der Kunden.',
      cta: 'Erfahre, wie es funktioniert',
    },
    features: {
      immutable: 'Unveränderliche Evidenz',
      privacy: 'Privatsphäre mit Blind-Reveal',
      audits: 'Audit-bereit',
      pqc: 'PQC-bereit',
      immutableDesc:
        'Jeder Schritt (Transaktion, Signatur, KYC) mit HMAC-Logs und ZK-Beweisen versiegelt.',
      privacyDesc:
        'Gültigkeit ohne Datenoffenlegung gegenüber Dritten oder Prüfern.',
      auditsDesc:
        'Massen-Audits in Minuten; konform mit Finanz- und Sicherheitsstandards.',
      pqcDesc:
        'Authentifizierung und Signaturen für die 2030er (post-quanten-fähig).',
    },
    sectors: {
      title: 'Lösungen nach Branche',
      realEstate: 'Immobilien (HUGO)',
      fintech: 'Fintech',
      banking: 'Banking',
    },
    footer: {
      line1: '© 2025 aSAFEBOX® · Jacob Integrity Lab',
      line2:
        'Erstellt mit Next.js + Tailwind. Wir folgen Best Practices für Barrierefreiheit und SEO.',
    },
  },
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries.es;
}
