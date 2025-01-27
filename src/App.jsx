import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programme from './components/Programme/Programme'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import "./assets/icons/style.css"



const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Programme />
      <About />
      <Campus />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App