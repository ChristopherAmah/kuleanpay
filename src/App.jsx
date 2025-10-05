import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import './App.css'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import CtaSection from './components/CtaSection'
import GetInTouch from './components/GetInTouch'
import ConnectSection from './components/ConnectSection'
import Footer from './components/Footer'
import Escrow from './pages/Escrow'
import DigitalBanking from './pages/DigitalBanking'
import Partners from './pages/Partners'
import Merchant from './pages/Merchant'
import WhyKuleanpay from './pages/WhyKuleanpay'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndCondition from './pages/TermsAndCondition'

function App() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/escrow' element={<Escrow />} />
        <Route path='/digital-banking' element={<DigitalBanking />} />
        <Route path='/partners' element={<Partners />} />
        <Route path='/merchant-payments' element={<Merchant />} />
        <Route path='/why-kuleanpay' element={<WhyKuleanpay />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-of-use' element={<TermsAndCondition />} />
      </Routes>
      <CtaSection />
      <GetInTouch />
      <ConnectSection />
      <Footer />
    </div>
  )
}

export default App