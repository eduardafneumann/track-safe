import './Header.css'
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../images/logo.jpg';

function Header() {
  return (
    <header>
    <div className='header'>
      <Link to="/">
        <img className='logo' src={logo} alt="Logo"></img>
      </Link>
    </div>
    </header>
  );
}

export default Header;