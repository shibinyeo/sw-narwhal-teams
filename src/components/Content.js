import React from 'react';
import TeamCard from './TeamCard';
import data from '../data/data.json';

function createCard(team) {
  return <TeamCard 
    key = {team.id}
    name = {team.name}
    img = {team.image}
    created = {team.created_at}
    desc = {team.description}
    campaign = {team.campaigns_count}
    leads = {team.leads_count}
    favorite = {team.is_favorited}
    archived = {team.is_archived}
  />
}

function Content() {
  console.log(data.teams);
  return (
    <main className='content'>
      <div className='content-title'>
        <h2>All Teams</h2>
        <p>Showing {data.teams.length} out of {data.teams.length} teams</p>
      </div>
      <div className='content-data'>
        {data.teams.map(createCard)}
      </div>
    </main>
  )
}

export default Content;