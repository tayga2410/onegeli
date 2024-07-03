import './App.css'
import About from './components/about/About'
import Advantages from './components/advantages/Advantages'
import Booking from './components/booking/Booking'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Values from './components/values/Values'
import Promo from './components/promo/Promo'
import Services from './components/services/Services'
import Reviews from './components/reviews/Reviews'
import Faq from './components/faq/Faq'
import Footer from './components/footer/footer'

function App() {

  return (
   <div className='container'>
    <Header />
    <Hero />
    <About />
    <Values />
    <Booking />
    <Advantages />
    <Promo />
    <Services />
    <Reviews />
    <Faq />
    <Footer />
   </div>
  )
}

export default App
