import React from 'react';

const Services = () => {
  return (
    <section className="services section container" id="services">
      <h2 className="section__title-center">
        Some of our <br />services
      </h2>
      <div className="services__container grid">
        <div className="services__data">
          <h3 className="services__subtitle">
            Online Payment
          </h3>
          <img className="svg__img services__img"
            src="assets/img/ilustracion-payment.jpg"
            alt="" />
          <p className="services__description">
            Pay with Visa or Paypal with ease
          </p>
          <div>
            <a href="index.html" className="button button-link">Learn More</a>
          </div>
        </div>

        <div className="services__data">
          <h3 className="services__subtitle">
            Buy Your Product
          </h3>
          <img className="svg__img"
            src="assets/img/ilustracion-services.jpg"
            alt="" />
          <p className="services__description">
            We have variaty of product items to choose from
          </p>
          <div>
            <a href="index.html" className="button button-link">Learn More</a>
          </div>
        </div>


        <div className="services__data">
          <h3 className="services__subtitle">
            Order transparency
          </h3>
          <img className="svg__img"
            src="assets/img/ilustracion-order.jpg"
            alt="" />
          <p className="services__description">
            With our App you can track the status of your order
          </p>
          <div>
            <a href="index.html" className="button button-link">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;