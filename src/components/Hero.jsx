import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Activity } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-white to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900"
            >
              Trade Smarter with Real‑Time AI Signals
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 text-lg text-zinc-600 max-w-xl"
            >
              Actionable entries, exits, and risk levels across crypto, forex, and stocks. Built for speed, clarity, and confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-3 text-white font-semibold shadow hover:shadow-lg transition-shadow">
                Start Free Trial <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#signals" className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-200 px-6 py-3 text-zinc-700 font-semibold hover:bg-zinc-50">
                See Live Signals <Activity className="h-5 w-5" />
              </a>
            </motion.div>

            <div className="mt-6 flex items-center gap-6 text-sm text-zinc-600">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-500" /> Backtested</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-indigo-500" /> Risk‑Managed</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-blue-500" /> Multi‑Market</div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-white/10 bg-zinc-900 p-4 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-blue-500/10" />
              <div className="rounded-xl bg-zinc-950 ring-1 ring-white/10 p-4">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>BTC/USDT · 1H</span>
                  <span>AI Strategy v2.3</span>
                </div>
                <div className="mt-3 h-56 sm:h-72 bg-[conic-gradient(at_bottom_left,_#1e293b_10%,_#111827_40%,_#0ea5e9_60%,_#4f46e5_80%,_#111827_90%)] rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-20">
                    {Array.from({ length: 72 }).map((_, i) => (
                      <div key={i} className="border border-zinc-700/40" />
                    ))}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-3">
                    <div className="flex items-center justify-between text-[10px] text-zinc-300/80">
                      <span>AI BUY @ 63850</span>
                      <span>SL 62340</span>
                      <span>TP 66500</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
                  <div className="rounded-lg bg-zinc-800 p-3 ring-1 ring-white/10">
                    <p className="text-zinc-400">Win Rate</p>
                    <p className="mt-1 text-white text-lg font-bold">63.4%</p>
                  </div>
                  <div className="rounded-lg bg-zinc-800 p-3 ring-1 ring-white/10">
                    <p className="text-zinc-400">Avg R:R</p>
                    <p className="mt-1 text-white text-lg font-bold">1 : 2.1</p>
                  </div>
                  <div className="rounded-lg bg-zinc-800 p-3 ring-1 ring-white/10">
                    <p className="text-zinc-400">Sharpe</p>
                    <p className="mt-1 text-white text-lg font-bold">1.82</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
