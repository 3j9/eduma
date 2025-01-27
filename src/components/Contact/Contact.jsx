import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className='contact flex'>
        <div className='space'></div>
        <div className='content'>
            <div className='text'>
                <p>CONTACT US</p>
                <h1>Get in touch</h1>
            </div>
            <div className='form_area flex'>
                <div className="formtext">
                    <h2>Send us a message</h2>
                    <p>Fell free to Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Maiores eius ratione minus odit pariatur asperiores, minima quaerat maxime magni aut
                         Maiores eius ratione minus odit pariatur asperiores, minima quaerat maxime magni aut
                          aperiam quos blanditiis dolorum at velit inventore id provident consequatur?</p>
                    <p>eduma@contact.com</p>
                    <p>+1 920 203-1239</p>
                    <p>street colonia, N23, Los angelas claifonia</p>
                </div>
                <div className="form">
                    <form action="">
                        <div>
                            <label htmlFor="name">Your Name</label>
                            <input type="text" placeholder='input your name ' name='name'/>
                        </div>
                        <div>
                            <label htmlFor="emai">Your Email</label>
                            <input type="text" placeholder='input your email ' name='email'/>
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" placeholder='put ur message'></textarea>
                        </div>
                        <button>Submit Now <i className='icon-arrow-right'></i></button>
                    </form>
                </div>
            </div>
        </div>
        <div className='space'></div>
    </div>
  )
}

export default Contact