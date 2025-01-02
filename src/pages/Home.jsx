
import Hero from '../components/Hero'
import About from '../components/About'
import Program from '../components/Program'
import Mental from '../components/Mental'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='bg-[#FDFBF4] '>
    <Hero />
    <About/>
    <Program/>
    <Mental/>
    <Footer/>
    </div>
  )
}

export default Home