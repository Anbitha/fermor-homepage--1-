import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhatWeDo from '../components/WhatWeDo'
import Ask from '../components/Ask'
import Forecast from '../components/Forecast'
import Investments from '../components/Investments'
import Cta from '../components/Cta'
import News from '../components/News'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <Ask />
        <Forecast />
        <Investments />
        <Cta />
        <News />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
