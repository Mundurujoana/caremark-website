import { useState } from 'react';
import './Navbar.css';
import logo from "./logo-1.png";

// import {FaTimes, FaBars } from 'react-icons/fa';


const Navbar = () => {
const[isOpen, setIsOpen]  = useState(false)
  return (
    <div className='Navbar'>
        <img src={logo} alt='logo'className='logo' />
    <div className={`nav-items ${isOpen && "open"}`}>
     <a href="#home"> Home </a>
     <a href="#about"> About </a>
     <a href="#solution"> Our Solution </a>
     <a href="#team"> Our Team </a>
    </div>
    <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="bar"></div>
    </div>
    </div>
  )
}


export  default Navbar