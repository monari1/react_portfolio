import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";




const HeaderSocial = () => {
  return (
    <div className='header_social'>
        <a href="https://linkedin.com" target= "_blank"> <FaLinkedin /></a>
        <a href="https://github.com" target='_blank'> <FaGithub /> </a>
        <a href="https://twitter.com" target='_blank'> <FaSquareXTwitter /></a>


    </div>
  )
}

export default HeaderSocial