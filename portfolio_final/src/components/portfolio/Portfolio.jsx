import React from 'react'
import IMG1 from "../../assets/download.jpeg"

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h3>Portfolio</h3>
      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>

        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>

        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>

        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>

        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>

        </article>


      </div>
    </section>
  )
}

export default Portfolio