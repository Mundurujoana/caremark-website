import React, { useEffect } from 'react'
import './about.css'
import rec from './rec.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(()=>{
    AOS.init({duration: 100})},[])
  return (
    <section className='about' id="about" >
    <div className='main'>
                 <img  className='about-img' src={rec} alt="" data-aos="fade-right" data-aos-duration="3000" />
      
    <div className='about-text'>
     <h3>About us</h3>
       <p>We are a team dedicated to bringing consistent support to every TB<br/>
    patient in Kenya. Through informed discussions with healthcare <br/>
    providers and TB patients, we believe daily presence in a patient’s<br/>
    life will go a long way to fostering complete adherence to medication.</p>
    
    <p>We understand how hard it is to adhere to medication and in particular<br/>
    TB medication with which missing a single day is always a burden and<br/>
    a risk to start medication or die. Our goal is to enable every patient to<br/>
    achieve  successful treatment</p>

    </div>
    </div>
    </section>
  )
}

export default About