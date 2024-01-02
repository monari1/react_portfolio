import React from 'react'
import { FaUserCheck } from "react-icons/fa6";
import "./Experience.css"


const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I have</h5>
      <h2>Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_detail'>
            <FaUserCheck className='experience_details_icon'/>
            <div>
            <h4>HTML & CSS</h4>
            <small className='text_light'>Experienced</small>
            </div>
            </article>
            <article className='experience_detail'>
            <FaUserCheck className='experience_details_icon'/>
            <div>
            <h4>React.js</h4>
            <small className='text_light'>Intermediate</small>
            </div>
            </article>
            <article className='experience_detail'>
            <FaUserCheck className='experience_details_icon'/>
            <div>
            <h4>FIGMA</h4>
            <small className='text_light'>Beginner</small>
            </div>
            </article>
            <article className='experience_detail'>
            <FaUserCheck className='experience_details_icon'/>
            <div>
            <h4>Bootstrap</h4>
            <small className='text_light'>Intermediate</small>
            </div>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND */}
        <div className="experience_backend">
        <h3>Backend Development</h3>
        <div className="experience_content">
            <article className='experience_detail'>
            <FaUserCheck className='experience_details_icon'/>
            <div>
            <h4>Springboot (Java)</h4>
            <small className='text_light'>Experienced</small>
            </div>
            </article>
            <article className='experience_detail'>
            <FaUserCheck className='experience_details_icon'/>
            <div>
            <h4>Django (Python)</h4>
            <small className='text_light'>Intermediate</small>
            </div>
            </article>
            <article className='experience_detail'>
            <FaUserCheck className='experience_details_icon'/>
            <div>
            <h4>Flask (Python)</h4>
            <small className='text_light'>Intermediate</small>
            </div>
            </article>
            <article className='experience_detail'>
            <FaUserCheck className='experience_details_icon'/>
            <div>
            <h4>MySQL, Postgres, Docker</h4>
            <small className='text_light'>Intermediate</small>
            </div>
            </article>
           
          </div>  
        </div>

        {/* END OF BACKEND */}
        {/* START OF DATA */}
        <div className="experience_data">
        <h3>Data Analytics</h3>
        <div className="experience_content">
            <article className='experience_detail'>
            <FaUserCheck className='experience_details_icon'/>
            <div>
            <h4>Excel/R</h4>
            <small className='text_light'>Experienced</small>
            </div>
            </article>
            <article className='experience_detail'>
            <FaUserCheck className='experience_details_icon'/>
            <div>
            <h4>Visualization/Tableu</h4>
            <small className='text_light'>Intermediate</small>
            </div>
            </article>
            <article className='experience_detail'>
            <FaUserCheck className='experience_details_icon'/>
            <div>
            <h4>SQL</h4>
            <small className='text_light'>Intermediate</small>
            </div>
            </article>
          </div>  
        </div>
        {/* END OF DATA */}
        {/* START OF BACKEND */}


        <div className="experience_game">
        <h3>Animation and Game Development</h3>
        <div className="experience_content">      
            <article className='experience_detail'>
            <FaUserCheck className='experience_details_icon'/>
            <div>
            <h4>Blender</h4>
            <small className='text_light'>Beginner</small>
            </div>
            </article>
            <article className='experience_detail'>
            <FaUserCheck className='experience_details_icon'/>
            <div>
            <h4>Unity </h4>
            <small className='text_light'>Beginner</small>
            </div>
            </article>
            <article className='experience_detail'>
            <FaUserCheck className='experience_details_icon'/>
            <div>
            <h4>Unreal</h4>
            <small className='text_light'>Intermediate</small>
            </div>
            </article>
          </div>  
        </div>
        {/* END OF GAME AND ANIMATION */}


      </div>
    </section>
  )
}

export default Experience