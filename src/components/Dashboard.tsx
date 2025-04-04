// src/components/Dashboard.tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Dashboard.css';

// Type definitions
interface Project { name: string; tasks: string[]; type: string; deadline: string; }
interface Task { type: string; name: string; details?: string; }
interface LeetCodeProblem { id: number; name: string; difficulty: 'Easy' | 'Medium' | 'Hard'; }
interface Note { name: string; content: string; }
interface Contest { name: string; platform: string; date: string; }

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('My Works');

  // Mock data
  const projects: Project[] = [
    { name: 'Racoon AI', tasks: ['Landing Page', 'Dashboard'], type: 'Web', deadline: '2025-04-10' },
  ];
  const tasks: Task[] = [
    { type: 'Exam', name: 'CS Midterm', details: 'Review algorithms' },
    { type: 'Daily', name: 'Workout', details: '30 mins' },
  ];
  const leetCodeProblems: LeetCodeProblem[] = [
    { id: 1, name: 'Two Sum', difficulty: 'Easy' },
    { id: 2, name: 'Longest Substring', difficulty: 'Medium' },
  ];
  const notes: Note[] = [
    { name: 'React Tips', content: 'Use hooks for state management.' },
  ];
  const contests: Contest[] = [
    { name: 'Weekly Contest 300', platform: 'LeetCode', date: '2025-03-25' },
  ];

  useEffect(() => {
    // Simulate API delay
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const navItems = ['My Works', 'Projects', 'Tasks', 'LeetCode', 'Notes', 'Contests'];

  const SkeletonCard: React.FC = () => (
    <div className="content-card skeleton-card">
      <div className="skeleton-title"></div>
      <div className="skeleton-text"></div>
    </div>
  );

  const renderContent = () => {
    if (loading) {
      return Array(3).fill(0).map((_, index) => <SkeletonCard key={index} />);
    }

    switch (activeTab) {
      case 'My Works':
        return (
          <>
            <div className="content-card">
              <h3>Recent Projects</h3>
              {projects.map((project) => (
                <div key={project.name}>
                  <p>{project.name} - {project.type}</p>
                  <p>Deadline: {project.deadline}</p>
                </div>
              ))}
            </div>
            <div className="content-card">
              <h3>Recent Tasks</h3>
              {tasks.slice(0, 1).map((task) => (
                <div key={task.name}>
                  <p>{task.name} - {task.type}</p>
                  {task.details && <p>{task.details}</p>}
                </div>
              ))}
            </div>
          </>
        );
      case 'Projects':
        return projects.map((project) => (
          <div key={project.name} className="content-card">
            <h3>{project.name}</h3>
            <p>Type: {project.type}</p>
            <p>Deadline: {project.deadline}</p>
            <ul>
              {project.tasks.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </div>
        ));
      case 'Tasks':
        return tasks.map((task) => (
          <div key={task.name} className="content-card">
            <h3>{task.name}</h3>
            <p>Type: {task.type}</p>
            {task.details && <p>{task.details}</p>}
          </div>
        ));
      case 'LeetCode':
        return leetCodeProblems.map((problem) => (
          <div key={problem.id} className="content-card">
            <p>{problem.name} - <span className={`difficulty-${problem.difficulty.toLowerCase()}`}>{problem.difficulty}</span></p>
          </div>
        ));
      case 'Notes':
        return notes.map((note) => (
          <div key={note.name} className="content-card">
            <h3>{note.name}</h3>
            <p>{note.content}</p>
          </div>
        ));
      case 'Contests':
        return contests.map((contest) => (
          <div key={contest.name} className="content-card">
            <p>{contest.name} ({contest.platform}) - {contest.date}</p>
          </div>
        ));
      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      {/* Side Navbar */}
      <motion.nav
        className="sidebar"
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="sidebar-header">
          <svg width="40" height="40" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="var(--medium-grey)" />
            <circle cx="35" cy="40" r="8" fill="var(--black)" />
            <circle cx="65" cy="40" r="8" fill="var(--black)" />
            <path d="M 40 65 Q 50 75 60 65" stroke="var(--light-grey)" strokeWidth="4" fill="none" />
          </svg>
          <h2>Racoon AI</h2>
        </div>
        <ul className="sidebar-nav">
          {navItems.map((item) => (
            <li
              key={item}
              className={`sidebar-item ${activeTab === item ? 'active' : ''}`}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Main Content */}
      <div className="main-content">
        <header className="dashboard-header">
          <h1>{activeTab}</h1>
          <button className="btn-create">Create</button>
        </header>
        <div className="content-area">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;