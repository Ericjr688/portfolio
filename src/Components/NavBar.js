import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo2.png'
export default function NavBar() {
  return (
    <nav className='white black-text'>
      <div className='nav-wrapper container'>
        <Link className='brand-logo left large-font-size blue-text text-darken-4' to='/'><img src={logo} alt="Logo" className="logo" /></Link>
        <ul id="nav-mobile" className="right">
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
          <li><a href='https://drive.google.com/file/d/1HPjbjfKz0IhNYoegrDSJeXg_n9CJj6Z9/view?usp=sharing' target='_blank' rel="noopener noreferrer">Resume</a></li>
        </ul>
      </div>
    </nav>
  )
}
