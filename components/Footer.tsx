export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 text-center text-sm text-slate-500">
      <p>© {new Date().getFullYear()} aSAFEBOX® · Jacob Integrity Lab</p>
      <p className="mt-1">Hecho con Next.js + Tailwind. Cumplimos buenas prácticas de accesibilidad y SEO.</p>
    </footer>
  )
}
