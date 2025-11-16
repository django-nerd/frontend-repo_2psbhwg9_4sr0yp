import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Signals from './components/Signals'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-zinc-50 text-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <Signals />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

export default App
