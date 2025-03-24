import { motion } from 'framer-motion';
import { memo } from 'react';
import '../styles/Features.css';

const FeatureCard = memo(({ title, description }: { title: string; description: string }) => (
  <motion.div
    className="feature-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
  >
    <h3>
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="var(--accent)" />
        <path d="M10 15l-3-3 1.5-1.5L10 12l5-5 1.5 1.5L10 15z" fill="var(--text-primary)" />   
      </svg>
      {title}
    </h3>
    <p>{description}</p>
  </motion.div>
));

const Features = () => {
  const features = [
    { title: 'Project Manager', description: 'Organize tasks and deadlines with ease.' },
    { title: 'Notes', description: 'Capture and manage your ideas.' },
    { title: 'Manage Teams', description: 'Create your team and manage it efficiently.' },
    { title: 'Flexible Task Tracker', description: 'Visualize your progress and stay motivated.' },
    { title: 'Code Contests', description: 'Monitor your competitive coding journey.' },
  ];

  return (
    <section className="features">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Features
      </motion.h2>
      <div className="features-container">
        {features.map((feature) => (
          <FeatureCard key={feature.title} title={feature.title} description={feature.description} />
        ))}
      </div>
    </section>
  );
};

export default Features;