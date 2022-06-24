import React from 'react';
import TeamCard from './TeamCard';

function Content() {
  return (
    <main className='content'>
      <div className='content-title'>
        <h2>All Teams</h2>
        <p>Showing XX out of XX teams</p>
      </div>
      <div className='content-data'>
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </main>
  )
}

export default Content;