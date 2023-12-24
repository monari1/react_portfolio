import React from 'react'
import "./About.css"
import ME from '../../assets/programer.jpg'
import { FiAward } from "react-icons/fi";
import { CiFolderOn } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>

        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
            <FiAward className='about_icon' />
              <h5>Experience</h5>
              <small>
                3+ Years Working
              </small>
            </article>
            <article className='about_card'>
            <FiUsers className='about_icon' />
              <h5>Cients</h5>
              <small>
                10 Clients Globally
              </small>
            </article>
            <article className='about_card'>
            <CiFolderOn className='about_icon' />
              <h5>Projects</h5>
              <small>
                10+ Completed Projects
              </small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Magnam saepe ipsa non veniam vitae a facere, cum assumenda accusamus, 
             consequatur at? Dolore voluptates placeat eum rerum modi laboriosam dolorem fugiat!
          </p>
          <a href="#contacts" className='btn btn-primary'> Let's Talk</a>


        </div>
      </div>
    </section>
  )
}

export default About