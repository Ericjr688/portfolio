import React from 'react'
import github from '../images/github.svg'
import email from '../images/email.svg'
import linkedIn from '../images/linkedin.svg'

export default function Footer() {
  return (
    <footer className='z-depth-2'>
      <div className='container contact-container'>
        <a href='https://github.com/Ericjr688' target='_blank' rel="noopener noreferrer"><img className='contact-icon' src={github} alt='GitHub'></img></a>
        <a href='mailto:ericasare688@gmail.com' target='_blank' rel="noopener noreferrer"><img className='contact-icon' src={email} alt='Email'></img></a>
        <a href='https://www.linkedin.com/in/eric-asare-602830a6' target='_blank' rel="noopener noreferrer"><img className='contact-icon' src={linkedIn} alt='LinkedIn'></img></a>
      </div>
    </footer>
  )
}
