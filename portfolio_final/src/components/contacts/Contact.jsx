import React from 'react'
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
          <MdOutlineEmail />
            <h4>Email</h4>
            <h5>francisnyasinga@gmail.com</h5>
            <a href="mailto:francismonari250@gmail.com">Send a Message</a>
          </article>
          {/* end of email */}
          <article className='contact_option'>
          <FaWhatsapp  />
            <h4>Whatsapp</h4>
            <h5>+254717555587</h5>
            <a href="https://api.whatsapp.com/send?phone=+254717555587">Send a Message</a>
          </article>
       
        </div>
      </div>
    </section>
  )
}

export default Contact