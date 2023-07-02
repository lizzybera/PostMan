import React from 'react'
import Hero from '../components/static/Hero'
import AfterHero from '../components/reUse/AfterHero'
import Second from '../components/reUse/Second'
import Third from '../components/reUse/Third'
import Fourth from '../components/reUse/Fourth'
import Fifth from '../components/reUse/Fifth'
import Sixth from '../components/reUse/Sixth'
import Header from '../components/block/Header'
import Footer from '../components/block/Footer'

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AfterHero />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Footer />
      </div>
  )
}

export default LandingPage
