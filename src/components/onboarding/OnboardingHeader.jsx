import PropTypes from 'prop-types'
import React from 'react'

function OnboardingHeader({ showNav, onBack, onClose, progress }) {
  return (
    <div className="onb-header">
      {showNav ? (
        <button type="button" className="onb-icon" onClick={onBack} aria-label="Retour">‹</button>
      ) : <span className="onb-icon-placeholder" />}
      <div className="onb-progress">
        <div className="onb-progress-bar" style={{ width: `${Math.round(progress * 100)}%` }} />
      </div>
      {showNav ? (
        <button type="button" className="onb-icon" onClick={onClose} aria-label="Fermer">×</button>
      ) : <span className="onb-icon-placeholder" />}
    </div>
  )
}

OnboardingHeader.propTypes = {
  showNav: PropTypes.bool,
  onBack: PropTypes.func,
  onClose: PropTypes.func,
  progress: PropTypes.number,
}

export default OnboardingHeader


