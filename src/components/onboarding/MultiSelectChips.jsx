import PropTypes from 'prop-types'
import React from 'react'

function MultiSelectChips({ options, selected, onToggle }) {
  return (
    <div className="chips-grid">
      {options.map((opt) => {
        const value = typeof opt === 'object' ? opt.value : opt
        const label = typeof opt === 'object' ? (opt.label ?? String(opt.value)) : String(opt)
        const isSelected = selected.includes(value)
        return (
          <button
            type="button"
            key={value}
            className={`chip ${isSelected ? 'selected' : ''}`}
            onClick={() => onToggle(value)}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}

MultiSelectChips.propTypes = {
  options: PropTypes.array.isRequired,
  selected: PropTypes.array.isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default MultiSelectChips


