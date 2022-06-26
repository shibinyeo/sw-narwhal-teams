import React from 'react';
import { ReactComponent as StarActive } from "../icons/star-active.svg";
import { ReactComponent as StarDefault } from "../icons/star-default.svg";
import { ReactComponent as ConversationsIcon } from "../icons/icon-conversations-small.svg";
import { ReactComponent as LeadsIcon } from "../icons/icon-leads-small.svg";

function TeamCard(props) {
  return (
    <div className={`teamcard ${props.archived && "archived"}`}>
      <div className='teamcard-top'>
        <div className='card-header'>
          <div className='team-details'>
            <img src={props.img} alt="" />
            <div className='title-details'>
              <h3>{props.name}</h3>
              <p>{props.created && "Created on"} {props.created || "Created some time ago"}</p>
            </div>
          </div>
          {props.favorite ? <StarActive /> : <StarDefault />}
        </div>
        <p>{props.desc}</p>
      </div>
      <div className='teamcard-bottom'>
        <div>
          <ConversationsIcon />
          <p>{props.campaign} Campaigns</p>
        </div>
        <div>
          <LeadsIcon />
          <p>{props.leads} Leads</p>
        </div>
      </div>
    </div>
  )
}

export default TeamCard;