import React from 'react'
import './Footer.css'
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";



const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'> Monari</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://twitter.com/XMonari" target='_blank' rel="noreferrer"> <FaXTwitter /></a>
        <a href="https://www.linkedin.com/in/francis-monari-969436138/" target='_blank' rel="noreferrer"> <CiLinkedin  /></a>
        <a href="https://github.com/monari1" target='_blank' rel="noreferrer"><FaGithub /></a>
      </div>
      <div className="footer_copyright">
        <small>
          &copy; Francis Monari. All rights reserved.
        </small>
      </div>
    </footer>
    
  )
}

export default Footer