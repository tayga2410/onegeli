import './App.css'

import About from './components/about/About'
import Advantages from './components/advantages/Advantages'
import Booking from './components/booking/Booking'
import Hero from './components/hero/Hero'
import Values from './components/values/Values'
import Promo from './components/promo/Promo'
import Services from './components/services/Services'
import Reviews from './components/reviews/Reviews'
import Faq from './components/faq/Faq'

function MainPage() {

  return (
   <div>
    <Hero />
    <About />
    <Values />
    <Booking />
    <Advantages />
    <Promo />
    <Services />
    <Faq />
   </div>
  )
}

export default MainPage
