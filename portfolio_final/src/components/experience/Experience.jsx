import React from 'react'
import { FaUserCheck } from "react-icons/fa6";


const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I have</h5>
      <h2>My experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend development</h3>
          <div className="experience_content">
            <article className='experience_detail'>
            <FaUserCheck />
            <h4>HTML & CSS</h4>
            <small className='text_light'>Experienced</small>
            </article>
            <article className='experience_detail'>
            <FaUserCheck />
            <h4>REACT</h4>
            <small className='text_light'>Intermediate</small>
            </article>
            <article className='experience_detail'>
            <FaUserCheck />
            <h4>FIGMA</h4>
            <small className='text_light'>Beginner</small>
            </article>
            <article className='experience_detail'>
            <FaUserCheck />
            <h4>JS</h4>
            <small className='text_light'>Intermediate</small>
            </article>
            <article className='experience_detail'>
            <FaUserCheck />
            <h4>BOOTSTRAP AND TAILWIND</h4>
            <small className='text_light'>Intermediate</small>
            </article>
          </div>
        </div>
        <div className="experience_backend">
        <h3>Backend development</h3>
          <div className="experience_content">
            <article className='experience_detail'>
            <FaUserCheck />

            </article>
          </div>
          
        </div>
      </div>




    </section>
  )
}

export default Experience