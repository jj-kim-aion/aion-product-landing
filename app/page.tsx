import Hero from '@/components/Hero'
import WhatWeDo from '@/components/WhatWeDo'
import HowItWorks from '@/components/HowItWorks'
import Results from '@/components/Results'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navigation />
      <Hero />
      <WhatWeDo />
      <HowItWorks />
      <Results />
      <CTA />
      <Footer />
    </main>
  )
}
