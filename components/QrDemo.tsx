// components/QrDemo.tsx
type Props = { value: string; label?: string }

export default function QrDemo({ value, label }: Props) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-dashed border-slate-300 p-4">
      {/* Placeholder QR (SVG simple) */}
      <div
        aria-hidden
        className="grid h-24 w-24 place-items-center rounded-lg bg-slate-100 text-[10px] text-slate-500"
        title={value}
      >
        QR
      </div>
      <div>
        <strong>{label ?? 'QR'}</strong>
        <p className="mt-1 max-w-prose text-slate-600 break-all">
          {value}
        </p>
      </div>
    </div>
  )
}