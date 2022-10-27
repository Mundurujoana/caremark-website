import React from 'react'
import ellipse from "./Ellipse 64.png";
import lilian from "./lilian.png";
import minage from "./minage.png";
import wairimu from "./wairimu.png";
import joana from "./joana.png";
import './team.css'

const Team = () => {
  return (
    <section id="team" className='team-mem'>
    <h1 className="title"> Meet The Team </h1>
    <div className="team-row">
        <div className="member">
        <img src={ ellipse } alt='ellipse'/>
            <h2>Akuot philip</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum similique eligendi numquam.</p> 
       </div>
        <div className="member">
        <img src={ lilian } alt='lilian' />
                    <h2> Liliane Gikundiro </h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum similique eligendi numquam.</p>
        </div>
        <div className="member">
        <img src={ minage } alt='minage' />
                    <h2> Rachael Minage </h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum similique eligendi numquam.</p>
        </div>
    </div>
    <div className="team-row-1">
        <div className="member">
        <img src={ joana } alt='joana'/>
            <h2> Munduru Joana </h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum similique eligendi numquam.</p>
        </div>
        <div className="member">
        <img src={ wairimu } alt='wairmu'/>
                    <h2> Wairimu Nga’nga </h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum similique eligendi numquam.</p>
        </div>
    </div>
</section>
  )
}

export default Team