// app/page.tsx
import { redirect } from 'next/navigation'

export default function Root() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
  // redirige a /es, pero con base path cuando estás en GitHub Pages
  redirect(`${base}/es`)
}