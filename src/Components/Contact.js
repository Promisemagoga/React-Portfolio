import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

function Contact() {
  return (
    <div>
        <NavBar/>
        <div className='contactForm'>
        <i class="fa fa-envelope-o" aria-hidden="true"></i> 
        <h3>Get in touch</h3>
        <p>Let's work together!</p>
        <input type="text" placeholder='Full name'/>
        <input type="text" placeholder='Full Name'/>
        <input type="text" placeholder='Email adress'/>
        <input type="text" placeholder='Phone number'/>
        <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
        <button>Submit</button>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact