import React from 'react';
import './Drop.scss';

const Drop = ({ increment, randomHundred, randomFive, row }) => {
  const styles = {
    animationDelay: `0.${randomHundred}s`,
    animationDuration: `0.5${randomHundred}s`
  }

  const dir = (row === 'front')
    ? {left: `${increment}%`}
    : {right: `${increment}%`}

  return (
    <div
      className="drop"
      style={{
        ...dir,
        ...styles
      }}>
      <div className="stem" style={styles}></div>
    </div>
  )
}

export default Drop;
