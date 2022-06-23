import React from 'react';
import { ReactComponent as NotificationIcon } from "../icons/menu-notification.svg";
import { ReactComponent as Caret } from "../icons/caret.svg";
import johnprofile from "../images/john.png";


function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-details'>
        <div className='appname'><p>NARWHAL</p></div>
        <div className='breadcrumbs'><p>Teams</p></div>
      </div>
      <div className='navbar-details'>
        <NotificationIcon className='notification-icon' />
        <p>Hello, John</p>
        <img className='profile-pic' src={johnprofile} alt="John" />
        <Caret className='caret'/>
      </div>
    </div>
  );
}

export default Navbar;