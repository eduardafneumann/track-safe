import React from 'react';
import logo from './../../images/logo.jpg';

function Header() {
  return (
    <header>
    <div className='header'>
      <img src={logo} alt="Logo"></img>
    </div>
    </header>
  );
}

export default Header;