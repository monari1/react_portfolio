import React from 'react'
import IMAGE from '../../assets/grad2 (1).jpg'
import './Testimonials.css'
import { Pagination } from 'swiper/modules';

// import Swiper core and required modules
import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/pagination';

const data = 

[ {
    avatar: IMAGE,
    name: 'Francis Monari', 
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quo eos, itaque voluptate earum non dignissimos! Perspiciatis iure nulla libero!"
  },
  {
    avatar: IMAGE,
    name: 'Kimani Mburu', 
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quo eos, itaque voluptate earum non dignissimos! Perspiciatis iure nulla libero!"
  },
  {
    avatar: IMAGE,
    name: 'Kevin Wamalwa', 
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quo eos, itaque voluptate earum non dignissimos! Perspiciatis iure nulla libero!"
  },

]
const Testimonials = () => {
  return (
    <section>
        <h5>What my Clients Say</h5>
        <h2>Testimonials</h2>
        <Swiper className="container testimonials_container"
         modules={[ Pagination]}
         spaceBetween={40}
         slidesPerView={1}
         pagination={{ clickable: true }}
        
        >
          {
            data.map(({avatar, name, review}, index)=>{
              return(
                <SwiperSlide key={index} className='testimonial'>
                  <div className="client_avatar">
                    <img src={avatar} alt="" />
                  </div>
                  <h5 className='client_name'> {name}</h5>
                  <small className='client_review'>{review} </small>
                </SwiperSlide>
              )

            })
          }
         
        </Swiper>
    </section>

  
  )
}


export default Testimonials