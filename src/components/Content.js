import React from 'react';
import TeamCard from './TeamCard';
import data from '../data/data.json';

function Content(props) {
  let new_data = data.teams;
  let title = "All";

  if (props.tabState === 2) {
    new_data = data.teams.filter(team => team.is_favorited)
    title = "Favorite";
  } else if (props.tabState === 3) {
    new_data = data.teams.filter(team => team.is_archived)
    title = "Archived";
  }

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

  return (
    <main className='content'>
      <div className='content-title'>
        <h2>{title} Teams</h2>
        <p>Showing {new_data.length} out of {data.teams.length} teams</p>
      </div>
      <div className='content-data'>
        {new_data.map(createCard)}
      </div>
    </main>
  )
}

export default Content;