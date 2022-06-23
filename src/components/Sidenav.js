import React from 'react';
import { ReactComponent as SaleswhaleIcon } from "../icons/sw-logo-white.svg";
import { ReactComponent as CampaignIcon } from "../icons/icon-campaign.svg";
import { ReactComponent as TeamsIcon } from "../icons/icon-teams.svg";
import { ReactComponent as LeadsIcon } from "../icons/icon-leads.svg";
import { ReactComponent as ReportsIcon } from "../icons/icon-reports.svg";
import { ReactComponent as HelpIcon } from "../icons/icon-help.svg";

function Sidenav() {
  return (
    <div className="sidenav">
      <div>
        <div className='sidenav-buttons'><SaleswhaleIcon className='sidenav-icons' /></div>
        <div className='sidenav-buttons unselected'><CampaignIcon className='sidenav-icons' /></div>
        <div className='sidenav-buttons selected'><TeamsIcon className='sidenav-icons' /></div>
        <div className='sidenav-buttons unselected'><LeadsIcon className='sidenav-icons' /></div>
        <div className='sidenav-buttons unselected'><ReportsIcon className='sidenav-icons' /></div>
      </div>
      <div>
        <div className='sidenav-buttons unselected'><HelpIcon className='sidenav-icons' /></div>
      </div>
    </div>
  );
}

export default Sidenav;