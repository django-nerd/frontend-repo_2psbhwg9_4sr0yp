import { useEffect, useState } from 'react'
import { ArrowUpRight, ArrowDownRight, Activity, Clock4 } from 'lucide-react'

const mockSymbols = ['BTC/USDT', 'ETH/USDT', 'EUR/USD', 'XAU/USD', 'AAPL', 'TSLA']

function randomSignal() {
  const long = Math.random() > 0.5
  const price = (Math.random() * 1000 + (long ? 2000 : 1000)).toFixed(2)
  const conf = Math.floor(Math.random() * 40) + 60
  return {
    id: crypto.randomUUID(),
    symbol: mockSymbols[Math.floor(Math.random() * mockSymbols.length)],
    direction: long ? 'LONG' : 'SHORT',
    confidence: conf,
    entry: price,
    sl: (price * (long ? 0.97 : 1.03)).toFixed(2),
    tp: (price * (long ? 1.04 : 0.96)).toFixed(2),
    timeframe: ['5m', '15m', '1H', '4H'][Math.floor(Math.random() * 4)],
    time: new Date().toLocaleTimeString(),
  }
}

export default function Signals() {
  const [signals, setSignals] = useState(() => Array.from({ length: 6 }, randomSignal))

  useEffect(() => {
    const id = setInterval(() => {
      setSignals((prev) => [randomSignal(), ...prev].slice(0, 8))
    }, 2500)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="signals" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">Live AI Signals</h2>
            <p className="mt-1 text-zinc-600">Auto-refreshing feed with entries, SL, TP and confidence.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-zinc-600">
            <Activity className="h-4 w-4 text-emerald-500" /> Real-time stream
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {signals.map((s) => (
            <div key={s.id} className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-zinc-500">{s.time} · {s.timeframe}</p>
                  <h3 className="text-lg font-semibold text-zinc-900">{s.symbol}</h3>
                </div>
                <div className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${s.direction === 'LONG' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
                  {s.direction === 'LONG' ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />} {s.direction}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
                <div className="rounded-lg bg-zinc-50 p-3">
                  <p className="text-xs text-zinc-500">Entry</p>
                  <p className="font-semibold text-zinc-900">{s.entry}</p>
                </div>
                <div className="rounded-lg bg-zinc-50 p-3">
                  <p className="text-xs text-zinc-500">Stop</p>
                  <p className="font-semibold text-zinc-900">{s.sl}</p>
                </div>
                <div className="rounded-lg bg-zinc-50 p-3">
                  <p className="text-xs text-zinc-500">Target</p>
                  <p className="font-semibold text-zinc-900">{s.tp}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-zinc-600">
                <div className="inline-flex items-center gap-2">
                  <div className="h-1.5 w-24 rounded bg-zinc-200 overflow-hidden">
                    <div className={`h-full ${s.confidence > 75 ? 'bg-emerald-500' : 'bg-amber-500'}`} style={{ width: `${s.confidence}%` }} />
                  </div>
                  <span className="font-medium">{s.confidence}%</span>
                </div>
                <div className="inline-flex items-center gap-1 text-zinc-500">
                  <Clock4 className="h-4 w-4" /> {s.timeframe}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
