import Hero from './components/Hero/Hero.jsx'
import Footer from './components/Layout/Footer.jsx'
import Navbar from './components/Layout/Navbar.jsx'
import CompanyShowcase from './components/CompanyShowcase/CompanyShowcase.jsx'
import './styles/App.css'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <CompanyShowcase/>
      <Footer/>
    </>
  )
}

export default App
