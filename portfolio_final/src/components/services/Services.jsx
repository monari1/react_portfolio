import React from 'react'
import './Services.css'
import { FaCheck } from "react-icons/fa6";


const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2> Services </h2>
      <div className='container services_container'>
         {/* FIRST SERVICE */}
         <article className='service'>
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
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
        </article>

        {/* SECOND SERVICE */}
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
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
        </article>
        {/* THIRD SERVICE */}
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
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
        </article>
      
      </div>
      
    </section>
  )
}

export default Services