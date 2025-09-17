import React, { useState, useCallback, useRef, useEffect } from 'react';

// Reusable wheel picker component for treatment and activity screens
export const LoggingWheelPicker = ({ 
  value, 
  onChange, 
  labels, 
  sectors, 
  wheelSize = 340,
  onInteraction 
}) => {
  const [isDragging, setIsDragging] = useState(false)
  const [selectorPosition, setSelectorPosition] = useState({ x: 50, y: 50 })
  const wheelRef = useRef(null)

  // Update picker position when value changes
  useEffect(() => {
    if (value && sectors[value]) {
      const [start, end] = sectors[value]
      const midAngle = (start + end) / 2
      const midRad = (midAngle * Math.PI) / 180
      
      // Position picker at the middle of the selected sector
      const radius = 0.3 // 30% from center
      const newX = 50 + radius * Math.cos(midRad) * 50
      const newY = 50 - radius * Math.sin(midRad) * 50 // Negative because screen Y is flipped
      
      setSelectorPosition({ x: newX, y: newY })
    }
  }, [value, sectors])

  const updatePositionAndValue = useCallback((clientX, clientY) => {
    if (!wheelRef.current) return
    
    const rect = wheelRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const deltaX = clientX - centerX
    const deltaY = clientY - centerY
    
    const wheelRadius = rect.width / 2 * 0.8
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
    
    if (distance <= wheelRadius) {
      const newX = ((deltaX / rect.width) * 100) + 50
      const newY = ((deltaY / rect.height) * 100) + 50
      setSelectorPosition({ x: newX, y: newY })
      
      // Calculate angle for sector detection
      const angle = Math.atan2(-deltaY, deltaX)
      const newValue = getSelectionFromAngle(angle)
      
      if (newValue !== value) {
        onChange(newValue)
        if (onInteraction) onInteraction()
      }
    }
  }, [value, onChange, onInteraction])

  const getSelectionFromAngle = (angle) => {
    // Convert angle to degrees and normalize to 0-360
    let degrees = (angle * 180 / Math.PI + 360) % 360
    
    // Find which sector this angle falls into
    for (const [sectorValue, sectorRange] of Object.entries(sectors)) {
      const [start, end] = sectorRange
      if (start <= end) {
        // Normal range (e.g., 90-210)
        if (degrees >= start && degrees <= end) {
          return sectorValue
        }
      } else {
        // Wrapping range (e.g., 330-90)
        if (degrees >= start || degrees <= end) {
          return sectorValue
        }
      }
    }
    
    return value // Keep current value if no sector matches
  }

  const handleMouseDown = useCallback((e) => {
    e.preventDefault()
    setIsDragging(true)
    updatePositionAndValue(e.clientX, e.clientY)
  }, [updatePositionAndValue])

  const handleMouseMove = useCallback((e) => {
    if (isDragging) {
      e.preventDefault()
      updatePositionAndValue(e.clientX, e.clientY)
    }
  }, [isDragging, updatePositionAndValue])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleTouchStart = useCallback((e) => {
    e.preventDefault()
    setIsDragging(true)
    const touch = e.touches[0]
    updatePositionAndValue(touch.clientX, touch.clientY)
  }, [updatePositionAndValue])

  const handleTouchMove = useCallback((e) => {
    if (isDragging) {
      e.preventDefault()
      const touch = e.touches[0]
      updatePositionAndValue(touch.clientX, touch.clientY)
    }
  }, [isDragging, updatePositionAndValue])

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('touchmove', handleTouchMove, { passive: false })
      document.addEventListener('touchend', handleTouchEnd)
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd])

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      flex: 1,
      position: 'relative'
    }}>
      <div 
        ref={wheelRef}
        style={{
          position: 'relative',
          width: `${wheelSize}px`,
          height: `${wheelSize}px`,
          cursor: 'pointer',
          userSelect: 'none'
        }}
      >
        {/* Simple wheel with SVG */}
        <svg width={wheelSize} height={wheelSize} viewBox={`0 0 ${wheelSize} ${wheelSize}`} style={{ display: 'block', width: '100%', height: '100%' }}>
          {/* Center circle */}
          <circle cx={wheelSize / 2} cy={wheelSize / 2} r="20" fill="white" />
          
          {/* Outer circle */}
          <circle cx={wheelSize / 2} cy={wheelSize / 2} r={wheelSize / 2 - 2} fill="white" stroke="#DADADA" strokeWidth="1" />
          
          {/* Divider lines */}
          {Object.entries(sectors).map(([sectorValue, [start, end]], index) => {
            const centerX = wheelSize / 2
            const centerY = wheelSize / 2
            const radius = wheelSize / 2 - 2
            
            // Calculate line positions
            const startRad = (start * Math.PI) / 180
            const endRad = (end * Math.PI) / 180
            
            const x1 = centerX + radius * Math.cos(startRad)
            const y1 = centerY + radius * Math.sin(startRad)
            const x2 = centerX + radius * Math.cos(endRad)
            const y2 = centerY + radius * Math.sin(endRad)
            
            return (
              <line 
                key={index}
                x1={x1} 
                y1={y1} 
                x2={x2} 
                y2={y2} 
                stroke="#DADADA" 
                strokeWidth="1" 
              />
            )
          })}
          
          {/* Visual feedback for selection */}
          {value && (
            <path 
              d={getSectorPath(value, sectors, wheelSize)} 
              fill="rgba(14, 122, 254, 0.1)" 
            />
          )}
        </svg>
        
        {/* Labels */}
        {labels.map((label, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: `${label.position.x}%`,
              top: `${label.position.y}%`,
              transform: 'translate(-50%, -50%)',
              width: label.width || '92px',
              fontFamily: 'SF Pro Display, sans-serif',
              fontSize: '16px',
              fontWeight: '600',
              textAlign: 'center',
              color: value === label.value ? '#0e7afe' : 'black',
              transition: 'color 0.2s',
              pointerEvents: 'none'
            }}
          >
            {label.text}
          </div>
        ))}
        
        {/* Draggable Selector */}
        <div
          style={{
            position: 'absolute',
            left: `${selectorPosition.x}%`,
            top: `${selectorPosition.y}%`,
            transform: 'translate(-50%, -50%)',
            width: '43px',
            height: '43px',
            zIndex: 10,
            cursor: isDragging ? 'grabbing' : 'grab',
            transition: isDragging ? 'none' : 'all 0.2s ease-out'
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div style={{ 
            width: '43px', 
            height: '43px', 
            backgroundColor: 'white',
            borderRadius: '50%',
            border: isDragging ? '2px solid #0e7afe' : '1px solid #E0E0E0',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.2s ease'
          }} />
        </div>
      </div>
    </div>
  )
}

// Helper function to generate sector paths
const getSectorPath = (value, sectors, wheelSize) => {
  const center = wheelSize / 2
  const radius = center - 2
  
  if (!sectors[value]) return ''
  
  const [start, end] = sectors[value]
  
  // Handle sectors that wrap around 0 degrees
  if (start > end) {
    // Sector wraps around 0 degrees (e.g., 270 to 90)
    const startRad = (start * Math.PI) / 180
    const endRad = (end * Math.PI) / 180
    
    const x1 = center + radius * Math.cos(startRad)
    const y1 = center + radius * Math.sin(startRad)
    const x2 = center + radius * Math.cos(endRad)
    const y2 = center + radius * Math.sin(endRad)
    
    return `M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 1 1 ${center} ${center - radius} A ${radius} ${radius} 0 1 1 ${x2} ${y2} Z`
  } else {
    // Normal sector
    const startRad = (start * Math.PI) / 180
    const endRad = (end * Math.PI) / 180
    
    const x1 = center + radius * Math.cos(startRad)
    const y1 = center + radius * Math.sin(startRad)
    const x2 = center + radius * Math.cos(endRad)
    const y2 = center + radius * Math.sin(endRad)
    
    const largeArcFlag = end - start <= 180 ? "0" : "1"
    
    return `M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`
  }
}
