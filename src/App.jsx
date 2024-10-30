import About from "./components/About"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Mental from "./components/Mental"
import Navbar from "./components/Navbar"
import Program from "./components/Program"

function App() {


  return (
  <div>
    <div className="bg-[#FDFBF4]">
    <Navbar/>
    <Hero />
    <About/>
    <Program/>
    <Mental/>
    <Footer/>
    </div>
  </div>
  )
}

export default App
