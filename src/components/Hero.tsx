import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Hero.css";

const Hero: React.FC = () => {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }} // Shortened duration
    >
      <div className="hero-container">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          Track Faster with Racoon
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Your intelligent companion for productivity and progress
        </motion.p>
        <RouterLink to="/signup" className="router btn-primary">
          Get Started
        </RouterLink>
      </div>
    </motion.section>
  );
};

export default Hero;
