'use client';

import Teamcard from '../Teamcard';
import { teamdata } from '@/data/data';

const Team = () => {
  return (
    <div className="team">
      <h2>Meet Our Experience Team</h2>

      <div className="container">
        {Object.values(teamdata).map((v, k) => (
          <Teamcard key={k} data={v} />
        ))}
      </div>
    </div>
  );
};

export default Team;
