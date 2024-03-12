import React from 'react';
import "./Footer.css";

import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="left">
            <div className="location">
            <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}} />
            <div>
            <p>302 Kanak Shree Avenue Near by Mayur hospital.</p>
            <p>Indore</p>
            </div>
            </div>
            <div className='phone'>
                <h4>
            <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}} />
            8959386352</h4>
            </div>
            <div className='email'>
                <h4>
            <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}} />
            ls4815556@gmail.com</h4>
            </div>
            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>Experienced Frontend Developer proficient in HTML, CSS, JavaScript, and modern frameworks like React and Angular. Passionate about clean code and continual learning. Strong team player with excellent communication skills.</p>
                <div className='social'> 
                <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}} />

                <FaGithub size={30} style={{color:"#fff",marginRight:"1rem"}} />

                
                </div>
                
            </div>
        </div>
      
    </div>
  )
}
