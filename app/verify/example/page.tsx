// app/verify/example/page.tsx
export const dynamic = 'force-static' // prerender estático

function CodeFromURL() {
  'use client'
  const p =
    typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search)
      : new URLSearchParams()
  const code = p.get('code')
  if (!code) return null
  return (
    <p className="mt-4 text-sm text-slate-500">
      <span className="font-medium">Code:</span>{' '}
      <span className="font-mono">{code}</span>
    </p>
  )
}

export const metadata = {
  title: 'Under Construction — aSAFEBOX®',
  robots: { index: false, follow: false },
}

export default function VerifyExamplePage() {
  return (
    <main className="min-h-[60vh] px-6 py-16 text-slate-900">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold">Under Construction</h1>
        <p className="mt-3 text-slate-600">
          This verification endpoint is being prepared. The QR will soon show a
          public, privacy-preserving proof of integrity for the document or transaction.
        </p>
        <CodeFromURL />
        <a
          href="/"
          className="mt-8 inline-block rounded-full border border-slate-300 px-5 py-2 font-semibold hover:bg-slate-50"
        >
          ← Back to home
        </a>
      </div>
    </main>
  )
}