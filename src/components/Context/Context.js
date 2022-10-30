import { useEffect } from 'react'
import med from './med.png'
import track from './track.png'
import verify from './verify.png'
import './context.css'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Context = () => {
  useEffect(()=>{
    AOS.init({duration: 3000})},[])
  return (
    <>
    <div className='caremark' data-aos="fade-up" data-aos-anchor-placement="top-center">
    What you can do with CareMark
    </div>
        <section className='about' data-aos="fade-up" data-aos-anchor-placement="top-center">
    <div className='main'>
                 <img src={med} alt="medication" data-aos="fade-left" data-aos-duration="3000" />
      
    <div className='about-text'>
     <h3>Set a reminder </h3>

       <p> CareMark Medication Reminders is  an excellent way to stay on  <br/>
 track and maintain a consistent schedule. Ensures that you or a loved <br/>
 one is taking their TB medications correctly to avoid unnecessary risk <br/>
 and serious illness. You are able to Set a time that is convenient for you<br/>
 to receive notifications reminding you to take your medication.</p>
    </div>
    </div>
    </section>


    <section className='verify' data-aos="fade-up" data-aos-anchor-placement="top-center">
    <div className='main'>
    <div className='solution-text'>
     <h3 data-aos="fade-right" data-aos-duration="3000"> Verify </h3>
     <p data-aos="fade-right" data-aos-duration="3000"> Using the CareMark app, you will be able to verify that <br/>
 you have taken your medication by taking photos of the <br/>
blister packet so that your Health Care Provider can track <br/>
your progress and hold you accountable. </p>
    </div>

    <img src={verify} alt="verify" data-aos="fade-left" data-aos-duration="3000"/>

    </div>
    </section>

        <section className='track' data-aos="fade-up" data-aos-anchor-placement="top-center" >
    <div className='main'>
    <img src={track} alt="track" data-aos="fade-right" />
    <div className='about-text'>
     <h3> Track your Progress </h3>

       <p> Adherence is the most important thing to consider when <br/>
beginning treatment, and The CareMark app will allow you <br/>
to track your adherence.</p>
    </div>
    </div>
    </section>
    </>

  )
}

export default Context