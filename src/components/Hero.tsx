// src/components/Hero.tsx
//import React from 'react';
import { Link as RouterLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <h1>Welcome to Racoon</h1>
      <p>Your Ultimate Task and Progress Tracker</p>
      <RouterLink to="/signup" className="btn-primary">
        Get Started
      </RouterLink>
    </section>
  );
};

export default Hero;
