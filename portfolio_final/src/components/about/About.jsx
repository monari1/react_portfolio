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
              <h5>Clients</h5>
              <small>
                Multiple Clients
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
          As a seasoned professional in the realm of web development, I bring a wealth of experience in both backend and frontend technologies. 
          With a robust three-year background, I have honed my skills as a proficient backend developer, designing and implementing secure and scalable server-side solutions.
          </p>
          
          <p>
          A testament to my commitment to growth and diversification, I am currently delving into the realm of game development, showcasing my insatiable curiosity and passion for staying at the forefront of emerging technologies. 

          </p>
          <p>
          With a holistic understanding of the development lifecycle, 
          a proven track record, and an ever-evolving skill set, I am poised to contribute to cutting-edge projects and collaborative endeavors that demand a fusion of technical prowess and creative insight.

          </p>
          
       
          <a href="#contacts" className='btn btn-primary'> Let's Talk</a>


        </div>
      </div>
    </section>
  )
}

export default About