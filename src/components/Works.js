import React from 'react'
import one from "./one.png";
import two from "./two.png";
import './works.css';

const Works = () => {
  return (
    <div className='works' id="works">
<h5 className="secTitle"> How it Works
  </h5>  
<div className="services">
<div className="service-one">
    <img src={one} alt="" />
    <div className="title-one">
    Download the app
    </div>
    <p>
    Download the CareMark App on 
<br/>and complete the registration
    </p>
</div>

<div className="service-one">
    <img src={two} alt="" />
    <div className="title-one">
    Sign in to your account
    </div>
    <p>
    Complete the registration  with  <br/>
    a few easy steps
    </p>
</div>

<div className="service-one">
    <img src={one} alt="" />
    <div className="title-one">
    Setup reminder for your medication
    </div>
    <p>
   Set a reminder for your medication <br/>
   and verify by tsking s picture

    </p>
</div>
</div>
</div>
 
  )
}

export default Works