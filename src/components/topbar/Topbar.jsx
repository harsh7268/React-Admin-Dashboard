import React from 'react';
import "./topbar.css";
import {NotificationsNone,Language,Settings} from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
            <span className="logo">harshadmin</span>
        </div>
        <div className="topRight">
            <div className="topbarIconConntainer">
                <NotificationsNone />
                <span className="topIconBag">2</span>
            </div>
            <div className="topbarIconConntainer">
                <Language />
                <span className="topIconBag">2</span>
            </div>
            <div className="topbarIconConntainer">
                <Settings />
            </div>
            <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}
