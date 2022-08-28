import React from 'react'
import Navbar from './Navbar'
import './header.css'


export default function Header() {
  return (
    <div id='main'>
        <Navbar/>
        <div className='name'>
          <h1> Its a <span>ReactJS</span> Website </h1>
          <p className='details'>Lorem, ipsum dolor.lorem5 Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          <div className='header-btns'>
            <a href="#" className='cv-btn'>Hire Me</a>
            <a href="#" className='cv-btn1'>Download App</a>
          </div>
        </div>
        <div className='arrow'></div>
    </div>
  )
}
