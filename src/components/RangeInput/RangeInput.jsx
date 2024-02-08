import React, { useEffect, useState } from 'react';
import './style.css'

export function RangeInput({ width = 400, minValue = 0, maxValue = 100, step = 10, updateRating }) {
  const [rangeValue, setRangeValue] = useState(minValue);

  useEffect(() => {
    setRangeValue(minValue)
  }, [minValue]);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
    updateRating(event.target.value);
  }

  const trackStyle = {
    '--progress': `${rangeValue * 10}%`,
    background: `linear-gradient(to right, #777, #777 var(--progress), #777 var(--progress), #777)`,
  };

  const stepCircles = {
    width: '5px',
    height: '5px',
    backgroundColor: '#777',
    borderRadius: '50%',
  };

  const styleObjectInput = {
    width: '100%',
    backgroundColor: '#777',
    color: '#777',
    zIndex: 20,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    margin: 0,
  };

  return (
    <div
      style={{
        width,
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'absolute',
          width: '100%',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          boxSizing: 'border-box',
        }}
      >
        {Array.from({ length: maxValue / step + 1 }, (_, index) => index).map((_, index) => (
          <div style={stepCircles}></div>
        ))}
      </div>
      <input
        type="range"
        min={minValue}
        max={maxValue}
        step={step}
        value={rangeValue}
        onChange={handleRangeChange}
        style={{ ...trackStyle, ...styleObjectInput }}
      />
    </div>
  )
}