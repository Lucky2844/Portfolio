import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact'
import Project from './routes/Project'
import Heroimg from './components/Heroimg'
import Footer from './components/Footer'

export default function App() {
  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      {/* <Heroimg/> */}
      {/* <Footer/> */}
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/project' element={<Project/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
     </Routes>
     
    </BrowserRouter>
  )
}
