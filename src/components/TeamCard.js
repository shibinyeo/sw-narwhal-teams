import React from 'react';
import { ReactComponent as StarActive } from "../icons/star-active.svg";
import { ReactComponent as StarDefault } from "../icons/star-default.svg";
import { ReactComponent as ConversationsIcon } from "../icons/icon-conversations-small.svg";
import { ReactComponent as LeadsIcon } from "../icons/icon-leads-small.svg";

function TeamCard(props) {
  return (
    <div className='teamcard'>
      <div className='teamcard-top'>
        <div className='card-header'>
          <div className='team-details'>
            {/* Placeholder for Team Logo */}
            <div className='title-details'>
              <h3>Axa</h3>
              <p>Created 28 July 2018</p>
            </div>
          </div>
          <StarActive />
        </div>
        <p>AXA is a French multinational insurance firm headquartered in the 8th arrondissement ...</p>
      </div>
      <div className='teamcard-bottom'>
        <div>
          <ConversationsIcon />
          <p>XX Campaigns</p>
        </div>
        <div>
          <LeadsIcon />
          <p>XX Leads</p>
        </div>
      </div>
    </div>
  )
}

export default TeamCard;