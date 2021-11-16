import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
          <img className="svg__img"
            src="assets/img/ilustracion-app.jpg"
            alt="" />
          <div className="home__data">
            <h1 className="home__title">
              Order Products <br/> Faster Delivery
            </h1>
            <p className="home__description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda maxime ipsa?
            </p>
            <div>
              <Link to="register" className="button button-link">Get Started</Link>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Intro;