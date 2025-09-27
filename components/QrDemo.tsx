// components/QrDemo.tsx
type Props = { value: string; label: string }

export default function QrDemo({ value, label }: Props) {
  const url = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(value)}`
  return (
    <div className="flex items-center gap-4 rounded-xl border border-dashed border-slate-300 p-4">
      <img src={url} alt={label} width={160} height={160} className="rounded-lg" />
      <div>
        <strong>{label}</strong>
        <p className="mt-1 break-all text-slate-600">{value}</p>
      </div>
    </div>
  )
}
