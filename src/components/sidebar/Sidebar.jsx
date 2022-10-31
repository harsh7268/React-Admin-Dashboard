import './sidebar.css';
import {BarChart,AttachMoney,LineStyle,Timeline,TrendingUp,PermIdentity,Storefront,MailOutline,DynamicFeed,ChatBubbleOutline,WorkOutline,Report} from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ui className="sidebarList">
               <Link to="/" className='link'>
                <li className="sidebarListItem active">
                   <LineStyle className="sidebarIcon" />
                   Home    
                </li>
                </Link>
               
            </ui>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ui className="sidebarList">
               <Link to="/users" className='link'>
                <li className="sidebarListItem">
                   <PermIdentity className="sidebarIcon" />
                   Industries 
                </li>
                </Link>
               
            </ui>
        </div>
      
      
      </div>
    </div>
  )
}
