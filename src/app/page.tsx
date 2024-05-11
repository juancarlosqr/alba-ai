import { CallToAction } from '@/components/sections/CallToAction'
import { Footer } from '@/components/sections/Footer'
// import { Hero } from '@/components/Hero'
import { Header } from '@/components/sections/Header'
import { Rooms } from '@/components/sections/Rooms'
import { Services } from '@/components/sections/Services'
import { Sustainability } from '@/components/sections/Sustainability'

export default function Home() {
  return (
    <div className="bg-white">
      <Header />

      <main>
        {/* Rooms section */}
        <Rooms />

        {/* Sustainability section */}
        <Sustainability />

        {/* Services section */}
        <Services />

        {/* CTA section */}
        <CallToAction />
      </main>

      <Footer />
    </div>
  )
}
