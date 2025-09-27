// app/[locale]/layout.tsx
import '../globals.css'
import type { ReactNode } from 'react'

export default function LocaleLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}