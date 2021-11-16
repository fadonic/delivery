import React from 'react';

const About = () => {
  return (
      <section className="about section container" id="about">
        <div className="about__container grid">
          <div className="about__data">
            <h2 className="section__title-center">Find out a little more <br/> about
              us</h2>
            <p className="about__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              commodi doloremque, veritatis optio iste facere laboriosam aut rem
              molestiae quas.
            </p>
          </div>
          <img className="svg__img"
            src="assets/img/ilustracion-about.jpg"
            alt="" />
        </div>
      </section>

  );
};

export default About;