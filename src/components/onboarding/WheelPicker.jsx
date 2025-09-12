import PropTypes from 'prop-types'
import React, { useEffect, useMemo, useRef, useState } from 'react'

const ITEM_HEIGHT = 40
const VISIBLE_COUNT = 5

const clamp = (val, min, max) => Math.min(Math.max(val, min), max)

function WheelPicker({ value, options, onChange, format, ariaLabel }) {
  const containerRef = useRef(null)
  const [internalIndex, setInternalIndex] = useState(0)

  const values = useMemo(() => options.map((opt) => (
    typeof opt === 'object' ? opt.value : opt
  )), [options])
  const labels = useMemo(() => options.map((opt) => (
    typeof opt === 'object' ? (opt.label ?? String(opt.value)) : String(opt)
  )), [options])

  useEffect(() => {
    const idx = values.indexOf(value)
    if (idx >= 0) setInternalIndex(idx)
  }, [value, values])

  useEffect(() => {
    if (!containerRef.current) return
    containerRef.current.scrollTo({ top: internalIndex * ITEM_HEIGHT, behavior: 'smooth' })
  }, [internalIndex])

  const handleScroll = (e) => {
    const top = e.currentTarget.scrollTop
    const idx = clamp(Math.round(top / ITEM_HEIGHT), 0, values.length - 1)
    if (idx !== internalIndex) setInternalIndex(idx)
  }

  const handleScrollEnd = () => {
    const idx = clamp(internalIndex, 0, values.length - 1)
    onChange(values[idx])
  }

  return (
    <div className="wheelpicker" aria-label={ariaLabel} role="listbox">
      <div
        ref={containerRef}
        className="wheelpicker-scroll"
        onScroll={handleScroll}
        onMouseUp={handleScrollEnd}
        onTouchEnd={handleScrollEnd}
        style={{ height: ITEM_HEIGHT * VISIBLE_COUNT }}
      >
        <div className="wheelpicker-spacer" style={{ height: ITEM_HEIGHT * Math.floor(VISIBLE_COUNT / 2) }} />
        {labels.map((label, i) => (
          <div
            key={i}
            className={`wheelpicker-item ${i === internalIndex ? 'active' : ''}`}
            style={{ height: ITEM_HEIGHT }}
            role="option"
            aria-selected={i === internalIndex}
            onClick={() => onChange(values[i])}
          >
            {format ? format(label) : label}
          </div>
        ))}
        <div className="wheelpicker-spacer" style={{ height: ITEM_HEIGHT * Math.floor(VISIBLE_COUNT / 2) }} />
      </div>
      <div className="wheelpicker-highlight" style={{ height: ITEM_HEIGHT }} />
    </div>
  )
}

WheelPicker.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  format: PropTypes.func,
  ariaLabel: PropTypes.string,
}

export default WheelPicker


