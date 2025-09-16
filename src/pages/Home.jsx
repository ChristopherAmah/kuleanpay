import React from 'react'
import Hero from '../components/Hero'
import Fraud from '../components/Fraud'
import FeaturesSection from '../components/FeaturesSection'
import Faq from '../components/Faq' 
import StatsSection from '../components/StatsSection' 


const Home = () => {
  return (
    <>
        <Hero />
        <StatsSection />
        <Fraud />
        <FeaturesSection />
        <Faq />
    </>
  )
}

export default Home