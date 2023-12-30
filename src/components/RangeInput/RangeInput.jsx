import React, { useEffect, useState } from 'react';
import './style.css'

export function RangeInput({ updateRating, width = 400, minValue = 0, maxValue = 100, step = 20 }) {
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

  const styleObject = {
    width: '1.25vh',
    height: '1.25vh',
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
    <>
      <div
        className='rangeInput'
        style={{
          width,
          position: 'relative',
          maxHeight: '2.5vh',
          minHeight: '2.5vh',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingRight: '0.7vh',
            paddingLeft: '0.7vh',
            position: 'absolute',
            width: '100%',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            boxSizing: 'border-box',
          }}
        >
          {Array.from({ length: maxValue / step + 1 }, (_, index) => index).map((_, index) => (
            <div style={styleObject}></div>
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
      <div>{rangeValue}</div>
    </>
  )
}