import React, { useEffect } from 'react'
import instagramMockup from '../images/instagram-mockup.png'
import weather from '../images/weather.png'
import shoppingCart from '../images/shopping-cart.png'


export default function Projects() {
  useEffect (()=> {
    let tooltips = document.querySelectorAll('.material-tooltip')
    tooltips.forEach((tooltip)=> {
      tooltip.remove();
    });
  },[]);

  return (
    <div className='projects container'>
      <h4 className='center'>My <span className='blue-text text-darken-4'>Projects</span></h4>
      <div className="row projects-section">
        <div className="col s12 m6">
        <img src={instagramMockup} className='responsive-img' alt='instagram mockup'></img>
        </div>
        <div className="col s12 m6 right">
          <h4>Instagram Clone</h4>
          <p><strong>Built with:</strong> React, Firebase, Materialize CSS</p>
          <p>
          A social media application modeled after Instagram. Users can follow each other, post images, 
          comment on posts, like posts, and perform other basic features.
          </p>
          <div className="project-link-container">
            <a href='https://owuragram.web.app/' target='_blank' rel="noopener noreferrer"><button className="live-btn"><i className="material-icons right">laptop</i>Live</button></a>
            <a href='https://github.com/Ericjr688/instagram-clone' target='_blank' rel="noopener noreferrer"><button className="code-btn"><i className="material-icons right">developer_mode</i>Code</button></a>
          </div>
        </div>
      </div>
      <div className="row projects-section">
        <div className="col s12 m6">
        <img src={weather} className='responsive-img' alt='Weather'></img>
        </div>
        <div className="col s12 m6 right">
          <h4>Weather App</h4>
          <p><strong>Built with:</strong> HTML5, CSS3, JavaScript, OpenWeatherMap API</p>
          <p>
            A weather app that shows current weather for a city. It uses OpenWeatherMap API to fetch current weather. 
            It can show weather in two units (celsius and fahrenheit).
          </p>
          <div className="project-link-container">
            <a href='http://Ericjr688.github.io/weather-app' target='_blank' rel="noopener noreferrer"><button className="live-btn"><i className="material-icons right">laptop</i>Live</button></a>
            <a href='https://github.com/Ericjr688/weather-app' target='_blank' rel="noopener noreferrer"><button className="code-btn"><i className="material-icons right">developer_mode</i>Code</button></a>
          </div>
        </div>
      </div>
      <div className="row projects-section">
        <div className="col s12 m6">
        <img src={shoppingCart} className='responsive-img' alt='Shopping Cart'></img>
        </div>
        <div className="col s12 m6 right">
          <h4>Shopping Cart</h4>
          <p><strong>Built with:</strong> React, Materialize CSS</p>
          <p>
            A simple e-commerce store that lets you interact with a few products and a shopping cart. 
          </p>
          <div className="project-link-container">
            <a href='http://Ericjr688.github.io/shopping-cart' target='_blank' rel="noopener noreferrer"><button className="live-btn"><i className="material-icons right">laptop</i>Live</button></a>
            <a href='https://github.com/Ericjr688/shopping-cart' target='_blank' rel="noopener noreferrer"><button className="code-btn"><i className="material-icons right">developer_mode</i>Code</button></a>
          </div>
        </div>
      </div>
    </div>
  )
}
