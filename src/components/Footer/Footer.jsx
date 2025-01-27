import React from 'react'
import './Footer.css'

function Footer() {
  return (
    
    <footer className='flex'>
        <div className='space'></div>
        <div className='footer flex'>
            <p>&copy; 2024 My Website. All rights reserved.</p>
            <div className='flex'>
                <a href="#">Terms of services</a>
                <a href="#">Privacy Policy</a>
            </div>
        </div>
        <div className='space'></div>
    </footer>
  )
}

export default Footer