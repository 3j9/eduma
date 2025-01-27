import React from 'react'
import './navbar.css'
import { useEffect, useState } from 'react'

export const Navbar = () => {
  const [scroll, setScroll] = useState(false)



  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        setScroll(true);
      } else {
          setScroll(false);
      }
    })
  }, [])
  return (

    <nav className={`flex ${scroll ? 'nav_back' : ''}`}>
        <div className='logo'>
            <h1>EDUMA</h1>
        </div>
        <div className='links'>
            <ul className='flex'>
                <li><a href="">Home</a></li>
                <li><a href="">Program</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Campus</a></li>
                <li><a href="">Testimonials</a></li>
                <li><a href="">Contact Us</a></li>
            </ul>
        </div>
        <div className='menut'>
            <div>
              <a href="">x</a>
            </div>
        </div>
    </nav>
  )
}
