import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";




const HeaderSocial = () => {
  return (
    <div className='header_social'>
        <a href="https://www.linkedin.com/in/francis-monari-969436138/" target= "_blank" rel="noreferrer"> <FaLinkedin /></a>
        <a href="https://github.com/monari1" target='_blank' rel="noreferrer"> <FaGithub /> </a>
        <a href="https://twitter.com/xmonari" target='_blank' rel="noreferrer"> <FaSquareXTwitter /></a>


    </div>
  )
}

export default HeaderSocial