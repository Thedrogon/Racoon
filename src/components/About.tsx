import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>About Racoon AI</h2>
      <p>
        Racoon AI is your smart assistant for tracking coding progress, projects, and tasks with a sleek, modern twist.
      </p>
    </motion.section>
  );
};

export default About;