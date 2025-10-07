// app/page.tsx  (nuevo)
'use client'

import { useEffect } from 'react'

export default function RootRedirect() {
  useEffect(() => {
    // Relativo: si estás en /asafebox-landing/ te lleva a /asafebox-landing/es/
    window.location.replace('es/')
  }, [])
  return (
    <noscript>
      <meta httpEquiv="refresh" content="0; url=es/" />
      <a href="es/">Continue</a>
    </noscript>
  )
}
