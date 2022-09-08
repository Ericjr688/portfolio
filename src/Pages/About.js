import React from 'react'
import M from 'materialize-css';
import { useEffect } from 'react';

import pfp from '../images/earth-and-moon.jpg'
import javascript from '../images/javascript.svg'
import html5 from '../images/html5.svg'
import css3 from '../images/css3.svg'
import reactjs from '../images/reactjs.svg'
import nodejs from '../images/nodejs.svg'
import materializecss from '../images/materializecss.svg'
import linuxcli from '../images/linuxcli.svg'
import git from '../images/git.svg'
import webpack from '../images/webpack.svg'
import vscode from '../images/vscode.svg'
import npm from '../images/npm.svg'
import firebase from '../images/firebase.svg'
import jest from '../images/jest.svg'

import github from '../images/github.svg'
import email from '../images/email.svg'
import linkedIn from '../images/linkedin.svg'



export default function About() {
  useEffect(() => {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, {});
  }, [])

  return (
    <div className='about container'>
      <div className='header center'> About <span className='blue-text text-darken-4'>Me</span></div>
      <div className='profile-image center'>
        <img src={pfp} alt='my profile' className='responsive-img circle'></img>
      </div>
      <div className='description'>
        <h5>Hi, I'm Eric Asare</h5>
        <p className='description-paragraph'>
          I'm a self-taught front-end developer based in Virginia who loves to work with JavaScript Technologies. 
          I enjoy transforming complex problems into simple and intuitive solutions, and I love to explore and learn new things.
        </p>
        <p className='description-paragraph'>
          Facinated by technology from a young age, I gained a deep sense of satisfaction from tinkering with tech and figuring 
          out how things work. Naturally, a fascination for programming blossomed as I became exposed to the world of software. 
          Right after I learnt about web development, I knew it was the right career for me.
        </p>
        <p className='description-paragraph'>
          My goal is to write reusable and maintainable code and build highly scalable web apps to help people and businesses.
        </p>
        <div className='contact-container'>
          <a href='https://github.com/Ericjr688' target='_blank' rel="noopener noreferrer"><img className='contact-icon' src={github} alt='GitHub'></img></a>
          <a href='mailto:ericasare688@gmail.com' target='_blank' rel="noopener noreferrer"><img className='contact-icon' src={email} alt='Email'></img></a>
          <a href='https://www.linkedin.com/in/eric-asare-602830a6' target='_blank' rel="noopener noreferrer"><img className='contact-icon' src={linkedIn} alt='LinkedIn'></img></a>
        </div>
      </div>
      <div className="skills">
        <h5>My Skills</h5>
        <div className='divider blue darken-4'></div>
        <div className='skill-section'>
          <h6>Languages</h6>
        <div className='icons-wrapper'>
          <img src={javascript} alt='JavaScript' className='tooltipped' data-position="top" data-tooltip="JavaScript"></img>
          <img src={html5} alt='HTML5' className='tooltipped' data-position="top" data-tooltip="HTML5"></img>
          <img src={css3} alt='CSS3' className='tooltipped' data-position="top" data-tooltip="CSS3"></img>
        </div>
        </div>
        <div className='skill-section'>
          <h6>Technologies</h6>
        <div className='icons-wrapper'>
          <img src={reactjs} alt='ReactJS' className='tooltipped' data-position="top" data-tooltip="ReactJS"></img>
          <img src={nodejs} alt='NodeJS' className='tooltipped' data-position="top" data-tooltip="NodeJS"></img>
          <img src={jest} alt='Jest' className='tooltipped' data-position="top" data-tooltip="Jest"></img>
          <img src={materializecss} alt='Materialize CSS' className='tooltipped' data-position="top" data-tooltip="Materialize CSS"></img>
        </div>
        </div>
        <div className='skill-section'>
          <h6>Other tools</h6>
        <div className='icons-wrapper'>
          <img src={linuxcli} alt='Linux CLI' className='tooltipped' data-position="top" data-tooltip="Linux CLI"></img>
          <img src={git} alt='Git' className='tooltipped' data-position="top" data-tooltip="Git"></img>
          <img src={webpack} alt='Webpack' className='tooltipped' data-position="top" data-tooltip="Webpack"></img>
          <img src={vscode} alt='VS Code' className='tooltipped' data-position="top" data-tooltip="VS Code"></img>
          <img src={npm} alt='npm' className='tooltipped' data-position="top" data-tooltip="npm"></img>
          <img src={firebase} alt='Firebase' className='tooltipped' data-position="top" data-tooltip="Firebase"></img>
        </div>
        </div>
        
      </div>
      
    </div>
  )
}
