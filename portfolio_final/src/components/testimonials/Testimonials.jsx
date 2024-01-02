import React from 'react'
import IMAGE from '../../assets/avata.jpg'
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
    name: 'Michael Monari', 
    review: "Exceptional Full Stack Developer: (⭐⭐⭐⭐⭐) Francis showcased outstanding full-stack expertise, seamlessly integrating front-end and back-end technologies. Their commitment to quality, innovation, and prompt communication exceeded expectations. Highly recommend for top-notch development services."
  },
  {
    avatar: IMAGE,
    name: 'Derrick Malongo', 
    review: "Reliable & Efficient Full Stack Developer: (⭐⭐⭐⭐⭐) Mr.Monari delivered a robust, scalable application with exceptional coding skills. Their commitment to deadlines, clear communication, and high-quality work made the collaboration smooth and satisfying. Would gladly hire again."
  },
  {
    avatar: IMAGE,
    name: 'Brelliant Otieno', 
    review: "Outstanding Full Stack Professional: (⭐⭐⭐⭐⭐) Francis demonstrated creative problem-solving, delivering a flawless full-stack solution. Open communication, regular updates, and dedication to client satisfaction set them apart. Highly recommend for any project requiring a skilled and reliable full-stack developer."
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