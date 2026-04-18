import { useState } from 'react'
import Hero from './components/Hero/Hero.jsx'
import Footer from './components/Layout/Footer.jsx'
import Navbar from './components/Layout/Navbar.jsx'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Footer/>
    </>
  )
}

export default App
