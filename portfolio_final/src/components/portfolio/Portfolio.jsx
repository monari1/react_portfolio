import React from 'react'
import IMG1 from "../../assets/lofin.jpeg"
import IMG2 from "../../assets/lokash.jpg"
import IMG3 from "../../assets/health.jpg"
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Longitude Landing Page</h3>
          <div className="portfolio_item_cta">
          <a href="https://www.longitudefinance.co.ke/" className='btn btn-primary' target='_blank' rel="noreferrer">Demo</a>
          </div>
        </article>
        
      
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG2} alt="" />
          </div>
          <h3>LoKash App</h3>
          <div className="portfolio_item_cta">
          <a href="https://apkcombo.com/lokash/com.longitudefinance/" className='btn btn-primary' target='_blank' rel="noreferrer">Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Health Guard</h3>
          <div className="portfolio_item_cta">
          <a href="https://github.com/monari1/healthguard" className='btn btn-primary' target='_blank' rel="noreferrer"> Demo</a>
          </div>
        </article>
       
      </div>
    </section>
  )
}

export default Portfolio