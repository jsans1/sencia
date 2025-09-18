import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import Onboarding from './pages/Onboarding'
import LoggingModal from './pages/Logging'
import LoggingFlow from './pages/LoggingFlow'
import Visualization from './pages/Visualization'
import Export from './pages/Export'
import Profile from './pages/Profile'
import LoggingSuccessModal from './components/LoggingSuccessModal'
// Removed unused pages: Splash, Features, AuthChoice, WelcomeLoris
import React, { useState } from 'react';

function App() {
  const [loggingOpen, setLoggingOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  const handleAdd = () => setLoggingOpen(true);
  const handleClose = () => setLoggingOpen(false);
  
  const handleLoggingComplete = () => {
    setLoggingOpen(false);
    setShowSuccessModal(true);
  };
  
  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
  };
  
  const handleViewData = () => {
    setShowSuccessModal(false);
    // Navigate to visualization page
    window.location.href = '/app/visualization';
  };
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="onboarding" element={<Onboarding />} />
          <Route path="logging" element={<LoggingFlow />} />
                <Route path="app" element={<Layout handleAdd={handleAdd} />}>
                  <Route index element={<Dashboard handleAdd={handleAdd} />} />
                  <Route path="logging" element={<div />} />
                  <Route path="visualization" element={<Visualization handleAdd={handleAdd} />} />
                  <Route path="export" element={<Export />} />
                  <Route path="profile" element={<Profile />} />
                </Route>
        </Routes>
        <LoggingModal open={loggingOpen} onClose={handleClose} onSubmit={handleLoggingComplete} />
        <LoggingSuccessModal 
          isOpen={showSuccessModal} 
          onClose={handleSuccessModalClose} 
          onViewData={handleViewData} 
        />
      </Router>
    </>
  )
}

export default App
