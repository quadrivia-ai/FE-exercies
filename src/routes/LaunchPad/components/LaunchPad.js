import React from 'react';
import { Rocket } from './Rocket';
import '../styles/_launchpad.scss';

export default function LaunchPad() {
  const handler = (event) => {
    console.log('Key pressed', event)
  };

  window.addEventListener('keydown', handler);

  return (
    <div className="launchpad">
      <Rocket />
    </div>
  );
}