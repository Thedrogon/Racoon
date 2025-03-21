import React from 'react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  const features = [
    { title: 'LeetCode Tracker', description: 'Track your coding problems effortlessly.' },
    { title: 'Project Manager', description: 'Organize tasks and deadlines with ease.' },
    { title: 'Notes', description: 'Capture and manage your ideas.' },
    { title: 'Code Contests', description: 'Monitor your competitive coding journey.' },
    { title: 'Flexible Tasks', description: 'Customize tasks to fit your needs.' },
  ];

  return (
    <section className="features">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Features
      </motion.h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="var(--accent)" />
                <path d="M10 15l-3-3 1.5-1.5L10 12l5-5 1.5 1.5L10 15z" fill="var(--text-primary)" />
              </svg>
              {feature.title}
            </h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;