import React from 'react';
import './layout.css'

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer>
      <p>&copy; {getCurrentYear()} Milena Komnenic. All rights reserved.</p>
      <p>
        Follow me on 
        <a href="https://github.com/Mndraca" target="_blank" rel="noopener noreferrer"> GitHub</a>,
        <a href="https://www.linkedin.com/in/milena-komnenic-75835051/" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
      </p>
    </footer>
  );
};

export default Footer;
