// app/page.tsx
'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Root() {
  const router = useRouter()
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '' // ej: "/asafebox-landing"

  useEffect(() => {
    router.replace(`${base}/es`)
  }, [router, base])

  return null
}