
import React, { useState } from 'react';
import './layout.css'




const heading = {
    fontSize: '24px',
    color: 'red',
  
    
}

const image ={
  width: '250px',
  height: '250px',
  borderRadius: '50%' 
}



const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <header style ={heading} >
      <h1>My Portfolio</h1>
      <nav >
        <ul className={`nav-links ${isOpen ? 'open' : 'hidden'}`} >
          <li><a href="#about" style={{ textDecoration: 'none', color: 'whitesmoke'}}>About</a></li>
          <li><a href="#projects" style={{ textDecoration: 'none', color: 'whitesmoke'}}>Projects</a></li>
          <li><a href="#contact" style={{ textDecoration: 'none', color: 'whitesmoke'}}>Contact</a></li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div>
          <img style ={image} src="./images/milenak.jpeg" alt="my-photo"/>
        </div>
      </nav>
    </header>
  );
}

export default Header;
