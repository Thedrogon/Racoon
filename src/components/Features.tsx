// src/components/Features.tsx
//import React from 'react';

const Features = () => {
  const features = [
    {
      title: "LeetCode Tracker",
      description: "Track your LeetCode problems with ease.",
    },
    {
      title: "Project Manager",
      description: "Organize your projects with tasks and deadlines.",
    },
    { title: "Notes", description: "Store and manage your notes easily." },
    {
      title: "Code Contests",
      description: "Track your performance in code contests.",
    },
    {
      title: "Flexible Task Manager",
      description: "Create custom task types to fit your needs.",
    },
  ];

  return (
    <section style={{ padding: '4rem 2rem' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Features</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {features.map((feature, index) => (
          <div key={index} style={{ backgroundColor: 'var(--surface)', padding: '2rem', margin: '1rem', borderRadius: '8px', width: '300px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{feature.title}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
