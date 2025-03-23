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