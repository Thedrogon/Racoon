// src/components/Dashboard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Dashboard.css'

// Type definitions (same as before)
interface LeetCodeProblem { id: number; name: string; difficulty: 'Easy' | 'Medium' | 'Hard'; }
interface Project { name: string; tasks: string[]; type: string; deadline: string; }
interface Note { name: string; content: string; }
interface Contest { name: string; platform: string; date: string; }
interface Task { type: string; name: string; details?: string; }

const Dashboard: React.FC = () => {
  // Mock data
  const leetCodeProblems: LeetCodeProblem[] = [
    { id: 1, name: 'Two Sum', difficulty: 'Easy' },
    { id: 2, name: 'Longest Substring', difficulty: 'Medium' },
  ];
  const projects: Project[] = [
    { name: 'Taskoon', tasks: ['Landing Page', 'Dashboard'], type: 'Web', deadline: '2025-04-01' },
  ];
  const notes: Note[] = [
    { name: 'React Tips', content: 'Use hooks for state management.' },
  ];
  const contests: Contest[] = [
    { name: 'Weekly Contest 300', platform: 'LeetCode', date: '2025-03-25' },
  ];
  const tasks: Task[] = [
    { type: 'Exam', name: 'CS Midterm', details: 'Review algorithms' },
    { type: 'Daily', name: 'Workout', details: '30 mins' },
  ];

  return (
    <div className="dashboard">
      <motion.header
        className="dashboard-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Taskoon Dashboard</h1>
        <button className="btn-logout">Logout</button>
      </motion.header>
      <div className="dashboard-grid">
        {/* LeetCode Section */}
        <motion.section
          className="dashboard-section"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2>
            <svg className="section-icon" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.83l7 3.5v6.34l-7 3.5-7-3.5V7.33l7-3.5z" fill="#4caf50" />
              <circle cx="12" cy="12" r="3" fill="#fff" />
            </svg>
            LeetCode Problems
          </h2>
          <ul>
            {leetCodeProblems.map((problem) => (
              <li key={problem.id}>
                {problem.name} - <span className={`difficulty-${problem.difficulty.toLowerCase()}`}>{problem.difficulty}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          className="dashboard-section"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>
            <svg className="section-icon" viewBox="0 0 24 24">
              <rect x="4" y="4" width="16" height="16" rx="2" fill="#ff9800" />
              <path d="M8 12h8" stroke="#fff" strokeWidth="2" />
              <path d="M12 8v8" stroke="#fff" strokeWidth="2" />
            </svg>
            Projects
          </h2>
          {projects.map((project) => (
            <div key={project.name} className="card">
              <h3>{project.name}</h3>
              <p>Type: {project.type}</p>
              <p>Deadline: {project.deadline}</p>
              <ul>
                {project.tasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.section>

        {/* Notes Section */}
        <motion.section
          className="dashboard-section"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2>
            <svg className="section-icon" viewBox="0 0 24 24">
              <path d="M4 4h16v16H4V4zm2 2v12h12V6H6z" fill="#2196f3" />
              <path d="M8 8h8v2H8V8zm0 4h6v2H8v-2z" fill="#fff" />
            </svg>
            Notes
          </h2>
          {notes.map((note) => (
            <div key={note.name} className="card">
              <h3>{note.name}</h3>
              <p>{note.content}</p>
            </div>
          ))}
        </motion.section>

        {/* Contests Section */}
        <motion.section
          className="dashboard-section"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2>
            <svg className="section-icon" viewBox="0 0 24 24">
              <path d="M12 2L2 8v12h20V8L12 2zm0 2.36l8 5V18H4V9.36l8-5z" fill="#f44336" />
              <path d="M12 12l4 4" stroke="#fff" strokeWidth="2" />
            </svg>
            Code Contests
          </h2>
          <ul>
            {contests.map((contest) => (
              <li key={contest.name}>
                {contest.name} ({contest.platform}) - {contest.date}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Tasks Section */}
        <motion.section
          className="dashboard-section"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2>
            <svg className="section-icon" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="#9c27b0" />
              <path d="M10 15l-3-3 1.5-1.5L10 12l5-5 1.5 1.5L10 15z" fill="#fff" />
            </svg>
            Tasks
          </h2>
          {tasks.map((task) => (
            <div key={task.name} className="card">
              <h3>{task.name}</h3>
              <p>Type: {task.type}</p>
              {task.details && <p>{task.details}</p>}
            </div>
          ))}
        </motion.section>
      </div>
    </div>
  );
};

export default Dashboard;