import React, { useState } from 'react';

const Footer = () => {
  const [isScrollUp, showIsScrollUp] = useState(false)
  
  const scrollUp =()=> {
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    window.scrollY >= 560 ? showIsScrollUp(true):showIsScrollUp(false) 
  }
  window.addEventListener('scroll', scrollUp)
 
  return (
    <>
    <a href="#home" className={"scrollup " + (isScrollUp && "show-scroll")} id="scroll-up">
      <i className="bx bx-up-arrow-alt scrollup__icon"></i>
    </a>
  
    <footer className="footer section" id="footer">
      <div className="footer__container container grid">
        <div className="footer__content">
          <a href="index.html"  className="footer__logo">Delivery</a>
          <p className="footer__delivery">
            We deliver faster <br />and easier
          </p>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">
            Our Services
          </h3>
          <ul className="footer__links">
            <li><a href="index.html" className="footer__link">Pricing</a></li>
            <li><a href="index.html" className="footer__link">Discounts</a></li>
            <li><a href="index.html" className="footer__link">Report an Issue</a></li>
            <li><a href="index.html" className="footer__link">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">
            Our Company
          </h3>
          <ul className="footer__links">
            <li><a href="index.html" className="footer__link">Blog</a></li>
            <li><a href="index.html" className="footer__link">Mission</a></li>
            <li><a href="index.html" className="footer__link">Vision</a></li>
            <li><a href="index.html" className="footer__link">Get in a Touch</a></li>
          </ul>
        </div>


        <div className="footer__content">
          <h3 className="footer__title">
            Our Community
          </h3>
          <ul className="footer__links">
            <li><a href="index.html" className="footer__link">Support</a></li>
            <li><a href="index.html" className="footer__link">Questions</a></li>
            <li><a href="index.html" className="footer__link">Help</a></li>
          </ul>
        </div>
        <div className="footer__social">
          <a href="index.html" className="footer__social-link"><i className="bx
              bxl-facebook-circle"></i></a>
          <a href="index.html"  className="footer__social-link"><i className="bx bxl-twitter"></i></a>
          <a href="index.html"  className="footer__social-link"><i className="bx
              bxl-instagram-alt"></i></a>
        </div>
      </div>
      <p className="footer__copy">
        © Donic. All right reserved
      </p>
    </footer>
    </>
  );
};

export default Footer;