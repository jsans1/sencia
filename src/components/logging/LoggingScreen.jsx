import React from 'react';

// Reusable screen header component
export const LoggingScreenHeader = ({ title, subtitle }) => (
  <div style={{ textAlign: 'left', marginBottom: '20px' }}>
    <div style={{ marginBottom: '8px' }}>
      <h2 className="step-title">{title}</h2>
      <p className="step-subtitle">{subtitle}</p>
    </div>
  </div>
);

// Reusable mood/stress slider component
export const LoggingSlider = ({ 
  value, 
  onChange, 
  onMouseDown, 
  onTouchStart, 
  sliderRef, 
  isDragging,
  topLabel,
  bottomLabel,
  height = '250px'
}) => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    height: '350px',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: '80px',
    width: '100%'
  }}>
    <div style={{ 
      fontSize: '14px', 
      marginBottom: '20px', 
      color: 'black',
      textAlign: 'center',
      width: '100%'
    }}>{topLabel}</div>
    
    <div 
      ref={sliderRef}
      style={{ 
        width: '38px', 
        height: height, 
        background: 'linear-gradient(to bottom, #62ffa4, #ffb48b, #ff5d5d)', 
        borderRadius: '19px',
        position: 'relative',
        cursor: 'pointer',
        margin: '0 auto'
      }}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      <div 
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          top: `${Math.max(7.92, Math.min(91.92, 100 - value))}%`,
          width: '32px',
          height: '32px',
          backgroundColor: 'white',
          borderRadius: '50%',
          boxShadow: isDragging ? '0 4px 16px rgba(0,0,0,0.25)' : '0 2px 8px rgba(0,0,0,0.15)',
          border: '1px solid #e0e0e0',
          cursor: isDragging ? 'grabbing' : 'grab',
          transition: isDragging ? 'none' : 'box-shadow 0.2s ease'
        }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      />
    </div>
    
    <div style={{ 
      fontSize: '14px', 
      marginTop: '20px', 
      color: 'black',
      textAlign: 'center',
      width: '100%'
    }}>{bottomLabel}</div>
  </div>
);

// Reusable selection buttons component
export const LoggingSelectionButtons = ({ 
  items, 
  selectedItems, 
  onToggle, 
  containerStyle = {},
  buttonStyle = {}
}) => (
  <div style={{ 
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%', 
    maxWidth: '353px',
    gap: '8px', 
    marginBottom: '20px',
    alignItems: 'flex-start',
    ...containerStyle
  }}>
    {items.map((item, index) => (
      <button
        key={index}
        onClick={() => onToggle(item)}
        style={{
          padding: '8px 12px',
          borderRadius: '20px',
          border: selectedItems.includes(item) ? '2px solid #007AFF' : '1px solid #e0e0e0',
          backgroundColor: selectedItems.includes(item) ? 'rgba(0, 122, 255, 0.05)' : 'white',
          color: selectedItems.includes(item) ? '#007AFF' : 'black',
          fontSize: '14px',
          fontWeight: selectedItems.includes(item) ? '600' : '400',
          cursor: 'pointer',
          textAlign: 'left',
          transition: 'all 0.2s',
          width: 'auto',
          maxWidth: '100%',
          whiteSpace: 'nowrap',
          lineHeight: 1.3,
          ...buttonStyle
        }}
      >
        {item}
      </button>
    ))}
  </div>
);

// Reusable custom input component
export const LoggingCustomInput = ({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  marginBottom = '40px' 
}) => (
  <div style={{ marginBottom, width: '100%', maxWidth: '353px' }}>
    <label style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', display: 'block', textAlign: 'left' }}>
      {label}
    </label>
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: '100%',
        minWidth: '0',
        padding: '12px 16px',
        borderRadius: '20px',
        border: '1px solid #e0e0e0',
        fontSize: '16px',
        backgroundColor: 'white',
        boxSizing: 'border-box'
      }}
    />
  </div>
);

// Reusable blood pressure input component
export const LoggingBloodPressureInput = ({ 
  data, 
  onChange, 
  errors = {} 
}) => {

  return (
    <>
      <div style={{
        backgroundColor: '#fffffe',
        borderRadius: '20px',
        border: '1px solid #f0f0f0',
        padding: '24px',
        marginBottom: '24px',
        width: '100%',
        maxWidth: '353px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <span style={{ fontSize: '18px', fontWeight: '600' }}>Systolique</span>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
            <input
              type="tel"
              inputMode="numeric"
              placeholder="140"
              value={data.systolic}
              onChange={(e) => onChange('systolic', e.target.value)}
              style={{
                width: '100px',
                padding: '12px 16px',
                borderRadius: '84px',
                border: errors.systolic ? '1px solid #ff5d5d' : '1px solid rgba(228,228,228,0.55)',
                fontSize: '16px',
                textAlign: 'center',
                outline: 'none'
              }}
            />
            <span style={{ fontSize: '12px', color: '#666' }}>mmHg</span>
            {errors.systolic && (
              <span style={{ fontSize: '11px', color: '#ff5d5d' }}>
                {errors.systolic}
              </span>
            )}
          </div>
        </div>
        <hr style={{ border: 'none', borderTop: '0.5px solid #BCBCBC', margin: '20px 0' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '18px', fontWeight: '600' }}>Diastolique</span>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
            <input
              type="tel"
              inputMode="numeric"
              placeholder="90"
              value={data.diastolic}
              onChange={(e) => onChange('diastolic', e.target.value)}
              style={{
                width: '100px',
                padding: '12px 16px',
                borderRadius: '84px',
                border: errors.diastolic ? '1px solid #ff5d5d' : '1px solid rgba(228,228,228,0.55)',
                fontSize: '16px',
                textAlign: 'center',
                outline: 'none'
              }}
            />
            <span style={{ fontSize: '12px', color: '#666' }}>mmHg</span>
            {errors.diastolic && (
              <span style={{ fontSize: '11px', color: '#ff5d5d' }}>
                {errors.diastolic}
              </span>
            )}
          </div>
        </div>
      </div>

      <div style={{
        backgroundColor: '#fffffe',
        borderRadius: '20px',
        border: '1px solid #f0f0f0',
        padding: '20px',
        marginBottom: '40px',
        width: '100%',
        maxWidth: '353px'
      }}>
        <label style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', display: 'block', textAlign: 'left' }}>
          Notes
        </label>
        <input
          type="text"
          placeholder="Ajoutez un commentaire..."
          value={data.notes}
          onChange={(e) => onChange('notes', e.target.value)}
          style={{
            width: '100%',
            minWidth: '0',
            padding: '12px 16px',
            borderRadius: '20px',
            border: '1px solid #e0e0e0',
            fontSize: '16px',
            backgroundColor: 'white',
            outline: 'none',
            boxSizing: 'border-box',
            minHeight: '48px',
            resize: 'none'
          }}
        />
      </div>
    </>
  )
};
