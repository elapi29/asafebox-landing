export type Locale = 'en' | 'es' | 'de'

export const dictionaries: Record<Locale, Record<string,string>> = {
  en: {
    hero_title: 'Seal. Transport. Prove.',
    hero_sub: 'Every operation is sealed and travels through a private, armored tunnel—tamper-evident, confidential, and instantly auditable.',
    cta_primary: 'Talk to us',

    how_title: 'How it works',
    how_sub: 'From an unbreakable seal to a private tunnel and a tamper-proof evidence book.',

    flow1_title: 'Unbreakable seal in a private tunnel',
    flow1_body: 'Each operation is locked with a unique seal and travels end-to-end in a protected corridor. If anyone touches it, it shows. Delivery is verifiable.',

    flow2_title: 'Evidence book + customer privacy',
    flow2_body: 'Every step (transaction, signature, KYC) writes a new line in an append-only evidence book. Auditors can verify integrity at scale without seeing sensitive data.',

    interop_title: 'Anchored and verifiable',
    interop_body: 'Evidence batches can be anchored to public networks for extra assurance—without exposing any customer data.',

    footer_line: 'Integrity, privacy, and auditability—by design.'
  },
  es: {
    hero_title: 'Sellar. Transportar. Probar.',
    hero_sub: 'Cada operación viaja con sello inviolable por un túnel privado: a prueba de manipulación, confidencial y auditable al instante.',
    cta_primary: 'Hablemos',

    how_title: 'Cómo funciona',
    how_sub: 'Del sello inviolable al túnel privado y a un libro de evidencias imposible de alterar.',

    flow1_title: 'Sello inviolable en un túnel privado',
    flow1_body: 'Cada operación queda cerrada con un sello único y recorre un corredor protegido de punta a punta. Si alguien la toca, se nota. La entrega es verificable.',

    flow2_title: 'Libro de evidencias + privacidad del cliente',
    flow2_body: 'Cada paso (transacción, firma, KYC) agrega una línea en un libro que sólo permite escribir, nunca borrar. Los auditores verifican integridad a escala sin ver datos sensibles.',

    interop_title: 'Anclado y verificable',
    interop_body: 'Podemos anclar lotes de evidencia en redes públicas para refuerzo de confianza—sin exponer información de clientes.',

    footer_line: 'Integridad, privacidad y auditabilidad, por diseño.'
  },
  de: {
    hero_title: 'Versiegeln. Transportieren. Belegen.',
    hero_sub: 'Jede Transaktion reist mit einem unverletzlichen Siegel durch einen privaten, geschützten Tunnel – manipulationssicher, vertraulich und sofort prüfbar.',
    cta_primary: 'Kontakt aufnehmen',

    how_title: 'So funktioniert es',
    how_sub: 'Vom unverletzlichen Siegel über den privaten Tunnel bis zum fälschungssicheren Evidenzbuch.',

    flow1_title: 'Unverletzliches Siegel im privaten Tunnel',
    flow1_body: 'Jeder Vorgang wird mit einem einzigartigen Siegel verschlossen und Ende-zu-Ende geschützt transportiert. Jede Berührung hinterlässt Spuren. Zustellung ist verifizierbar.',

    flow2_title: 'Evidenzbuch + Kundenschutz',
    flow2_body: 'Jeder Schritt (Transaktion, Signatur, KYC) schreibt eine neue Zeile in ein Nur-Anfügen-Buch. Prüfer bestätigen Integrität in großem Maßstab, ohne sensible Daten zu sehen.',

    interop_title: 'Verankert und verifizierbar',
    interop_body: 'Evidenz-Batches können zur Vertrauensstärkung in öffentlichen Netzen verankert werden – ohne Kundendaten offenzulegen.',

    footer_line: 'Integrität, Vertraulichkeit und Prüfbarkeit – by design.'
  }
}