import React from 'react'
import './mainsection.css';
import {Link } from 'react-scroll'


const MainSection = () => {
  return (
    <div className='header'>

      <div className="intro">
   <h1>Care Mark</h1>
   <p>Tuberculosis (TB) is the fourth leading cause of death in Kenya.<br/>
   Despite most forms of TB being curable, one of the main barriers to 
   recovery includes lack of adherence to the long and complicated treatment regimens <br/>
   that involve the daily intake of medicines over the course of 6-24 months.</p>
  
   <Link to='works' className='btn' activeClass="active"
            spy={true}
            smooth={true}
            offset={-180}
            duration={50}>
How it Works 
</Link>
   </div>
    </div>
  )
}

export default MainSection