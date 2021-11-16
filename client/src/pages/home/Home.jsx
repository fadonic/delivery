import React from 'react';
import About from '../../components/about/About';
import Contact from '../../components/contact/Contact';
import Intro from '../../components/intro/Intro';
import Security from '../../components/security/Security';
import Services from '../../components/Services/Services';


const Home = () => {
  return (
      <main>
        <Intro/>
        <About />
        <Security />
        <Services />
        <Contact />
      </main>
  );
};

export default Home;