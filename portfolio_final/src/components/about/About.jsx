import React from 'react'
import ME from '../../assets/programer.jpg'
import { FiAward } from "react-icons/fi";
import { CiFolderOn } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className="about_me_image">
            <img src={ME} alt="" />
          </div>

        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
            <FiAward className='about_icon' />
              <h5>experiene</h5>
              <small>
                3+ Years working
              </small>
            </article>
            <article className='about_card'>
            <FiUsers className='about_icon' />
              <h5>Cients</h5>
              <small>
                50 clients globally
              </small>
            </article>
            <article className='about_card'>
            <CiFolderOn className='about_icon' />
              <h5>Projects</h5>
              <small>
                10+ completed projects
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