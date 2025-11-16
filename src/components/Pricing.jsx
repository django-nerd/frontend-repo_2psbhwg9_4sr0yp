import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: '/7 days',
    highlight: 'Perfect to try the signals',
    features: [
      'Top pairs only',
      '15m and 1H timeframes',
      'Email alerts',
      'Community access',
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Pro',
    price: '$39',
    period: '/mo',
    highlight: 'Best for active traders',
    features: [
      'All markets & pairs',
      'All timeframes',
      'Push + Telegram alerts',
      'Advanced risk tools',
      'Priority support',
    ],
    cta: 'Go Pro',
    featured: true,
  },
  {
    name: 'Funded',
    price: '$99',
    period: '/mo',
    highlight: 'For high-volume desks',
    features: [
      'Custom strategies',
      'Desk seats',
      'API & webhooks',
      'SLA support',
    ],
    cta: 'Contact Sales',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">Simple, transparent pricing</h2>
          <p className="mt-2 text-zinc-600">Start free, upgrade only if you love it.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border p-6 shadow-sm ${t.featured ? 'border-indigo-400 bg-gradient-to-b from-indigo-50 to-white' : 'border-zinc-200 bg-white'}`}>
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900">{t.name}</h3>
                  <p className="text-sm text-zinc-600">{t.highlight}</p>
                </div>
                {t.featured && (
                  <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-semibold text-indigo-700">Popular</span>
                )}
              </div>
              <div className="mt-4 flex items-end gap-1">
                <p className="text-3xl font-extrabold text-zinc-900">{t.price}</p>
                <p className="text-zinc-600">{t.period}</p>
              </div>

              <ul className="mt-6 space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-zinc-700">
                    <Check className="h-4 w-4 text-emerald-500" /> {f}
                  </li>
                ))}
              </ul>

              <a href="#" className={`mt-6 block w-full rounded-xl px-4 py-2.5 text-center font-semibold ${t.featured ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-zinc-900 text-white hover:bg-black'}`}>
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
