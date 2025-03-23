import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import './styles/Header.css'
import './styles/Hero.css'
import './styles/Features.css'
import './styles/About.css'
import './styles/Footer.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
