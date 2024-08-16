import { CallToAction } from '@/components/sections/CallToAction'
import { Footer } from '@/components/sections/Footer'
import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
// import { Rooms } from '@/components/sections/Rooms'
// import { Services } from '@/components/sections/Services'
import { Showcase } from '@/components/sections/Showcase'

export default function Home() {
  return (
    <div className="bg-white">
      <Header />

      <main>
        <Hero />
        {/* <Rooms /> */}
        <Showcase />
        <CallToAction />
        {/* <Services /> */}
      </main>

      <Footer />
    </div>
  )
}
