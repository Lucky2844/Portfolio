import React from 'react';
import "./Heroimg.css";
import IntroImg from "../assets/Homeimg4.jpg"
import { Link } from 'react-router-dom'; 

export default function Heroimg() {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='into-img' src={IntroImg} alt="IntroImg" />
      </div>
      <div className='content'>
        <p><b>HI,I'M Lokendra Singh</b></p>
        <h1>React Developer </h1>
       <div>
        <Link to="/project" className='btn'>Projects</Link>
        <Link to="/contact" className='btn btn-light'>Contact</Link>
       </div>
      </div>
    </div>
  )
}
