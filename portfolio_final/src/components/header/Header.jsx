import React from 'react'
import CTA from './CTA'
import ME from '../../assets/grad2.png'
import HeaderSocial from './HeaderSocial'
import "./header.css"

const Header = () => {
  return (
    <header id = "header">
      <div className="container header_container">
        <h5>
          Hello, I'm 
        </h5>
        <h1 className='lighting_text'>
          FRANCIS MONARI
        </h1>
        <h5 className='text-light'>
          A Fullstack Developer
        </h5>
        <CTA />
        <HeaderSocial/>
        <div className='me'>
          <img src={ME} alt="me" />
        </div>
        <a href="#contacts" className='scroll_down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header