import React, { useEffect, useState } from 'react';
import './style.css'

export function RangeInput({ updateRating, width = 400, minValue = 1, maxValue = 10, step = 1, value = 0 }) {
  const [rangeValue, setRangeValue] = useState(minValue);

  useEffect(() => {
    setRangeValue(minValue)
  }, [minValue]);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
    updateRating(event.target.value);
  }

  // const trackStyle = {
  //   '--progress': `${rangeValue * 10}%`,
  //   background: `linear-gradient(to right, #777, #777 var(--progress), #777 var(--progress), #777)`
  // };

  const trackStyle = {
    '--progress': `${rangeValue * 10}%`,
    background: `linear-gradient(to right, #777, #777 var(--progress), #777 var(--progress), #777)`,
  };

  const styleObject = {
    width: '1.25vh',
    height: '1.25vh',
    backgroundColor: '#777',
    borderRadius: '50%', // rounded-full in Tailwind corresponds to a fully rounded border
  };

  const styleObjectInput = {
    width: '100%',
    backgroundColor: '#777',
    color: '#777',
    zIndex: 20,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  };

  return (
    <div
      style={{
        width,
        position: 'relative',
        maxHeight: '2.5vh',
        minHeight: '2.5vh',
        background: 'aqua',
      }}
    // className='w-full relative max-h-[2.5vh] min-h-[2.5vh]'
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
        }}
      // className='flex justify-between px-[0.7vh] absolute w-full top-[50%] translate-y-[-50%] z-10'
      >
        {Array.from({ length: maxValue }, (_, index) => index).map((_, index) => (
          <div style={styleObject}></div>
        ))}
      </div>
      <input
        type="range"
        min={minValue}
        max={maxValue}
        // step={step}
        value={rangeValue}
        onChange={handleRangeChange}
        style={{ ...trackStyle, ...styleObjectInput }}
      />
    </div>
  )
}