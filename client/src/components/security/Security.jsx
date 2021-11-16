import React from 'react';

const Security = () => {
  return (
      <section className="security section container" id="security">
        <div className="security__container grid">
          <div className="security__data">
            <h2 className="section__title-center">
              Your Safe is <br />Important
            </h2>

            <p className="security__description">
              Be rest assured that with us your safe is gurantee. Learn more
              about our safety protocol and delivery pattern. You can still find
              and watch our safety video on youTube
            </p>
          </div>
          <img className="svg__img"
            src="assets/img/ilustracion-security.jpg"
            alt="" />
        </div>
      </section>
  );
};

export default Security;