import { Twitter, Mail, Shield } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">© {new Date().getFullYear()} AIX Signals. All rights reserved.</p>
          <div className="flex items-center gap-4 text-zinc-500">
            <a href="#" className="hover:text-zinc-700 inline-flex items-center gap-1 text-sm"><Shield className="h-4 w-4" /> Terms</a>
            <a href="#" className="hover:text-zinc-700 inline-flex items-center gap-1 text-sm">Privacy</a>
            <a href="#" className="hover:text-zinc-700"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="hover:text-zinc-700"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
