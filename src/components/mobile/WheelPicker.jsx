import React, { useState, useEffect, useRef } from 'react';

const WheelPicker = ({ 
  options, 
  selectedValue, 
  onChange, 
  unit = '', 
  className = '' 
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const containerRef = useRef(null);
  const itemHeight = 50; // Height of each item in pixels

  useEffect(() => {
    const index = options.findIndex(option => option === selectedValue);
    if (index !== -1) {
      setSelectedIndex(index);
    }
  }, [selectedValue, options]);

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const newIndex = Math.round(scrollTop / itemHeight);
    const clampedIndex = Math.max(0, Math.min(newIndex, options.length - 1));
    
    if (clampedIndex !== selectedIndex) {
      setSelectedIndex(clampedIndex);
      onChange(options[clampedIndex]);
    }
  };

  const scrollToIndex = (index) => {
    if (containerRef.current) {
      containerRef.current.scrollTop = index * itemHeight;
    }
  };

  useEffect(() => {
    scrollToIndex(selectedIndex);
  }, [selectedIndex]);

  return (
    <div className={`wheel-picker ${className}`}>
      <div className="wheel-picker-mask-top"></div>
      <div 
        ref={containerRef}
        className="wheel-picker-container"
        onScroll={handleScroll}
      >
        <div className="wheel-picker-padding"></div>
        {options.map((option, index) => (
          <div
            key={index}
            className={`wheel-picker-item ${index === selectedIndex ? 'selected' : ''}`}
            onClick={() => {
              setSelectedIndex(index);
              onChange(option);
            }}
          >
            <span className="picker-value">{option}</span>
            {unit && index === selectedIndex && (
              <span className="picker-unit">{unit}</span>
            )}
          </div>
        ))}
        <div className="wheel-picker-padding"></div>
      </div>
      <div className="wheel-picker-mask-bottom"></div>
    </div>
  );
};

export default WheelPicker;