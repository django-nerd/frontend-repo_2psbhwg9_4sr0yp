import { LineChart, ShieldCheck, Zap, Brain, BarChart3, Globe2 } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI Strategy Engine',
    desc: 'Combines pattern recognition, order flow, and momentum to deliver high-conviction calls.'
  },
  {
    icon: LineChart,
    title: 'Smart Entries/Exits',
    desc: 'Clear entries with dynamic stop loss and profit targets for optimal risk management.'
  },
  {
    icon: BarChart3,
    title: 'Backtested Metrics',
    desc: 'See win rate, avg R:R, and Sharpe for each pair and timeframe.'
  },
  {
    icon: ShieldCheck,
    title: 'Risk Controls',
    desc: 'Position sizing and risk caps built-in so you never overexpose.'
  },
  {
    icon: Zap,
    title: 'Real-time Alerts',
    desc: 'Instant push, email, and Telegram alerts when conditions trigger.'
  },
  {
    icon: Globe2,
    title: 'Multi‑Market',
    desc: 'Crypto, FX, and equities covered across intraday and swing timeframes.'
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">Built for serious traders</h2>
          <p className="mt-2 text-zinc-600">Everything you need to act decisively—without noise.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 text-white flex items-center justify-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">{f.title}</h3>
              <p className="mt-1 text-sm text-zinc-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
