import React from 'react';
import RocketCore from './RocketCore';
import {Fuel} from './Fuel';

const _FUEL_COST_PER_TRIP = 10;

export class Rocket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fuelLevel: 100
    }
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.fuelLevel === this.state.fuelLevel) {
      this.setState({
        fuelLevel: this.state.fuelLevel - _FUEL_COST_PER_TRIP
      });
    }
  }
  
  render() {
    const { fuelLevel } = this.state;
    return (
      <React.Fragment>
        <RocketCore />
        <Fuel fuelLevel={fuelLevel}/>
      </React.Fragment>
    );
  }
}