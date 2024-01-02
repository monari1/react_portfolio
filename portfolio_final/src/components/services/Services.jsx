import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services_container'>
        {/* FIRST SERVICE */}
        <article className='service'>
          <div className='service_head'>
            <h3>Frontend Development </h3>
          </div>
          <ol className='service_list'>
            <li>i. Website and Web Applications Development</li>
            <li>ii. Develop single-page applications (SPAs) for a seamless user experience.</li>
            <li>iii. Offer UI/UX design services to create visually appealing and user-friendly interfaces.</li>
            <li>iv. Optimize landing pages for conversion and user engagement.</li>
            <li>v. Provide advice on technology choices, performance optimization, and user experience.</li>
            <li>vi. Offer testing services to ensure websites function correctly across different browsers and devices.</li>
            <li>vii. Help teams improve their skills and stay updated on industry trends.</li>
          </ol>
        </article>

        {/* SECOND SERVICE */}
        <article className='service'>
          <div className='service_head'>
            <h3>Backend Development</h3>
          </div>
          <ol className='service_list'>
            <li>i. Provide end-to-end development services, handling both the frontend and backend aspects of web applications.</li>
            <li>ii. Design and build robust APIs to facilitate communication between the frontend and backend.</li>
            <li>iii. Ensure the security of backend systems by implementing measures such as input validation, encryption, and secure coding practices.</li>
            <li>iv. Set up monitoring and logging systems to track the health and performance of backend services.</li>
            <li>v. Create clear and comprehensive documentation for APIs to assist frontend developers and third-party integrators.</li>
          </ol>
        </article>

        {/* THIRD SERVICE */}
        <article className='service'>
          <div className='service_head'>
            <h3>Data Analytics</h3>
          </div>
          <ol className='service_list'>
            <li>i. Create interactive and visually appealing charts, graphs, and dashboards to represent data.</li>
            <li>ii. Work with APIs that provide real-time or historical data, such as financial data, weather information, or social media metrics.</li>
            <li>iii. Create reports and dashboards that provide actionable insights.</li>
            <li>iv. Develop custom reporting systems that generate detailed reports based on specified criteria.</li>
            <li>v. Ensure compliance with data protection regulations.</li>
          </ol>
        </article>
      </div>
    </section>
  );
}

export default Services;
