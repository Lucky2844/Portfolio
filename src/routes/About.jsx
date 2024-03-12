import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import AboutContent from '../components/AboutContent'

export default function About() {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="ABOUT" text="I am a Front-End-Developer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}