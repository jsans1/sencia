import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import Onboarding from './pages/Onboarding'
import LoggingModal from './pages/Logging'
import LoggingFlow from './pages/LoggingFlow'
import Visualization from './pages/Visualization'
import Export from './pages/Export'
import Splash from './pages/Splash'
import Features from './pages/Features'
import AuthChoice from './pages/AuthChoice'
import WelcomeLoris from './pages/WelcomeLoris'
import React, { useState } from 'react';

function App() {
  const [loggingOpen, setLoggingOpen] = useState(false);
  const handleAdd = () => setLoggingOpen(true);
  const handleClose = () => setLoggingOpen(false);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/splash" element={<Splash />} />
          <Route path="features" element={<Features />} />
          <Route path="auth-choice" element={<AuthChoice />} />
          <Route path="welcome-loris" element={<WelcomeLoris />} />
          <Route path="onboarding" element={<Onboarding />} />
          <Route path="logging" element={<LoggingFlow />} />
          <Route path="app" element={<Layout handleAdd={handleAdd} />}> 
            <Route index element={<Dashboard handleAdd={handleAdd} />} />
            <Route path="logging" element={<div />} />
            <Route path="visualization" element={<Visualization handleAdd={handleAdd} />} />
            <Route path="export" element={<Export handleAdd={handleAdd} />} />
          </Route>
        </Routes>
        <LoggingModal open={loggingOpen} onClose={handleClose} />
      </Router>
    </>
  )
}

export default App
