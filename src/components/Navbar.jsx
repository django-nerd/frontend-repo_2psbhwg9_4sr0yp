import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Signals', href: '#signals' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400 flex items-center justify-center shadow-md">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-zinc-900 dark:text-white">AIX Signals</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex">
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:shadow-md transition-shadow">
                Get AI Signals
              </a>
            </div>

            <button className="md:hidden inline-flex p-2 rounded-lg border border-zinc-200 dark:border-zinc-800" onClick={() => setOpen((v) => !v)}>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-zinc-200/70 dark:border-zinc-800/70 px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800">
                  {item.label}
                </a>
              ))}
              <a href="#pricing" className="block rounded-lg px-3 py-2 text-center text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600">
                Get AI Signals
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
