// components/TopBar.tsx
'use client'

export default function TopBar() {
  const link =
    'relative flex h-16 cursor-pointer items-center gap-1 px-3 text-sm font-semibold text-slate-800 transition hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500'

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center gap-5">
          <a href="/" className="w-max">
            <img
              alt="aSAFEBOX"
              width={130}
              height={32}
              src="/favicon.ico"
              className="h-8 w-auto rounded"
            />
          </a>

          <nav className="max-md:hidden">
            <ul className="flex items-center gap-0.5">
              <li><a className={link} href="#network">Network</a></li>
              <li><a className={link} href="#products">Products</a></li>
              <li><a className={link} href="#developers">Developers</a></li>
              <li><a className={link} href="#discover">Discover</a></li>
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-2">
            {/* espacio para CTAs o switcher */}
          </div>
        </div>
      </div>
    </header>
  )
}