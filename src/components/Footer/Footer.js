import React from 'react'
import "./footer.css";
import ScrollToTop from "react-scroll-to-top";
import logo from "./logo-1.png";



const Footer = () => {
  return (
     <footer className="footer-distributed" id="footer" >
<ScrollToTop smooth top="20" color='green'  /> 
<div className="footer-left">

   <img src={logo} alt="logo" /> 

  <p class="footer-links">
  <a href="#home"> Home </a>.
     <a href="#about"> About </a>.
     <a href="#solution"> Our Solution </a>.
     <a href="#team"> Our Team </a>.
  </p> 
</div>

<div className="footer-center">
    <div className="common">
  <div>
    <i className="fa fa-map-marker"></i>
    <p><span> P.O Box 22009-00100
Nairobi </span> Karen Nairobi, Kenya </p>
  </div>

  <div>
    <i className="fa fa-phone"></i>
    <p>+234 775389877</p>
  </div>

  <div>
    <i className="fa fa-envelope"></i>
    <p><a href="mailto:support@company.com">caremark@info.com</a></p>
  </div>
  </div>
</div>

<div class="footer-right">

  <p class="footer-company-about">
    <span>Follow us</span> 
  </p>

  <div class="footer-icons">

    <a href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a>
    <a href="https://twitter.com/home"><i class="fa fa-twitter"></i></a>
    <a href="https://www.linkedin.com/in/munduru-joana/"><i class="fa fa-linkedin"></i></a>
    <a href="https://www.instagram.com/"><i class="fa fa-instagram"></i></a>

  </div>

</div>

             <div className="footer-copyright">
              <hr style={{
    backgroundColor: '#000000',
   
}}/>
                <p>  © 2022 CAREMARK. ALL RIGHTS RESERVED </p>
            </div>
</footer>


  )
}

export default Footer

/* <ScrollToTop smooth top="20" color='green'  /> */