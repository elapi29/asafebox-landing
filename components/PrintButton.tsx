// components/PrintButton.tsx
'use client'

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => typeof window !== 'undefined' && window.print()}
      className="rounded-full border border-slate-300 px-4 py-1.5 text-sm font-semibold hover:bg-slate-50"
    >
      Print / Save as PDF
    </button>
  )
}
