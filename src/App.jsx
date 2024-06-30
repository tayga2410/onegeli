import './App.css'
import About from './components/about/About'
import Booking from './components/booking/Booking'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Values from './components/values/Values'

function App() {

  return (
   <div className='container'>
    <Header />
    <Hero />
    <About />
    <Values />
    <Booking />
   </div>
  )
}

export default App
