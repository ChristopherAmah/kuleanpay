import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import CtaSection from './components/CtaSection'
import GetInTouch from './components/GetInTouch'
import ConnectSection from './components/ConnectSection'
import Footer from './components/Footer'
import Escrow from './pages/Escrow'
import DigitalBanking from './pages/DigitalBanking'
import Blog from './pages/Blog'
import Merchant from './pages/Merchant'

function App() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/escrow' element={<Escrow />} />
        <Route path='/digital-banking' element={<DigitalBanking />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/merchant-payments' element={<Merchant />} />
      </Routes>
      <CtaSection />
      <GetInTouch />
      <ConnectSection />
      <Footer />
    </div>
  )
}

export default App