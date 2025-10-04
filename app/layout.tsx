import '../styles/globals.css'
import TopBar from '../components/TopBar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <TopBar />
        {/* padding-top para que el contenido no quede debajo de la barra */}
        <div className="pt-20">{children}</div>
      </body>
    </html>
  )
}

