import React, { Component } from 'react';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    const altText = `Planeta ${planetName}`;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{planetName}</p>
        <img src={ planetImage } alt={ altText } />
      </div>
    );
  }
}

export default PlanetCard;
