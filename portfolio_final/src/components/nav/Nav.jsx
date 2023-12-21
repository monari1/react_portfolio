import React from 'react'
import './Nav.css'
import { CiHome } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { LuBookMinus } from "react-icons/lu";
import { RiServiceLine } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { useState } from 'react';





const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
<nav>
  <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><CiHome /></a>
  <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><CiUser /></a>
  <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><LuBookMinus /></a>
  <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
  <a href="#contacts" onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''}><AiOutlineMessage /></a>
 
</nav>  )
}

export default Nav