import React from 'react'
import './mainsection.css';
import {Link } from 'react-scroll'


const MainSection = () => {
  return (
    <div className='header' >

      <div className="intro">
   <h1 data-aos="zoom-out-down">Care Mark</h1>
   <p data-aos="fade-up">Tuberculosis (TB) is the fourth leading cause of death in Kenya. Despite most forms of TB being curable, one of the main barriers to recovery includes lack of adherence to the long and complicated treatment regimens that involve the daily intake of medicines over the course of 6-24 months.</p>
   <p data-aos="fade-up">We at CareMark are at a Mission to Save Lives By Delivering Powerful Behavioral Interventions Across Mobile Phones.</p>
  
   <Link to='works' className='btn' activeClass="active"
            spy={true}
            smooth={true}
            offset={-180}
            duration={50} data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
How it Works 
</Link>
   </div>
    </div>
  )
}

export default MainSection