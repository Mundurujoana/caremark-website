import React from 'react'
import About from '../components/About';
import MainSection from '../components/MainSection';
import Navbar from '../components/Navbar';
import Solution from '../components/Solution';
import Works from '../components/Works';
import Context from './Context';
import Team from './Team';
import Footer from './Footer';

const Home= () => {
  return (
    <div>
        <Navbar />
        <MainSection  />
        <About/>
        <Solution />
        <Works/>
        <Context/>
      <hr style={{
    backgroundColor: '#11574A',
    height: 7,
}}/>
<Team/>
<Footer/>
    </div>
  )
}

export default Home
