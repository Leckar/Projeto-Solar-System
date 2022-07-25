import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    const planetList = planets.map((e) => (
      <PlanetCard planetName={ e.name } planetImage={ e.image } key={ e.name } />
    ));
    return (
      <div>
        <div data-testid="solar-system">
          <Title headline="Planetas" />
        </div>
        <div>
          {planetList}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
