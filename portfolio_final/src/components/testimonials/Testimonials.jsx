import React from 'react'
import IMAGE from '../../assets/grad2 (1).jpg'
import './Testimonials.css'

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
        <div className="container testimonials_container">
          {
            data.map(({avatar, name, review}, index)=>{
              return(
                <article key={index} className='testimonial'>
                  <div className="client_avatar">
                    <img src={avatar} alt="" />
                  </div>
                  <h5 className='client_name'> {name}</h5>
                  <small className='client_review'>{review} </small>
                </article>
              )

            })
          }
         
        </div>
    </section>

  
  )
}


export default Testimonials