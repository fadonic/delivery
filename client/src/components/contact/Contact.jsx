import React from 'react';

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <div className="contact__container grid">
        <div className="contact__content">
          <h2 className="section__title-center">
            Contact Us
          </h2>
          <p className="contact__description">
            You can reach us through this contact form and also you can
            contact via mobile or email
          </p>
        </div>
        <ul className="contact__content grid">
          <li className="contact__address">Phone Number:<span
              className="contact__information">(+234) (900) (888)</span></li>
          <li className="contact__address">Email:<span
              className="contact__information">example@delivery.com</span></li>
          <li className="contact__address">Location Address:<span
              className="contact__information">No. 1 off Kaffi Street, California</span></li>
        </ul>

        <div className="contact__content">
          <a href="index.html" className="button">Contact Us</a>
        </div>
      </div>
    </section>

  );
};

export default Contact;