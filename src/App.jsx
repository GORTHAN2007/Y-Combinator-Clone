import Hero from './components/Hero/Hero.jsx'
import Footer from './components/Layout/Footer.jsx'
import Navbar from './components/Layout/Navbar.jsx'
import CompanyShowcase from './components/CompanyShowcase/CompanyShowcase.jsx'
import History from './components/History/History.jsx'
import FoundersComments from './components/FoundersComments/FoundersComments.jsx'
import FoundersGrid from './components/FoundersGrid/FoundersGrid.jsx'
import PartnersGrid from './components/PartnersGrid/PartnersGrid.jsx'
import Knowledge from './components/Knowledge section/Knowledge.jsx';
import './styles/App.css';


function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <CompanyShowcase/>
      <History/>
      <FoundersComments/>
      <FoundersGrid/>
      <PartnersGrid/>
      <Knowledge/>
      <Footer/>
    </>
    )
    
  }
export default App
