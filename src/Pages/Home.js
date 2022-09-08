import React from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import image from '../images/prog-1.jpg'

export default function Home() {
  useEffect(()=> {
    let tooltips = document.querySelectorAll('.material-tooltip')
    tooltips.forEach((tooltip)=> {
      tooltip.remove();
    });
  },[]);

  return (
    <div className='homepage container'>
      <div className='row '>
        <div className='col s12 m12 l5 left'>
          <div className='col s12 top'>Hi There!</div>
          <div className='col s12 middle'>I'm <span className='blue-text text-darken-4'>Eric Asare</span></div>
          <div className='col s12 bottom'>An Aspiring Web Developer</div>
          <div className='col s12 btn-wrapper'><Link to='/about'><button className="btn blue darken-4" type='button'><i className="material-icons right">person</i>Know More</button></Link></div>
          
        </div>
        <div className='col s12 m12 l7 right center'>
          <img src={image} className='responsive-img' alt='laptop on desk'></img>
        </div>
      </div>
    </div>
  )
}
