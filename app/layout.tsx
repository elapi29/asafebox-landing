// app/layout.tsx
import '../styles/globals.css'
import type { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {/* El TopBar va en app/[locale]/layout.tsx */}
        <div className="pt-20">{children}</div>
      </body>
    </html>
  )
}

