import React from "react"; 
import one from "./one.png";
import two from "./two.png";
import './works.css';


const Works = () => {
  return (
    <div class='information-container' id="works">
       <h1 class='section-title'> How it Works </h1>
    <div class='inner-container'>
        <div class='service-container'> 
          <div class='service-box'>
            <div class='service-icon'>
            <img src={one} alt="" />
            </div>
            <div class='service-title'>  Download the app </div>
            <div class='description'>
            Download the CareMark App on and 
<br/>complete the registration </div>
          </div>
          
          <div class='service-box'>
            <div class='service-icon'>
              <img src={one} alt="" />
            </div>
            <div class='service-title'> Sign in to your account </div>
            <div class='description'>
            Complete the registration  with  <br/>
    a few easy steps   </div>
          </div>
          
          <div class='service-box'>
            <div class='service-icon'>
              <img src={two} alt="" />
            </div>
            <div class='service-title'>   Setup reminder for your medication </div>
            <div class='description'>
            Set a reminder for your medication  and<br/>
   verify by taking a picture.           </div>
          </div>
          
        </div>
      </div>
    </div>
  
 
  )
}

export default Works