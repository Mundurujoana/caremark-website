import React from 'react'
import med from './med.png'
import track from './track.png'
import verify from './verify.png'
import './context.css'

const Context = () => {
  return (
    <>
    <div className='caremark'>
    What you can do with CareMark
    </div>
        <section className='about'>
    <div className='main'>
                 <img src={med} alt="medication" />
      
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

    <section className='verify'>
    <div className='main'>
    <div className='solution-text'>
     <h3> Verify </h3>
     <p> Using the CareMark app, you will be able to verify that <br/>
 you have taken your medication by taking photos of the <br/>
blister packet so that your Health Care Provider can track <br/>
your progress and hold you accountable. </p>
    </div>

    <img src={verify} alt="verify" />

    </div>
    </section>

        <section className='track'>
    <div className='main'>
    <img src={track} alt="track" />
    <div className='about-text'>
     <h3> Track your Progress </h3>

       <p> An innovated cost-efficient notification and verification mobile <br/>
       application that motivates and helps patients to remember  <br/>
       taking medicine every day on time. Our Solution is designed to fit patients<br/>
       need for support, motivation, and love.</p>
    <p>We believe it is the hope and support that brings healing.</p>
    </div>
    </div>
    </section>
    </>

  )
}

export default Context