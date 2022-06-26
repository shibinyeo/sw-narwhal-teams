import React from 'react';

function Activity(props) {
  return (
    <div className='activity-item'>
      <img src={props.avatar} alt="" />
      <div>
        <p className='activity-description'><strong>{props.person}</strong> {props.action} for <strong>{props.target}</strong>.</p>
        <p className='activity-created'>{props.created || "Recently"}</p>
      </div>
    </div>
  )
}

export default Activity;