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
        <div><SaleswhaleIcon className='sidenav-buttons' /></div>
        <div className='sidenav-unselected'><CampaignIcon className='sidenav-buttons' /></div>
        <div className='sidenav-selected'><TeamsIcon className='sidenav-buttons' /></div>
        <div className='sidenav-unselected'><LeadsIcon className='sidenav-buttons' /></div>
        <div className='sidenav-unselected'><ReportsIcon className='sidenav-buttons' /></div>
      </div>
      <div>
        <div className='sidenav-unselected'><HelpIcon className='sidenav-buttons' /></div>
      </div>
    </div>
  );
}

export default Sidenav;