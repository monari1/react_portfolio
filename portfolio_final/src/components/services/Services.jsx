import React from 'react'
import './Services.css'
import { FaCheck } from "react-icons/fa6";


const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h1> Services </h1>
      <div className='container services_container'>
         {/* FIRST SERVICE */}
         <article>
          <div className="service_head">
            <h3>UI/UX Design</h3>
            <ul className='service_list'>
              <li><FaCheck className='service_list_icon'/>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p></li>
                <li><FaCheck className='service_list_icon'/>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p></li>
                <li><FaCheck className='service_list_icon'/>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p></li>
                <li><FaCheck className='service_list_icon'/>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p></li>
                <li><FaCheck className='service_list_icon'/>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p></li>
                
            </ul>
          </div>
        </article>

        {/* SECOND SERVICE */}
        <article>
          <div className="service_head">
            <h3>WEB DEVELOPMENT</h3>
            <ul className='service_list'>
              <li><FaCheck className='service_list_icon'/>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p></li>
                <li><FaCheck className='service_list_icon'/>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p></li>
                <li><FaCheck className='service_list_icon'/>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p></li>
                <li><FaCheck className='service_list_icon'/>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p></li>
                <li><FaCheck className='service_list_icon'/>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p></li>
                
            </ul>
          </div>
        </article>

        {/* THIRD SERVICE */}
        <article>
          <div className="service_head">
            <h3>DATA ANALYSIS</h3>
            <ul className='service_list'>
              <li><FaCheck className='service_list_icon'/>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p></li>
                <li><FaCheck className='service_list_icon'/>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p></li>
                <li><FaCheck className='service_list_icon'/>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p></li>
                <li><FaCheck className='service_list_icon'/>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p></li>
                <li><FaCheck className='service_list_icon'/>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p></li>
                
            </ul>
          </div>
        </article>
      
      </div>
      
    </section>
  )
}

export default Services