import './App.css'
import About from './components/about/About'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'

function App() {

  return (
   <div className='container'>
    <Header />
    <Hero />
    <About />
   </div>
  )
}

export default App
