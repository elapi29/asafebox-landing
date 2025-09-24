export default function Features() {
  const features = [
    {
      title: 'Evidencia inmutable',
      desc: 'Cada paso (transacción, firma, KYC) queda sellado con logs HMAC y pruebas ZK.'
    },
    {
      title: 'Privacidad con Blind-Reveal',
      desc: 'Demostramos validez sin exponer datos sensibles a contrapartes ni auditores.'
    },
    {
      title: 'Listo para auditorías',
      desc: 'Auditoría masiva en minutos; cumplimiento para UIF, BCRA, CNV, PCI-DSS.'
    },
    {
      title: 'PQC-ready',
      desc: 'Autenticación y firma compatibles con la década 2030 (post-cuántico).'
    }
  ]
  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <div className="grid gap-6 sm:grid-cols-2">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-slate-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
