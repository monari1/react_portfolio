import React from 'react'
import CTA from './CTA'
import ME from '../../assets/img1.jpg'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>
          Hello, I'm 
        </h5>
        <h1>
          FRANCIS MONARI
        </h1>
        <h5 className='text-light'>
          Fullstack Developer
        </h5>
        <CTA />
        <HeaderSocial/>
        <div className='me'>
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll_down'Scroll Down></a>

      </div>
    </header>
  )
}

export default Header