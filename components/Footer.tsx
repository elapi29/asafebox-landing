// components/Footer.tsx
import withBase from './lib/withBase'

export default function Footer() {
  const logo = withBase('/brand/asafebox-logo.svg')
  return (
    <footer className="mx-auto mt-24 max-w-6xl px-6 py-12 text-sm text-slate-600">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="AsafeBox" className="h-5 w-auto" />
          <span>© {new Date().getFullYear()} AsafeBox</span>
        </div>
        <div className="flex gap-4">
          <a href="mailto:hello@asafebox.io" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Legal</a>
        </div>
      </div>
    </footer>
  )
}

