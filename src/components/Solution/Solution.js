import  React,{ useEffect } from 'react'
import './solution.css'
import about from './about.png'
import AOS from 'aos'
import 'aos/dist/aos.css'



const Solution = () => {
  useEffect(()=>{
    AOS.init({duration: 3000})},[])

  return (
 <section className='solution' id="solution" >
    <div className='main'>
    <div className='solution-text'>
     <h3>Our Solution</h3>
<p> An application that motivates and helps patients to remember <br/>
taking medicine every day on time. Our Solution is designed to fit patients
need for support, motivation, and love.<br/>
We believe it is the hope and support that brings healing.</p>
    </div>

    <img src={ about } alt="splash" data-aos="fade-left" data-aos-duration="3000"/>

    </div>
    </section>
  )
}

export default Solution