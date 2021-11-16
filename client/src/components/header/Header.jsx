import React, {  useState } from 'react';
import './header.css'
import { Link } from 'react-router-dom';

const Header = () =>{
  const [isMenuOpen, showMenu] = useState(false)
  const [isScrollHeader, showScrollHeader] = useState(false)
  
  const toggleMenu  = ()=>{
    showMenu(!isMenuOpen)
  }
  const linkAction = ()=>{
    showMenu(!isMenuOpen)
  }
  const scrollHeader = ()=> {
    if (window.scrollY >= 80) {
      showScrollHeader(true)
    }
    else{
      showScrollHeader(false)
    } 
  }
 
  window.addEventListener('scroll', scrollHeader)

  return (
    <header className={"header " + (isScrollHeader && "scroll-header")} id="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">DELIVERY</Link>
        <div className={"nav__menu " + (isMenuOpen && "show-menu")} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link" onClick={linkAction}>Home</a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={linkAction}>About Us</a>
            </li>
            <li className="nav__item">
              <a href="#security" className="nav__link" onClick={linkAction}>Security</a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link" onClick={linkAction}>Services</a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link" onClick={linkAction}>Contact</a>
            </li>
            <i className='bx bx-toggle-left change-theme' id="theme-button"></i>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className='bx bx-grid-alt' onClick={toggleMenu}></i>
        </div>

        <Link to="/register" className="button button__header">Order Now</Link>
      </nav>
    </header>
  );
};

export default Header;