import React from 'react';
import { ReactComponent as TeamsIcon } from "../icons/icon-teams-grey.svg";
import { ReactComponent as PlusIcon } from "../icons/icon-plus.svg";
import { ReactComponent as SearchIcon } from "../icons/icon-search.svg";

function Header() {
  

  return (
    <div className='header'>
      <div className='header-top'>
        <div className='header-title'>
          <TeamsIcon />
          <p>Teams</p>
        </div>
        <div className='create-team-button'>
          <PlusIcon />
          <p>CREATE NEW TEAM</p>
        </div>
      </div>
      <div className='header-bottom'>
        <div className='tab-panel'>
          <ul>
            <li className='tab active-tab'>All</li>
            <li className='tab'>Favorites</li>
            <li className='tab'>Archived</li>
          </ul>
        </div>
        <div className='search'>
          <SearchIcon />
          <p>Search team name ...</p>
        </div>
      </div>
    </div>
  );
}

export default Header;