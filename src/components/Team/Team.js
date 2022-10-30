import React, { useEffect } from 'react'
import ellipse from "./Ellipse 64.png";
import lilian from "./lilian.png";
import minage from "./minage.png";
import wairimu from "./wairimu.png";
import joana from "./joana.png";
import './team.css'
import AOS from 'aos'
import 'aos/dist/aos.css'



const Team = () => {
    useEffect(()=>{
        AOS.init({duration: 3000})},[])

  return (
    <section id="team" className='team-mem' data-aos="fade-up" data-aos-anchor-placement="top-center">
    <h1 className="title"> Meet The Team </h1>
    <p className='sub-title'>We are passionate about technologies that create sustainable, affordable, quality and accessible healthcare for everyone</p>

    <div className="team-row">
        <div className="member">
        <img src={ ellipse } alt='ellipse'/>
            <h2>Akuot philip</h2>
<p>Software Developer</p> </div>

        <div className="member">
        <img src={ lilian } alt='lilian' />
                    <h2> Liliane Gikundiro </h2>
                    <p>Software Developer</p></div>

        <div className="member">
        <img src={ minage } alt='minage' />
                    <h2> Rachael Minage </h2>
                    <p>Software Developer</p> </div></div>

    <div className="team-row-1">
        <div className="member">
        <img src={ joana } alt='joana'/>
            <h2> Munduru Joana </h2>
            <p>Software Developer</p></div>
        <div className="member">
        <img src={ wairimu } alt='wairmu'/>
                    <h2> Wairimu Nganga </h2>
                    <p>Software Developer</p></div></div>
</section>
  )
}

export default Team