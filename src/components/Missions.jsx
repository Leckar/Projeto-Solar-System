import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    const missionList = missions.map((e) => (
      <MissionCard
        name={ e.name }
        year={ e.year }
        country={ e.country }
        destination={ e.destination }
        key={ e.name }
      />));

    return (
      <div>
        <div data-testid="missions">
          <Title headline="Missões" />
        </div>
        <div className="mission-cards">
          {missionList}
        </div>
      </div>
    );
  }
}

export default Missions;
