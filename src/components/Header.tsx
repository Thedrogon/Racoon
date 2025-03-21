import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logo">
        <svg width="40" height="40" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="var(--medium-grey)" />
          <circle cx="35" cy="40" r="8" fill="var(--black)" />
          <circle cx="65" cy="40" r="8" fill="var(--black)" />
          <path d="M 40 65 Q 50 75 60 65" stroke="var(--light-grey)" strokeWidth="4" fill="none" />
        </svg>
        <div className="logo-text">Racoon AI</div>
      </div>
      <nav className="nav">
        <ScrollLink to="features" smooth={true} duration={500} className="nav-link">Features</ScrollLink>
        <ScrollLink to="about" smooth={true} duration={500} className="nav-link">About</ScrollLink>
        <RouterLink to="/login" className="btn btn-login">Login</RouterLink>
        <RouterLink to="/signup" className="btn btn-signup">Sign Up</RouterLink>
      </nav>
    </motion.header>
  );
};

export default Header;