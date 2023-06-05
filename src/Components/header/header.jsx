import React from 'react';
import "./header.css";
import CTA from './CTA'
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1> Hello I'm</h1>
        <h1>Téllez Valverde Eduardo</h1>
        <h5 className="text-light">
          Front-End Web Developer
        </h5>
        <CTA/>
        
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>
          Scroll Down
        </a> 

      </div>
    </header>
  )
}

export default Header