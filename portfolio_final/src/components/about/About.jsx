import React from 'react'
import ME from '../../assets/download.jpeg'

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
              <h5>experiene</h5>
              <small>
                3+ Years working
              </small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About