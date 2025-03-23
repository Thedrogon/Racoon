// src/components/LandingPage.tsx
//import React from 'react';
import { Element } from 'react-scroll';
import Header from './Header'
import Hero from './Hero'
import Features from './Features'
import About from './About'
import Footer from './Footer'

const LandingPage = () => {
  return (
    <div style={{ backgroundColor: 'var(--background)', color: 'var(--text-primary)' }}>
      <div className="main">
        <Header />
        <Hero />
      </div>
        <Element name="features">
          <Features />
        </Element>
        <Element name="about">
          <About />
        </Element>
      <Footer />
    </div>
  );
};

export default LandingPage;