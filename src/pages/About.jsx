import React from 'react'
import AboutBanner from '../components/AboutBanner'
import AboutSection from '../components/AboutSection'
import StatsSection from '../components/StatsSection'
import Flagship from '../components/Flagship'
import Team from '../components/Team'

const Home = () => {
  return (
    <>
        <AboutBanner />
        <StatsSection />
        <Flagship />
        <AboutSection />
        <Team />
    </>
  )
}

export default Home