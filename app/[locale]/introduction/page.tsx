// app/[locale]/introduction/page.tsx
import { getDictionary, Locale } from '../../../i18n/dictionaries'
import Illustration from '../../../components/Illustration'
import SystemLegend from '../../../components/SystemLegend'
import GatewayLegend from '../../../components/GatewayLegend'
import Footer from '../../../components/Footer'

// Ilustración neutral ZK
import BlindRevealIllo from '../../../components/illos/BlindRevealIllo'

export default async function IntroductionPage({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale)

  return (
    <main id="intro" className="px-6">
      {/* Overview */}
      <section id="overview" className="mx-auto max-w-5xl py-10">
        <h1 className="text-3xl font-bold">{dict.howItWorks.title}</h1>
        <p className="mt-2 text-slate-600">{dict.howItWorks.subtitle}</p>

        {/* Diagrama general (cadena → identidad cegada) */}
        <div className="mt-8">
          <Illustration
            transportLabel={dict.illustration.transport}
            sender={dict.illustration.sender}
            ledger={dict.illustration.ledger}
            blindId={dict.illustration.blindId}
            receiver={dict.illustration.receiver}
            caption={dict.illustration.caption}
          />
        </div>
      </section>

      {/* Blind-Reveal / ZK */}
      <section id="blind-reveal" className="mx-auto max-w-5xl py-10">
        <h2 className="text-2xl font-semibold">Blind-Reveal / Verificación con ZK</h2>
        <p className="mt-2 text-slate-600">
          Validez del dato sin exponerlo: el emisor demuestra que un enunciado es cierto,
          y el verificador lo comprueba sin ver el dato sensible.
        </p>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
          <BlindRevealIllo className="w-full h-auto" />
        </div>
      </section>

      {/* Trazabilidad ≠ simplemente blockchain */}
      <section id="traceability" className="mx-auto max-w-5xl py-10">
        <h2 className="text-2xl font-semibold">Trazabilidad ≠ simplemente “poner todo en una blockchain”</h2>
        <p className="mt-2 text-slate-600">
          La cadena garantiza orden y sello de tiempo. La trazabilidad real exige además validar contenido y
          hacer cumplir reglas humanas antes de liquidar.
        </p>

        {/* Tabla 1: analogía logística */}
        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3">Etapa del envío</th>
                <th className="px-4 py-3">¿Quién la cubre?</th>
                <th className="px-4 py-3">Qué garantiza</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-4 py-3"><strong>Camión que mueve la caja</strong></td>
                <td className="px-4 py-3"><strong>Blockchain</strong></td>
                <td className="px-4 py-3">Que el contenedor llega intacto y nadie reordena las cajas.</td>
              </tr>
              <tr>
                <td className="px-4 py-3"><strong>Escáner de rayos X y aduana</strong></td>
                <td className="px-4 py-3"><strong>In aSafeBox® Blockchecker</strong></td>
                <td className="px-4 py-3">Que la caja no trae mercancía falsa y lo registrado coincide con la realidad física.</td>
              </tr>
              <tr>
                <td className="px-4 py-3"><strong>Candado con llave dual</strong></td>
                <td className="px-4 py-3"><strong>In aSafeBox® Blockruler</strong></td>
                <td className="px-4 py-3">Que dos custodios distintos aprueban abrir/cerrar — y queda constancia.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tres capas de trazabilidad */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card
            title="Integridad de secuencia → Blockchain"
            body="Garantiza que nadie reordena o borra bloques; reloj público y prueba de no-repudio."
          />
          <Card
            title="Integridad del contenido → Blockchecker"
            body="Demuestra que el dato dentro del bloque es exactamente el que salió del emisor; rechaza duplicados (nonce)."
          />
          <Card
            title="Responsabilidad humana → Blockruler"
            body="Quién aprobó y con qué reglas (flags y co-aprobación). Permite congelar y revertir si un custodio incumple."
          />
        </div>
      </section>

      {/* Cobertura comparada */}
      <section id="coverage-matrix" className="mx-auto max-w-5xl py-10">
        <h3 className="text-xl font-semibold">Cobertura comparada</h3>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3">Suceso real</th>
                <th className="px-4 py-3">¿Lo detecta solo la chain?</th>
                <th className="px-4 py-3">¿Lo detecta nuestro esquema?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-4 py-3">Alguien altera un dato antes de registrar</td>
                <td className="px-4 py-3">❌ Lo graba “para siempre”.</td>
                <td className="px-4 py-3">✅ Inconsistencia detectada → <strong>Error + Freeze</strong>.</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Se re-envía el mismo mensaje (replay)</td>
                <td className="px-4 py-3">❌ Se acepta como nuevo.</td>
                <td className="px-4 py-3">✅ Repetición detectada → <strong>Error + Freeze</strong>.</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Custodio firma bajo coacción</td>
                <td className="px-4 py-3">✅ Firma existe.</td>
                <td className="px-4 py-3">✅ La contraparte levanta flag de riesgo y congela antes de asentar.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Analogía del camión */}
      <section id="truck-analogy" className="mx-auto max-w-5xl py-10">
        <h3 className="text-xl font-semibold">Qué hace y qué no hace el “camión”</h3>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3">Propiedad</th>
                <th className="px-4 py-3">¿Qué hace el camión?</th>
                <th className="px-4 py-3">¿Qué NO hace, aun siendo excelente?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-4 py-3"><strong>Movimiento ordenado</strong></td>
                <td className="px-4 py-3">Lleva las cajas del punto A al B sin saltarse ninguna.</td>
                <td className="px-4 py-3">No abre cajas para ver si el contenido coincide con lo declarado.</td>
              </tr>
              <tr>
                <td className="px-4 py-3"><strong>Rastro visible</strong></td>
                <td className="px-4 py-3">Queda constancia pública de la ruta y tiempos.</td>
                <td className="px-4 py-3">No certifica si la carga venía alterada desde el origen.</td>
              </tr>
              <tr>
                <td className="px-4 py-3"><strong>Precinto del remolque</strong></td>
                <td className="px-4 py-3">Sella puertas; si alguien rompe, se detecta.</td>
                <td className="px-4 py-3">No evita que se suba una caja falsa antes del precinto.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Diagrams & Legends */}
      <section id="diagrams" className="mx-auto max-w-5xl pb-12">
        <SystemLegend />
        <div className="mt-6">
          <GatewayLegend />
        </div>
      </section>

      <Footer locale={params.locale} />
    </main>
  )
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="font-semibold text-slate-900">{title}</div>
      <p className="mt-2 text-sm text-slate-600">{body}</p>
    </div>
  )
}