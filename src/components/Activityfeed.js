import React from 'react';
import Activity from './Activity';
import data from '../data/data.json';

function Activityfeed() {

  function createActivity(ActivityItem) {
    return <Activity 
      key={ActivityItem.id}
      avatar={ActivityItem.person.avatar}
      person={ActivityItem.person.name}
      action={ActivityItem.action}
      target={ActivityItem.target}
      created={ActivityItem.created_at}
    />
  }

  return (
    <div className='activityfeed'>
      <div className='activityfeed-title'>
        <h1>
          Activity
        </h1>
      </div>
      <div className='activity-content'>
        {data.activities.map(createActivity)}
      </div>
    </div>
  )
}

export default Activityfeed;