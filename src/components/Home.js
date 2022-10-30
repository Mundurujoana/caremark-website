import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import MainSection from '../components/Main/MainSection';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Team from '../components/Team/Team';
import Solution from '../components/Solution/Solution';
import Works from '../components/Works/Works';
import Context from '../components/Context/Context';

const Home= () => {
  return (
    <div>
        <Navbar />
        <MainSection  />
        <About/>
        <Solution/>
        <Works/>
        <Context/>
        <hr style={{
    backgroundColor: '#11574A',
    height: 2,
}}/>
        <Team/>
        <Footer/>
    </div>
  )
}

export default Home
