import React from 'react';

export const Fuel = (props) => {
  const { fuelLevel } = props;
  return (
    <div className={'fuel-level'}>
      <p>Fuel Level</p>
      <div className={'fuel'} style={{ background: `linear-gradient(to right, blue ${fuelLevel}%, transparent 0)` }}>
        <p data-testid="fuel-level">{fuelLevel}%</p>
      </div>
    </div>
  )
}