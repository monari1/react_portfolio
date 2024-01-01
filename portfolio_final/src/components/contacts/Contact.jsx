import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";


import './Contact.css'

const Contact = () => {
  return (
    <section id='contacts'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
          <MdOutlineEmail  className='contact_option_icon'/>
            <h4>Email</h4>
            <h5>francisnyasinga@gmail.com</h5>
            <a href="mailto:francismonari250@gmail.com" target='+'>Send a Message</a>
          </article>
          {/* end of email */}
          <article className='contact_option'>
          <FaWhatsapp  className='contact_option_icon' />
            <h4>Whatsapp</h4>
            <h5>+254717555587</h5>
            <a href="https://wa.me/+254717555587">Chat with Me</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows = "7" placeholder='Your message'></textarea>
          <button type='submit' className='btn btn-primary'> Send Message</button>


        </form>
      </div>
    </section>
  )
}

export default Contact