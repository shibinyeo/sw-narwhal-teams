import React from 'react';
import { ReactComponent as TeamsIcon } from "../icons/icon-teams-grey.svg";
import { ReactComponent as PlusIcon } from "../icons/icon-plus.svg";
import { ReactComponent as SearchIcon } from "../icons/icon-search.svg";


function Header(props) {

  function toggleTab(tabnumber) {
    props.setTabState(tabnumber);
  }

  return (
    <div className='header'>
      <div className='header-top'>
        <div className='header-title'>
          <TeamsIcon />
          <h1>Teams</h1>
        </div>
        <div className='create-team-button'>
          <PlusIcon />
          <p>CREATE NEW TEAM</p>
        </div>
      </div>
      <div className='header-bottom'>
        <div className='tab-panel'>
          <ul>
            <li className={`tab ${props.tabState === 1 && "active-tab"}`} onClick={() => toggleTab(1)}>All</li>
            <li className={`tab ${props.tabState === 2 && "active-tab"}`} onClick={() => toggleTab(2)}>Favorites</li>
            <li className={`tab ${props.tabState === 3 && "active-tab"}`} onClick={() => toggleTab(3)}>Archived</li>
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